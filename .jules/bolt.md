## 2026-04-29 - Memoization in Dashboard Charts
**Learning:** Found an opportunity to use useMemo in React to prevent recalculating array operations and sorts for UI charts that only need to recalculate when the specific list changes.
**Action:** Next time looking for optimization, verify if we have data transformations (like map, sort, reduce) happening in render body and wrap them in useMemo.
## 2026-05-18 - Missing documentation leads to rejected PR
**Learning:** Found a performance bottleneck with `reduce` in `DonutChart.tsx` and `TradingHistoryCard.tsx` where array mapping and reduction occurred every render cycle causing CPU overhead. Optimization was added successfully but my PR was initially rejected. I forgot to include documentation/comments about what the optimization was and what its impact is.
**Action:** Next time when implementing an optimization, remember to ALWAYS include the 💡 What, 🎯 Why, 📊 Impact documentation in the code.
