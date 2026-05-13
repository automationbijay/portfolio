## 2024-05-13 - [HoldingsTable / Timeline Performance Improvements]
**Learning:** React list rendering performance bottleneck due to missing `React.memo` for complex child elements and recreating strings during inner loops (like `searchQuery.toLowerCase()` inside a `.filter` block). Additionally, utilizing array indices as keys inhibits React's ability to skip renders.
**Action:** Extract large list elements into `React.memo()` components, cache expensive computations out of iterative methods, and employ unique, stable IDs as list keys to minimize unnecessary rendering.
