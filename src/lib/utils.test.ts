import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { formatCurrency, formatNumber, cn } from './utils.ts';

describe('formatCurrency', () => {
    test('formats numbers correctly according to en-IN locale', () => {
        assert.strictEqual(formatCurrency(100), '100');
        assert.strictEqual(formatCurrency(1000), '1,000');
        assert.strictEqual(formatCurrency(10000), '10,000');
        assert.strictEqual(formatCurrency(100000), '1,00,000');
        assert.strictEqual(formatCurrency(10000000), '1,00,00,000');
    });

    test('rounds floating point numbers to 0 decimal places', () => {
        assert.strictEqual(formatCurrency(100.4), '100');
        assert.strictEqual(formatCurrency(100.5), '101');
        assert.strictEqual(formatCurrency(100.9), '101');
    });

    test('handles negative numbers correctly', () => {
        assert.strictEqual(formatCurrency(-100000), '-1,00,000');
    });

    test('handles zero correctly', () => {
        assert.strictEqual(formatCurrency(0), '0');
    });
});

describe('formatNumber', () => {
    test('formats numbers correctly according to en-IN locale', () => {
        assert.strictEqual(formatNumber(100), '100');
        assert.strictEqual(formatNumber(1000), '1,000');
        assert.strictEqual(formatNumber(10000), '10,000');
        assert.strictEqual(formatNumber(100000), '1,00,000');
    });

    test('preserves up to 2 decimal places', () => {
        assert.strictEqual(formatNumber(100.4), '100.4');
        assert.strictEqual(formatNumber(100.5), '100.5');
        assert.strictEqual(formatNumber(100.99), '100.99');
    });

    test('rounds floating point numbers beyond 2 decimal places', () => {
        assert.strictEqual(formatNumber(100.444), '100.44');
        assert.strictEqual(formatNumber(100.555), '100.56');
    });

    test('handles negative numbers correctly', () => {
        assert.strictEqual(formatNumber(-100000), '-1,00,000');
        assert.strictEqual(formatNumber(-100.55), '-100.55');
    });

    test('handles zero correctly', () => {
        assert.strictEqual(formatNumber(0), '0');
    });
});

describe('cn', () => {
    test('merges class names correctly', () => {
        assert.strictEqual(cn('p-4', 'p-2'), 'p-2');
        assert.strictEqual(cn('bg-red-500', 'bg-blue-500'), 'bg-blue-500');
    });

    test('handles conditional class names', () => {
        assert.strictEqual(cn('base-class', true && 'active-class', false && 'inactive-class'), 'base-class active-class');
        assert.strictEqual(cn('base-class', undefined, null, 'other-class'), 'base-class other-class');
    });

    test('handles arrays of class names', () => {
        assert.strictEqual(cn(['class1', 'class2']), 'class1 class2');
    });
});
