## 2026-02-05 - URL Sanitization for External Data Sources
**Vulnerability:** External URLs were being constructed using raw stock symbols without encoding.
**Learning:** Symbols in this market can occasionally contain special characters (like '&' in 'NICA & CO') which can break URL structures or lead to unexpected behavior when navigating to external analysis sites.
**Prevention:** Always use `encodeURIComponent` when embedding dynamic variables into URL templates for external navigation.

## 2026-02-05 - Broker Setting Range Validation
**Vulnerability:** The broker number setting lacked range validation, allowing any numeric value to be stored in local storage and state.
**Learning:** Even for client-side only apps, maintaining data integrity in `localStorage` prevents "logic bugs" where the UI might attempt to construct invalid URLs (e.g., `tms999.nepsetms.com.np`) based on unvalidated input.
**Prevention:** Implement strict range and type validation in all state-update "actions" before persisting to local storage.
