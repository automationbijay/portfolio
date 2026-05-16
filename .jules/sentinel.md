## 2026-02-03 - [Privacy Disclosure Inconsistency]
**Vulnerability:** Misleading privacy claims in UI ("No Server Uploads") while backend code transmitted full financial data to a configured `WEBHOOK_URL`.
**Learning:** High-level UI components and low-level context/data logic can drift apart, leading to deceptive privacy policies even if unintentional.
**Prevention:** Always verify UI privacy claims against actual network activity and environmental configuration (e.g., `WEBHOOK_URL`). Add automated checks for sensitive data transmission.

## 2026-02-03 - [Unsanitized External URL Parameters]
**Vulnerability:** `brokerNo` state was used to construct external URLs (TMS portals) without strict range validation or sanitization (e.g., non-integers, out-of-bounds numbers).
**Learning:** Even internal state used for navigation should be treated as untrusted if it can be influenced by user input or local storage.
**Prevention:** Implement strict range validation and type sanitization at the state management layer (e.g., `Math.floor`, range checks) before use in dynamic URL generation.
