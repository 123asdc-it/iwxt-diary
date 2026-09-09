import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { PROJECT_DIR } from './content.mjs';

export const CMC_CATALOG_PATH = path.join(PROJECT_DIR, 'data', 'cmc-course-catalog.tsv');

export function durationSeconds(value) {
  const text = String(value || '').trim();
  const hours = Number(text.match(/(\d+)小时/)?.[1] || 0);
  const minutes = Number(text.match(/(\d+)分/)?.[1] || 0);
  const seconds = Number(text.match(/(\d+)秒/)?.[1] || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

export function parseCmcCatalog(tsv) {
  const lines = String(tsv).trim().split(/\r?\n/);
  const header = lines.shift();
  if (header !== 'global_no\tchapter\ttitle\tduration') throw new Error('CMC 课程目录表头无效。');
  const lessons = lines.map((line, index) => {
    const columns = line.split('\t');
    if (columns.length !== 4) throw new Error(`CMC 课程目录第 ${index + 2} 行不是四列。`);
    const [number, chapter, title, duration] = columns;
    return { number: Number(number), chapter, title, duration, durationSeconds: durationSeconds(duration) };
  });
  if (lessons.length !== 124 || lessons.some((lesson, index) => lesson.number !== index + 1)) {
    throw new Error('CMC 课程目录必须包含连续的 1–124 课。');
  }
  return lessons;
}

export async function readCmcCatalog() {
  return parseCmcCatalog(await readFile(CMC_CATALOG_PATH, 'utf8'));
}
