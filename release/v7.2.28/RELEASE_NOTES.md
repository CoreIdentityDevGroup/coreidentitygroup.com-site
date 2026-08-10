# CoreIdentity v7.2.28 — Framework Density Cascade Correction

## Root cause
An earlier canonical platinum-consolidation rule controls direct framework-section padding and framework-hero padding with `!important`. The v7.2.27 refinement did not consistently outrank that rule, so most intended density changes were not visible.

## Correction
- Removes the ineffective v7.2.27 density override block.
- Establishes one canonical v7.2.28 direct-child section density contract.
- Uses `!important` only where required to supersede the existing canonical cascade.
- Reduces hero height, section whitespace, H1/H2 scale, diagram spacing, definition spacing, assurance/trust vertical flow spacing, and callout spacing.
- Preserves the already-approved smaller next-page CTA.
- Adds stronger tablet/mobile density contracts.

## Guardrails
- CSS only.
- No copy changes.
- No image changes.
- No routes/order changes.
- No navigation changes.
- No Governance Console changes.
- Existing Trust Infrastructure production visual remains unchanged.
