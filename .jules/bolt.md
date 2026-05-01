## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.

## 2026-04-29 - Un-memoized Array Sort in ScripDetails
**Learning:** Found a codebase-specific anti-pattern in `ScripDetails.tsx` where an array was cloned and sorted (`[...scripTransactions].sort(...)`) directly within the render phase, including expensive operations like `new Date().getTime()` on every loop.
**Action:** Next time when searching for performance bottlenecks, actively search for inline `.sort()`, `.filter()`, and `.map()` calls within JSX that perform complex operations. These should always be wrapped in a `useMemo` block to avoid redundant computations on every component render.
