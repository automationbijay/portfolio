## 2024-06-25 - React Component Re-render Performance
**Learning:** O(n log n) sorting operations inside React component render bodies without memoization are a common performance bottleneck in charting and data presentation components, as they execute on every render pass.
**Action:** Always look for inline array `.sort()`, `.reduce()`, or `.map()` methods returning new arrays/objects directly within the main component body in React, and wrap them in `useMemo` with appropriate dependency arrays.
