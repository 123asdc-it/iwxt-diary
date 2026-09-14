import assert from 'node:assert/strict';
import test from 'node:test';

import { readCmcCatalog } from '../scripts/cmc-catalog.mjs';
import {
  addMonths,
  checkinStats,
  createDefaultState,
  dayCheckinStatus,
  eventCountdowns,
  effectiveComplete,
  exportCheckinState,
  hydrateState,
  importCheckinState,
  loadCheckinState,
  milestoneCountdown,
  monthCalendar,
  rescheduleCmc,
  setCmcCatalog,
  storeCheckinState,
  todayRemaining,
  urgencyForDays,
} from '../src/checkin-model.js';

const catalog = await readCmcCatalog();
setCmcCatalog(catalog);

test('CMC catalog contains 124 continuous lessons and the verified total duration', () => {
  assert.equal(catalog.length, 124);
  assert.deepEqual(catalog.map((lesson) => lesson.number), Array.from({ length: 124 }, (_, index) => index + 1));
  assert.deepEqual(catalog[41], {
    number: 42,
    chapter: '3中值问题',
    title: '10双中值问题',
    duration: '1小时52分',
    durationSeconds: 6720,
  });
  assert.equal(catalog[42].title, '11泰勒中值定理的运用');
  assert.equal(catalog[42].durationSeconds, 6360);
  assert.equal(catalog[123].title, '9换元法的应用');
  assert.equal(catalog[123].duration, '27分24秒');
  assert.equal(catalog.reduce((sum, lesson) => sum + lesson.durationSeconds, 0), 209506);
});

test('Baidu Star sprint week replaces untouched CMC and LeetCode defaults but keeps CET6', () => {
  const state = createDefaultState();
  for (const date of ['2026-09-14', '2026-09-15', '2026-09-16', '2026-09-17', '2026-09-18', '2026-09-19', '2026-09-20']) {
    assert.equal(state.days[date].tasks.some((task) => task.kind === 'cmc'), false);
    assert.equal(state.days[date].tasks.some((task) => task.kind === 'algorithm'), false);
    assert.equal(state.days[date].tasks.filter((task) => task.kind === 'cet6').length, 1);
  }
  assert.equal(state.days['2026-09-20'].tasks.some((task) => task.id.endsWith('-contest')), false);
  const timed = state.days['2026-09-15'].tasks.find((task) => task.id.endsWith('-sprint-timed-training'));
  assert.deepEqual({ time: timed.time, minutes: timed.plannedMinutes, submitted: timed.sprint.submittedTarget, reproduced: timed.sprint.reproducedTarget }, {
    time: '09:00', minutes: 150, submitted: 2, reproduced: 1,
  });
  const formal = state.days['2026-09-19'].tasks.find((task) => task.id === '2026-09-19-event-baidu-star-round-2');
  assert.equal(formal.kind, 'sprint');
  assert.equal(formal.sprint.acceptedActual, 0);
  assert.match(formal.sprint.instructions, /14:00–17:00/);
});

test('CMC resumes on September 21 with the original lesson sequence and catalog details', () => {
  const state = createDefaultState();
  const mondayCmc = state.days['2026-09-21'].tasks.find((task) => task.kind === 'cmc');
  assert.deepEqual(mondayCmc.cmc.lessons.map((lesson) => lesson.number), [6, 7, 8]);
  assert.equal(mondayCmc.cmc.lessons[0].title, '6利用洛必达法则');
  assert.equal(mondayCmc.cmc.lessons[2].duration, '34分25秒');
  assert.match(mondayCmc.cmc.guidance, /顺延 7 天/);
  const tuesdayAlgorithms = state.days['2026-09-22'].tasks.filter((task) => task.kind === 'algorithm');
  assert.deepEqual(tuesdayAlgorithms.map((task) => task.algorithm.number), ['2461', '1423']);
});

test('confirmed competitions appear in their exact daily task lists', () => {
  const state = createDefaultState();
  const baidu = state.days['2026-09-19'].tasks.find((task) => task.id === '2026-09-19-event-baidu-star-round-2');
  assert.deepEqual({ time: baidu.time, title: baidu.title, plannedMinutes: baidu.plannedMinutes }, {
    time: '14:00',
    title: '百度之星第 22 届第二场初赛（线上）',
    plannedMinutes: 180,
  });

  const fltrp = state.days['2026-10-11'].tasks.filter((task) => task.id.includes('-event-fltrp-'));
  assert.deepEqual(fltrp.map(({ time, title, plannedMinutes }) => ({ time, title, plannedMinutes })), [
    { time: '09:30', title: '外研社·国才杯综合能力校赛', plannedMinutes: 90 },
    { time: '16:00', title: '外研社·国才杯笔译校赛', plannedMinutes: 120 },
  ]);

  const vocabulary = state.days['2026-10-24'].tasks.find((task) => task.id === '2026-10-24-event-baicizhan-vocabulary-preliminary');
  assert.deepEqual({ time: vocabulary.time, title: vocabulary.title, note: vocabulary.note }, {
    time: '',
    title: '百词斩全国大学生英语单词大赛初赛',
    note: '具体时间待报名结束分组后公布',
  });
});

test('algorithm weekly completion only counts reproduced work', () => {
  const state = createDefaultState();
  const tasks = state.days['2026-09-22'].tasks.filter((task) => task.kind === 'algorithm');
  tasks[0].completed = true;
  tasks[0].algorithm.viewedHint = true;
  tasks[1].completed = true;
  tasks[1].algorithm.reproduced = true;
  const stats = checkinStats(state, '2026-09-22');
  assert.equal(effectiveComplete(tasks[0]), false);
  assert.equal(effectiveComplete(tasks[1]), true);
  assert.equal(stats.algorithmsReproduced, 1);
});

test('CMC separates watching from reproduction and requires evidence for effective completion', () => {
  const state = createDefaultState();
  const task = state.days['2026-09-21'].tasks.find((item) => item.kind === 'cmc');
  task.completed = true;
  task.actualMinutes = 112;
  task.cmc.lessons.forEach((lesson) => {
    lesson.watched = true;
    lesson.conditionsWritten = true;
  });
  let stats = checkinStats(state, '2026-09-21');
  assert.equal(stats.cmcWatchedLessons, 3);
  assert.equal(stats.cmcReproducedLessons, 0);
  assert.equal(effectiveComplete(task), false);
  task.cmc.lessons[0].reproduced = true;
  stats = checkinStats(state, '2026-09-21');
  assert.equal(stats.cmcReproducedLessons, 1);
  assert.equal(stats.cmcWeeklyMinutes, 112);
  assert.equal(effectiveComplete(task), true);
});

test('changing the CMC starting lesson keeps records by global lesson number', () => {
  const state = createDefaultState();
  const lessonSix = state.days['2026-09-21'].tasks.find((task) => task.cmc).cmc.lessons[0];
  lessonSix.watched = true;
  rescheduleCmc(state, 1);
  const rescheduled = state.days['2026-09-21'].tasks.find((task) => task.cmc);
  assert.deepEqual(rescheduled.cmc.lessons.map((lesson) => lesson.number), [1, 2, 3]);
  assert.match(rescheduled.cmc.guidance, /第 1–3 课/);
  assert.doesNotMatch(rescheduled.cmc.guidance, /第 6–8 课/);
  assert.equal(rescheduled.cmc.lessons[0].duration, '28分17秒');
  rescheduleCmc(state, 6);
  assert.equal(state.days['2026-09-21'].tasks.find((task) => task.cmc).cmc.lessons[0].watched, true);
});

test('moving the CMC start to the final lesson removes stale scheduled course blocks', () => {
  const state = createDefaultState();
  const simulation = state.days['2026-11-10'].tasks.find((task) => task.id.endsWith('-cmc-paper'));
  rescheduleCmc(state, 124);
  const scheduled = Object.values(state.days).flatMap((day) => day.tasks)
    .filter((task) => task.kind === 'cmc' && task.cmc?.lessons);
  assert.equal(scheduled.length, 1);
  assert.deepEqual(scheduled[0].cmc.lessons.map((lesson) => lesson.number), [124]);
  assert.equal(state.days['2026-11-10'].tasks.includes(simulation), true);
  assert.equal(Object.values(state.days).flatMap((day) => day.tasks).some((task) => task.id.includes('-cmc-chapter-') && !task.id.endsWith('-124')), false);
});

test('JSON backup round-trip preserves edits and rejects malformed input', () => {
  const state = createDefaultState();
  const task = state.days['2026-09-22'].tasks.find((item) => item.kind === 'algorithm');
  task.note = '边界条件要再看一次';
  task.algorithm.reproduced = true;
  task.completed = true;
  const restored = importCheckinState(exportCheckinState(state));
  const restoredTask = restored.days['2026-09-22'].tasks.find((item) => item.id === task.id);
  assert.equal(restoredTask.note, '边界条件要再看一次');
  assert.equal(restoredTask.algorithm.reproduced, true);
  assert.throws(() => importCheckinState('{not-json'), /有效的 JSON/);
  assert.throws(() => importCheckinState(JSON.stringify({ version: 99, days: {} })), /版本不匹配/);
  assert.throws(() => importCheckinState(JSON.stringify({ version: 1, days: [] })), /版本不匹配/);
});

test('hydration adds missing template tasks without overwriting existing records', () => {
  const state = createDefaultState();
  const edited = state.days['2026-09-22'].tasks.find((task) => task.kind === 'algorithm');
  edited.note = '保留我的记录';
  state.days['2026-09-22'].tasks = [edited];
  const hydrated = hydrateState(state);
  assert.equal(hydrated.days['2026-09-22'].tasks.find((task) => task.id === edited.id).note, '保留我的记录');
  assert.equal(hydrated.days['2026-09-22'].tasks.filter((task) => task.kind === 'algorithm').length, 2);
});

test('v1 migration removes only untouched superseded defaults and preserves progress plus custom tasks', () => {
  const raw = createDefaultState();
  raw.days['2026-09-15'].tasks.push(
    { id: '2026-09-15-leetcode-1456', kind: 'algorithm', time: '09:00', title: '旧默认题一', completed: false, actualMinutes: 0, note: '', algorithm: { reproduced: false, viewedHint: false } },
    { id: '2026-09-15-leetcode-643', kind: 'algorithm', time: '10:00', title: '旧默认题二', completed: true, actualMinutes: 52, note: '已有进度要保留', algorithm: { reproduced: true, wrongReason: '边界' } },
    { id: '2026-09-15-custom-keep', kind: 'other', time: '18:00', title: '我的自定义任务', completed: true, actualMinutes: 20, note: '不能丢' },
  );
  const hydrated = hydrateState(raw);
  const tasks = hydrated.days['2026-09-15'].tasks;
  assert.equal(tasks.some((task) => task.id === '2026-09-15-leetcode-1456'), false);
  const preserved = tasks.find((task) => task.note === '已有进度要保留');
  assert.equal(preserved.planExcluded, true);
  assert.match(preserved.planNote, /不计入本周欠账/);
  assert.equal(tasks.some((task) => task.id === '2026-09-15-custom-keep' && task.note === '不能丢'), true);
  const stats = checkinStats(hydrated, '2026-09-15');
  const sprintWeek = new Set(['2026-09-14', '2026-09-15', '2026-09-16', '2026-09-17', '2026-09-18', '2026-09-19', '2026-09-20']);
  const activeWeekTasks = Object.entries(hydrated.days)
    .filter(([date]) => sprintWeek.has(date))
    .flatMap(([, day]) => day.tasks)
    .filter((task) => !task.planExcluded);
  assert.equal(stats.totalTasks, 22);
  assert.equal(stats.totalTasks, activeWeekTasks.length);
});

test('CMC plan shift keeps recorded lesson evidence by global lesson number', () => {
  const raw = createDefaultState();
  const current = raw.days['2026-09-21'].tasks.find((task) => task.cmc);
  current.cmc.lessons = [{ number: 22, chapter: '旧排期', title: '旧第 22 课', duration: '', watched: true, reproduced: true, conditionsWritten: true, recall: '已复现', grade: 'A', actualMinutes: 40 }];
  current.completed = true;
  current.actualMinutes = 40;
  current.note = '旧排期已有记录';
  const hydrated = hydrateState(raw);
  const active = hydrated.days['2026-09-21'].tasks.find((task) => task.cmc && !task.planExcluded);
  assert.deepEqual(active.cmc.lessons.map((lesson) => lesson.number), [6, 7, 8]);
  const lesson22 = Object.values(hydrated.days).flatMap((day) => day.tasks)
    .filter((task) => task.cmc && !task.planExcluded)
    .flatMap((task) => task.cmc.lessons)
    .find((lesson) => lesson.number === 22);
  assert.equal(lesson22.watched, true);
  assert.equal(lesson22.reproduced, true);
  assert.equal(hydrated.days['2026-09-21'].tasks.some((task) => task.planExcluded && task.note === '旧排期已有记录'), true);
});

test('sprint completion requires checklist and independent reproduction targets', () => {
  const state = createDefaultState();
  const task = state.days['2026-09-15'].tasks.find((item) => item.kind === 'sprint');
  task.completed = true;
  assert.equal(effectiveComplete(task), false);
  task.sprint.checklist.forEach((item) => { item.done = true; });
  task.sprint.submittedActual = 2;
  assert.equal(effectiveComplete(task), false);
  task.sprint.reproducedActual = 1;
  assert.equal(effectiveComplete(task), true);
  const stats = checkinStats(state, '2026-09-15');
  assert.equal(stats.target.cmcMinutes, 0);
  assert.equal(stats.target.sprintTasks, 13);
  assert.equal(stats.target.sprintReproductions, 8);
  assert.equal(stats.sprintCompleted, 1);

  const formal = state.days['2026-09-19'].tasks.find((item) => item.id === '2026-09-19-event-baidu-star-round-2');
  formal.completed = true;
  formal.sprint.checklist[0].done = true;
  formal.sprint.acceptedActual = 3;
  formal.sprint.blockers = '一题卡在复杂度';
  const restored = importCheckinState(exportCheckinState(state));
  const restoredFormal = restored.days['2026-09-19'].tasks.find((item) => item.id === formal.id);
  assert.equal(restoredFormal.sprint.acceptedActual, 3);
  assert.equal(restoredFormal.sprint.blockers, '一题卡在复杂度');
  assert.equal(checkinStats(restored, '2026-09-19').sprintReproduced, 1);
});

test('month calendar crosses years and includes leap day without UTC drift', () => {
  assert.equal(addMonths('2026-12', 1), '2027-01');
  assert.equal(addMonths('2027-01', -1), '2026-12');
  const calendar = monthCalendar({ days: {} }, '2024-02', '2024-02-15');
  assert.equal(calendar.length, 35);
  assert.equal(calendar[0].date, '2024-01-29');
  assert.equal(calendar.at(-1).date, '2024-03-03');
  assert.equal(calendar.some((day) => day.date === '2024-02-29' && day.inMonth), true);
});

test('calendar separates complete, partial, missed, empty, today and future days', () => {
  const task = (id) => ({ id, kind: 'algorithm', completed: false, actualMinutes: 0, note: '', algorithm: { reproduced: false, viewedHint: false } });
  const state = {
    days: {
      '2026-09-06': { tasks: [] },
      '2026-09-07': { tasks: [task('missed')] },
      '2026-09-08': { tasks: [task('partial-a'), task('partial-b')] },
      '2026-09-09': { tasks: [task('complete')] },
      '2026-09-11': { tasks: [task('future')] },
    },
  };
  state.days['2026-09-08'].tasks[0].algorithm.viewedHint = true;
  state.days['2026-09-09'].tasks[0].completed = true;
  state.days['2026-09-09'].tasks[0].algorithm.reproduced = true;
  assert.equal(dayCheckinStatus(state, '2026-09-06', '2026-09-10'), 'empty');
  assert.equal(dayCheckinStatus(state, '2026-09-07', '2026-09-10'), 'missed');
  assert.equal(dayCheckinStatus(state, '2026-09-08', '2026-09-10'), 'partial');
  assert.equal(dayCheckinStatus(state, '2026-09-09', '2026-09-10'), 'complete');
  assert.equal(dayCheckinStatus(state, '2026-09-11', '2026-09-10'), 'future');
});

test('today remaining derives algorithms, CMC lessons and CET6 fields from records', () => {
  const date = '2026-09-15';
  const state = {
    days: {
      [date]: {
        tasks: [
          { id: 'a', kind: 'algorithm', completed: true, algorithm: { reproduced: true } },
          { id: 'b', kind: 'algorithm', completed: false, algorithm: { reproduced: false } },
          { id: 'c', kind: 'cmc', completed: false, plannedMinutes: 90, actualMinutes: 0, cmc: { lessons: [{ watched: true }, { watched: false }] } },
          { id: 'd', kind: 'cet6', completed: false, cet6: { phase: 'new', wordsTarget: 100, wordsActual: 35, practiceCount: 0 } },
        ],
      },
    },
  };
  const progress = todayRemaining(state, date);
  assert.deepEqual(progress.algorithm, { unit: '题', target: 2, actual: 1, remaining: 1 });
  assert.deepEqual(progress.cmc, { mode: 'lessons', unit: '节', target: 2, actual: 1, remaining: 1 });
  assert.equal(progress.cet6.wordLabel, '新词');
  assert.deepEqual(progress.cet6.words, { unit: '词', target: 100, actual: 35, remaining: 65 });
  assert.deepEqual(progress.cet6.practice, { unit: '项', target: 0, actual: 0, remaining: 0 });
});

test('review-phase CET6 exposes one brush-up item without inventing a numeric target', () => {
  const date = '2026-09-23';
  const state = {
    days: {
      [date]: {
        tasks: [{ id: 'cet', kind: 'cet6', cet6: { phase: 'review', wordsTarget: 1000, wordsActual: 800, practiceCount: 1 } }],
      },
    },
  };
  const progress = todayRemaining(state, date);
  assert.equal(progress.cet6.wordLabel, '复习词');
  assert.equal(progress.cet6.words.remaining, 200);
  assert.deepEqual(progress.cet6.practice, { unit: '项', target: 1, actual: 1, remaining: 0 });
});

test('countdowns cover 30/7/3-day thresholds, today, ongoing ranges and expiry', () => {
  assert.equal(urgencyForDays(31), 'normal');
  assert.equal(urgencyForDays(30), 'soon');
  assert.equal(urgencyForDays(7), 'urgent');
  assert.equal(urgencyForDays(3), 'critical');
  assert.equal(milestoneCountdown({ label: '考试', date: '2026-09-10' }, '2026-09-10').text, '就是今天');
  assert.equal(milestoneCountdown({ label: '比赛', date: '2026-09-10', endDate: '2026-09-13' }, '2026-09-11').state, 'ongoing');
  assert.equal(milestoneCountdown({ label: '比赛', date: '2026-09-10', endDate: '2026-09-13' }, '2026-09-14').text, '已结束');
  assert.equal(milestoneCountdown({ label: '报名', pending: '待校内通知' }, '2026-09-10').text, '待校内通知');
  assert.equal(eventCountdowns('2026-09-10').find((event) => event.id === 'cumcm').milestones[2].state, 'ongoing');
});

test('official and estimated month windows stay out of day-level countdowns', () => {
  const official = milestoneCountdown({ label: '省赛', window: '2026.09–11' }, '2026-09-12');
  assert.equal(official.state, 'window');
  assert.equal(official.text, '官方赛期');
  assert.equal(official.days, null);

  const estimated = milestoneCountdown({ label: '国赛', window: '2027.07–08', estimated: true }, '2026-09-12');
  assert.equal(estimated.state, 'estimated');
  assert.equal(estimated.text, '预计赛期');
  assert.equal(estimated.days, null);

  const events = eventCountdowns('2026-09-12');
  assert.equal(events.some((event) => event.id === 'fltrp'), true);
  assert.equal(events.some((event) => event.id === 'statistical-modeling'), true);
});

test('confirmed registration status stays separate from pending dates', () => {
  const confirmed = milestoneCountdown({ label: '参赛资格', status: '审核通过' }, '2026-09-14');
  assert.equal(confirmed.state, 'confirmed');
  assert.equal(confirmed.text, '审核通过');
  assert.equal(confirmed.days, null);

  const event = eventCountdowns('2026-09-14').find((item) => item.id === 'baicizhan-vocabulary');
  assert.equal(event.subtitle, '百词斩 · 本科及以上非英专组');
  assert.equal(event.milestones[0].state, 'confirmed');
  assert.equal(event.milestones[1].date, '2026-10-24');
  assert.equal(event.milestones[1].days, 40);
  assert.equal(event.milestones[2].state, 'pending');
});

test('concrete campus notices replace broad FLTRP and Baidu Star estimates', () => {
  const events = eventCountdowns('2026-09-13');
  const fltrp = events.find((event) => event.id === 'fltrp');
  assert.deepEqual(fltrp.milestones.slice(0, 3).map(({ label, date, note, days }) => ({ label, date, note, days })), [
    { label: '官网报名截止', date: '2026-10-04', note: '23:59 · 综合能力 / 笔译', days: 21 },
    { label: '综合能力校赛', date: '2026-10-11', note: '华师 · 09:30–11:00 · 以报名群最新通知为准', days: 28 },
    { label: '笔译校赛', date: '2026-10-11', note: '华师 · 16:00–18:00 · 以报名群最新通知为准', days: 28 },
  ]);
  assert.equal(fltrp.milestones[3].state, 'window');
  assert.equal(fltrp.milestones[4].state, 'window');

  const baidu = events.find((event) => event.id === 'baidu-star');
  assert.equal(baidu.subtitle, '2026 第 22 届');
  assert.deepEqual(baidu.milestones.slice(0, 2).map(({ label, date, days }) => ({ label, date, days })), [
    { label: '报名截止', date: '2026-09-19', days: 6 },
    { label: '第二场初赛', date: '2026-09-19', days: 6 },
  ]);
  assert.equal(baidu.milestones[2].state, 'pending');
});

test('localStorage round-trip keeps user data after a simulated page refresh', () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  const state = createDefaultState();
  const task = state.days['2026-09-22'].tasks.find((item) => item.kind === 'algorithm');
  task.note = '刷新后不能丢';
  task.completed = true;
  task.algorithm.reproduced = true;
  storeCheckinState(storage, state);
  const afterRefresh = loadCheckinState(storage);
  const restored = afterRefresh.days['2026-09-22'].tasks.find((item) => item.id === task.id);
  assert.equal(restored.note, '刷新后不能丢');
  assert.equal(restored.algorithm.reproduced, true);
  assert.equal(restored.completed, true);
});
