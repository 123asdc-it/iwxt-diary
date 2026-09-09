import assert from 'node:assert/strict';
import test from 'node:test';

import { readCmcCatalog } from '../scripts/cmc-catalog.mjs';
import {
  checkinStats,
  createDefaultState,
  effectiveComplete,
  exportCheckinState,
  hydrateState,
  importCheckinState,
  rescheduleCmc,
  setCmcCatalog,
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
