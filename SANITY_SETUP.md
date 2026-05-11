# Sanity CMS Setup — CoreIdentity

This document describes the one-time steps to connect the CoreIdentity site to a live Sanity project.

---

## 1. Create a Sanity Project

```bash
# Install Sanity CLI globally if you haven't already
npm install -g @sanity/cli

# Create a new project at sanity.io/manage (or via CLI)
# Note the Project ID shown after creation — you will need it in step 2.
```

Alternatively, go to [sanity.io/manage](https://www.sanity.io/manage), click **New project**, name it **CoreIdentity CMS**, and select the **production** dataset.

---

## 2. Add `VITE_wqmjbrvw` to Cloudflare Pages

1. Open [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → your CoreIdentity Pages project.
2. Go to **Settings → Environment variables**.
3. Add a variable for both **Production** and **Preview**:
   - **Variable name:** `VITE_wqmjbrvw`
   - **Value:** your Sanity Project ID (e.g. `abc12345`)
4. Save and redeploy (or push a new commit to trigger a build).

> The site's `src/lib/sanity.ts` reads this variable at build time. Until it is set, the site falls back to static local data — no breakage.

---

## 3. Update `studio/sanity.config.ts`

Replace the placeholder project ID with your real one:

```ts
// studio/sanity.config.ts
projectId: 'YOUR_REAL_PROJECT_ID',  // replace wqmjbrvw
```

Commit this change.

---

## 4. Configure CORS in Sanity

In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API → CORS origins**, add:

- Your Cloudflare Pages production URL (e.g. `https://coreholdingcorp.com`)
- Your Cloudflare Pages preview URL pattern (e.g. `https://*.coreholdingcorp.pages.dev`)
- `http://localhost:5173` for local development

---

## 5. Deploy Sanity Studio

```bash
cd studio
npm install
npx sanity deploy
```

You will be prompted to choose a hostname (e.g. `coreidentity.sanity.studio`). After deployment, the studio is accessible at that URL and you can start creating content.

---

## 6. Add a Cloudflare Pages Webhook to Sanity Deploy Hooks

Sanity can trigger a Cloudflare Pages rebuild whenever content is published:

1. In Cloudflare Pages → **Settings → Build & deployments → Deploy hooks** — create a new hook and copy the URL.
2. In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API → Webhooks** — add a new webhook:
   - **Name:** Cloudflare Pages rebuild
   - **URL:** paste the Cloudflare deploy hook URL
   - **Trigger on:** `create`, `update`, `delete` for document types: `post`, `page`, `stat`, `teamMember`
3. Save. Content publishes in Sanity will now trigger a Cloudflare Pages rebuild automatically.

---

## Content Types

| Schema | Purpose | Editable fields |
|---|---|---|
| `post` | Blog posts | title, slug, publishedAt, excerpt, body (rich text), author |
| `page` | Page copy | heroHeadline, heroSubtitle, sections[]{heading, body} |
| `stat` | Stats bars | label, value, pageReference |
| `teamMember` | Leadership bios | name, title, bio (rich text), photo, linkedIn |

---

## Local Development with Sanity

```bash
# In the main site directory — set the env var in a local .env.local
echo "VITE_wqmjbrvw=your_project_id" >> .env.local

# Run Vite dev server
npm run dev

# In a separate terminal, run Sanity Studio locally
cd studio && npm run dev
```

> `.env.local` is already in `.gitignore` — your project ID will not be committed.
