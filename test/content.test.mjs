import assert from 'node:assert/strict';
import { access, rm } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import {
  POSTS_DIR,
  DRAFTS_DIR,
  TRASH_DIR,
  pathUrl,
  readEntries,
  renderMarkdown,
  saveEntry,
  trashEntry,
  validateEntry,
} from '../scripts/content.mjs';
import {
  DRAFT_COVERS_DIR,
  PUBLIC_COVERS_DIR,
  PUBLIC_SITE_IMAGES_DIR,
  importRemoteCover,
  importRemoteSiteImage,
  prepareCoverInput,
  validateRemoteImageUrl,
} from '../scripts/remote-images.mjs';

const validEntry = {
  title: '测试日记',
  date: '2026-09-02',
  status: 'draft',
  tags: ['测试'],
  summary: '',
  cover: 'romanticism/covers/1.webp',
  content: '这是一段测试正文。',
};

test('project subpaths are normalized for GitHub Pages', () => {
  assert.equal(pathUrl('/iwxt-diary/', '/assets/site.css'), '/iwxt-diary/assets/site.css');
  assert.equal(pathUrl('/', 'posts/example/'), '/posts/example/');
});

test('entry validation rejects invalid dates and covers', () => {
  assert.throws(() => validateEntry({ ...validEntry, date: '2026-02-30' }), /有效/);
  assert.throws(() => validateEntry({ ...validEntry, cover: '../../secret' }), /封面/);
});

test('remote cover URLs reject local network targets', async () => {
  await assert.rejects(validateRemoteImageUrl('file:///tmp/private.png'), /http/);
  await assert.rejects(validateRemoteImageUrl('http://127.0.0.1/private.png'), /本机或局域网/);
  await assert.rejects(validateRemoteImageUrl('http://198.18.0.1/private.png'), /本机或局域网/);
  await assert.rejects(validateRemoteImageUrl('https://localhost/private.png'), /本机或局域网/);
  await assert.rejects(validateRemoteImageUrl('https://internal.example/cover.png', {
    lookupFn: async () => [{ address: '10.0.0.8', family: 4 }],
  }), /本机或局域网/);
  const proxied = await validateRemoteImageUrl('https://images.example.com/cover.png', {
    lookupFn: async () => [{ address: '198.18.0.187', family: 4 }],
  });
  assert.equal(proxied.hostname, 'images.example.com');
});

test('a remote draft cover stays local until publication', async () => {
  const pngBytes = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d]);
  const dependencies = {
    lookupFn: async () => [{ address: '93.184.216.34', family: 4 }],
    fetchFn: async () => new Response(pngBytes, { headers: { 'content-type': 'image/png' } }),
  };
  const draftCover = await importRemoteCover('https://example.com/wallpaper.png', 'draft', dependencies);
  const filename = path.basename(draftCover);
  const draftPath = path.join(DRAFT_COVERS_DIR, filename);
  const publicPath = path.join(PUBLIC_COVERS_DIR, filename);
  let siteImagePath;
  try {
    assert.match(draftCover, /^draft-covers\/[a-f0-9]{64}\.png$/);
    await access(draftPath);
    await assert.rejects(access(publicPath));
    const promoted = await prepareCoverInput({ status: 'published', cover: draftCover });
    assert.equal(promoted.cover, `uploads/covers/${filename}`);
    await access(publicPath);
    assert.doesNotThrow(() => validateEntry({ ...validEntry, status: 'published', cover: promoted.cover }));
    const siteImage = await importRemoteSiteImage('https://example.com/home.png', dependencies);
    assert.equal(siteImage, `uploads/site/${filename}`);
    siteImagePath = path.join(PUBLIC_SITE_IMAGES_DIR, filename);
    await access(siteImagePath);
  } finally {
    await rm(draftPath, { force: true });
    await rm(publicPath, { force: true });
    if (siteImagePath) await rm(siteImagePath, { force: true });
  }
});

test('published markdown is sanitized', () => {
  const html = renderMarkdown('[链接](https://example.com)\n\n<script>alert(1)</script>');
  assert.match(html, /https:\/\/example\.com/);
  assert.doesNotMatch(html, /<script/i);
  assert.doesNotMatch(html, /alert\(1\)/);
});

test('fenced code blocks receive safe syntax highlighting', () => {
  const html = renderMarkdown('```cpp\nclass Solution { public: return 0; };\n```');
  assert.match(html, /<pre><code class="hljs language-cpp">/);
  assert.match(html, /class="hljs-keyword"/);
  assert.match(html, /class="hljs-title"/);

  const escaped = renderMarkdown('```unknown\n<script>alert(1)<\/script>\n```');
  assert.match(escaped, /class="hljs language-unknown"/);
  assert.doesNotMatch(escaped, /<script/i);
  assert.match(escaped, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
});

test('draft entries stay outside the public source and removal is recoverable', async () => {
  const saved = await saveEntry({ ...validEntry, title: `测试-${Date.now()}` });
  const postPath = path.join(POSTS_DIR, `${saved.slug}.md`);
  const draftPath = path.join(DRAFTS_DIR, `${saved.slug}.md`);
  let trashedPath;
  try {
    const publicEntries = await readEntries();
    const allEntries = await readEntries({ includeDrafts: true });
    assert.equal(publicEntries.some((entry) => entry.slug === saved.slug), false);
    assert.equal(allEntries.some((entry) => entry.slug === saved.slug), true);
    await access(draftPath);
    await assert.rejects(access(postPath));
    const trashed = await trashEntry(saved.slug);
    trashedPath = trashed.destination;
    await assert.rejects(access(draftPath));
    await access(trashedPath);
    assert.equal(path.dirname(trashedPath), TRASH_DIR);
  } finally {
    await rm(postPath, { force: true });
    await rm(draftPath, { force: true });
    if (trashedPath) await rm(trashedPath, { force: true });
  }
});

test('publishing promotes a local draft into the public source', async () => {
  const draft = await saveEntry({ ...validEntry, title: `待发布-${Date.now()}` });
  const draftPath = path.join(DRAFTS_DIR, `${draft.slug}.md`);
  const postPath = path.join(POSTS_DIR, `${draft.slug}.md`);
  try {
    const published = await saveEntry({ ...draft, status: 'published', content: '发布后的正文。' });
    assert.equal(published.status, 'published');
    await access(postPath);
    await assert.rejects(access(draftPath));
    assert.equal((await readEntries()).some((entry) => entry.slug === draft.slug), true);
  } finally {
    await rm(postPath, { force: true });
    await rm(draftPath, { force: true });
  }
});
