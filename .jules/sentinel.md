## 2025-05-23 - [Harden URL Generation & Dependency Upgrade]
**Vulnerability:** Malformed or potentially injectable URL parameters in external data source links and known vulnerabilities in Axios.
**Learning:** Upgraded Axios to 1.16.1 to fix high-severity security issues (SSRF, CRLF injection). Applied `encodeURIComponent` to dynamic URL parameters to ensure safe navigation to external data sources.
**Prevention:** Regularly audit and upgrade core dependencies. Always sanitize dynamic data used in URL construction.
