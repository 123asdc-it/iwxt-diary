import { randomBytes } from 'node:crypto';
import { readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export const PROJECT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const POSTS_DIR = path.join(PROJECT_DIR, 'content', 'posts');
export const DRAFTS_DIR = path.join(PROJECT_DIR, 'content', 'drafts');
export const TRASH_DIR = path.join(PROJECT_DIR, 'content', 'trash');
export const DIST_DIR = path.join(PROJECT_DIR, 'dist');

export const covers = [
  'romanticism/romanticism-welcome.webp',
  ...Array.from({ length: 12 }, (_, index) => `romanticism/covers/${index + 1}.webp`),
];

const allowedCovers = new Set(covers);
const slugPattern = /^[a-z0-9][a-z0-9-]{0,99}$/;
const publicCoverPattern = /^uploads\/covers\/[a-f0-9]{64}\.(?:avif|gif|jpg|png|webp)$/;
const draftCoverPattern = /^draft-covers\/[a-f0-9]{64}\.(?:avif|gif|jpg|png|webp)$/;
const siteImagePattern = /^(?:romanticism\/indeximg\.webp|uploads\/site\/[a-f0-9]{64}\.(?:avif|gif|jpg|png|webp))$/;

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function normalizeBasePath(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed || trimmed === '/') return '';
  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
}

export function pathUrl(basePath, pathname = '') {
  const base = normalizeBasePath(basePath);
  const cleanPath = String(pathname).replace(/^\/+/, '');
  return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
}

function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function isoString(value, fallback) {
  const parsed = new Date(value || fallback);
  if (Number.isNaN(parsed.getTime())) return fallback;
  return parsed.toISOString();
}

export function formatChineseDate(date) {
  const [year, month, day] = date.split('-');
  return {
    displayDate: `${year} 年 ${Number(month)} 月 ${Number(day)} 日`,
    month: `${year} 年 ${Number(month)} 月`,
  };
}

export function validateEntry(input, { requireSlug = false } = {}) {
  const now = new Date().toISOString();
  const title = typeof input?.title === 'string' ? input.title.trim() : '';
  const date = typeof input?.date === 'string' ? input.date.trim() : '';
  const status = input?.status === 'published' ? 'published' : input?.status === 'draft' ? 'draft' : '';
  const summary = typeof input?.summary === 'string' ? input.summary.trim() : '';
  const content = typeof input?.content === 'string' ? input.content.trim() : '';
  const cover = typeof input?.cover === 'string' ? input.cover.trim().replace(/^\/+/, '') : '';
  const slug = typeof input?.slug === 'string' ? input.slug.trim() : '';
  const tags = Array.isArray(input?.tags)
    ? [...new Set(input.tags.filter((tag) => typeof tag === 'string').map((tag) => tag.trim()).filter(Boolean))]
    : [];

  if (!title || title.length > 120) throw new Error('标题需要填写，并且不能超过 120 个字。');
  if (!validDate(date)) throw new Error('请选择有效的日记日期。');
  if (!status) throw new Error('请选择草稿或已发布。');
  if (!content || content.length > 50_000) throw new Error('正文需要填写，并且不能超过 50000 个字。');
  if (summary.length > 300) throw new Error('摘要不能超过 300 个字。');
  if (tags.length > 8 || tags.some((tag) => tag.length > 24)) {
    throw new Error('最多使用 8 个标签，每个标签不超过 24 个字。');
  }
  const validCover = allowedCovers.has(cover)
    || publicCoverPattern.test(cover)
    || (status === 'draft' && draftCoverPattern.test(cover));
  if (!validCover) throw new Error('请选择内置封面，或导入有效的图片 URL。');
  if (requireSlug && !slugPattern.test(slug)) throw new Error('日记标识无效。');

  const createdAt = isoString(input?.createdAt, now);
  const updatedAt = isoString(input?.updatedAt, now);
  return {
    slug,
    title,
    date,
    status,
    tags,
    summary: summary || content.replace(/\s+/g, ' ').slice(0, 120),
    cover,
    content,
    createdAt,
    updatedAt,
  };
}

export function renderMarkdown(markdown) {
  const rendered = marked.parse(markdown, { gfm: true, breaks: false });
  return sanitizeHtml(rendered, {
    allowedTags: [
      'p', 'br', 'hr', 'h2', 'h3', 'h4', 'blockquote', 'ul', 'ol', 'li',
      'strong', 'em', 'del', 'code', 'pre', 'a', 'table', 'thead', 'tbody',
      'tr', 'th', 'td',
    ],
    allowedAttributes: { a: ['href', 'title', 'rel'] },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowProtocolRelative: false,
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noreferrer noopener' }, true),
    },
  });
}

export function serializeEntry(entry) {
  const lines = [
    '---',
    `title: ${JSON.stringify(entry.title)}`,
    `date: ${JSON.stringify(entry.date)}`,
    `status: ${JSON.stringify(entry.status)}`,
    'tags:',
    ...entry.tags.map((tag) => `  - ${JSON.stringify(tag)}`),
    `summary: ${JSON.stringify(entry.summary)}`,
    `cover: ${JSON.stringify(entry.cover)}`,
    `createdAt: ${JSON.stringify(entry.createdAt)}`,
    `updatedAt: ${JSON.stringify(entry.updatedAt)}`,
    '---',
    '',
    entry.content,
    '',
  ];
  return lines.join('\n');
}

export async function readEntryFile(filePath) {
  const raw = await readFile(filePath, 'utf8');
  const parsed = matter(raw);
  const slug = path.basename(filePath, '.md');
  const entry = validateEntry({ ...parsed.data, slug, content: parsed.content }, { requireSlug: true });
  const { displayDate, month } = formatChineseDate(entry.date);
  return {
    ...entry,
    displayDate,
    month,
    html: renderMarkdown(entry.content),
  };
}

async function readDirectoryEntries(directory) {
  const filenames = (await readdir(directory)).filter((name) => name.endsWith('.md')).sort();
  return Promise.all(filenames.map((name) => readEntryFile(path.join(directory, name))));
}

async function readExistingEntry(slug) {
  for (const directory of [DRAFTS_DIR, POSTS_DIR]) {
    try {
      return await readEntryFile(path.join(directory, `${slug}.md`));
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
  return null;
}

export async function readEntries({ includeDrafts = false } = {}) {
  const publishedEntries = await readDirectoryEntries(POSTS_DIR);
  let entries = publishedEntries;
  if (includeDrafts) {
    const draftEntries = await readDirectoryEntries(DRAFTS_DIR);
    const merged = new Map(publishedEntries.map((entry) => [entry.slug, entry]));
    for (const draft of draftEntries) merged.set(draft.slug, draft);
    entries = [...merged.values()];
  }
  return entries
    .filter((entry) => includeDrafts || entry.status === 'published')
    .sort((left, right) => right.date.localeCompare(left.date) || right.createdAt.localeCompare(left.createdAt));
}

export async function saveEntry(input) {
  const existingSlug = typeof input?.slug === 'string' && input.slug ? input.slug : null;
  let previous = null;
  if (existingSlug) {
    if (!slugPattern.test(existingSlug)) throw new Error('日记标识无效。');
    previous = await readExistingEntry(existingSlug);
    if (!previous) throw new Error('没有找到要编辑的日记。');
  }

  const now = new Date().toISOString();
  const slug = existingSlug || `${input.date}-${randomBytes(4).toString('hex')}`;
  const entry = validateEntry({
    ...input,
    slug,
    createdAt: previous?.createdAt || now,
    updatedAt: now,
  }, { requireSlug: true });
  const directory = entry.status === 'draft' ? DRAFTS_DIR : POSTS_DIR;
  const destination = path.join(directory, `${slug}.md`);
  const temporary = path.join(directory, `.${slug}.${process.pid}.tmp`);
  await writeFile(temporary, serializeEntry(entry), { encoding: 'utf8', flag: 'wx' });
  await rename(temporary, destination);
  if (entry.status === 'published') {
    await rm(path.join(DRAFTS_DIR, `${slug}.md`), { force: true });
  }
  return readEntryFile(destination);
}

export async function trashEntry(slug) {
  if (!slugPattern.test(slug)) throw new Error('日记标识无效。');
  let source = path.join(DRAFTS_DIR, `${slug}.md`);
  let entry;
  try {
    entry = await readEntryFile(source);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
    source = path.join(POSTS_DIR, `${slug}.md`);
    entry = await readEntryFile(source);
  }
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const destination = path.join(TRASH_DIR, `${stamp}-${slug}.md`);
  await rename(source, destination);
  return { destination, entry };
}

export async function loadSiteConfig() {
  const raw = await readFile(path.join(PROJECT_DIR, 'site.config.json'), 'utf8');
  const parsed = JSON.parse(raw);
  return {
    title: String(parsed.title || 'iwxt 日记本'),
    description: String(parsed.description || ''),
    tagline: String(parsed.tagline || ''),
    author: String(parsed.author || 'iwxt'),
    homeImage: siteImagePattern.test(String(parsed.homeImage || '')) ? String(parsed.homeImage) : 'romanticism/indeximg.webp',
    basePath: normalizeBasePath(process.env.SITE_BASE_PATH ?? parsed.basePath),
    siteUrl: String(process.env.SITE_URL ?? parsed.siteUrl).replace(/\/+$/, ''),
  };
}

export async function saveHomeImage(homeImage) {
  const normalized = String(homeImage || '').trim().replace(/^\/+/, '');
  if (!siteImagePattern.test(normalized)) throw new Error('主页壁纸路径无效。');
  const configPath = path.join(PROJECT_DIR, 'site.config.json');
  const parsed = JSON.parse(await readFile(configPath, 'utf8'));
  parsed.homeImage = normalized;
  const temporary = path.join(PROJECT_DIR, `.site.config.${process.pid}.tmp`);
  await writeFile(temporary, `${JSON.stringify(parsed, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
  await rename(temporary, configPath);
  return loadSiteConfig();
}
