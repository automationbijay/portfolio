import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { cn } from './utils.ts';

describe('cn utility', () => {
    test('merges basic classes correctly', () => {
        assert.equal(cn('px-2 py-1', 'bg-red-500'), 'px-2 py-1 bg-red-500');
    });

    test('handles conditional classes', () => {
        assert.equal(cn('px-2', true && 'py-1', false && 'bg-red-500'), 'px-2 py-1');
    });

    test('merges tailwind classes using tailwind-merge', () => {
        assert.equal(cn('px-2 py-1 bg-red-500', 'p-4 bg-blue-500'), 'p-4 bg-blue-500');
        assert.equal(cn('text-sm', 'text-lg'), 'text-lg');
    });

    test('handles arrays and objects', () => {
        assert.equal(cn(['px-2', 'py-1'], { 'bg-red-500': true, 'text-white': false }), 'px-2 py-1 bg-red-500');
    });

    test('handles undefined and null', () => {
        assert.equal(cn('px-2', undefined, null, 'py-1'), 'px-2 py-1');
    });
});
