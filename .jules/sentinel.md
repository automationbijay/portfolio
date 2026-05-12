## 2026-05-12 - [CRITICAL] Exposure of Sensitive Financial Data in Repository
**Vulnerability:** Personal financial records, including Demat numbers, transaction history, and portfolio details, were committed to the repository root as CSV and XLSX files.
**Learning:** These files were likely used for testing or debugging but were accidentally included in the version control, exposing sensitive user information.
**Prevention:** Strictly enforce `.gitignore` for financial data formats (*.csv, *.xlsx) and use dummy data for testing. Conduct regular scans for sensitive files in the repository.
