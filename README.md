# CHC Cloudflare Pages — React + TanStack Router

## Build
- `npm install`
- `npm run dev`
- `npm run build` → outputs `dist/`

## Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`

## Contact form
`/api/contact` is implemented as a Cloudflare Pages Function. If you bind a KV namespace named `CONTACTS`, submissions will be persisted.
