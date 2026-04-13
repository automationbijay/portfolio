## 2024-04-13 - Missing Memoization in Context Consumers
**Learning:** Dashboard components (`SectorDistribution`, `AllocationChart`, `TradingHistoryCard`) were consuming context that updates frequently (e.g., live LTP changes) and recalculating expensive array operations (sorting, mapping, reducing) on every render.
**Action:** Always wrap derived state calculations in `useMemo` when they depend on array data from a context that receives frequent updates to prevent main thread blocking during active market hours.
