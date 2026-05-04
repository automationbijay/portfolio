## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.

## 2026-05-04 - Memoization of complex list derivations
**Learning:** Found an opportunity to optimize components that use array methods like `.reduce()` or heavy mapping of objects to react elements directly in the component body. When generating metrics like `totalCashDividend` and lists of stats, doing it on every render can be expensive, especially with large datasets like `tradingHistory` and `dividendDetails`. Wrapping it in `useMemo` stops these from re-executing.
**Action:** Always verify if complex array transformations such as `reduce`, `map` over lists, and length accesses are being evaluated inside the render body. Wrap these logic chunks inside `useMemo` hooks returning all derivations.
