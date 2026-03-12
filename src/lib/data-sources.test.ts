import test from 'node:test';
import assert from 'node:assert';
import { getDataSourceUrl, type DataSourceKey } from './data-sources.ts';

test('getDataSourceUrl should return correct URLs for all sources', () => {
    const symbol = 'AAPL';

    const cases: { key: DataSourceKey; expected: string }[] = [
        {
            key: 'merolagani',
            expected: `https://merolagani.com/CompanyDetail.aspx?symbol=${symbol}#0`
        },
        {
            key: 'sharesansar',
            expected: `https://www.sharesansar.com/company/${symbol}`
        },
        {
            key: 'nepsealpha',
            expected: `https://nepsealpha.com/search?q=${symbol}`
        },
        {
            key: 'nepalipaisa',
            expected: `https://nepalipaisa.com/company/${symbol}`
        },
        {
            key: 'moneymitra',
            expected: `https://moneymitra.com/login/?next=/guru-mantra/company/${symbol}/`
        }
    ];

    cases.forEach(({ key, expected }) => {
        assert.strictEqual(getDataSourceUrl(key, symbol), expected, `Failed for key: ${key}`);
    });
});

test('getDataSourceUrl should return null for unsupported keys', () => {
    // @ts-expect-error Testing invalid runtime input
    assert.strictEqual(getDataSourceUrl('unsupported', 'AAPL'), null);
});

test('getDataSourceUrl should return null for "ask" key which is in type but not in DATA_SOURCES', () => {
    assert.strictEqual(getDataSourceUrl('ask', 'AAPL'), null);
});
