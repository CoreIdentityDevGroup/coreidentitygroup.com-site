# CoreIdentity v7.2.22 — Social Preview v2 Cache Bust

Forces social crawlers to request a new immutable image URL.

- Adds `public/coreidentity-social-preview-v2.png` as a byte-identical copy of the approved production card.
- Updates `og:image`, `og:image:secure_url`, and `twitter:image` to the v2 URL.
- Preserves the approved social title and description.
- No homepage, CSS, layout, navigation, biography, framework-image, or page-copy changes.
- Deployment remains Git `main` -> Cloudflare Git integration; no Deploy Hook.
