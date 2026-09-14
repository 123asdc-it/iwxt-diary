import {
  ALGORITHM_ROUTE,
  ALGORITHM_SOURCE_URL,
  CET6_NEW_END,
  CMC_CHAPTERS,
  CMC_SOURCE_URL,
  addDays,
  addMonths,
  checkinStats,
  eventCountdowns,
  exportCheckinState,
  importCheckinState,
  isDate,
  loadCheckinState,
  makeCustomTask,
  monthCalendar,
  rescheduleCmc,
  setCmcCatalog,
  storeCheckinState,
  todayRemaining,
} from './checkin-model.js';

const root = document.querySelector('[data-checkin-app]');

if (root) {
  const catalogNode = document.querySelector('#cmc-course-catalog');
  if (catalogNode?.textContent) setCmcCatalog(JSON.parse(catalogNode.textContent));
  const weekday = new Intl.DateTimeFormat('zh-CN', { weekday: 'long' });
  const readableDate = new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  const localToday = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  function readState() {
    return loadCheckinState(localStorage);
  }

  let state = readState();
  let selectedDate = localToday();
  let calendarMonth = selectedDate.slice(0, 7);
  let saveTimer = 0;

  function status(message, tone = 'saved') {
    const notice = root.querySelector('[data-checkin-status]');
    if (!notice) return;
    notice.textContent = message;
    notice.dataset.tone = tone;
  }

  function saveState(message = '已保存在此浏览器') {
    state.updatedAt = new Date().toISOString();
    try {
      state = storeCheckinState(localStorage, state);
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => status(message), 80);
    } catch {
      status('保存失败：浏览器存储空间不足或被禁用', 'error');
    }
  }

  function selectedDay() {
    if (!state.days[selectedDate]) state.days[selectedDate] = { tasks: [] };
    return state.days[selectedDate];
  }

  function findTask(id) {
    return selectedDay().tasks.find((task) => task.id === id);
  }

  function setPath(object, path, value) {
    const parts = path.split('.');
    let cursor = object;
    for (const part of parts.slice(0, -1)) {
      if (!cursor[part] || typeof cursor[part] !== 'object') cursor[part] = {};
      cursor = cursor[part];
    }
    cursor[parts.at(-1)] = value;
  }

  function dateObject(date) {
    return new Date(`${date}T12:00:00`);
  }

  function categoryLabel(kind) {
    return ({ cmc: 'CMC', algorithm: '算法', cet6: '六级', contest: '周赛', sprint: '百度冲刺', review: '复盘', other: '其他' })[kind] || '其他';
  }

  function ensureTaskKind(task) {
    if (task.kind === 'algorithm' && !task.algorithm) {
      task.algorithm = { topic: '滑动窗口与双指针', section: '用户补充', number: '', title: '', url: '', rating: '', premium: false, optional: false, secondPass: false, independentStart: '', viewedHint: false, reproduced: false, nextDayRewrite: false, wrongReason: '', reviewDate: addDays(selectedDate, 1) };
    }
    if (task.kind === 'cet6' && !task.cet6) {
      const newWords = selectedDate <= CET6_NEW_END;
      task.cet6 = { phase: newWords ? 'new' : 'review', wordsTarget: newWords ? 100 : 1000, wordsActual: 0, practiceType: newWords ? '' : '听力', practiceCount: 0 };
    }
    if (task.kind === 'contest' && !task.contest) task.contest = { solvedIndependently: 0, blockers: '' };
    if (task.kind === 'sprint' && !task.sprint) task.sprint = { instructions: '', checklist: [], reproducedTarget: 0, reproducedActual: 0, submittedTarget: 0, submittedActual: 0, acceptedActual: 0, blockers: '' };
  }

  function inputField({ id, label, field, value = '', type = 'text', min, max, step, placeholder = '', className = '' }) {
    const attributes = [
      `id="${escapeHtml(id)}"`,
      `type="${type}"`,
      `data-field="${escapeHtml(field)}"`,
      `value="${escapeHtml(value)}"`,
      placeholder ? `placeholder="${escapeHtml(placeholder)}"` : '',
      min !== undefined ? `min="${min}"` : '',
      max !== undefined ? `max="${max}"` : '',
      step !== undefined ? `step="${step}"` : '',
    ].filter(Boolean).join(' ');
    return `<label class="checkin-field ${className}" for="${escapeHtml(id)}"><span>${escapeHtml(label)}</span><input ${attributes}></label>`;
  }

  function checkbox(id, label, field, checked, emphasis = false) {
    return `<label class="checkin-toggle${emphasis ? ' is-emphasis' : ''}" for="${escapeHtml(id)}"><input id="${escapeHtml(id)}" type="checkbox" data-field="${escapeHtml(field)}"${checked ? ' checked' : ''}><span aria-hidden="true"></span><b>${escapeHtml(label)}</b></label>`;
  }

  function algorithmDetails(task, fieldId) {
    const algorithm = task.algorithm || {};
    const badges = [
      algorithm.rating ? `${algorithm.rating} 分` : '暂无难度分',
      algorithm.premium ? '会员题' : '非会员',
      algorithm.secondPass ? '二刷 / 以后' : '第一轮',
    ];
    return `<div class="algorithm-trail" aria-label="算法题单层级"><span>${escapeHtml(algorithm.topic || '未设专题')}</span><i>→</i><span>${escapeHtml(algorithm.section || '未设小节')}</span><i>→</i><strong>${escapeHtml(algorithm.number || '?')} ${escapeHtml(algorithm.title || '')}</strong></div>
<div class="task-badges">${badges.map((badge) => `<span>${escapeHtml(badge)}</span>`).join('')}</div>
<details class="task-details"${task.completed || algorithm.reproduced ? ' open' : ''}>
  <summary>题目记录与复现证据</summary>
  <div class="checkin-fields two-columns">
    ${inputField({ id: `${fieldId}-topic`, label: '专题', field: 'algorithm.topic', value: algorithm.topic })}
    ${inputField({ id: `${fieldId}-section`, label: '小节', field: 'algorithm.section', value: algorithm.section })}
    ${inputField({ id: `${fieldId}-number`, label: '题号', field: 'algorithm.number', value: algorithm.number })}
    ${inputField({ id: `${fieldId}-rating`, label: '难度分（若有）', field: 'algorithm.rating', value: algorithm.rating, type: 'number', min: 0, max: 5000 })}
    ${inputField({ id: `${fieldId}-title`, label: '题名', field: 'algorithm.title', value: algorithm.title, className: 'span-two' })}
    ${inputField({ id: `${fieldId}-url`, label: 'LeetCode 链接', field: 'algorithm.url', value: algorithm.url, type: 'url', className: 'span-two' })}
    ${inputField({ id: `${fieldId}-start`, label: '独立思考开始时间', field: 'algorithm.independentStart', value: algorithm.independentStart, type: 'datetime-local' })}
    ${inputField({ id: `${fieldId}-review`, label: '复习日期', field: 'algorithm.reviewDate', value: algorithm.reviewDate, type: 'date' })}
  </div>
  <div class="checkin-toggle-row">
    ${checkbox(`${fieldId}-hint`, '看过提示 / 题解', 'algorithm.viewedHint', algorithm.viewedHint)}
    ${checkbox(`${fieldId}-reproduced`, '关掉题解后已复现', 'algorithm.reproduced', algorithm.reproduced, true)}
    ${checkbox(`${fieldId}-rewrite`, '次日已重写', 'algorithm.nextDayRewrite', algorithm.nextDayRewrite)}
    ${checkbox(`${fieldId}-premium`, '会员题', 'algorithm.premium', algorithm.premium)}
    ${checkbox(`${fieldId}-optional`, '选做 / 进阶', 'algorithm.optional', algorithm.optional)}
    ${checkbox(`${fieldId}-second`, '放入二刷池', 'algorithm.secondPass', algorithm.secondPass)}
  </div>
  <label class="checkin-field" for="${fieldId}-wrong"><span>错因 / 卡点</span><textarea id="${fieldId}-wrong" rows="3" data-field="algorithm.wrongReason" placeholder="例如：边界条件、C++ 语法、窗口何时收缩……">${escapeHtml(algorithm.wrongReason)}</textarea></label>
  ${algorithm.url ? `<a class="task-external-link" href="${escapeHtml(algorithm.url)}" target="_blank" rel="noreferrer noopener">打开这道题 ↗</a>` : ''}
</details>`;
  }

  function cetDetails(task, fieldId) {
    const cet6 = task.cet6 || {};
    const practiceOptions = ['', '听力', '阅读', '翻译', '写作'].map((type) => `<option value="${type}"${cet6.practiceType === type ? ' selected' : ''}>${type || '未选择题型'}</option>`).join('');
    return `<div class="checkin-fields two-columns compact-fields">
  ${inputField({ id: `${fieldId}-words`, label: cet6.phase === 'new' ? '实际新词数' : '实际复习词数', field: 'cet6.wordsActual', value: cet6.wordsActual, type: 'number', min: 0, max: 10000 })}
  ${cet6.phase === 'review' ? `<label class="checkin-field" for="${fieldId}-practice"><span>刷题类型</span><select id="${fieldId}-practice" data-field="cet6.practiceType">${practiceOptions}</select></label>${inputField({ id: `${fieldId}-count`, label: '完成题 / 篇数', field: 'cet6.practiceCount', value: cet6.practiceCount, type: 'number', min: 0, max: 100 })}` : ''}
</div>`;
  }

  function cmcDetails(task, fieldId) {
    if (!task.cmc?.lessons?.length) return '';
    const lessonRows = task.cmc.lessons.map((lesson, index) => {
      const prefix = `cmc.lessons.${index}`;
      const lessonId = `${fieldId}-lesson-${lesson.number}`;
      const gradeOptions = ['', 'A', 'B', 'C'].map((grade) => `<option value="${grade}"${lesson.grade === grade ? ' selected' : ''}>${grade || '未分级'}${grade === 'A' ? ' · 独立完成' : grade === 'B' ? ' · 提示后会' : grade === 'C' ? ' · 仍不会' : ''}</option>`).join('');
      return `<article class="cmc-lesson${lesson.reproduced ? ' is-reproduced' : ''}">
  <div class="cmc-lesson-heading"><b>第 ${lesson.number} 课</b><span>${escapeHtml(lesson.title || '课程标题')}</span><small>${escapeHtml(lesson.duration || '时长待核对')}</small></div>
  <p>${escapeHtml(lesson.chapter)}</p>
  <div class="checkin-toggle-row">
    ${checkbox(`${lessonId}-watched`, '已观看', `${prefix}.watched`, lesson.watched)}
    ${checkbox(`${lessonId}-conditions`, '适用条件 + 第一反应已写', `${prefix}.conditionsWritten`, lesson.conditionsWritten)}
    ${checkbox(`${lessonId}-reproduced`, '关视频复现', `${prefix}.reproduced`, lesson.reproduced, true)}
  </div>
  <div class="checkin-fields two-columns compact-fields">
    <label class="checkin-field" for="${lessonId}-grade"><span>卡点分级</span><select id="${lessonId}-grade" data-field="${prefix}.grade">${gradeOptions}</select></label>
    ${inputField({ id: `${lessonId}-minutes`, label: '本课实际用时（分钟）', field: `${prefix}.actualMinutes`, value: lesson.actualMinutes, type: 'number', min: 0, max: 1440 })}
    <label class="checkin-field span-two" for="${lessonId}-recall"><span>次日回忆 / 重做状态</span><textarea id="${lessonId}-recall" rows="2" data-field="${prefix}.recall" placeholder="B / C 优先重做，不必重看整段视频">${escapeHtml(lesson.recall)}</textarea></label>
  </div>
</article>`;
    }).join('');
    return `<p class="cmc-guidance">${escapeHtml(task.cmc.guidance)}</p>
<details class="task-details cmc-details"${task.completed ? ' open' : ''}>
  <summary>展开 ${task.cmc.lessons.length} 节课程记录</summary>
  <div class="cmc-lesson-list">${lessonRows}</div>
</details>`;
  }

  function contestDetails(task, fieldId) {
    const contest = task.contest || {};
    return `<div class="checkin-fields two-columns compact-fields">
  ${inputField({ id: `${fieldId}-solved`, label: '独立做出题数', field: 'contest.solvedIndependently', value: contest.solvedIndependently, type: 'number', min: 0, max: 10 })}
  <label class="checkin-field span-two" for="${fieldId}-blockers"><span>每题卡点</span><textarea id="${fieldId}-blockers" rows="3" data-field="contest.blockers" placeholder="只记录独立做出数和关键卡点">${escapeHtml(contest.blockers)}</textarea></label>
</div>`;
  }

  function sprintDetails(task, fieldId) {
    const sprint = task.sprint || {};
    const checks = (sprint.checklist || []).map((item, index) => checkbox(
      `${fieldId}-sprint-check-${index}`,
      item.label,
      `sprint.checklist.${index}.done`,
      item.done,
      true,
    )).join('');
    return `<div class="sprint-brief"><strong>执行卡</strong><p>${escapeHtml(sprint.instructions || '按时间完成并留下可核验记录。')}</p></div>
${checks ? `<div class="checkin-toggle-row sprint-checklist">${checks}</div>` : ''}
<div class="checkin-fields sprint-metrics">
  ${Number(sprint.reproducedTarget) > 0 ? inputField({ id: `${fieldId}-reproduced`, label: `关掉题解后独立复现（目标 ${sprint.reproducedTarget}）`, field: 'sprint.reproducedActual', value: sprint.reproducedActual, type: 'number', min: 0, max: 20 }) : ''}
  ${Number(sprint.submittedTarget) > 0 ? inputField({ id: `${fieldId}-submitted`, label: `认真提交（目标 ${sprint.submittedTarget}）`, field: 'sprint.submittedActual', value: sprint.submittedActual, type: 'number', min: 0, max: 20 }) : ''}
  ${inputField({ id: `${fieldId}-accepted`, label: 'AC 数（模拟 / 正式赛可填）', field: 'sprint.acceptedActual', value: sprint.acceptedActual, type: 'number', min: 0, max: 20 })}
  <label class="checkin-field span-two" for="${fieldId}-sprint-blockers"><span>未过题 / 错因 / 卡点</span><textarea id="${fieldId}-sprint-blockers" rows="3" data-field="sprint.blockers" placeholder="不需要编造题号，只记录自己遇到的关键卡点">${escapeHtml(sprint.blockers)}</textarea></label>
</div>`;
  }

  function taskCard(task, index) {
    const fieldId = `task-${index}-${task.id.replace(/[^a-z0-9-]/gi, '-')}`;
    const detail = task.kind === 'algorithm'
      ? algorithmDetails(task, fieldId)
      : task.kind === 'cmc'
        ? cmcDetails(task, fieldId)
      : task.kind === 'cet6'
        ? cetDetails(task, fieldId)
        : task.kind === 'contest'
          ? contestDetails(task, fieldId)
          : task.kind === 'sprint'
            ? sprintDetails(task, fieldId)
          : '';
    const custom = task.id.includes('-custom-');
    const kindControl = custom
      ? `<select class="task-kind task-kind-select kind-${escapeHtml(task.kind)}" data-field="kind" aria-label="任务类别">${['other', 'cmc', 'algorithm', 'cet6', 'contest', 'sprint', 'review'].map((kind) => `<option value="${kind}"${task.kind === kind ? ' selected' : ''}>${categoryLabel(kind)}</option>`).join('')}</select>`
      : `<span class="task-kind kind-${escapeHtml(task.kind)}">${escapeHtml(categoryLabel(task.kind))}</span>`;
    return `<article class="checkin-task${task.completed ? ' is-checked' : ''}${task.planExcluded ? ' is-plan-excluded' : ''}" data-task-id="${escapeHtml(task.id)}">
  <div class="task-check-column">
    <label class="task-main-check" for="${fieldId}-done"><input id="${fieldId}-done" type="checkbox" data-field="completed"${task.completed ? ' checked' : ''}><span aria-hidden="true"></span><b>${task.completed ? '已打卡' : '打卡'}</b></label>
  </div>
  <div class="task-body">
    <div class="task-heading">
      ${kindControl}
      <input class="task-time" aria-label="计划时间" type="time" data-field="time" value="${escapeHtml(task.time)}">
      <input class="task-title-input" aria-label="任务名称" data-field="title" value="${escapeHtml(task.title)}">
      ${custom ? '<button class="task-remove" type="button" data-action="remove-task" aria-label="移除这个自定义任务">移除</button>' : ''}
    </div>
    ${task.planExcluded ? `<p class="plan-excluded-note">${escapeHtml(task.planNote || '旧计划记录已保留，但不计入当前计划。')}</p>` : ''}
    ${detail}
    <div class="task-record-row">
      ${inputField({ id: `${fieldId}-minutes`, label: '实际用时（分钟）', field: 'actualMinutes', value: task.actualMinutes, type: 'number', min: 0, max: 1440 })}
      <label class="checkin-field task-note" for="${fieldId}-note"><span>备注</span><textarea id="${fieldId}-note" rows="2" data-field="note" placeholder="今天做到了什么、哪里要调整">${escapeHtml(task.note)}</textarea></label>
    </div>
  </div>
</article>`;
  }

  function renderStats() {
    const stats = checkinStats(state, selectedDate);
    const cmcWeekHours = (stats.cmcWeeklyMinutes / 60).toFixed(1).replace('.0', '');
    const cmcTotalHours = (stats.cmcTotalMinutes / 60).toFixed(1).replace('.0', '');
    const phaseIsNew = stats.target.newWords > 0;
    const sprintWeek = stats.target.sprintTasks > 0;
    const values = {
      'primary-label': sprintWeek ? '百度之星 · 冲刺周' : 'CMC · 本周',
      'cmc-week': sprintWeek ? `${stats.sprintCompleted} / ${stats.sprintTaskTotal} 项` : `${cmcWeekHours} / ${stats.target.cmcMinutes ? '8.5' : '—'} h`,
      'cmc-total': sprintWeek ? '本周 CMC 暂停，赛后恢复' : `累计 ${cmcTotalHours} / 60 h`,
      'cmc-mastery': sprintWeek ? `独立复现 ${stats.sprintReproduced}/${stats.target.sprintReproductions}` : `观看 ${stats.cmcWatchedLessons}/${stats.cmcLessonTotal} · 复现 ${stats.cmcReproducedLessons}/${stats.cmcLessonTotal}`,
      algorithms: sprintWeek ? `${stats.sprintReproduced} / ${stats.target.sprintReproductions}` : `${stats.algorithmsReproduced} / ${stats.target.algorithms ? '6–8' : '—'}`,
      'cet-label': sprintWeek ? '六级 · 下周恢复' : '六级 · 本周',
      'cet-week': sprintWeek ? '9.21 起' : phaseIsNew ? `${stats.cetWeeklyNew} / ${stats.target.newWords}` : `${stats.cetWeeklyReview} 词`,
      'cet-total': sprintWeek ? '本周暂停，不记欠账' : phaseIsNew ? `新词累计 ${stats.cetNewTotal} / 900` : `本周刷题 ${stats.cetWeeklyPractice} 次`,
      completion: `${stats.completionRate}%`,
      'completion-detail': `${stats.completedTasks} / ${stats.totalTasks} 项有效完成`,
      streak: `${stats.streak} 天`,
      'week-range': `${stats.weekStart.slice(5).replace('-', '.')} — ${stats.weekEnd.slice(5).replace('-', '.')}`,
    };
    for (const [name, value] of Object.entries(values)) {
      root.querySelectorAll(`[data-stat="${name}"]`).forEach((element) => { element.textContent = value; });
    }
    root.querySelectorAll('[data-progress="cmc"]').forEach((element) => {
      const target = sprintWeek ? stats.sprintTaskTotal || 1 : stats.target.cmcMinutes || 510;
      const actual = sprintWeek ? stats.sprintCompleted : stats.cmcWeeklyMinutes;
      element.style.setProperty('--value', `${Math.min(100, (actual / target) * 100)}%`);
    });
    root.querySelectorAll('[data-progress="algorithm"]').forEach((element) => {
      const target = sprintWeek ? stats.target.sprintReproductions || 1 : 6;
      const actual = sprintWeek ? stats.sprintReproduced : stats.algorithmsReproduced;
      element.style.setProperty('--value', `${Math.min(100, (actual / target) * 100)}%`);
    });
    root.querySelectorAll('[data-progress="cet6"]').forEach((element) => {
      const target = sprintWeek ? 1 : phaseIsNew ? stats.target.newWords || 100 : stats.target.reviewWords || 1000;
      const actual = sprintWeek ? 0 : phaseIsNew ? stats.cetWeeklyNew : stats.cetWeeklyReview;
      element.style.setProperty('--value', `${Math.min(100, (actual / target) * 100)}%`);
    });
  }

  function progressLine(label, metric) {
    const hasTarget = metric.target > 0;
    const complete = hasTarget && metric.remaining === 0;
    return `<div class="today-progress-line${complete ? ' is-complete' : ''}">
  <span>${escapeHtml(label)}</span>
  <p>${hasTarget
    ? `目标 <b>${metric.target}${escapeHtml(metric.unit)}</b> · 已完成 <b>${metric.actual}${escapeHtml(metric.unit)}</b>`
    : '今日无安排'}</p>
  <strong>${hasTarget ? (complete ? '已完成' : `还差 ${metric.remaining}${escapeHtml(metric.unit)}`) : '—'}</strong>
</div>`;
  }

  function renderTodayProgress() {
    const today = localToday();
    const progress = todayRemaining(state, today);
    const target = root.querySelector('[data-today-progress]');
    if (!target) return;
    target.innerHTML = progress.sprint.target > 0
      ? progressLine('百度之星冲刺', progress.sprint)
      : `${progressLine('算法', progress.algorithm)}
${progressLine(`CMC · ${progress.cmc.mode === 'lessons' ? '观看课程' : '学习时长'}`, progress.cmc)}
${progressLine(`六级 · ${progress.cet6.wordLabel}`, progress.cet6.words)}
${progressLine('六级 · 刷题', progress.cet6.practice)}`;
    const label = root.querySelector('[data-today-progress-date]');
    if (label) label.textContent = `${today.slice(5).replace('-', '.')} · ${progress.taskCount ? `${progress.taskCount} 项计划` : '当天零任务'}`;
  }

  function renderCalendar() {
    const today = localToday();
    const days = monthCalendar(state, calendarMonth, today);
    const grid = root.querySelector('[data-calendar-grid]');
    const title = root.querySelector('[data-calendar-title]');
    if (title) title.textContent = `${calendarMonth.slice(0, 4)} 年 ${Number(calendarMonth.slice(5))} 月`;
    if (!grid) return;
    const labels = { complete: '全部完成', partial: '部分完成', missed: '未打卡', future: '未来日期', empty: '当天零任务' };
    grid.innerHTML = days.map((day) => `<button type="button" class="calendar-day is-${day.status}${day.inMonth ? '' : ' is-outside'}${day.date === selectedDate ? ' is-selected' : ''}${day.date === today ? ' is-today' : ''}" data-action="select-calendar-day" data-date="${day.date}" aria-label="${day.date} · ${labels[day.status]}" aria-pressed="${day.date === selectedDate}">
  <span>${day.day}</span><i>${labels[day.status]}</i>
</button>`).join('');
  }

  function renderCountdowns() {
    const list = root.querySelector('[data-countdown-list]');
    if (!list) return;
    const events = eventCountdowns(localToday());
    list.innerHTML = events.map((event) => `<article class="countdown-event">
  <header><div><strong>${escapeHtml(event.name)}</strong><small>${escapeHtml(event.subtitle)}</small></div>${event.sourceUrl ? `<a href="${escapeHtml(event.sourceUrl)}" target="_blank" rel="noreferrer noopener" aria-label="查看 ${escapeHtml(event.name)} 日期来源">来源 ↗</a>` : '<span>待公告</span>'}</header>
  <div class="countdown-milestones${event.milestones.length > 3 ? ' is-paired' : ''}">${event.milestones.map((milestone) => `<div class="countdown-milestone is-${milestone.state}">
    <span>${escapeHtml(milestone.label)}</span>
    <b>${milestone.date ? escapeHtml(milestone.date.replaceAll('-', '.')) : milestone.window ? escapeHtml(milestone.window) : '—'}</b>
    <strong>${escapeHtml(milestone.text)}</strong>
    ${milestone.note ? `<small>${escapeHtml(milestone.note)}</small>` : ''}
  </div>`).join('')}</div>
</article>`).join('');
  }

  function renderDay() {
    const tasks = selectedDay().tasks.slice().sort((left, right) => (left.time || '').localeCompare(right.time || ''));
    const date = dateObject(selectedDate);
    const dayTitle = root.querySelector('[data-day-title]');
    const daySubtitle = root.querySelector('[data-day-subtitle]');
    const dateInput = root.querySelector('[data-date-input]');
    if (dayTitle) dayTitle.textContent = `${readableDate.format(date)} · ${weekday.format(date)}`;
    if (daySubtitle) {
      daySubtitle.textContent = selectedDate < '2026-09-14'
        ? '计划还没有开始，你仍然可以在这里补充任务。'
        : selectedDate <= '2026-09-20'
          ? '百度之星冲刺周 · 其他学习主线暂停，9 月 21 日恢复'
        : selectedDate <= CET6_NEW_END
          ? '六级新词阶段 · 每天目标 100 个'
          : selectedDate <= '2026-11-13'
            ? '六级复习阶段 · 1000 词 + 45 分钟刷题'
            : '自由记录阶段';
    }
    if (dateInput) dateInput.value = selectedDate;
    const list = root.querySelector('[data-task-list]');
    if (list) {
      list.innerHTML = tasks.length
        ? tasks.map(taskCard).join('')
        : '<div class="checkin-empty"><strong>今天还没有任务</strong><p>可以补记过去的内容，也可以添加一项新的计划。</p></div>';
    }
    renderStats();
    renderTodayProgress();
    renderCalendar();
  }

  function renderShell() {
    root.innerHTML = `<section class="checkin-focus-grid" aria-label="打卡总览">
  <article class="today-progress-card glass-panel">
    <header class="focus-card-heading"><div><span class="checkin-kicker">TODAY</span><h2>今日还差多少</h2></div><small data-today-progress-date></small></header>
    <div class="today-progress-list" data-today-progress></div>
    <p class="focus-boundary">算法只把“关掉题解后独立复现”计入；9 月 14–20 日只保留百度之星冲刺和固定时点提醒，其他学习主线暂停且不记欠账。</p>
  </article>
  <article class="month-calendar-card glass-panel">
    <header class="focus-card-heading calendar-heading"><div><span class="checkin-kicker">MONTH</span><h2 data-calendar-title></h2></div><div class="calendar-actions"><button type="button" data-action="previous-month" aria-label="上一月">←</button><button type="button" data-action="calendar-today">今天</button><button type="button" data-action="next-month" aria-label="下一月">→</button></div></header>
    <div class="calendar-weekdays" aria-hidden="true"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
    <div class="calendar-grid" data-calendar-grid></div>
    <div class="calendar-legend" aria-label="月历图例"><span class="is-complete">全部完成</span><span class="is-partial">部分完成</span><span class="is-missed">未打卡</span><span class="is-empty">当天零任务</span><span class="is-future">未来</span></div>
  </article>
</section>
<section class="key-dates-card glass-panel" aria-labelledby="key-dates-title">
  <header class="focus-card-heading"><div><span class="checkin-kicker">COUNTDOWN</span><h2 id="key-dates-title">关键日期</h2></div><small>精确日期、官方赛期与预计窗口分开显示</small></header>
  <div class="countdown-list" data-countdown-list></div>
  <p class="focus-boundary">红色：3 天内 · 橙色：7 天内 · 蓝色：30 天内。紫色“预计赛期”只用于规划，不按某一天倒计时；收到学校或主办方通知后再替换。</p>
</section>
<section class="checkin-summary-grid" aria-label="本周概览">
  <article class="checkin-stat glass-panel"><span data-stat="primary-label">CMC · 本周</span><strong data-stat="cmc-week">0 / 8.5 h</strong><small><span data-stat="cmc-total">累计 0 / 60 h</span><br><span data-stat="cmc-mastery">观看 0/0 · 复现 0/0</span></small><i data-progress="cmc"></i></article>
  <article class="checkin-stat glass-panel"><span>算法 · 已复现</span><strong data-stat="algorithms">0 / 6–8</strong><small>看过答案不计入</small><i data-progress="algorithm"></i></article>
  <article class="checkin-stat glass-panel"><span data-stat="cet-label">六级 · 本周</span><strong data-stat="cet-week">0 / 700</strong><small data-stat="cet-total">新词累计 0 / 900</small><i data-progress="cet6"></i></article>
  <article class="checkin-stat glass-panel"><span>有效完成率</span><strong data-stat="completion">0%</strong><small data-stat="completion-detail">0 / 0 项有效完成</small></article>
  <article class="checkin-stat glass-panel"><span>连续达标</span><strong data-stat="streak">0 天</strong><small>当天计划全部有效完成</small></article>
</section>
<section class="checkin-board">
  <div class="checkin-main-column">
    <section class="checkin-day-panel glass-panel">
      <div class="checkin-toolbar">
        <div class="date-stepper" aria-label="切换日期">
          <button type="button" data-action="previous-day" aria-label="前一天">←</button>
          <label for="checkin-date"><span>选择日期</span><input id="checkin-date" type="date" data-date-input></label>
          <button type="button" data-action="next-day" aria-label="后一天">→</button>
        </div>
        <button class="checkin-secondary-button" type="button" data-action="today">回到今天</button>
      </div>
      <header class="checkin-day-heading"><div><span class="checkin-kicker">SELECTED DAY · <b data-stat="week-range"></b></span><h2 data-day-title></h2><p data-day-subtitle></p></div><button class="checkin-primary-button" type="button" data-action="add-task">＋ 添加任务</button></header>
      <div class="checkin-task-list" data-task-list></div>
      <p class="checkin-status" data-checkin-status role="status" aria-live="polite">记录只保存在这个浏览器</p>
    </section>
    <section class="checkin-rules glass-panel">
      <span class="checkin-kicker">执行规则</span><h2>质量优先，不为凑数看答案</h2>
      <div class="rules-grid"><p><b>算法</b>独立思考 25 分钟 → 必要时看提示 / 题解 → 关掉后复现 → 次日重写。模拟赛与正式赛填写 AC 数、未过题和卡点即可。</p><p><b>本周</b>9 月 14–20 日专注百度之星，CMC、日常算法和六级暂停且不记欠账；9 月 17 日普通话预约等固定时点提醒仍保留。</p><p><b>六级</b>9 月 21–29 日每天新词 100；9 月 30 日起每天复习 1000 词，并做 45 分钟听力 / 阅读 / 翻译 / 写作。</p></div>
    </section>
  </div>
  <aside class="checkin-side-column">
    <section class="checkin-side-card glass-panel">
      <span class="checkin-kicker">题单路线</span><h2>专题 → 小节 → 题目</h2>
      <ol class="algorithm-route">${ALGORITHM_ROUTE.map((item) => `<li><b>${item.step}</b><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span></li>`).join('')}</ol>
      <a class="checkin-source-link" href="${ALGORITHM_SOURCE_URL}" target="_blank" rel="noreferrer noopener">查看灵茶题单源页 ↗</a>
      <p class="source-boundary">当前是 2026-09-10 的首月可编辑快照，不会自动同步源页更新。会员题、选做题和第一轮超限题保留位置并进入二刷池。</p>
    </section>
    <section class="checkin-side-card glass-panel">
      <span class="checkin-kicker">学习基线</span><h2>CMC 已有进度</h2>
      <label class="checkin-field" for="cmc-current"><span>当前从第几课开始（1–124）</span><input id="cmc-current" type="number" min="1" max="124" step="1" data-preference="cmcCurrentLesson" value="${escapeHtml(state.preferences.cmcCurrentLesson)}"></label>
      <label class="checkin-field" for="cmc-baseline"><span>开始使用本页前已完成（小时）</span><input id="cmc-baseline" type="number" min="0" max="1000" step="0.5" data-preference="cmcBaselineHours" value="${escapeHtml((state.preferences.cmcBaselineMinutes / 60).toFixed(1).replace('.0', ''))}"></label>
      <p>初始建议值是 6，但截图中的播放状态不能证明第 1–5 课已完成。改成 1 会把后续课时按时间块重新顺排；已有同课号记录会保留。</p>
    </section>
    <section class="checkin-side-card glass-panel">
      <span class="checkin-kicker">CMC 课程目录</span><h2>124 课 · 58:11:46</h2>
      <p>《大学生数学竞赛课程（全新第二代）》目录快照。只记录标题与时长，不抓取、不保存付费视频，也不代表课程已观看。</p>
      <details class="course-outline"><summary>查看 13 个章节</summary><div>${CMC_CHAPTERS.map(([range, title, summary]) => `<p><b>${range}</b><span>${escapeHtml(title)}</span><small>${escapeHtml(summary)}</small></p>`).join('')}</div></details>
      <a class="checkin-source-link" href="${CMC_SOURCE_URL}" target="_blank" rel="noreferrer noopener">打开课程页 ↗</a>
    </section>
    <section class="checkin-side-card glass-panel">
      <span class="checkin-kicker">本地备份</span><h2>导出 / 导入 JSON</h2>
      <p>记录只在当前浏览器中。清理网站数据、换浏览器或换设备前，请先导出备份。</p>
      <div class="backup-actions"><button class="checkin-primary-button" type="button" data-action="export">导出备份</button><button class="checkin-secondary-button" type="button" data-action="open-import">导入并覆盖</button><input type="file" accept="application/json,.json" data-import-input hidden></div>
    </section>
    <section class="checkin-side-card syntax-suggestion glass-panel">
      <span class="checkin-kicker">周复盘提示</span><h2>C++ 卡点不等于失败</h2><p>如果 1456 和 643 主要卡在函数签名、vector / string 遍历或库函数，而不是滑窗思想，可以先切到官方「新」动计划 20 题，再回来继续。</p>
    </section>
  </aside>
</section>`;
    renderDay();
    renderCountdowns();
  }

  root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'previous-day') {
      selectedDate = addDays(selectedDate, -1);
      calendarMonth = selectedDate.slice(0, 7);
    }
    if (action === 'next-day') {
      selectedDate = addDays(selectedDate, 1);
      calendarMonth = selectedDate.slice(0, 7);
    }
    if (action === 'today' || action === 'calendar-today') {
      selectedDate = localToday();
      calendarMonth = selectedDate.slice(0, 7);
    }
    if (action === 'previous-month') calendarMonth = addMonths(calendarMonth, -1);
    if (action === 'next-month') calendarMonth = addMonths(calendarMonth, 1);
    if (action === 'select-calendar-day' && isDate(button.dataset.date)) {
      selectedDate = button.dataset.date;
      calendarMonth = selectedDate.slice(0, 7);
    }
    if (action === 'add-task') {
      selectedDay().tasks.push(makeCustomTask(selectedDate, `${Date.now()}-${selectedDay().tasks.length + 1}`));
      saveState('新任务已添加并保存在此浏览器');
    }
    if (action === 'remove-task') {
      const card = button.closest('[data-task-id]');
      const taskId = card?.dataset.taskId;
      if (taskId && window.confirm('移除这项自定义任务吗？')) {
        selectedDay().tasks = selectedDay().tasks.filter((task) => task.id !== taskId);
        saveState('自定义任务已移除');
      }
    }
    if (action === 'export') {
      const blob = new Blob([exportCheckinState(state)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `iwxt-checkin-${localToday()}.json`;
      link.click();
      URL.revokeObjectURL(url);
      status('备份已导出');
      return;
    }
    if (action === 'open-import') {
      root.querySelector('[data-import-input]')?.click();
      return;
    }
    if (['previous-day', 'next-day', 'today', 'calendar-today', 'previous-month', 'next-month', 'select-calendar-day', 'add-task', 'remove-task'].includes(action)) renderDay();
  });

  root.addEventListener('input', (event) => {
    const input = event.target;
    if (input.matches('[data-date-input]')) {
      if (isDate(input.value)) {
        selectedDate = input.value;
        calendarMonth = selectedDate.slice(0, 7);
        renderDay();
      }
      return;
    }
    if (input.matches('[data-preference="cmcBaselineHours"]')) {
      state.preferences.cmcBaselineMinutes = Math.max(0, Number(input.value) || 0) * 60;
      saveState();
      renderStats();
      renderTodayProgress();
      return;
    }
    const field = input.dataset.field;
    const taskId = input.closest('[data-task-id]')?.dataset.taskId;
    const task = taskId ? findTask(taskId) : null;
    if (!field || !task) return;
    const value = input.type === 'checkbox' ? input.checked : input.type === 'number' ? Math.max(0, Number(input.value) || 0) : input.value;
    setPath(task, field, value);
    if (field === 'kind') ensureTaskKind(task);
    if (field === 'algorithm.rating' && Number(value) > (task.algorithm?.topic?.includes('动态规划') ? 2000 : 1700)) task.algorithm.secondPass = true;
    if (['algorithm.premium', 'algorithm.optional'].includes(field) && value) task.algorithm.secondPass = true;
    if (field === 'algorithm.reproduced' && value) task.completed = true;
    if (field === 'completed' && !value && task.kind === 'algorithm' && task.algorithm) task.algorithm.reproduced = false;
    saveState();
    renderStats();
    renderTodayProgress();
    renderCalendar();
    if (input.type === 'checkbox' || field === 'kind' || field === 'algorithm.rating') renderDay();
  });

  root.addEventListener('change', (event) => {
    const input = event.target;
    if (input.matches('[data-preference="cmcCurrentLesson"]')) {
      const start = Math.min(124, Math.max(1, Math.round(Number(input.value) || 6)));
      rescheduleCmc(state, start);
      saveState(`CMC 课程已从第 ${start} 课重新顺排`);
      renderShell();
      return;
    }
    if (!input.matches('[data-import-input]')) return;
    const [file] = input.files || [];
    if (!file) return;
    file.text().then((text) => {
      state = importCheckinState(text);
      saveState('备份导入成功，已覆盖当前浏览器记录');
      renderShell();
    }).catch((error) => status(error.message || '导入失败', 'error'));
    input.value = '';
  });

  renderShell();
  saveState('已载入本机记录');
}
