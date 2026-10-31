import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const html = readFileSync(new URL('../public/tutorials/model-4bit/index.html', import.meta.url), 'utf8');
const script = html.match(/<script id="quantization-math">([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, 'The standalone tutorial exposes its actual math implementation for verification');
const math = vm.runInNewContext(`${script}\nQuantMath;`);
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} != ${expected}`);

test('video examples: one input flips the winner and the other preserves it', () => {
  const flipped = math.compare([1.4, 2.4], [1.6, 2.1], [1, 2], 1);
  near(flipped.original[0], 6.2);
  near(flipped.original[1], 5.8);
  near(flipped.quantized[0], 5);
  near(flipped.quantized[1], 6);
  assert.equal(flipped.before, 'A');
  assert.equal(flipped.after, 'B');
  const stable = math.compare([1.4, 2.4], [1.6, 2.1], [1, 0], 1);
  near(stable.original[0], 1.4);
  near(stable.original[1], 1.6);
  assert.equal(stable.before, 'B');
  assert.equal(stable.after, 'B');
});

test('different weights can share a code, and decoding cannot identify the original', () => {
  const a = math.encode(2.4, 1);
  const b = math.encode(2.1, 1);
  assert.equal(a.q, 2);
  assert.equal(a.q, b.q);
  near(a.value, b.value);
  assert.notEqual(a.error, b.error);
});

test('4bit code range, ties-to-even rounding, and clipping are explicit', () => {
  assert.equal(math.encode(-8, 1).q, -8);
  assert.equal(math.encode(7, 1).q, 7);
  assert.equal(math.encode(0.5, 1).q, 0);
  assert.equal(math.encode(1.5, 1).q, 2);
  assert.equal(math.encode(-1.5, 1).q, -2);
  assert.equal(math.encode(0.9, 0.1).q, 7);
  assert.equal(math.encode(0.9, 0.1).clipped, true);
  near(math.encode(0.9, 0.1).value, 0.7);
  assert.equal(math.encode(0.7, 0.1).clipped, false);
});

test('signed codes have exactly 16 distinct four-bit representations', () => {
  const codes = Array.from({ length: 16 }, (_, i) => math.encode(i - 8, 1).code);
  assert.equal(new Set(codes).size, 16);
  assert.ok(codes.every(code => /^[01]{4}$/.test(code)));
  assert.equal(math.encode(-1, 1).code, '1111');
  assert.equal(math.encode(0, 1).code, '0000');
});

test('input-weighted error explains the margin, including negative inputs and ties', () => {
  for (const input of [[1, 2], [1, 0], [-2, 3], [0, 0]]) {
    const r = math.compare([1.4, 2.4], [1.6, 2.1], input, 1);
    near(r.quantizedMargin, r.originalMargin + math.dot(input, r.marginErrors));
  }
  assert.equal(math.compare([1, 2], [1, 2], [1, 1], 1).after, '并列');
});

test('grouping localizes the range of an outlier, without claiming universal improvement', () => {
  const weights = [-0.24, 0.14, 0.31, 0.28, 0.08, -0.11, 0.21, 0.17, 24, -18, 12, 9];
  const global = math.grouped(weights, 12);
  const grouped = math.grouped(weights, 4);
  assert.equal(global.scales.length, 1);
  assert.equal(grouped.scales.length, 3);
  assert.ok(grouped.scales[0] < grouped.scales[2]);
  assert.ok(grouped.mae < global.mae);
  assert.equal(math.grouped([0, 0], 2).mae, 0);
});

test('calibration compensation fits one sample but can change another and needs final rounding', () => {
  const r = math.compensate([1.4, 2.4], [1, 2], 1);
  near(r.adjusted[1], 2.6);
  near(math.dot(r.adjusted, [1, 2]), 6.2);
  assert.ok(math.dot(r.adjusted, [0, 1]) !== math.dot([1.4, 2.4], [0, 1]));
  near(math.dot(r.final, [1, 2]), 7);
  assert.equal(math.compensate([1.4, 2.4], [1, 0], 1).possible, false);
});

test('storage separates weight codes, group metadata, and FP16 baseline', () => {
  const s = math.storage(7e9, 4, 128, 16, 0);
  near(s.codeGB, 3.5);
  near(s.fp16GB, 14);
  near(s.metadataGB, 0.109375);
  near(s.totalGB, 3.609375);
  near(s.bitsPerWeight, 4.125);
  const asymmetric = math.storage(7e9, 4, 128, 16, 4);
  near(asymmetric.bitsPerWeight, 4.15625);
  near(math.storage(129, 4, 128, 16, 0).metadataGB, 4 / 1e9);
});
