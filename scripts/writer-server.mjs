import { randomBytes } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { spawn } from 'node:child_process';

import {
  DIST_DIR,
  PROJECT_DIR,
  covers,
  readEntries,
  saveEntry,
  trashEntry,
} from './content.mjs';

const host = '127.0.0.1';
const port = Number(process.env.WRITER_PORT || 4173);
const writerToken = randomBytes(32).toString('hex');
const writerDir = path.join(PROJECT_DIR, 'writer');
const maxBodyBytes = 80_000;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
};

function json(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(payload));
}

function requestHostAllowed(request) {
  const value = request.headers.host || '';
  return value === `${host}:${port}` || value === `localhost:${port}`;
}

function apiAllowed(request) {
  if (request.headers['x-writer-token'] !== writerToken) return false;
  if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method || '')) return true;
  const origin = request.headers.origin;
  return origin === `http://${host}:${port}` || origin === `http://localhost:${port}`;
}

async function readJsonBody(request) {
  let size = 0;
  const chunks = [];
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBodyBytes) throw new Error('请求内容过大。');
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new Error('内容格式不正确。');
  }
}

function run(command, args, { allowFailure = false } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: PROJECT_DIR, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    child.stdout.on('data', (chunk) => { output += chunk.toString(); });
    child.stderr.on('data', (chunk) => { output += chunk.toString(); });
    child.on('error', reject);
    child.on('close', (code) => {
      const result = { code: code ?? 1, output: output.trim().slice(-12_000) };
      if (result.code === 0 || allowFailure) resolve(result);
      else reject(new Error(result.output || `${command} 执行失败。`));
    });
  });
}

async function buildSite() {
  return run(process.execPath, [path.join(PROJECT_DIR, 'scripts', 'build.mjs')]);
}

async function syncPublishedContent(commitMessage) {
  const repository = await run('git', ['rev-parse', '--is-inside-work-tree'], { allowFailure: true });
  if (repository.code !== 0) {
    return { pushed: false, reason: 'no-repository' };
  }

  await run('git', ['add', '-A', '--', 'content/posts']);
  const changes = await run('git', ['diff', '--cached', '--quiet'], { allowFailure: true });
  if (changes.code > 1) throw new Error(changes.output || '无法检查待发布内容。');
  if (changes.code !== 0) {
    await run('git', ['commit', '-m', commitMessage]);
  }

  const remote = await run('git', ['remote', 'get-url', 'origin'], { allowFailure: true });
  if (remote.code !== 0 || !remote.output) {
    return { pushed: false, reason: 'no-remote' };
  }

  const pushed = await run('git', ['push', 'origin', 'HEAD:main'], { allowFailure: true });
  if (pushed.code !== 0) {
    return { pushed: false, reason: 'push-failed', detail: pushed.output };
  }
  return { pushed: true };
}

async function publishEntry(input) {
  const entry = await saveEntry({ ...input, status: 'published' });
  await buildSite();
  const sync = await syncPublishedContent(`Publish diary: ${entry.title}`);
  if (sync.pushed) {
    return { entry, built: true, pushed: true, message: '日记已推送到 GitHub，Pages 会自动更新。' };
  }
  if (sync.reason === 'push-failed') {
    return { entry, built: true, pushed: false, message: `日记已保存，但 GitHub 发布失败：${sync.detail || '请重新登录 GitHub。'}` };
  }
  return { entry, built: true, pushed: false, message: '日记已保存并生成网站；连接 GitHub 仓库后即可一键发布。' };
}

function resolveStaticFile(root, pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const relative = decoded.replace(/^\/+/, '');
  const resolved = path.resolve(root, relative || 'index.html');
  if (resolved !== root && !resolved.startsWith(`${root}${path.sep}`)) return null;
  return resolved;
}

async function serveFile(response, root, pathname, { injectToken = false } = {}) {
  let filePath = resolveStaticFile(root, pathname);
  if (!filePath) return false;
  try {
    const info = await stat(filePath);
    if (info.isDirectory()) filePath = path.join(filePath, 'index.html');
    await stat(filePath);
  } catch {
    return false;
  }

  const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
  const headers = {
    'Cache-Control': injectToken ? 'no-store' : 'no-cache',
    'Content-Type': contentType,
    'X-Content-Type-Options': 'nosniff',
  };
  if (injectToken) {
    headers['Content-Security-Policy'] = "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'";
    const source = await readFile(filePath, 'utf8');
    response.writeHead(200, headers);
    response.end(source.replace('__WRITER_TOKEN__', writerToken));
    return true;
  }
  response.writeHead(200, headers);
  createReadStream(filePath).pipe(response);
  return true;
}

async function handleApi(request, response, pathname) {
  if (!apiAllowed(request)) {
    json(response, 403, { error: '本地写作令牌无效，请从启动后的写作页面操作。' });
    return;
  }

  if (request.method === 'GET' && pathname === '/api/posts') {
    const entries = await readEntries({ includeDrafts: true });
    json(response, 200, { entries, covers });
    return;
  }

  if (request.method === 'POST' && pathname === '/api/entries') {
    const entry = await saveEntry(await readJsonBody(request));
    await buildSite();
    json(response, 200, { entry, message: entry.status === 'draft' ? '草稿已保存。' : '日记已保存到本地公开预览。' });
    return;
  }

  if (request.method === 'POST' && pathname === '/api/publish') {
    const result = await publishEntry(await readJsonBody(request));
    json(response, 200, result);
    return;
  }

  if (request.method === 'POST' && pathname === '/api/build') {
    const built = await buildSite();
    json(response, 200, { built: true, message: built.output || '网站已重新生成。' });
    return;
  }

  const deleteMatch = pathname.match(/^\/api\/entries\/([a-z0-9-]+)$/);
  if (request.method === 'DELETE' && deleteMatch) {
    const removed = await trashEntry(deleteMatch[1]);
    await buildSite();
    let sync = { pushed: false, reason: 'draft-only' };
    if (removed.entry.status === 'published') {
      sync = await syncPublishedContent(`Remove diary: ${removed.entry.title}`);
    }
    const publicMessage = sync.pushed
      ? '，并已从 GitHub 发布源移除'
      : removed.entry.status === 'published'
        ? '；本地网站已更新，连接 GitHub 后会同步删除'
        : '';
    json(response, 200, {
      removed: true,
      pushed: sync.pushed,
      message: `日记已移入本机回收目录${publicMessage}：${path.basename(removed.destination)}`,
    });
    return;
  }

  json(response, 404, { error: '没有找到这个本地写作接口。' });
}

await buildSite();

const server = createServer(async (request, response) => {
  try {
    if (!requestHostAllowed(request)) {
      json(response, 403, { error: '只允许从本机访问写作服务。' });
      return;
    }
    const requestUrl = new URL(request.url || '/', `http://${request.headers.host}`);
    if (requestUrl.pathname.startsWith('/api/')) {
      await handleApi(request, response, requestUrl.pathname);
      return;
    }
    if (requestUrl.pathname === '/writer' || requestUrl.pathname === '/writer/') {
      await serveFile(response, writerDir, '/index.html', { injectToken: true });
      return;
    }
    if (requestUrl.pathname.startsWith('/writer/')) {
      const served = await serveFile(response, writerDir, requestUrl.pathname.slice('/writer'.length));
      if (served) return;
    } else {
      const served = await serveFile(response, DIST_DIR, requestUrl.pathname);
      if (served) return;
    }
    const fallback = await serveFile(response, DIST_DIR, '/404.html');
    if (!fallback) json(response, 404, { error: '没有找到这个页面。' });
  } catch (error) {
    console.error(error);
    json(response, 500, { error: error instanceof Error ? error.message : '本地写作服务出现错误。' });
  }
});

server.listen(port, host, () => {
  const writerUrl = `http://${host}:${port}/writer/`;
  console.log(`本地写作间：${writerUrl}`);
  console.log(`公开网站预览：http://${host}:${port}/`);
  if (process.env.NO_OPEN !== '1' && process.platform === 'darwin') {
    spawn('open', [writerUrl], { detached: true, stdio: 'ignore' }).unref();
  }
});
