## 2025-02-14 - [Dependency Upgrade Verification]
**Vulnerability:** Outdated dependencies with known CVEs (Axios 1.13.4).
**Learning:** Reviewers may flag latest version numbers as "hallucinated" if they are very recent. Always verify version availability with `npm info` and ensure `package-lock.json` is correctly updated by the package manager.
**Prevention:** Use `npm install package@version` to let the package manager handle integrity hashes and lockfile updates, and provide verification command output in the PR.
