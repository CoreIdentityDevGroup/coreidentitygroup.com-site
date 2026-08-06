# CoreIdentity Website v5.0.1

## Trust Infrastructure Foundation

### Purpose

Reposition the CoreIdentity Development Group website around the canonical institutional progression:

**Trust Infrastructure → Intelligence → Assurance → Trust**

### Changes

- Replaced the governance-first homepage with the Trust Infrastructure narrative.
- Added the canonical positioning statement.
- Introduced the CoreIdentity Framework.
- Reframed the Governance Ecosystem as supporting institutional architecture.
- Updated primary homepage calls to action.
- Updated header positioning and navigation labels.
- Updated footer positioning and information architecture.
- Renamed the npm package from `chc-site` to `coreidentitygroup-site`.
- Added platinum visual treatments and responsive homepage styling.
- Preserved existing routes and underlying React architecture.

### Files Modified

- `package.json`
- `package-lock.json` when present
- `src/pages/HomePage.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/styles.css`

### Quality Gate

The installer concludes with:

```bash
npm run build
```

### Rollback

Pre-release copies of every modified file are stored under:

`release/v5.0.1/rollback/`
