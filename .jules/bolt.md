## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.

## 2026-04-29 - Array Operations in Render Body
**Learning:** Arrays that are mapped, filtered, or sorted directly within a component's render body will be re-computed on every render.
**Action:** When a calculation is moderately expensive (such as `.sort()` with `new Date()`), always move it to a `useMemo` hook, especially if the array values do not change on every render.
