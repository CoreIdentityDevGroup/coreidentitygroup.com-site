# CoreIdentity v7.2.24 — Public Authorization Labels

## Purpose
Complete the public abstraction boundary in the Governance Console by replacing the visible IIAAC dimension terminology while preserving the internal five-position authorization model.

## Public labels
- Identity
- Purpose
- Authority
- Scope
- Context

## Preserved implementation
The underlying IIAAC variable, five-position scenario arrays, failDim indexing, pass/fail sequencing, authorization decisions, and runtime behavior remain unchanged.

## Release boundary
- GovernanceConsolePage.tsx only, plus release notes
- No CSS changes
- No navigation changes
- No layout changes
- No lifecycle behavior changes
- No other pages changed
- Git main -> Cloudflare Git deployment; no Deploy Hook
