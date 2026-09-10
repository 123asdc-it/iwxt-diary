const site = document.querySelector('[data-site]');
const drawer = document.querySelector('[data-drawer]');
const drawerScrim = document.querySelector('.drawer-scrim');
const searchOverlay = document.querySelector('[data-search-overlay]');
const searchInput = document.querySelector('[data-search-input]');
const cards = [...document.querySelectorAll('[data-entry-card]')];
const filterNotice = document.querySelector('[data-filter-notice]');
const filterLabel = document.querySelector('[data-filter-label]');
const emptyCard = document.querySelector('[data-empty-card]');
const resultCount = document.querySelector('[data-result-count]');
const themeKey = 'iwxt-romanticism-theme';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let activeMonth = '';
let activeTag = '';
let query = '';

function prepareHeroTitle() {
  if (reducedMotion.matches) return;
  document.querySelectorAll('[data-hero-copy] h1').forEach((title) => {
    const text = title.textContent || '';
    if (!text.trim()) return;
    title.setAttribute('aria-label', text);
    title.textContent = '';
    [...text].forEach((character, index) => {
      const span = document.createElement('span');
      span.className = 'hero-title-character';
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--character-index', String(index));
      span.textContent = character === ' ' ? '\u00a0' : character;
      title.append(span);
    });
  });
}

prepareHeroTitle();
if (!reducedMotion.matches) {
  requestAnimationFrame(() => site?.classList.add('motion-ready'));
}

const scrollProgress = document.querySelector('[data-scroll-progress]');
const backToTop = document.querySelector('[data-back-to-top]');
const appbar = document.querySelector('.romanticism-appbar');
let scrollTicking = false;

function updateScrollEffects() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, scrollTop / scrollRange));
  scrollProgress?.style.setProperty('--scroll-progress', String(progress));
  backToTop?.classList.toggle('is-visible', scrollTop > 240);
  appbar?.classList.toggle('is-scrolled', scrollTop > 24);
  scrollTicking = false;
}

function requestScrollEffects() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(updateScrollEffects);
}

window.addEventListener('scroll', requestScrollEffects, { passive: true });
window.addEventListener('resize', requestScrollEffects, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' }));
updateScrollEffects();

const revealTargets = [...document.querySelectorAll('[data-reveal]')];
if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  revealTargets.forEach((target) => target.classList.add('is-revealed'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealTargets.forEach((target) => revealObserver.observe(target));
}

if (finePointer.matches && !reducedMotion.matches) {
  let pointerFrame = 0;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      site?.style.setProperty('--pointer-x', `${pointerX}px`);
      site?.style.setProperty('--pointer-y', `${pointerY}px`);
      pointerFrame = 0;
    });
  }, { passive: true });

  document.querySelectorAll('[data-hero]').forEach((hero) => {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty('--hero-pan-x', `${x * 12}px`);
      hero.style.setProperty('--hero-pan-y', `${y * 10}px`);
      hero.style.setProperty('--hero-copy-x', `${x * -8}px`);
      hero.style.setProperty('--hero-copy-y', `${y * -6}px`);
    });
    hero.addEventListener('pointerleave', () => {
      hero.style.removeProperty('--hero-pan-x');
      hero.style.removeProperty('--hero-pan-y');
      hero.style.removeProperty('--hero-copy-x');
      hero.style.removeProperty('--hero-copy-y');
    });
  });

  document.querySelectorAll('[data-tilt-card]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      card.style.setProperty('--card-rotate-x', `${(0.5 - y) * 3.4}deg`);
      card.style.setProperty('--card-rotate-y', `${(x - 0.5) * 4.4}deg`);
      card.style.setProperty('--card-light-x', `${x * 100}%`);
      card.style.setProperty('--card-light-y', `${y * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--card-rotate-x');
      card.style.removeProperty('--card-rotate-y');
      card.style.removeProperty('--card-light-x');
      card.style.removeProperty('--card-light-y');
    });
  });
}

function applyTheme(dark) {
  site?.classList.toggle('is-dark', dark);
  const toggle = document.querySelector('[data-theme-toggle]');
  toggle?.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
}

applyTheme(localStorage.getItem(themeKey) === 'dark');

document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
  const dark = !site?.classList.contains('is-dark');
  localStorage.setItem(themeKey, dark ? 'dark' : 'light');
  applyTheme(dark);
});

const codeLanguageNames = new Map([
  ['bash', 'Shell'],
  ['c', 'C'],
  ['cpp', 'C++'],
  ['cs', 'C#'],
  ['csharp', 'C#'],
  ['css', 'CSS'],
  ['go', 'Go'],
  ['html', 'HTML'],
  ['java', 'Java'],
  ['javascript', 'JavaScript'],
  ['js', 'JavaScript'],
  ['json', 'JSON'],
  ['kotlin', 'Kotlin'],
  ['markdown', 'Markdown'],
  ['md', 'Markdown'],
  ['plaintext', '纯文本'],
  ['py', 'Python'],
  ['python', 'Python'],
  ['rust', 'Rust'],
  ['sh', 'Shell'],
  ['shell', 'Shell'],
  ['sql', 'SQL'],
  ['swift', 'Swift'],
  ['text', '纯文本'],
  ['ts', 'TypeScript'],
  ['typescript', 'TypeScript'],
  ['xml', 'XML'],
]);

function codeLanguageLabel(code) {
  const languageClass = [...code.classList].find((name) => name.startsWith('language-'));
  if (!languageClass) return '代码';
  const language = languageClass.slice('language-'.length).toLowerCase();
  return codeLanguageNames.get(language) || language.toUpperCase();
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const input = document.createElement('textarea');
  input.value = text;
  input.setAttribute('readonly', '');
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.append(input);
  input.select();
  const copied = document.execCommand('copy');
  input.remove();
  if (!copied) throw new Error('浏览器不允许复制。');
}

document.querySelectorAll('.markdown-body pre > code').forEach((code) => {
  const pre = code.parentElement;
  if (!pre || pre.closest('.code-block')) return;
  const block = document.createElement('figure');
  block.className = 'code-block';
  const toolbar = document.createElement('figcaption');
  toolbar.className = 'code-block-toolbar';
  const language = document.createElement('span');
  language.className = 'code-block-language';
  language.textContent = codeLanguageLabel(code);
  const copyButton = document.createElement('button');
  copyButton.className = 'code-copy-button';
  copyButton.type = 'button';
  copyButton.setAttribute('aria-label', '复制代码');
  copyButton.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="13" height="13" x="9" y="9" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg><span>复制</span>';
  const buttonLabel = copyButton.querySelector('span');
  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    try {
      await copyText((code.textContent || '').replace(/\n$/, ''));
      copyButton.dataset.state = 'copied';
      copyButton.setAttribute('aria-label', '代码已复制');
      if (buttonLabel) buttonLabel.textContent = '已复制';
    } catch {
      copyButton.dataset.state = 'failed';
      copyButton.setAttribute('aria-label', '复制失败');
      if (buttonLabel) buttonLabel.textContent = '复制失败';
    }
    window.setTimeout(() => {
      delete copyButton.dataset.state;
      copyButton.disabled = false;
      copyButton.setAttribute('aria-label', '复制代码');
      if (buttonLabel) buttonLabel.textContent = '复制';
    }, 1600);
  });
  pre.tabIndex = 0;
  pre.replaceWith(block);
  toolbar.append(language, copyButton);
  block.append(toolbar, pre);
});

function hydrateDrawerImages() {
  const cover = drawer?.querySelector('[data-drawer-cover-image]');
  if (!cover || cover.dataset.imagesLoaded === 'true') return;
  const coverImage = cover.dataset.drawerCoverImage;
  const avatarImage = cover.dataset.drawerAvatarImage;
  if (coverImage) cover.style.setProperty('--drawer-cover', `url(${JSON.stringify(coverImage)})`);
  if (avatarImage) cover.style.setProperty('--drawer-avatar', `url(${JSON.stringify(avatarImage)})`);
  cover.dataset.imagesLoaded = 'true';
}

function setDrawer(open) {
  if (open) hydrateDrawerImages();
  drawer?.classList.toggle('is-open', open);
  drawerScrim?.classList.toggle('is-open', open);
  if (drawerScrim) drawerScrim.tabIndex = open ? 0 : -1;
}

document.querySelectorAll('[data-open-drawer]').forEach((button) => {
  button.addEventListener('pointerenter', hydrateDrawerImages, { once: true });
  button.addEventListener('focus', hydrateDrawerImages, { once: true });
  button.addEventListener('click', () => setDrawer(true));
});
document.querySelectorAll('[data-close-drawer]').forEach((button) => button.addEventListener('click', () => setDrawer(false)));

function updateHash() {
  const params = new URLSearchParams();
  if (activeMonth) params.set('month', activeMonth);
  if (activeTag) params.set('tag', activeTag);
  if (query) params.set('q', query);
  const next = params.toString();
  history.replaceState(null, '', `${location.pathname}${location.search}${next ? `#${next}` : ''}`);
}

function applyFilters() {
  const normalized = query.trim().toLocaleLowerCase('zh-CN');
  let visible = 0;
  cards.forEach((card) => {
    const matchesMonth = !activeMonth || card.dataset.month === activeMonth;
    const matchesTag = !activeTag || (card.dataset.tags || '').split('|').includes(activeTag);
    const matchesQuery = !normalized || (card.dataset.search || '').includes(normalized);
    const show = matchesMonth && matchesTag && matchesQuery;
    card.hidden = !show;
    if (show) visible += 1;
  });
  if (resultCount) resultCount.textContent = String(visible);
  if (emptyCard) emptyCard.hidden = visible !== 0;
  const filtering = Boolean(activeMonth || activeTag || normalized);
  if (filterNotice) filterNotice.hidden = !filtering;
  if (filterLabel) filterLabel.textContent = `正在查看：${activeTag ? `#${activeTag}` : activeMonth || `“${query}”`}`;
  document.querySelectorAll('[data-tag-filter]').forEach((button) => button.classList.toggle('is-active', button.dataset.tagFilter === activeTag));
  updateHash();
}

function clearFilters() {
  activeMonth = '';
  activeTag = '';
  query = '';
  if (searchInput) searchInput.value = '';
  applyFilters();
}

document.querySelectorAll('[data-clear-filter]').forEach((button) => button.addEventListener('click', clearFilters));
document.querySelectorAll('[data-tag-filter]').forEach((button) => button.addEventListener('click', () => {
  activeTag = button.dataset.tagFilter || '';
  activeMonth = '';
  applyFilters();
  if (searchOverlay) searchOverlay.hidden = true;
}));

document.querySelector('[data-toggle-filter]')?.addEventListener('click', (event) => {
  event.currentTarget.closest('.floating-filter')?.classList.toggle('is-open');
});

function openSearch() {
  if (!searchOverlay) return;
  searchOverlay.hidden = false;
  requestAnimationFrame(() => searchInput?.focus());
}

function closeSearch() {
  if (searchOverlay) searchOverlay.hidden = true;
}

document.querySelectorAll('[data-open-search]').forEach((button) => button.addEventListener('click', openSearch));
document.querySelectorAll('[data-close-search]').forEach((button) => button.addEventListener('click', closeSearch));
document.querySelector('[data-search-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  query = searchInput?.value || '';
  activeMonth = '';
  activeTag = '';
  applyFilters();
  closeSearch();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setDrawer(false);
    closeSearch();
  }
});

if (cards.length) {
  const params = new URLSearchParams(location.hash.slice(1));
  activeMonth = params.get('month') || '';
  activeTag = params.get('tag') || '';
  query = params.get('q') || '';
  if (searchInput) searchInput.value = query;
  applyFilters();
  if (params.get('search') === '1') openSearch();
}
