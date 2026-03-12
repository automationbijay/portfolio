import test from 'node:test';
import assert from 'node:assert';
import { getDataSourceUrl } from './data-sources.ts';

test('getDataSourceUrl should return correct URLs for all sources', () => {
    const symbol = 'AAPL';

    const cases = [
        {
            key: 'merolagani' as const,
            expected: `https://merolagani.com/CompanyDetail.aspx?symbol=${symbol}#0`
        },
        {
            key: 'sharesansar' as const,
            expected: `https://www.sharesansar.com/company/${symbol}`
        },
        {
            key: 'nepsealpha' as const,
            expected: `https://nepsealpha.com/search?q=${symbol}`
        },
        {
            key: 'nepalipaisa' as const,
            expected: `https://nepalipaisa.com/company/${symbol}`
        },
        {
            key: 'moneymitra' as const,
            expected: `https://moneymitra.com/login/?next=/guru-mantra/company/${symbol}/`
        }
    ];

    cases.forEach(({ key, expected }) => {
        assert.strictEqual(getDataSourceUrl(key, symbol), expected, `Failed for key: ${key}`);
    });
});

test('getDataSourceUrl should return null for unsupported keys', () => {
    assert.strictEqual(getDataSourceUrl('unsupported' as any, 'AAPL'), null);
});

test('getDataSourceUrl should return null for "ask" key which is in type but not in DATA_SOURCES', () => {
    assert.strictEqual(getDataSourceUrl('ask', 'AAPL'), null);
});
