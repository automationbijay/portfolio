import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { formatNumber, cn } from './utils.ts';

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

describe('utils - cn', () => {
    it('should merge basic string classes', () => {
        assert.strictEqual(cn('base-class', 'active-class'), 'base-class active-class');
    });

    it('should resolve tailwind class conflicts correctly', () => {
        assert.strictEqual(cn('px-2 py-1', 'p-4'), 'p-4');
        assert.strictEqual(cn('text-red-500', 'text-blue-500'), 'text-blue-500');
        assert.strictEqual(cn('bg-white', 'bg-black/50'), 'bg-black/50');
    });

    it('should handle conditional classes using objects', () => {
        assert.strictEqual(
            cn('base-class', {
                'active-class': true,
                'inactive-class': false,
            }),
            'base-class active-class'
        );
    });

    it('should ignore falsy values', () => {
        assert.strictEqual(
            cn('base-class', null, undefined, false, 0, '', 'valid-class'),
            'base-class valid-class'
        );
    });

    it('should handle arrays of classes', () => {
        assert.strictEqual(
            cn(['class-a', 'class-b'], ['class-c', 'class-d']),
            'class-a class-b class-c class-d'
        );
    });

    it('should handle complex combinations', () => {
        assert.strictEqual(
            cn(
                'base',
                ['arr1', 'arr2'],
                { cond1: true, cond2: false },
                null,
                'px-4 py-2 p-8'
            ),
            'base arr1 arr2 cond1 p-8'
        );
    });
});
