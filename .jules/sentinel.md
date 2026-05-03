## 2026-02-05 - [Prototype Pollution Protection from External Financial APIs]
**Vulnerability:** External data sources (LTP API and Analysis Webhook) provide data that is used as keys in JavaScript objects (e.g., `map[item.Script] = price`). If these external sources are compromised or return malicious keys like `__proto__`, it can lead to prototype pollution.
**Learning:** Even "trusted" or "passive" data feeds like stock prices can be vectors for security issues if they are dynamically used to populate objects without validation.
**Prevention:** Always validate external strings before using them as keys in objects. Use a whitelist or a helper like `isValidKey` to filter out `__proto__`, `constructor`, and `prototype`.
