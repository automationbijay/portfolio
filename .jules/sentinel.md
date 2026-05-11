## 2026-05-11 - [Dependency Update]
**Vulnerability:** Axios < 1.16.0 was vulnerable to multiple issues including SSRF and Prototype Pollution.
**Learning:** Even if lint and tests pass, always verify the versions against the registry and current date to ensure they are real and effective.
**Prevention:** Regularly run `npm audit` and keep core networking libraries updated.
