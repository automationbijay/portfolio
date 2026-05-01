import test from 'node:test';
import assert from 'node:assert';
import { getDataSourceUrl, type DataSourceKey } from './data-sources.ts';

test('getDataSourceUrl should return correct URLs for all sources', () => {
    const symbol = 'AAPL';

    const cases: { key: DataSourceKey; expected: string }[] = [
        {
            key: 'merolagani',
            expected: `https://merolagani.com/CompanyDetail.aspx?symbol=${encodeURIComponent(symbol)}#0`
        },
        {
            key: 'sharesansar',
            expected: `https://www.sharesansar.com/company/${encodeURIComponent(symbol)}`
        },
        {
            key: 'nepsealpha',
            expected: `https://nepsealpha.com/search?q=${encodeURIComponent(symbol)}`
        },
        {
            key: 'nepalipaisa',
            expected: `https://nepalipaisa.com/company/${encodeURIComponent(symbol)}`
        },
        {
            key: 'moneymitra',
            expected: `https://moneymitra.com/login/?next=/guru-mantra/company/${encodeURIComponent(symbol)}/`
        }
    ];

    cases.forEach(({ key, expected }) => {
        assert.strictEqual(getDataSourceUrl(key, symbol), expected, `Failed for key: ${key}`);
    });
});

test('getDataSourceUrl should correctly encode special characters in symbols', () => {
    const symbol = 'NICA & CO';
    const encodedSymbol = encodeURIComponent(symbol);

    assert.strictEqual(getDataSourceUrl('merolagani', symbol), `https://merolagani.com/CompanyDetail.aspx?symbol=${encodedSymbol}#0`);
    assert.strictEqual(getDataSourceUrl('sharesansar', symbol), `https://www.sharesansar.com/company/${encodedSymbol}`);
    assert.strictEqual(getDataSourceUrl('nepsealpha', symbol), `https://nepsealpha.com/search?q=${encodedSymbol}`);
});

test('getDataSourceUrl should return null for unsupported keys', () => {
    // @ts-expect-error Testing invalid runtime input
    assert.strictEqual(getDataSourceUrl('unsupported', 'AAPL'), null);
});

test('getDataSourceUrl should return null for "ask" key which is in type but not in DATA_SOURCES', () => {
    assert.strictEqual(getDataSourceUrl('ask', 'AAPL'), null);
});
