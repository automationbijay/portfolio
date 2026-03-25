## 2025-03-25 - Dashboard Component Memoization
**Learning:** Dashboard components that display aggregated data (like charts and metric cards) frequently perform heavy data transformations (sorting, slicing, reducing) directly inside the render body. This pattern causes unneeded work on every render, especially noticeable when rendering complex charts like Recharts, and allocates new arrays constantly.
**Action:** Always wrap these data transformations in `useMemo` hooks, depending only on the original data sources, to ensure visual components are fast and don't re-compute data unnecessarily.
