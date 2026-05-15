## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.
## 2026-05-15 - Memoizing Derived Values and Formatted Arrays
**Learning:** Discovered that mapping data into React component props (e.g. creating formatting objects) dynamically during render can cause unintended re-renders for children and consumes unnecessary memory cycles, even if data hasn't changed. Also noted multiple reductions over similar data points ()
**Action:** Grouped mapping, object instantiations, and O(n) reduction iterations within  blocks using corresponding dependencies, especially useful since parent components re-render when generic ticker (LTP) states update.
## 2026-05-15 - Memoizing Derived Values and Formatted Arrays
**Learning:** Discovered that mapping data into React component props (e.g. creating formatting objects) dynamically during render can cause unintended re-renders for children and consumes unnecessary memory cycles, even if data hasn't changed. Also noted multiple reductions over similar data points ('dividendDetails').
**Action:** Grouped mapping, object instantiations, and O(n) reduction iterations within useMemo blocks using corresponding dependencies, especially useful since parent components re-render when generic ticker (LTP) states update.
