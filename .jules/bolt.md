## 2025-04-30 - Local Component Memoization

**Learning:** Relying heavily on global state (like `usePortfolio` context) causes frequent, cascading re-renders in higher-level dashboard components whenever unrelated state within the context changes. Calculating derived data (e.g., sector distribution mapping, chart data sorting, timeline/dividend history generation) inline during render can be an unexpectedly large performance bottleneck on a dashboard.
**Action:** Always wrap expensive aggregations (e.g. `reduce`, `map`, `sort`, `slice`) in `useMemo` hooks, keyed by exactly the slice of global context required for the calculation. Do not perform large data manipulation directly in render bodies.
