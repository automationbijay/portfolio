## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.

## 2026-05-16 - Memoization of Trading History
**Learning:** Discovered an expensive `reduce` and multiple `map` operations in the `TradingHistoryCard` component being run on every render. Given this component deals with analyzing full trading history and dividends arrays, wrapping the metric calculations in a `useMemo` avoids performance bottlenecks as the application scales or is re-rendered.
**Action:** When finding complex array aggregations like `reduce` and `map` inside a component rendering logic, ensure it's wrapped in `useMemo` and has proper dependencies like `[tradingHistory, dividendDetails]`.
