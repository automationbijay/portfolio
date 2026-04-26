## 2024-05-18 - Optimized Dashboard Aggregations
**Learning:** The SectorDistribution and AllocationChart components were recomputing their arrays on every render (which were large enough arrays derived from holdings), even when nothing was changing. React-hook rules were also throwing off linting due to early returns.
**Action:** Use useMemo to cache computed properties based on state like `holdings`. Move conditional useMemos above early returns to comply with React's Rules of Hooks.
