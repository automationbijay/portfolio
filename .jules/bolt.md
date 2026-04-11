## 2023-11-09 - [Missing Memoization in React Charts]
**Learning:** Found O(N log N) sorting logic computing `chartData` without memoization directly in the render flow of chart components (`AllocationChart`, `SectorDistribution`). In a data-heavy application, failing to memoize array transforms that construct chart data from a large un-memoized prop will cause performance degradation on unrelated component updates.
**Action:** Always wrap data aggregations and sorts for charts using `useMemo` when they depend on top-level state arrays like `holdings`.
