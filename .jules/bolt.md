## 2025-04-25 - React Component Performance Optmizations
**Learning:** Found that some charting and summary dashboard components were synchronously processing array manipulations, like multiple `.slice()`, `.sort()`, and `.reduce()`, right within the render cycle.
**Action:** When implementing charts and summary components, wrap expensive array manipulation or computations in a `useMemo` so that they only recalculate when their upstream source array explicitly changes.
