# Sentinel Security Journal 🛡️

This journal tracks critical security learnings and vulnerability patterns identified in the Portfolio Analyzer codebase.

## 2026-02-05 - Tab-nabbing Protection for External Links
**Vulnerability:** Use of `window.open(url, '_blank')` without security features allowed potential "tab-nabbing" where the opened page could gain partial access to the original window via `window.opener`.
**Learning:** React's `<a>` tags with `target="_blank"` are often automatically handled or linted, but manual `window.open` calls require explicit inclusion of `'noopener,noreferrer'` as the third argument to ensure the same level of security.
**Prevention:** Always use `window.open(url, '_blank', 'noopener,noreferrer')` when navigating to external or untrusted domains to isolate the new browsing context.
