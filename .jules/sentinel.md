# Sentinel's Journal

## 2026-02-04 - [CRITICAL] Sensitive PII in Repository
**Vulnerability:** Found multiple CSV and Excel files in the repository root containing sensitive investor data, including Demat numbers and financial transactions.
**Learning:** Sample data or exports from Meroshare were accidentally committed to the repository. This exposes sensitive personal and financial information of the user.
**Prevention:** Add CSV and Excel files to `.gitignore` and ensure that only sanitized sample data is used for testing or documentation.
