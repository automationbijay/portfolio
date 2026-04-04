## 2026-04-04 - Optimize sorting and filtering
**Learning:** Found that `.sort()` with date parsing inside the JSX render loop causes unnecessary recalculations and performance hits on every render. Similarly, `.toLowerCase()` inside array filtering loop can be optimized by extracting it out of the loop.
**Action:** Always wrap expensive calculations like sorting and filtering with `useMemo`, and pre-compute repetitive operations (like converting search queries to lowercase) outside of loops to prevent redundant work.
