## 2025-02-12 - Dashboard Charts Re-renders
**Learning:** Dashboard chart components (`AllocationChart` and `SectorDistribution`) were recalculating data transformations (sorting, reducing, and slicing) on every single render. React `useMemo` should be used for expensive data manipulations to avoid unneeded re-renders when dependencies (like `holdings`) do not change.
**Action:** Always wrap data aggregations and sorting logic in `useMemo` inside functional components, especially when derived from context state, to ensure optimal performance.
