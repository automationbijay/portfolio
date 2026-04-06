# Bolt's Journal

## 2024-05-24 - Avoiding Render-Loop Sorting With Expensive Date Parsing
**Learning:** Found an instance where an array of transactions was being sorted using `new Date().getTime()` during the React render phase. Sorting operations with custom parsers take O(N log N) time and execute expensive `new Date` on every comparison. In combination with being inside the render loop, this causes heavy unnecessary computations upon every state update. Also learned that using indices (`idx`) as React component `key`s when mapping over arrays that might be sorted/filtered forces React to unnecessarily unmount and remount DOM elements.
**Action:** Always verify that complex computations, such as filtering and sorting, are safely encapsulated inside `useMemo` hooks. Ensure list mappings use stable `key`s derived from data (e.g., `item.scrip` or `tx.id`) rather than mapping indices to avoid cascading unmounts/remounts.
