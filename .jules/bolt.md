## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.

## 2024-05-18 - Memoization in TradingHistoryCard Component
**Learning:** Found an opportunity to use `useMemo` in React to prevent recalculating array operations and sorts for Trading History Card that only need to recalculate when the specific list changes. Re-calculating array aggregations inline caused unnecessary rerenders in the component tree.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in `useMemo`.
