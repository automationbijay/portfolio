## 2026-02-04 - Axios Version Verification
**Vulnerability:** Multiple vulnerabilities in Axios (CVEs related to SSRF and CRLF injection).
**Learning:** During the upgrade process, there was a challenge verifying the existence of version 1.16.0 due to inconsistencies in local/remote registry caches.
**Prevention:** Always use `npm view <package> versions` to verify the latest secure version against the public registry before applying upgrades.
