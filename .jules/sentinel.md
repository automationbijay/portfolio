# Sentinel's Journal - Security Learnings

## 2026-02-05 - [Programmatic Reverse Tabnapping Protection]
**Vulnerability:** Programmatic `window.open(url, '_blank')` calls missing `noopener,noreferrer` options.
**Learning:** While modern browsers often default to `noopener` for standard HTML links, programmatic `window.open()` calls in some environments or older browsers might still expose the `window.opener` object, allowing the target page to redirect the source page.
**Prevention:** Always include `'noopener,noreferrer'` as the third argument when using `window.open()` for external URLs.
