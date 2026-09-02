import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

import {
  DIST_DIR,
  PROJECT_DIR,
  escapeHtml,
  loadSiteConfig,
  pathUrl,
  readEntries,
} from './content.mjs';

const iconPaths = {
  archive: '<rect width="18" height="4" x="3" y="3" rx="1"/><path d="M5 7v13h14V7M10 11h4"/>',
  calendar: '<path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  home: '<path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  moon: '<path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  tags: '<path d="M20 12 12 20 4 12V4h8Z"/><circle cx="9" cy="9" r="1"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
};

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
}

function pageHead({ config, title, description, pathname, imagePath }) {
  const canonicalPath = pathUrl(config.basePath, pathname);
  const canonical = `${config.siteUrl}${canonicalPath}`;
  const image = `${config.siteUrl}${pathUrl(config.basePath, imagePath)}`;
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#fff5ee">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="icon" href="${pathUrl(config.basePath, 'favicon.svg')}">
  <link rel="stylesheet" href="${pathUrl(config.basePath, 'assets/site.css')}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(image)}">
  <title>${escapeHtml(title)}</title>
</head>`;
}

function drawer({ config, entries, months, tags }) {
  const home = pathUrl(config.basePath);
  const monthButtons = months.map((month) => {
    const count = entries.filter((entry) => entry.month === month).length;
    return `<a href="${home}#month=${encodeURIComponent(month)}"><span>${escapeHtml(month)}</span><b>${count}</b></a>`;
  }).join('');
  const tagButtons = tags.map((tag) => {
    const count = entries.filter((entry) => entry.tags.includes(tag)).length;
    return `<a href="${home}#tag=${encodeURIComponent(tag)}"><span>#${escapeHtml(tag)}</span><b>${count}</b></a>`;
  }).join('');

  return `<button class="drawer-scrim" type="button" data-close-drawer aria-label="关闭导航菜单" tabindex="-1"></button>
<aside class="romanticism-drawer" data-drawer aria-label="网站导航">
  <div class="drawer-cover" style="--drawer-cover:url('${pathUrl(config.basePath, 'romanticism/sidebar.webp')}');--drawer-avatar:url('${pathUrl(config.basePath, 'romanticism/user.jpg')}')">
    <span class="drawer-avatar" aria-hidden="true"></span>
    <strong>${escapeHtml(config.title)}</strong>
    <span>${escapeHtml(config.tagline)}</span>
    <button type="button" data-close-drawer aria-label="关闭导航菜单">${icon('x')}</button>
  </div>
  <nav class="drawer-nav">
    <a href="${home}">${icon('home')}<span>主页</span></a>
    <div class="drawer-section">
      <div class="drawer-section-title">${icon('archive')}<span>文章归档</span></div>
      <a href="${home}"><span>全部</span><b>${entries.length}</b></a>${monthButtons}
    </div>
    <div class="drawer-section">
      <div class="drawer-section-title">${icon('tags')}<span>标签</span></div>${tagButtons}
    </div>
  </nav>
</aside>`;
}

function appbar(config, { homePage = false } = {}) {
  const searchControl = homePage
    ? `<button class="appbar-icon" type="button" data-open-search aria-label="搜索日记">${icon('search')}</button>`
    : `<a class="appbar-icon" href="${pathUrl(config.basePath)}#search=1" aria-label="搜索日记">${icon('search')}</a>`;
  return `<header class="romanticism-appbar glass">
  <button class="appbar-icon" type="button" data-open-drawer aria-label="打开导航菜单">${icon('menu')}</button>
  <a class="site-title" href="${pathUrl(config.basePath)}">${escapeHtml(config.title)}</a>
  <div class="appbar-spacer"></div>
  <span class="owner-badge">${icon('circle')}公开日记</span>
  ${searchControl}
  <button class="appbar-icon" type="button" data-theme-toggle aria-label="切换深色模式">${icon('moon')}<span class="theme-sun">${icon('sun')}</span></button>
</header>`;
}

function footer(config) {
  return `<footer class="romanticism-footer">
  <strong>© ${new Date().getFullYear()} ${escapeHtml(config.title)}</strong>
  <small>Theme <a href="https://imakashi.eu.org/blog/archives/themeRomanticism.html" target="_blank" rel="noreferrer">Romanticism 2.2</a> by <a href="https://imakashi.eu.org/" target="_blank" rel="noreferrer">Akashi</a> · 静态日记版</small>
</footer>`;
}

function indexPage(config, entries) {
  const months = [...new Set(entries.map((entry) => entry.month))];
  const tags = [...new Set(entries.flatMap((entry) => entry.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const cards = entries.map((entry) => {
    const searchText = [entry.title, entry.summary, entry.displayDate, ...entry.tags, entry.content].join(' ').toLocaleLowerCase('zh-CN');
    return `<a class="romanticism-post-card" href="${pathUrl(config.basePath, `posts/${entry.slug}/`)}" data-entry-card data-month="${escapeHtml(entry.month)}" data-tags="${escapeHtml(entry.tags.join('|'))}" data-search="${escapeHtml(searchText)}" style="background-image:url('${pathUrl(config.basePath, entry.cover)}')">
  <span class="post-card-shade"></span>
  <span class="post-card-copy">
    <strong>${escapeHtml(entry.title)}</strong>
    <small>${escapeHtml(entry.displayDate)} · ${escapeHtml(entry.tags.join('、'))}</small>
    <em>${escapeHtml(entry.summary)}</em>
  </span>
</a>`;
  }).join('\n');
  const tagSearchButtons = tags.map((tag) => `<button type="button" data-tag-filter="${escapeHtml(tag)}">#${escapeHtml(tag)} <span>(${entries.filter((entry) => entry.tags.includes(tag)).length})</span></button>`).join('');
  const floatingTags = tags.map((tag) => `<button type="button" data-tag-filter="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join('');

  return `${pageHead({ config, title: config.title, description: config.description, pathname: '', imagePath: 'og.png' })}
<body>
<div class="romanticism-site" data-site style="--index-hero:url('${pathUrl(config.basePath, config.homeImage)}')">
${appbar(config, { homePage: true })}
${drawer({ config, entries, months, tags })}
<main>
  <section class="index-hero" aria-labelledby="index-title">
    <div class="image-shade"></div>
    <div class="index-hero-copy clear-in"><p>${escapeHtml(config.description)}</p><h1 id="index-title">${escapeHtml(config.tagline)}</h1></div>
  </section>
  <section class="theme-surface home-surface">
    <div class="post-feed clear-in">
      <div class="filter-notice glass" data-filter-notice hidden><span data-filter-label></span><button type="button" data-clear-filter>查看全部</button></div>
      ${cards}
      <div class="empty-card glass" data-empty-card hidden>${icon('search')}<h2>这里是空荡的原野……</h2><p>没有找到符合当前条件的日记。</p><button type="button" data-clear-filter>查看全部</button></div>
    </div>
  </section>
</main>
${footer(config)}
<div class="floating-filter glass"><button class="floating-filter-trigger" type="button" aria-label="打开文章筛选" data-toggle-filter>${icon('circle')}</button><div class="floating-filter-options"><button class="is-active" type="button" data-clear-filter>全部</button>${floatingTags}</div></div>
<div class="search-overlay" data-search-overlay role="dialog" aria-modal="true" aria-labelledby="search-title" hidden>
  <button class="search-backdrop" type="button" data-close-search aria-label="关闭搜索"></button>
  <section class="search-dialog glass clear-in">
    <button class="search-close" type="button" data-close-search aria-label="关闭搜索">${icon('x')}</button>
    <h2 id="search-title">${icon('search')}搜索一下</h2>
    <form data-search-form><label for="diary-search">输入标题、日期、标签或正文关键字</label><div class="search-row"><input id="diary-search" type="search" data-search-input placeholder="请输入搜索关键字"><button type="submit">搜索</button></div></form>
    <div class="search-tags"><h3>${icon('tags')}标签云</h3>${tagSearchButtons}</div>
    <p class="search-count">${icon('calendar')}当前可找到 <span data-result-count>${entries.length}</span> 篇日记</p>
  </section>
</div>
<script type="module" src="${pathUrl(config.basePath, 'assets/app.js')}"></script>
</div>
</body>
</html>`;
}

function postPage(config, entries, entry) {
  const months = [...new Set(entries.map((item) => item.month))];
  const tags = [...new Set(entries.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  return `${pageHead({ config, title: `${entry.title} · ${config.title}`, description: entry.summary, pathname: `posts/${entry.slug}/`, imagePath: entry.cover })}
<body>
<div class="romanticism-site" data-site>
${appbar(config)}
${drawer({ config, entries, months, tags })}
<main>
  <section class="post-hero" style="background-image:url('${pathUrl(config.basePath, entry.cover)}')" aria-labelledby="post-title">
    <div class="image-shade"></div>
    <div class="post-hero-copy clear-in"><h1 id="post-title">${escapeHtml(entry.title)}</h1><p>${escapeHtml(config.author)} · ${escapeHtml(entry.displayDate)} · ${escapeHtml(entry.tags.join('、'))}</p></div>
  </section>
  <section class="theme-surface post-surface">
    <div class="reading-tools glass"><a href="${pathUrl(config.basePath)}">← 返回主页</a><span>日记正文</span></div>
    <article class="romanticism-article clear-in">
      <p class="post-summary">${escapeHtml(entry.summary)}</p><hr>
      <div class="markdown-body">${entry.html}</div>
      <div class="copyright-panel glass"><span aria-hidden="true">©</span><p>最后更新时间：${escapeHtml(new Date(entry.updatedAt).toLocaleString('zh-CN'))}<br>这是一篇公开日记，不开放评论。</p></div>
    </article>
  </section>
</main>
${footer(config)}
<script type="module" src="${pathUrl(config.basePath, 'assets/app.js')}"></script>
</div>
</body>
</html>`;
}

function notFoundPage(config) {
  return `${pageHead({ config, title: `没有找到 · ${config.title}`, description: '没有找到这个页面。', pathname: '404.html', imagePath: 'og.png' })}
<body><div class="romanticism-site" data-site style="--index-hero:url('${pathUrl(config.basePath, config.homeImage)}')">${appbar(config)}<main><section class="index-hero"><div class="image-shade"></div><div class="index-hero-copy"><p>404</p><h1>这里是空荡的原野……</h1><p><a class="hero-home-link" href="${pathUrl(config.basePath)}">返回日记首页</a></p></div></section></main></div><script type="module" src="${pathUrl(config.basePath, 'assets/app.js')}"></script></body></html>`;
}

async function build() {
  const config = await loadSiteConfig();
  const entries = await readEntries();
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(path.join(DIST_DIR, 'assets'), { recursive: true });
  await cp(path.join(PROJECT_DIR, 'public'), DIST_DIR, { recursive: true });
  await cp(path.join(PROJECT_DIR, 'src', 'site.css'), path.join(DIST_DIR, 'assets', 'site.css'));
  await cp(path.join(PROJECT_DIR, 'src', 'app.js'), path.join(DIST_DIR, 'assets', 'app.js'));
  await writeFile(path.join(DIST_DIR, 'index.html'), indexPage(config, entries));
  await writeFile(path.join(DIST_DIR, '404.html'), notFoundPage(config));
  await writeFile(path.join(DIST_DIR, '.nojekyll'), '');

  for (const entry of entries) {
    const postDir = path.join(DIST_DIR, 'posts', entry.slug);
    await mkdir(postDir, { recursive: true });
    await writeFile(path.join(postDir, 'index.html'), postPage(config, entries, entry));
  }

  const sitemap = entries.map((entry) => `${config.siteUrl}${pathUrl(config.basePath, `posts/${entry.slug}/`)}`).join('\n');
  await writeFile(path.join(DIST_DIR, 'sitemap.txt'), `${config.siteUrl}${pathUrl(config.basePath)}\n${sitemap}\n`);
  await writeFile(path.join(DIST_DIR, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}${pathUrl(config.basePath, 'sitemap.txt')}\n`);
  console.log(`Built ${entries.length} published ${entries.length === 1 ? 'entry' : 'entries'} in ${DIST_DIR}`);
}

await build();
