## 2025-05-15 - [Prototype Pollution in Data Maps]
**Vulnerability:** Untrusted external data from LTP API and analysis webhooks was being mapped directly into objects using user-controlled keys.
**Learning:** Using plain objects as maps for data received from external sources can lead to prototype pollution if keys like `__proto__` are present in the payload.
**Prevention:** Use `Object.create(null)` for internal maps and explicitly skip sensitive keys (`__proto__`, `constructor`, `prototype`) when iterating over untrusted data keys.
