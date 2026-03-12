import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { formatNumber } from './utils.ts';

describe('formatNumber', () => {
    it('formats 0 correctly', () => {
        assert.strictEqual(formatNumber(0), '0');
    });

    it('formats numbers under 1000 without commas', () => {
        assert.strictEqual(formatNumber(999), '999');
    });

    it('formats thousands correctly', () => {
        assert.strictEqual(formatNumber(1000), '1,000');
        assert.strictEqual(formatNumber(99999), '99,999');
    });

    it('formats lakhs correctly (Indian numbering system)', () => {
        assert.strictEqual(formatNumber(100000), '1,00,000');
        assert.strictEqual(formatNumber(9999999), '99,99,999');
    });

    it('formats crores correctly (Indian numbering system)', () => {
        assert.strictEqual(formatNumber(10000000), '1,00,00,000');
    });

    it('formats decimal numbers up to 2 decimal places', () => {
        assert.strictEqual(formatNumber(10.5), '10.5');
        assert.strictEqual(formatNumber(10.55), '10.55');
    });

    it('rounds decimal numbers to 2 decimal places', () => {
        assert.strictEqual(formatNumber(10.555), '10.56');
        assert.strictEqual(formatNumber(10.554), '10.55');
    });

    it('does not add trailing zeros for integers', () => {
        assert.strictEqual(formatNumber(10), '10');
    });

    it('formats negative numbers correctly', () => {
        assert.strictEqual(formatNumber(-1000), '-1,000');
        assert.strictEqual(formatNumber(-100000), '-1,00,000');
        assert.strictEqual(formatNumber(-10.55), '-10.55');
    });
});
