# Core Holding Corporation — Cloudflare Pages (React)

## Why you saw a blank page
Cloudflare Pages will only render this site after it runs a Vite build.

If you upload the repository ZIP as a *static* site (no build), the browser receives an `index.html` that references TypeScript source (for example, `/src/main.tsx`). Browsers do not compile TypeScript, so nothing executes and you see a blank screen.

## Correct deployment (Cloudflare Pages build)
Deploy this project as a Cloudflare Pages **framework build**:

- **Framework preset:** Vite (or React)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** (leave blank unless you move the project into a subfolder)

After deployment, the output in `dist/` is what is served.

## SPA routing (important)
This project uses client-side routing. Cloudflare must rewrite all paths to `index.html`.

This repo includes `public/_redirects` with:

```
/*    /index.html   200
```

Vite copies `public/` into `dist/` automatically during build.

## If you must deploy by uploading a ZIP
Do this locally on a computer:

1. `npm install`
2. `npm run build`
3. Zip **the contents of `dist/`** (not the repository root) and upload that ZIP.

## Debug checklist
If the page is still blank, open DevTools → Console and check for:
- 404s on `/assets/...` (usually wrong output directory or rewrite missing)
- A JavaScript error caused by a missing environment variable
