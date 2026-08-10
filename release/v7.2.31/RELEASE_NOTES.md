# CoreIdentity v7.2.31 — Leadership Profile Asset Recovery

## Root cause
The v7.2.29a production screenshot showed the image alt text inside the circular portrait region. The markup rendered, but the public-path image did not resolve reliably. The float-based presentation also compressed Todd Morgan's name/title into a narrow mobile column.

## Fix
- Moves the supplied portrait into `src/assets/leadership`.
- Imports the portrait through Vite so the asset is fingerprinted and emitted with the production bundle.
- Eliminates dependency on the prior `/public/images/leadership/...` runtime path.
- Removes float/shape-outside profile wrapping.
- Stacks the portrait cleanly above the identity block on mobile.
- Adds Leadership-specific fixed-header top clearance.
- Preserves the canonical biography and LinkedIn behavior.

## Guardrails
- Supplied image copied byte-for-byte.
- No biography copy changes.
- No image regeneration or retouching.
- No navigation changes.
- No other page content changes.
