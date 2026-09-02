import { createHash } from 'node:crypto';
import { lookup } from 'node:dns/promises';
import { constants as fsConstants } from 'node:fs';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { isIP } from 'node:net';
import path from 'node:path';

import { PROJECT_DIR } from './content.mjs';

export const DRAFT_COVERS_DIR = path.join(PROJECT_DIR, 'content', 'draft-assets', 'covers');
export const PUBLIC_COVERS_DIR = path.join(PROJECT_DIR, 'public', 'uploads', 'covers');

const maxImageBytes = 8 * 1024 * 1024;
const redirectStatuses = new Set([301, 302, 303, 307, 308]);
const supportedContentTypes = new Set([
  'application/octet-stream',
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

function privateIpv4(address) {
  const parts = address.split('.').map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return true;
  const [a, b] = parts;
  return a === 0
    || a === 10
    || a === 127
    || (a === 100 && b >= 64 && b <= 127)
    || (a === 169 && b === 254)
    || (a === 172 && b >= 16 && b <= 31)
    || (a === 192 && (b === 0 || b === 168))
    || (a === 198 && (b === 18 || b === 19))
    || a >= 224;
}

function syntheticProxyIpv4(address) {
  const [a, b] = address.split('.').map(Number);
  return a === 198 && (b === 18 || b === 19);
}

export function isPrivateAddress(address) {
  const normalized = String(address).toLowerCase().replace(/^\[|\]$/g, '');
  const version = isIP(normalized);
  if (version === 4) return privateIpv4(normalized);
  if (version !== 6) return true;
  if (normalized.startsWith('::ffff:')) return privateIpv4(normalized.slice(7));
  return normalized === '::'
    || normalized === '::1'
    || normalized.startsWith('fc')
    || normalized.startsWith('fd')
    || /^fe[89ab]/.test(normalized)
    || normalized.startsWith('ff');
}

export async function validateRemoteImageUrl(value, { lookupFn = lookup } = {}) {
  const raw = typeof value === 'string' ? value.trim() : '';
  if (!raw || raw.length > 2048) throw new Error('请填写不超过 2048 个字符的图片 URL。');
  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error('图片 URL 格式不正确。');
  }
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('图片 URL 只能使用 http 或 https。');
  if (url.username || url.password) throw new Error('图片 URL 不能包含账号或密码。');
  const hostname = url.hostname.replace(/^\[|\]$/g, '').toLowerCase();
  if (!hostname || hostname === 'localhost' || hostname.endsWith('.localhost') || hostname.endsWith('.local')) {
    throw new Error('图片 URL 不能指向本机或局域网地址。');
  }
  const directAddress = isIP(hostname);
  const addresses = directAddress ? [{ address: hostname }] : await lookupFn(hostname, { all: true, verbatim: true });
  // macOS proxy clients commonly map public hostnames into RFC 2544's
  // 198.18.0.0/15 range. Permit that synthetic result for hostnames only;
  // a URL containing the same IP address directly is still rejected.
  const unsafeAddress = ({ address }) => isPrivateAddress(address)
    && !(directAddress === 0 && syntheticProxyIpv4(address));
  if (!addresses.length || addresses.some(unsafeAddress)) {
    throw new Error('图片 URL 不能指向本机或局域网地址。');
  }
  return url;
}

function detectImageExtension(bytes) {
  if (bytes.length >= 12 && bytes.subarray(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]))) return 'png';
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpg';
  if (bytes.length >= 12 && bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP') return 'webp';
  if (bytes.length >= 6 && ['GIF87a', 'GIF89a'].includes(bytes.subarray(0, 6).toString('ascii'))) return 'gif';
  if (bytes.length >= 12 && bytes.subarray(4, 8).toString('ascii') === 'ftyp' && /avi[fs]/.test(bytes.subarray(8, 16).toString('ascii'))) return 'avif';
  return '';
}

async function responseBytes(response) {
  const declaredSize = Number(response.headers.get('content-length') || 0);
  if (declaredSize > maxImageBytes) throw new Error('图片不能超过 8 MB。');
  if (!response.body) throw new Error('图片地址没有返回内容。');
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxImageBytes) {
      await reader.cancel();
      throw new Error('图片不能超过 8 MB。');
    }
    chunks.push(Buffer.from(value));
  }
  return Buffer.concat(chunks);
}

export async function downloadRemoteImage(value, { fetchFn = fetch, lookupFn = lookup } = {}) {
  let url = await validateRemoteImageUrl(value, { lookupFn });
  for (let redirectCount = 0; redirectCount <= 5; redirectCount += 1) {
    const response = await fetchFn(url, {
      headers: { Accept: 'image/avif,image/webp,image/png,image/jpeg,image/gif', 'User-Agent': 'iwxt-diary-local-importer/1.0' },
      redirect: 'manual',
      signal: AbortSignal.timeout(12_000),
    });
    if (redirectStatuses.has(response.status)) {
      const location = response.headers.get('location');
      if (!location || redirectCount === 5) throw new Error('图片 URL 重定向次数过多。');
      url = await validateRemoteImageUrl(new URL(location, url).href, { lookupFn });
      continue;
    }
    if (!response.ok) throw new Error(`图片下载失败（HTTP ${response.status}）。`);
    const contentType = (response.headers.get('content-type') || '').split(';', 1)[0].trim().toLowerCase();
    if (contentType && !supportedContentTypes.has(contentType)) throw new Error('这个 URL 返回的不是支持的图片格式。');
    const bytes = await responseBytes(response);
    const extension = detectImageExtension(bytes);
    if (!extension) throw new Error('无法识别图片内容，请使用 PNG、JPEG、WebP、GIF 或 AVIF。');
    return { bytes, extension, sourceUrl: url.href };
  }
  throw new Error('图片下载失败。');
}

async function writeOnce(filePath, bytes) {
  try {
    await writeFile(filePath, bytes, { flag: 'wx' });
  } catch (error) {
    if (error?.code !== 'EEXIST') throw error;
  }
}

export async function importRemoteCover(value, status, dependencies = {}) {
  const downloaded = await downloadRemoteImage(value, dependencies);
  const filename = `${createHash('sha256').update(downloaded.bytes).digest('hex')}.${downloaded.extension}`;
  const draft = status === 'draft';
  const directory = draft ? DRAFT_COVERS_DIR : PUBLIC_COVERS_DIR;
  await mkdir(directory, { recursive: true });
  await writeOnce(path.join(directory, filename), downloaded.bytes);
  return draft ? `draft-covers/${filename}` : `uploads/covers/${filename}`;
}

export async function promoteDraftCover(cover) {
  const match = /^draft-covers\/([a-f0-9]{64}\.(?:avif|gif|jpg|png|webp))$/.exec(String(cover));
  if (!match) return cover;
  await mkdir(PUBLIC_COVERS_DIR, { recursive: true });
  try {
    await copyFile(path.join(DRAFT_COVERS_DIR, match[1]), path.join(PUBLIC_COVERS_DIR, match[1]), fsConstants.COPYFILE_EXCL);
  } catch (error) {
    if (error?.code !== 'EEXIST') throw error;
  }
  return `uploads/covers/${match[1]}`;
}

export async function prepareCoverInput(input, dependencies = {}) {
  if (!['draft', 'published'].includes(input?.status)) throw new Error('请选择草稿或已发布。');
  const status = input.status;
  const coverUrl = typeof input?.coverUrl === 'string' ? input.coverUrl.trim() : '';
  const cover = coverUrl
    ? await importRemoteCover(coverUrl, status, dependencies)
    : status === 'published'
      ? await promoteDraftCover(input?.cover)
      : input?.cover;
  return { ...input, cover, coverUrl: undefined };
}
