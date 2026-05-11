## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.
## 2026-05-11 - Memoize trading history categories\n**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and reductions for TradingHistoryCard which ran on every render.\n**Action:** Wrapped the data generation inside useMemo with tradingHistory and dividendDetails as dependencies.
