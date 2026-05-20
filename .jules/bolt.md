## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.
## 2026-05-20 - Inline Array Sorting in Render
**Learning:** Arrays being duplicated and sorted inside the JSX render path using `[...arr].sort()` is a common performance anti-pattern. This is especially expensive when the sort function involves object creation, like `new Date()`.
**Action:** When inspecting components, look for inline array mutations/sorts in JSX. Move these into existing `useMemo` blocks or create new ones to prevent O(N log N) work on every render.
