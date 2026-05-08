## 2024-03-24 - Array Loop String Operations and React Keys

**Learning:** When dealing with large lists (like the holdings table) that implement client-side filtering via search input, evaluating string operations like `.toLowerCase()` inside the `Array.prototype.filter` loop (e.g., `searchQuery.toLowerCase()`) evaluates redundantly `N` times instead of once. Also using array indices as `key` inside mapped arrays results in poor performance during sorting and filtering, as React will mutate existing components instead of correctly rearranging them.

**Action:**
- Extract invariant string operations outside iteration loops.
- Use unique identifiers (`item.scrip`) for React `key` properties instead of array indices when rendering dynamic lists.
