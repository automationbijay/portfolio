## 2024-05-24 - Code-splitting top-level routes
**Learning:** Initial chunk size for the application was quite large (> 700 KB after minification) because all main components (Dashboard, Portfolio, Dividends, Settings) were bundled into the main JS chunk.
**Action:** Implemented code splitting using React `lazy` and `Suspense` in `src/App.tsx`. This reduced the main chunk size from 724.06 kB to 301.32 kB, deferring the loading of the route-specific code until the user actually navigates to those tabs.
