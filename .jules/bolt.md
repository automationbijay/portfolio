## 2024-04-14 - Optimized `formatCurrency` and `formatNumber`
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside formatting functions causes significant overhead when called many times in a render cycle. In a React application that renders tables and lists with many numbers, this can lead to performance degradation.
**Action:** Created singleton `Intl.NumberFormat` instances and reused them inside `formatCurrency` and `formatNumber` to improve performance dramatically.
