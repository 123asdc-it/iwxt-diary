const token = document.querySelector('meta[name="writer-token"]')?.content || '';
const form = document.querySelector('[data-editor-form]');
const fields = Object.fromEntries([...form.elements].filter((element) => element.name).map((element) => [element.name, element]));
const entryList = document.querySelector('[data-entry-list]');
const entryCount = document.querySelector('[data-entry-count]');
const message = document.querySelector('[data-message]');
const errorBox = document.querySelector('[data-error]');
const removeButton = document.querySelector('[data-remove-entry]');
const coverPreview = document.querySelector('[data-cover-preview]');
const coverSelect = document.querySelector('[data-cover-select]');
let entries = [];
let dirty = false;

function localDate() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Writer-Token': token,
      ...(options.headers || {}),
    },
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || '操作失败，请稍后再试。');
  return payload;
}

function setMessage(text, tone = '') {
  message.textContent = text;
  message.dataset.tone = tone;
}

function setError(text = '') {
  errorBox.textContent = text;
  errorBox.hidden = !text;
}

function updateCover() {
  coverPreview.src = `/${coverSelect.value}`;
}

function currentPayload(status) {
  return {
    slug: fields.slug.value,
    title: fields.title.value,
    date: fields.date.value,
    tags: fields.tags.value.split(/[，,]/).map((tag) => tag.trim()).filter(Boolean),
    summary: fields.summary.value,
    cover: fields.cover.value,
    content: fields.content.value,
    status,
  };
}

function renderList() {
  entryCount.textContent = `${entries.length} 篇`;
  entryList.replaceChildren();
  if (!entries.length) {
    const empty = document.createElement('p');
    empty.className = 'list-empty';
    empty.textContent = '还没有日记，写下第一篇吧。';
    entryList.append(empty);
    return;
  }
  entries.forEach((entry) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `entry-item${fields.slug.value === entry.slug ? ' is-active' : ''}`;
    button.dataset.slug = entry.slug;
    const title = document.createElement('strong');
    title.textContent = entry.title;
    const meta = document.createElement('span');
    meta.textContent = `${entry.date} · ${entry.status === 'draft' ? '草稿' : '已发布'}`;
    button.append(title, meta);
    button.addEventListener('click', () => selectEntry(entry));
    entryList.append(button);
  });
}

function resetEditor() {
  form.reset();
  fields.slug.value = '';
  fields.date.value = localDate();
  fields.cover.value = 'romanticism/covers/1.webp';
  document.querySelector('[data-mode-label]').textContent = '新日记';
  document.querySelector('[data-editor-title]').textContent = '写下今天';
  removeButton.hidden = true;
  dirty = false;
  setError();
  updateCover();
  renderList();
  fields.title.focus();
}

function selectEntry(entry) {
  if (dirty && !window.confirm('当前内容还没有保存，确定切换日记吗？')) return;
  fields.slug.value = entry.slug;
  fields.title.value = entry.title;
  fields.date.value = entry.date;
  fields.tags.value = entry.tags.join('，');
  fields.summary.value = entry.summary;
  fields.cover.value = entry.cover;
  fields.content.value = entry.content;
  document.querySelector('[data-mode-label]').textContent = entry.status === 'draft' ? '编辑草稿' : '编辑已发布日记';
  document.querySelector('[data-editor-title]').textContent = entry.title;
  removeButton.hidden = false;
  dirty = false;
  setError();
  updateCover();
  renderList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function reloadEntries(selectSlug = '') {
  const result = await api('/api/posts');
  entries = result.entries;
  coverSelect.replaceChildren(...result.covers.map((cover, index) => {
    const option = document.createElement('option');
    option.value = cover;
    option.textContent = index === 0 ? 'Romanticism 欢迎封面' : `主题封面 ${index}`;
    return option;
  }));
  if (selectSlug) {
    const selected = entries.find((entry) => entry.slug === selectSlug);
    if (selected) selectEntry(selected);
    else resetEditor();
  } else {
    resetEditor();
  }
  setMessage('内容只保存在这台电脑上。');
}

async function save(status, publish = false) {
  if (!form.reportValidity()) return;
  setError();
  setMessage(publish ? '正在生成并推送网站…' : '正在保存…');
  try {
    const result = await api(publish ? '/api/publish' : '/api/entries', {
      method: 'POST',
      body: JSON.stringify(currentPayload(status)),
    });
    dirty = false;
    await reloadEntries(result.entry.slug);
    setMessage(result.message, result.pushed === false ? 'warning' : 'success');
  } catch (error) {
    setError(error instanceof Error ? error.message : '保存失败。');
    setMessage('这次操作没有完成。', 'error');
  }
}

form.addEventListener('input', () => { dirty = true; });
form.addEventListener('submit', (event) => { event.preventDefault(); void save('published', true); });
document.querySelector('[data-save-draft]').addEventListener('click', () => { void save('draft'); });
document.querySelector('[data-new-entry]').addEventListener('click', () => {
  if (!dirty || window.confirm('当前内容还没有保存，确定新建日记吗？')) resetEditor();
});
coverSelect.addEventListener('change', updateCover);

document.querySelector('[data-build-preview]').addEventListener('click', async () => {
  setMessage('正在重新生成预览…');
  try {
    const result = await api('/api/build', { method: 'POST', body: '{}' });
    setMessage(result.message, 'success');
  } catch (error) {
    setError(error instanceof Error ? error.message : '生成失败。');
  }
});

removeButton.addEventListener('click', async () => {
  const slug = fields.slug.value;
  if (!slug || !window.confirm(`确定把《${fields.title.value}》移到回收目录吗？`)) return;
  setMessage('正在移动日记…');
  try {
    const result = await api(`/api/entries/${encodeURIComponent(slug)}`, { method: 'DELETE' });
    dirty = false;
    await reloadEntries();
    setMessage(result.message, 'success');
  } catch (error) {
    setError(error instanceof Error ? error.message : '移动失败。');
  }
});

window.addEventListener('beforeunload', (event) => {
  if (!dirty) return;
  event.preventDefault();
  event.returnValue = '';
});

void reloadEntries().catch((error) => {
  setError(error instanceof Error ? error.message : '无法读取本地日记。');
  setMessage('本地写作服务未准备好。', 'error');
});
