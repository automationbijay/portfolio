## 2024-04-09 - Memoizing heavy calculations
**Learning:** React components sometimes re-run computationally intensive array/object manipulations (like mapping, reducing, sorting) on every render if not properly memoized, leading to slower UI updates.
**Action:** When working on Dashboard visualizations or heavy components that take large dataset dependencies, carefully review if `useMemo` is implemented. If we are mapping/sorting big lists from state, wrap it in a `useMemo` block using the appropriate dependency array.
