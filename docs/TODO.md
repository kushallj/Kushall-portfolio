# Maintenance TODOs

## Dependencies

- clsx@^2.1.1 appears unmaintained. Evaluate alternatives like `classnames` or utility-less patterns, or monitor for upstream maintenance resume. Track for breaking changes and security notices.
  - Action: Re-assess quarterly or upon next dependency update.
  - Notes: Current usage is minimal; no immediate functional risk identified.

- Ensure dependency auditing remains part of CI (`npm audit --audit-level=moderate`) and review findings regularly. Consider adding `osv-scanner` for broader ecosystem coverage.
