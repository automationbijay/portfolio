## 2024-05-18 - Dashboard Performance Optimization
**Learning:** Found that `AllocationChart` and `SectorDistribution` were re-calculating their entire data transforms (sorting and array reduction) on every single render. Since `holdings` comes from context, this happens frequently as unrelated context parts might trigger updates.
**Action:** Always wrap expensive array operations derived from context in `useMemo` hooks.
