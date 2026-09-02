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
let activeMonth = '';
let activeTag = '';
let query = '';

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

function setDrawer(open) {
  drawer?.classList.toggle('is-open', open);
  drawerScrim?.classList.toggle('is-open', open);
  if (drawerScrim) drawerScrim.tabIndex = open ? 0 : -1;
}

document.querySelectorAll('[data-open-drawer]').forEach((button) => button.addEventListener('click', () => setDrawer(true)));
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
