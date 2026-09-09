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

test('first week uses exact algorithm problems and CMC lessons from the catalog', () => {
  const state = createDefaultState();
  const tuesdayAlgorithms = state.days['2026-09-15'].tasks.filter((task) => task.kind === 'algorithm');
  assert.deepEqual(tuesdayAlgorithms.map((task) => task.algorithm.number), ['1456', '643']);
  assert.match(tuesdayAlgorithms[0].algorithm.url, /maximum-number-of-vowels/);
  const mondayCmc = state.days['2026-09-14'].tasks.find((task) => task.kind === 'cmc');
  assert.deepEqual(mondayCmc.cmc.lessons.map((lesson) => lesson.number), [6, 7, 8]);
  assert.equal(mondayCmc.cmc.lessons[0].title, '6利用洛必达法则');
  assert.equal(mondayCmc.cmc.lessons[2].duration, '34分25秒');
  assert.match(state.days['2026-09-18'].tasks.find((task) => task.id.includes('cmc-chapter-13')).title, /极限/);
});

test('algorithm weekly completion only counts reproduced work', () => {
  const state = createDefaultState();
  const tasks = state.days['2026-09-15'].tasks.filter((task) => task.kind === 'algorithm');
  tasks[0].completed = true;
  tasks[0].algorithm.viewedHint = true;
  tasks[1].completed = true;
  tasks[1].algorithm.reproduced = true;
  const stats = checkinStats(state, '2026-09-15');
  assert.equal(effectiveComplete(tasks[0]), false);
  assert.equal(effectiveComplete(tasks[1]), true);
  assert.equal(stats.algorithmsReproduced, 1);
});

test('CMC separates watching from reproduction and requires evidence for effective completion', () => {
  const state = createDefaultState();
  const task = state.days['2026-09-14'].tasks.find((item) => item.kind === 'cmc');
  task.completed = true;
  task.actualMinutes = 112;
  task.cmc.lessons.forEach((lesson) => {
    lesson.watched = true;
    lesson.conditionsWritten = true;
  });
  let stats = checkinStats(state, '2026-09-14');
  assert.equal(stats.cmcWatchedLessons, 3);
  assert.equal(stats.cmcReproducedLessons, 0);
  assert.equal(effectiveComplete(task), false);
  task.cmc.lessons[0].reproduced = true;
  stats = checkinStats(state, '2026-09-14');
  assert.equal(stats.cmcReproducedLessons, 1);
  assert.equal(stats.cmcWeeklyMinutes, 112);
  assert.equal(effectiveComplete(task), true);
});

test('changing the CMC starting lesson keeps records by global lesson number', () => {
  const state = createDefaultState();
  const lessonSix = state.days['2026-09-14'].tasks.find((task) => task.cmc).cmc.lessons[0];
  lessonSix.watched = true;
  rescheduleCmc(state, 1);
  const rescheduled = state.days['2026-09-14'].tasks.find((task) => task.cmc);
  assert.deepEqual(rescheduled.cmc.lessons.map((lesson) => lesson.number), [1, 2, 3]);
  assert.match(rescheduled.cmc.guidance, /第 1–3 课/);
  assert.doesNotMatch(rescheduled.cmc.guidance, /第 6–8 课/);
  assert.equal(rescheduled.cmc.lessons[0].duration, '28分17秒');
  rescheduleCmc(state, 6);
  assert.equal(state.days['2026-09-14'].tasks.find((task) => task.cmc).cmc.lessons[0].watched, true);
});

test('moving the CMC start to the final lesson removes stale scheduled course blocks', () => {
  const state = createDefaultState();
  const simulation = state.days['2026-11-03'].tasks.find((task) => task.id.endsWith('-cmc-paper'));
  rescheduleCmc(state, 124);
  const scheduled = Object.values(state.days).flatMap((day) => day.tasks)
    .filter((task) => task.kind === 'cmc' && task.cmc?.lessons);
  assert.equal(scheduled.length, 1);
  assert.deepEqual(scheduled[0].cmc.lessons.map((lesson) => lesson.number), [124]);
  assert.equal(state.days['2026-11-03'].tasks.includes(simulation), true);
  assert.equal(Object.values(state.days).flatMap((day) => day.tasks).some((task) => task.id.includes('-cmc-chapter-') && !task.id.endsWith('-124')), false);
});

test('JSON backup round-trip preserves edits and rejects malformed input', () => {
  const state = createDefaultState();
  const task = state.days['2026-09-15'].tasks.find((item) => item.kind === 'algorithm');
  task.note = '边界条件要再看一次';
  task.algorithm.reproduced = true;
  task.completed = true;
  const restored = importCheckinState(exportCheckinState(state));
  const restoredTask = restored.days['2026-09-15'].tasks.find((item) => item.id === task.id);
  assert.equal(restoredTask.note, '边界条件要再看一次');
  assert.equal(restoredTask.algorithm.reproduced, true);
  assert.throws(() => importCheckinState('{not-json'), /有效的 JSON/);
  assert.throws(() => importCheckinState(JSON.stringify({ version: 99, days: {} })), /版本不匹配/);
  assert.throws(() => importCheckinState(JSON.stringify({ version: 1, days: [] })), /版本不匹配/);
});

test('hydration adds missing template tasks without overwriting existing records', () => {
  const state = createDefaultState();
  const edited = state.days['2026-09-15'].tasks.find((task) => task.kind === 'algorithm');
  edited.note = '保留我的记录';
  state.days['2026-09-15'].tasks = [edited];
  const hydrated = hydrateState(state);
  assert.equal(hydrated.days['2026-09-15'].tasks.find((task) => task.id === edited.id).note, '保留我的记录');
  assert.equal(hydrated.days['2026-09-15'].tasks.filter((task) => task.kind === 'algorithm').length, 2);
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

test('localStorage round-trip keeps user data after a simulated page refresh', () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
  const state = createDefaultState();
  const task = state.days['2026-09-15'].tasks.find((item) => item.kind === 'algorithm');
  task.note = '刷新后不能丢';
  task.completed = true;
  task.algorithm.reproduced = true;
  storeCheckinState(storage, state);
  const afterRefresh = loadCheckinState(storage);
  const restored = afterRefresh.days['2026-09-15'].tasks.find((item) => item.id === task.id);
  assert.equal(restored.note, '刷新后不能丢');
  assert.equal(restored.algorithm.reproduced, true);
  assert.equal(restored.completed, true);
});
