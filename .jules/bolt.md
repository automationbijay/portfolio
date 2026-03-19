## 2024-05-19 - Unmemoized array manipulation bottlenecks

**Learning:** Due to the client-side architecture handling entire holdings arrays, unmemoized `sort()` and `reduce()` operations inside React component render functions (e.g. AllocationChart, SectorDistribution) are repeatedly executed on every re-render (e.g., when hover states change or parent re-renders). This causes an O(N log N) performance cost per render.

**Action:** Always wrap derived state that involves sorting or heavy reduction of large arrays (`holdings`, `transactionHistory`) in `useMemo` hooks.
