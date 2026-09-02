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

test('published markdown is sanitized', () => {
  const html = renderMarkdown('[链接](https://example.com)\n\n<script>alert(1)</script>');
  assert.match(html, /https:\/\/example\.com/);
  assert.doesNotMatch(html, /<script/i);
  assert.doesNotMatch(html, /alert\(1\)/);
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
