## 2024-05-24 - React Dashboard Data Processing
**Learning:** Found that expensive array operations (reduce, map, sort) were happening directly in component bodies for `AllocationChart` and `SectorDistribution`, causing unnecessary recalculations on every render.
**Action:** Always wrap data aggregations (especially those dealing with arrays of portfolio holdings) in `useMemo` hooks, depending only on the raw data source, to prevent blocking the main thread during simple state updates or re-renders.
