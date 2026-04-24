## 2025-02-18 - React Code Splitting Opportunity
**Learning:** Found that large route components (Dashboard, Portfolio, Dividends, Settings) in `src/App.tsx` were all loaded synchronously, causing the main chunk to be over 724KB.
**Action:** Use `React.lazy()` and `Suspense` for code-splitting these top-level components to significantly reduce the main bundle size and improve initial load performance.
