import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

import {
  DIST_DIR,
  PROJECT_DIR,
  escapeHtml,
  loadSiteConfig,
  pathUrl,
  readEntries,
} from './content.mjs';
import { readCmcCatalog } from './cmc-catalog.mjs';

const siteCssVersion = createHash('sha256')
  .update(await readFile(path.join(PROJECT_DIR, 'src', 'site.css')))
  .digest('hex').slice(0, 12);

const tutorials = [
  {
    slug: 'mita-attention',
    title: 'MiTA：让注意力复用候选',
    summary: '从 Q/K/V 到 landmark、top-k、共享压缩与联合归一，亲手走完一遍论文公式。',
    detail: '论文导读 · 8 章 · 数值实验与证据边界',
    cover: 'uploads/covers/75fdfca0d8d5f948eb66b92e5ced4f198304cb0cf9001eb4bb41f3049b6319f2.png',
  },
  {
    slug: 'discrete-math',
    title: '离散数学：全书逐章交互教程',
    summary: '从逻辑到图与数，逐章读概念、跟推导、改实验、做自测并记录理解。',
    detail: '离散数学 · 19 章 · 19 个实验 · 38 道自测',
    cover: 'uploads/covers/522f54a2f21cee9f99c542fa9749df19332079cbc7f59ed853bfd235c790acff.png',
  },
  {
    slug: 'cet6-word-picker',
    title: '词间：六级词汇筛选',
    summary: '筛出生词、移走已会词，导出个人词表并备份完整筛选进度。',
    detail: '英语学习 · 5,407 词条 · 筛选与进度备份',
    cover: 'uploads/covers/0862a39a1ad5a72f020b4ed54ae7b44a8c5db42b48c4e78fdbd83f4f63fc0e0f.png',
  },
  {
    slug: 'fixed-window-advanced',
    title: '定长滑动窗口进阶：23 题交互教程',
    summary: '从窗口转化到正确性说明，逐题演示、C++17 参考实现与错因复盘。',
    detail: '算法 · 19 道进阶 + 4 道扩展 · 81 帧窗口示例',
    cover: 'uploads/covers/a18582d80363e2f575d6a4119f2da436ddb0a2cb2ca71e9c41055f1e71681f12.png',
  },
  {
    slug: 'model-4bit',
    title: '4bit 模型量化：压小之后，丢掉了什么？',
    summary: '动手改刻度、算得分，理解量化误差、分组、校准与运行开销。',
    detail: '大模型基础 · 8 章 · 5 个交互实验',
    cover: 'uploads/covers/86e1aa6b1c7e7faefafcdec4445128099578b10152a881c38ef952ed8c9701a3.png',
  },
  {
    slug: 'yeyu-practice',
    title: '夜雨知识点练习',
    summary: '按知识点独立动笔，对照参考解答，记录完成情况与错因笔记。',
    detail: '数学竞赛 · 11 章 · 179 个知识点 · 180 道独立题',
    cover: 'uploads/covers/56bb7a90e47d9bc819deebb6158b4d68bed7398f4e8709cfc321475c918bf776.png',
  },
  {
    slug: 'huawei-ict-network',
    title: '华为 ICT 网络赛道初赛：自上而下教程',
    summary: '从一次访问理解网络，结合章节阅读、拓扑演示和题库练习。',
    detail: '网络基础 · 交换与路由 · WLAN · 安全 · 数据中心',
    cover: 'uploads/covers/2c9092cb1240b56bf52cb91029df07e5af89b8c540b32a72f281c845d44dceb7.png',
  },
  {
    slug: 'polyglot',
    title: '代码之间：多语言程序交互教程',
    summary: '从协作动机到编译、链接和 ABI，亲手组合一个 C/C++ 程序。',
    detail: '计算机基础 · 编译与链接 · ABI',
    cover: 'uploads/covers/184174207cc943496eb3c4f9a9e14a840a4b162c33939c2084c374b825397f69.png',
  },
];

const iconPaths = {
  archive: '<rect width="18" height="4" x="3" y="3" rx="1"/><path d="M5 7v13h14V7M10 11h4"/>',
  book: '<path d="M3 4h6a4 4 0 0 1 3 1.4A4 4 0 0 1 15 4h6v16h-6a4 4 0 0 0-3 1.4A4 4 0 0 0 9 20H3Z"/><path d="M12 5.4v16"/>',
  calendar: '<path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"/>',
  check: '<path d="M9 11l3 3L22 4"/><path d="M21 12a9 9 0 1 1-5.3-8.2"/>',
  circle: '<circle cx="12" cy="12" r="9"/>',
  home: '<path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  moon: '<path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
  tags: '<path d="M20 12 12 20 4 12V4h8Z"/><circle cx="9" cy="9" r="1"/>',
  up: '<path d="m6 15 6-6 6 6"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
};

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
}

function pageHead({ config, title, description, pathname, imagePath }) {
  const canonicalPath = pathUrl(config.basePath, pathname);
  const canonical = `${config.siteUrl}${canonicalPath}`;
  const image = `${config.siteUrl}${pathUrl(config.basePath, imagePath)}`;
  const wallpaper = pathUrl(config.basePath, config.homeImage);
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#fff5ee">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="icon" href="${pathUrl(config.basePath, 'favicon.svg')}">
  <link rel="preload" as="image" href="${wallpaper}" fetchpriority="high">
  <link rel="stylesheet" href="${pathUrl(config.basePath, 'assets/highlight.css')}">
  <link rel="stylesheet" href="${pathUrl(config.basePath, 'assets/site.css')}?v=${siteCssVersion}">
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
  const checkin = pathUrl(config.basePath, 'checkin/');
  const tutorial = pathUrl(config.basePath, 'tutorials/');
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
  <div class="drawer-cover" data-drawer-cover-image="${pathUrl(config.basePath, 'romanticism/sidebar.webp')}" data-drawer-avatar-image="${pathUrl(config.basePath, 'romanticism/user.jpg')}">
    <span class="drawer-avatar" aria-hidden="true"></span>
    <strong>${escapeHtml(config.title)}</strong>
    <span>${escapeHtml(config.tagline)}</span>
    <button type="button" data-close-drawer aria-label="关闭导航菜单">${icon('x')}</button>
  </div>
  <nav class="drawer-nav">
    <a href="${home}">${icon('home')}<span>主页</span></a>
    <a href="${checkin}">${icon('check')}<span>每日打卡</span></a>
    <a href="${tutorial}">${icon('book')}<span>交互教程</span></a>
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

function appbar(config, { homePage = false, checkinPage = false, tutorialsPage = false } = {}) {
  const searchControl = homePage
    ? `<button class="appbar-icon" type="button" data-open-search aria-label="搜索日记">${icon('search')}</button>`
    : `<a class="appbar-icon" href="${pathUrl(config.basePath)}#search=1" aria-label="搜索日记">${icon('search')}</a>`;
  return `<header class="romanticism-appbar glass">
  <button class="appbar-icon" type="button" data-open-drawer aria-label="打开导航菜单">${icon('menu')}</button>
  <a class="site-title" href="${pathUrl(config.basePath)}">${escapeHtml(config.title)}</a>
  <div class="appbar-spacer"></div>
  <a class="appbar-write-button appbar-tutorial-button${tutorialsPage ? ' is-active' : ''}" href="${pathUrl(config.basePath, 'tutorials/')}" aria-label="交互教程目录">${icon('book')}<span>交互教程</span></a>
  <a class="appbar-write-button${checkinPage ? ' is-active' : ''}" href="${pathUrl(config.basePath, 'checkin/')}">${icon('check')}<span>每日打卡</span></a>
  <span class="owner-badge">${icon('circle')}${checkinPage ? '本机记录' : '公开日记'}</span>
  ${searchControl}
  <button class="appbar-icon" type="button" data-theme-toggle aria-label="切换深色模式">${icon('moon')}<span class="theme-sun">${icon('sun')}</span></button>
</header>`;
}

function footer(config) {
  return `<footer class="romanticism-footer">
  <strong>© ${new Date().getFullYear()} ${escapeHtml(config.title)}</strong>
</footer>`;
}

function experienceChrome() {
  return `<div class="scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>
<div class="pointer-aurora" aria-hidden="true"></div>
<button class="back-to-top glass" type="button" data-back-to-top aria-label="回到页面顶部">${icon('up')}<span>回到顶部</span></button>`;
}

function heroAtmosphere() {
  return `<div class="hero-atmosphere" aria-hidden="true">
  <span class="hero-orb hero-orb-one"></span>
  <span class="hero-orb hero-orb-two"></span>
  <span class="hero-orb hero-orb-three"></span>
  <span class="hero-stars"></span>
</div>`;
}

function glassSidebar({ config, entries, months, tags }) {
  const home = pathUrl(config.basePath);
  const tagLinks = tags.slice(0, 8).map((tag) => {
    const count = entries.filter((entry) => entry.tags.includes(tag)).length;
    return `<a href="${home}#tag=${encodeURIComponent(tag)}"><span>#${escapeHtml(tag)}</span><b>${count}</b></a>`;
  }).join('');
  const monthLinks = months.slice(0, 5).map((month) => {
    const count = entries.filter((entry) => entry.month === month).length;
    return `<a href="${home}#month=${encodeURIComponent(month)}"><span>${escapeHtml(month)}</span><b>${count}</b></a>`;
  }).join('');

  return `<aside class="glass-sidebar" aria-label="站点信息">
  <section class="sidebar-profile glass-panel reveal-on-scroll" data-reveal>
    <span class="sidebar-profile-avatar" style="--profile-avatar:url('${pathUrl(config.basePath, 'romanticism/user.jpg')}')" aria-hidden="true"></span>
    <span class="sidebar-profile-kicker">ABOUT THIS DIARY</span>
    <h2>${escapeHtml(config.author)}</h2>
    <p>${escapeHtml(config.tagline)}</p>
    <div class="sidebar-stats"><span><strong>${entries.length}</strong>文章</span><span><strong>${tags.length}</strong>标签</span><span><strong>${months.length}</strong>归档</span></div>
  </section>
  <section class="sidebar-taxonomy glass-panel reveal-on-scroll" data-reveal>
    <h2>${icon('tags')}<span>标签</span></h2>
    <nav class="sidebar-link-list">${tagLinks || '<span class="sidebar-empty">还没有标签</span>'}</nav>
  </section>
  <section class="sidebar-taxonomy glass-panel reveal-on-scroll" data-reveal>
    <h2>${icon('archive')}<span>归档</span></h2>
    <nav class="sidebar-link-list">${monthLinks || '<span class="sidebar-empty">还没有文章</span>'}</nav>
  </section>
</aside>`;
}

function indexPage(config, entries) {
  const months = [...new Set(entries.map((entry) => entry.month))];
  const tags = [...new Set(entries.flatMap((entry) => entry.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const cards = entries.map((entry) => {
    const searchText = [entry.title, entry.summary, entry.displayDate, ...entry.tags, entry.content].join(' ').toLocaleLowerCase('zh-CN');
    return `<a class="romanticism-post-card reveal-on-scroll" href="${pathUrl(config.basePath, `posts/${entry.slug}/`)}" data-entry-card data-reveal data-month="${escapeHtml(entry.month)}" data-tags="${escapeHtml(entry.tags.join('|'))}" data-search="${escapeHtml(searchText)}">
  <span class="post-card-media"><img src="${pathUrl(config.basePath, entry.cover)}" alt="" width="1200" height="675" loading="lazy" decoding="async"></span>
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
<div class="romanticism-site" data-site style="--site-wallpaper:url('${pathUrl(config.basePath, config.homeImage)}');--index-hero:url('${pathUrl(config.basePath, config.homeImage)}')">
${experienceChrome()}
${appbar(config, { homePage: true })}
${drawer({ config, entries, months, tags })}
<main>
  <section class="index-hero glass-frame" data-hero aria-labelledby="index-title">
    <div class="image-shade"></div>
    ${heroAtmosphere()}
    <div class="index-hero-copy clear-in" data-hero-copy><span class="hero-eyebrow">IWXT · PERSONAL DIARY</span><p>${escapeHtml(config.description)}</p><h1 id="index-title">${escapeHtml(config.tagline)}</h1></div>
    <a class="hero-scroll-cue" href="#diary-feed"><span>向下翻阅</span><i aria-hidden="true"></i></a>
  </section>
  <section class="theme-surface home-surface" id="diary-feed">
    <div class="glass-page-grid">
      <div class="post-feed clear-in">
        <div class="filter-notice glass-panel" data-filter-notice hidden><span data-filter-label></span><button type="button" data-clear-filter>查看全部</button></div>
        ${cards}
        <div class="empty-card glass-panel" data-empty-card hidden>${icon('search')}<h2>这里是空荡的原野……</h2><p>没有找到符合当前条件的日记。</p><button type="button" data-clear-filter>查看全部</button></div>
      </div>
      ${glassSidebar({ config, entries, months, tags })}
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
<div class="romanticism-site" data-site style="--site-wallpaper:url('${pathUrl(config.basePath, config.homeImage)}')">
${experienceChrome()}
${appbar(config)}
${drawer({ config, entries, months, tags })}
<main>
  <section class="post-hero post-hero-cover-layout glass-frame" aria-labelledby="post-title">
    <span class="post-card-media"><img src="${pathUrl(config.basePath, entry.cover)}" alt="" width="1200" height="675" decoding="async" fetchpriority="high"></span>
    <div class="post-hero-copy clear-in"><h1 id="post-title">${escapeHtml(entry.title)}</h1><p>${escapeHtml(config.author)} · ${escapeHtml(entry.displayDate)} · ${escapeHtml(entry.tags.join('、'))}</p></div>
  </section>
  <section class="theme-surface post-surface">
    <div class="reading-tools glass"><a href="${pathUrl(config.basePath)}">← 返回主页</a><span>日记正文</span></div>
    <div class="glass-page-grid post-page-grid">
      <article class="romanticism-article glass-content-panel reveal-on-scroll" data-reveal>
        <p class="post-summary">${escapeHtml(entry.summary)}</p><hr>
        <div class="markdown-body">${entry.html}</div>
        <div class="copyright-panel glass"><span aria-hidden="true">©</span><p>最后更新时间：${escapeHtml(new Date(entry.updatedAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }))}<br>这是一篇公开日记，不开放评论。</p></div>
      </article>
      ${glassSidebar({ config, entries, months, tags })}
    </div>
  </section>
</main>
${footer(config)}
<script type="module" src="${pathUrl(config.basePath, 'assets/app.js')}"></script>
</div>
</body>
</html>`;
}

function checkinPage(config, entries, cmcCatalog) {
  const months = [...new Set(entries.map((item) => item.month))];
  const tags = [...new Set(entries.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  return `${pageHead({ config, title: `每日打卡 · ${config.title}`, description: '在浏览器本地记录 CMC、算法题单与六级计划。', pathname: 'checkin/', imagePath: config.homeImage })}
<body>
<div class="romanticism-site checkin-site" data-site style="--site-wallpaper:url('${pathUrl(config.basePath, config.homeImage)}');--index-hero:url('${pathUrl(config.basePath, config.homeImage)}')">
${experienceChrome()}
${appbar(config, { checkinPage: true })}
${drawer({ config, entries, months, tags })}
<main>
  <section class="checkin-hero glass-frame" data-hero aria-labelledby="checkin-title">
    <div class="image-shade"></div>
    ${heroAtmosphere()}
    <div class="checkin-hero-copy clear-in" data-hero-copy>
      <span class="hero-eyebrow">LOCAL STUDY LOG · 2026</span>
      <p>CMC · 算法 · CET6</p>
      <h1 id="checkin-title">每日打卡</h1>
      <strong>把今天做过的事，留下可核对的痕迹。</strong>
    </div>
  </section>
  <section class="checkin-surface">
    <div class="checkin-page" data-checkin-app>
      <p class="checkin-loading">正在载入这台设备上的打卡记录……</p>
    </div>
    <noscript><p class="checkin-noscript glass-panel">每日打卡需要浏览器 JavaScript 才能在本机保存记录。</p></noscript>
  </section>
</main>
${footer(config)}
<script id="cmc-course-catalog" type="application/json">${JSON.stringify(cmcCatalog).replaceAll('<', '\\u003c')}</script>
<script type="module" src="${pathUrl(config.basePath, 'assets/app.js')}"></script>
<script type="module" src="${pathUrl(config.basePath, 'assets/checkin.js')}"></script>
</div>
</body>
</html>`;
}

function tutorialIndexPage(config, entries) {
  const months = [...new Set(entries.map((entry) => entry.month))];
  const tags = [...new Set(entries.flatMap((entry) => entry.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const cards = tutorials.map((tutorial) => `<a class="romanticism-post-card reveal-on-scroll" href="${pathUrl(config.basePath, `tutorials/${tutorial.slug}/`)}" data-tutorial-card data-reveal>
    <span class="post-card-media"><img src="${pathUrl(config.basePath, tutorial.cover)}" alt="" width="1200" height="675" loading="lazy" decoding="async"></span>
    <span class="post-card-copy"><strong>${escapeHtml(tutorial.title)}</strong><small>${escapeHtml(tutorial.detail)}</small><em>${escapeHtml(tutorial.summary)}</em></span>
  </a>`).join('\n');
  return `${pageHead({ config, title: `交互教程 · ${config.title}`, description: '可以动手操作的学习笔记与练习：英语词汇、算法与滑动窗口、论文与大模型基础、离散数学与数学竞赛、网络基础、多语言程序。', pathname: 'tutorials/', imagePath: tutorials[0].cover })}
<body>
<div class="romanticism-site" data-site style="--site-wallpaper:url('${pathUrl(config.basePath, config.homeImage)}');--index-hero:url('${pathUrl(config.basePath, config.homeImage)}')">
${experienceChrome()}
${appbar(config, { tutorialsPage: true })}
${drawer({ config, entries, months, tags })}
<main>
  <section class="index-hero glass-frame" data-hero aria-labelledby="tutorials-title">
    <div class="image-shade"></div>${heroAtmosphere()}
    <div class="index-hero-copy clear-in" data-hero-copy><p>可以动手操作的学习笔记</p><h1 id="tutorials-title">交互教程</h1></div>
    <a class="hero-scroll-cue" href="#tutorial-list"><span>查看教程</span><i aria-hidden="true"></i></a>
  </section>
  <section class="theme-surface home-surface" id="tutorial-list">
    <div class="glass-page-grid"><div class="post-feed clear-in">${cards}</div>${glassSidebar({ config, entries, months, tags })}</div>
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
<body><div class="romanticism-site" data-site style="--site-wallpaper:url('${pathUrl(config.basePath, config.homeImage)}');--index-hero:url('${pathUrl(config.basePath, config.homeImage)}')">${experienceChrome()}${appbar(config)}<main><section class="index-hero glass-frame" data-hero><div class="image-shade"></div>${heroAtmosphere()}<div class="index-hero-copy clear-in" data-hero-copy><span class="hero-eyebrow">LOST IN THE TIDE</span><p>404</p><h1>这里是空荡的原野……</h1><p><a class="hero-home-link" href="${pathUrl(config.basePath)}">返回日记首页</a></p></div></section></main></div><script type="module" src="${pathUrl(config.basePath, 'assets/app.js')}"></script></body></html>`;
}

async function build() {
  const config = await loadSiteConfig();
  const entries = await readEntries();
  const cmcCatalog = await readCmcCatalog();
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(path.join(DIST_DIR, 'assets'), { recursive: true });
  await cp(path.join(PROJECT_DIR, 'public'), DIST_DIR, { recursive: true });
  await cp(path.join(PROJECT_DIR, 'node_modules', 'highlight.js', 'styles', 'github-dark-dimmed.min.css'), path.join(DIST_DIR, 'assets', 'highlight.css'));
  await cp(path.join(PROJECT_DIR, 'src', 'site.css'), path.join(DIST_DIR, 'assets', 'site.css'));
  await cp(path.join(PROJECT_DIR, 'src', 'app.js'), path.join(DIST_DIR, 'assets', 'app.js'));
  await cp(path.join(PROJECT_DIR, 'src', 'checkin.js'), path.join(DIST_DIR, 'assets', 'checkin.js'));
  await cp(path.join(PROJECT_DIR, 'src', 'checkin-model.js'), path.join(DIST_DIR, 'assets', 'checkin-model.js'));
  await writeFile(path.join(DIST_DIR, 'index.html'), indexPage(config, entries));
  await writeFile(path.join(DIST_DIR, '404.html'), notFoundPage(config));
  await mkdir(path.join(DIST_DIR, 'checkin'), { recursive: true });
  await writeFile(path.join(DIST_DIR, 'checkin', 'index.html'), checkinPage(config, entries, cmcCatalog));
  await mkdir(path.join(DIST_DIR, 'tutorials'), { recursive: true });
  await writeFile(path.join(DIST_DIR, 'tutorials', 'index.html'), tutorialIndexPage(config, entries));
  await writeFile(path.join(DIST_DIR, '.nojekyll'), '');

  for (const entry of entries) {
    const postDir = path.join(DIST_DIR, 'posts', entry.slug);
    await mkdir(postDir, { recursive: true });
    await writeFile(path.join(postDir, 'index.html'), postPage(config, entries, entry));
  }

  const sitemap = [
    `${config.siteUrl}${pathUrl(config.basePath)}`,
    `${config.siteUrl}${pathUrl(config.basePath, 'checkin/')}`,
    `${config.siteUrl}${pathUrl(config.basePath, 'tutorials/')}`,
    ...tutorials.map((tutorial) => `${config.siteUrl}${pathUrl(config.basePath, `tutorials/${tutorial.slug}/`)}`),
    ...entries.map((entry) => `${config.siteUrl}${pathUrl(config.basePath, `posts/${entry.slug}/`)}`),
  ].join('\n');
  await writeFile(path.join(DIST_DIR, 'sitemap.txt'), `${sitemap}\n`);
  await writeFile(path.join(DIST_DIR, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}${pathUrl(config.basePath, 'sitemap.txt')}\n`);
  console.log(`Built ${entries.length} published ${entries.length === 1 ? 'entry' : 'entries'} in ${DIST_DIR}`);
}

await build();
