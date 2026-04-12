## 2026-04-12 - Memoizing Dashboard Charts
**Learning:** High-level dashboard components performing deep calculations based on large 'holdings' context array caused re-renders across the dashboard on minor state changes.
**Action:** Always wrap data aggregation (like reductions and sorting for charts) in `useMemo` at the component level when depending on global context arrays.
