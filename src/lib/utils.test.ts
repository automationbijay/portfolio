import { describe, it } from 'node:test';
import assert from 'node:assert';
import { cn } from './utils.ts';

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
