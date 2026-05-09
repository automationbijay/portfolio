## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.
## 2023-11-20 - Memoization in TradingHistoryCard
**Learning:** React components subscribed to global context containing frequently updating values (like live price changes) re-render often. If these components have computationally expensive derivations (like reducing or mapping large datasets) that don't depend on those frequently updating values, those derivations should be memoized.
**Action:** Always check what triggers re-renders in complex components, and apply `useMemo` to expensive array operations, especially those depending on static or less frequently changing parts of a global state.
