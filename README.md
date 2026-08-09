# CoreIdentity Development Group Website

Production website for **CoreIdentity Development Group Inc.**, architect of the **Governance Ecosystem for the Autonomous Era**.

CoreIdentity establishes the institutional architecture required for organizations to safely delegate autonomous execution while ensuring they remain in control.

> **Delegate Execution. Never Surrender Control.**

---

## 1. Website Purpose

This website is not designed as a conventional SaaS or product-marketing site. It presents CoreIdentity as an **institutional governance infrastructure enterprise** and communicates the architecture, doctrine, operating model, market relevance, and institutional standards associated with autonomous execution.

The site is designed for boards, executive leadership, sovereign institutions, regulated industries, private capital markets, financial institutions, healthcare organizations, critical infrastructure operators, and other environments where autonomous execution introduces fiduciary, regulatory, operational, safety, or legitimacy obligations.

The website must communicate four ideas consistently:

1. **Trust Infrastructure** — the architectural discipline.
2. **Autonomous Execution Governance (AEG)** — the operational doctrine.
3. **Institutional Chain of Legitimacy** — the continuous governance model.
4. **Autonomous Governed Execution** — the resulting operating state.

Together these form the **CoreIdentity Governance Ecosystem**.

---

## 2. Canonical Positioning

**CoreIdentity Development Group is the architect of the Governance Ecosystem for the Autonomous Era. The company enables institutions to safely delegate autonomous execution while ensuring they remain in control.**

The institutional sequence used throughout the site is:

**Trust Infrastructure → Intelligence → Assurance → Trust**

The governing principle is:

**Humans lead. Machines execute. Governance protects both.**

The operating standard is:

**Delegate Execution. Never Surrender Control.**

---

## 3. Design Philosophy

The website follows a restrained institutional design language rather than a software-product aesthetic.

### Design characteristics

- Platinum, silver, glass, charcoal, white, and restrained gold accents.
- High-contrast black masthead and footer.
- Large editorial serif display typography for institutional headlines.
- Clean sans-serif body typography for governance content and operating explanations.
- White or near-white institutional content canvases.
- Generous but controlled whitespace.
- Strong horizontal rules and section transitions.
- Minimal decorative UI.
- No dashboard-like product chrome.
- No unnecessary cards, gradients, badges, pills, or SaaS-style feature grids unless structurally justified.
- Visuals must appear as integrated institutional artifacts rather than screenshots or floating product cards.

### Visual standard

The design objective is **institutional-grade, board-ready, premium, and technically credible**.

Visual hierarchy should resemble a high-end institutional strategy or governance publication rather than a startup landing page.

---

## 4. Global Layout Architecture

The shared application layout is responsible for:

- persistent masthead;
- responsive navigation;
- shared `<main>` content boundary;
- global accessibility controls;
- footer;
- route-consistent page spacing;
- skip-link destination;
- responsive mobile behavior.

The layout must remain the single architectural control point for cross-site behavior wherever possible. Page-by-page duplication is prohibited when a shared control can solve the requirement once.

---

## 5. Information Architecture

The site is organized around four primary institutional areas.

### Framework

- Trust Infrastructure
- Intelligence
- Assurance
- Trust
- Governance Ecosystem

### Governance

- Governance Architecture
- Execution Integrity
- Verification at Scale
- Sovereign Assurance

### Company

- About
- Leadership
- Markets We Serve
- Advisory
- Governance Console
- Contact

### Knowledge / Insights

The Insights experience presents CoreIdentity research, doctrine, institutional analysis, and thought leadership.

Insights content must remain readable on the light institutional page system regardless of whether content originates from local structured content or a CMS-backed rendering path.

---

## 6. Markets We Serve

The Markets We Serve page uses an institutional, priority-ordered market taxonomy.

The current market order is:

1. **Private Capital Markets**
2. **Banking & Financial Services**
3. **Sovereign Nations**
4. **Healthcare**
5. **Critical Infrastructure**
6. **Energy & Utilities**
7. **Manufacturing**
8. **Smart Cities & Digital Government**
9. **Autonomous Enterprise**

The page should explain not simply what each market is, but why the Governance Ecosystem matters within that environment.

The governing premise is horizontal:

> Across markets, institutions must establish legitimate authority, enforce boundaries during execution, preserve durable evidence, and continuously prove that autonomous systems remain governed.

The site intentionally uses **Sovereign Nations** rather than a generic “Government” category.

---

## 7. Leadership Content Governance

Leadership content must be explicit, canonical, and deterministic.

Todd Morgan's website biography is treated as **website-owned canonical content** rather than relying upon a CMS record identifier or fallback-only rendering path.

The site must not allow a CMS document ID, fallback branch, or alternate data source to silently replace the approved Founder & CEO biography.

Leadership content is part of the public institutional record and should be changed only through controlled, reviewable releases.

---

## 8. Production Visual System

The website now uses production-ready institutional visuals rather than attempting to repair opaque image backgrounds at runtime.

### Trust Infrastructure visual

Canonical production asset:

```text
public/images/visuals/institutional-control-3d-production.png
```

This asset is rendered through a simple responsive image contract.

The Trust Infrastructure visual must not use:

- runtime masks;
- pseudo-element blending;
- flood-fill processing;
- opacity manipulation;
- destructive chroma-keying;
- `mix-blend-mode`;
- negative transforms;
- full-viewport expansion;
- image-specific CSS hacks.

### Governance Ecosystem / AEG visual

Canonical production asset:

```text
public/images/visuals/governance-ecosystem-3d-alpha.png
```

The AEG / Governance Ecosystem image is considered visually accepted and should remain frozen unless a deliberate future redesign is approved.

### Asset rule

**Production-ready asset → ordinary responsive rendering.**

Asset defects should be corrected at the asset layer, not disguised through increasingly complex runtime CSS.

---

## 9. Responsive Design Requirements

The website is designed for both desktop and mobile institutional use.

Required responsive behavior:

- no horizontal overflow;
- no clipped headings;
- no content hidden beneath the persistent masthead;
- no image running off the viewport;
- no uncontrolled `100vw` expansion;
- no negative transforms used to simulate full bleed;
- no excessive desktop dead space;
- images remain fully visible and centered;
- paragraph width remains readable;
- footer columns remain legible and navigable;
- mobile spacing is deliberate rather than inherited accidentally from desktop values.

Desktop and mobile are treated as separate acceptance surfaces.

---

## 10. Accessibility Architecture

Accessibility controls should be implemented at the architectural level whenever possible.

The shared layout is the preferred control point for requirements that apply across routes.

Current accessibility direction includes:

- keyboard-accessible navigation;
- global skip-link support;
- stable primary-content target;
- visible focus behavior;
- reduced-motion consideration;
- semantic landmarks;
- readable text contrast;
- route-wide consistency.

---

# AE-001 Accessibility Remediation — Summary

We addressed the accessibility issue identified by the AudioEye scan against the CoreIdentity website.

## Finding

AudioEye identified a failure under **WCAG 2.4.1 — Bypass Blocks**:

> “The page is missing a primary skip link.”

The site required keyboard users to navigate through the persistent header/navigation before reaching the primary page content.

## What we implemented

Rather than patching individual pages, we implemented the control at the shared application-layout level.

The remediation added:

- a global **“Skip to main content”** link in `src/components/Layout.tsx`;
- a stable `id="main-content"` destination on the shared `<main>` element;
- keyboard-focus styling in `src/styles.css`;
- hidden-by-default behavior during normal browsing;
- visible presentation when keyboard-focused;
- reduced-motion support;
- static acceptance checks incorporated into the scripted transformation.

Because the implementation resides in the shared `Layout.tsx`, the control applies across the site's routes rather than requiring page-by-page remediation.

## Release discipline

We performed the entire modification through scripted transforms—**no manual source editing**.

The first idempotent remediation script modified the source and ran acceptance checks:

```text
UPDATED: src/components/Layout.tsx
UPDATED: src/styles.css

AE-001 static acceptance checks: PASS
WCAG target: 2.4.1 Bypass Blocks
```

The production TypeScript/Vite build then completed successfully.

We subsequently ran a separate production release script that:

- verified the AE-001 controls existed;
- ran the pre-release production build;
- staged only the two intended source files;
- committed the change;
- pushed `main`;
- ran the required final production build.

## Git release

The change was committed as:

```text
3d09da9
fix: add WCAG 2.4.1 primary skip link
```

GitHub confirmed:

```text
5376f51..3d09da9  main -> main
```

The final build's version attestation also correctly changed to:

```text
version attestation -> dist/version.json (3d09da9)
```

That is important because it proves the accessibility change became part of the build generated from the new Git commit rather than merely existing as an uncommitted local modification.

## Remaining acceptance test

AE-001 is implemented and released, but final keyboard verification remains pending.

When a physical keyboard is available:

1. Load the page.
2. Press `Tab`.
3. Confirm **“Skip to main content”** appears.
4. Press `Enter`.
5. Confirm focus bypasses navigation and enters the primary content.

Normal mouse/touch browsing should show **no visual change whatsoever**.

If the hero, navigation, images, spacing, typography, or other page elements changed because of this accessibility release, that would constitute a regression.

## Current status

**AE-001 — Primary Skip Link**

- **WCAG:** 2.4.1 Bypass Blocks
- **Finding:** Validated
- **Remediation:** Implemented globally
- **Static acceptance:** PASS
- **Production build:** PASS
- **Git release:** PASS — `3d09da9`
- **Keyboard acceptance:** PENDING
- **Visual design impact expected:** None

This established the pattern for subsequent accessibility findings:

**identify the WCAG control → remediate at the architectural level → script the transform → validate it → build → release → verify production behavior**

---

## 11. Engineering and Release Discipline

The repository follows strict release controls.

### Mandatory rules

- **Zero hand edits.**
- All source changes must be performed through scripted transforms.
- Every transform must be **idempotent**.
- Every release script must be deterministic and fail closed.
- Every script must end with:

```bash
npm run build
```

- Build success is **Gate 1**, not final acceptance.
- Production rendering is **Gate 2**.
- No release is complete until the requested visible outcomes are confirmed.
- Do not use additive CSS patches when the controlling selector has not been identified.
- Do not use build success as a proxy for product quality.
- Do not reset production to an arbitrary older commit.
- Release from the currently attested production baseline.
- Commit only intended source files.
- Preserve Git history.

---

## 12. Deployment Model

The normal production path is:

```text
scripted transform
        ↓
source assertions
        ↓
npm run build
        ↓
controlled Git commit
        ↓
git push origin main
        ↓
Cloudflare Pages Git integration
        ↓
production deployment
        ↓
version attestation
        ↓
visual acceptance
```

Routine releases do **not** require a manually supplied Cloudflare Deploy Hook.

Cloudflare Pages deploys from the repository's `main` branch through Git integration.

The version attestation file is written during the production build and provides a direct relationship between the built artifact and the Git commit from which it was produced.

---

## 13. Acceptance Model

Every requested change should be evaluated at four layers.

### 1. Source acceptance

Prove the controlling source actually changed.

### 2. Build acceptance

`npm run build` must pass.

### 3. Production provenance

The deployed version must correspond to the expected Git SHA.

### 4. Rendered product acceptance

The requested outcome must be visibly correct in production.

Examples:

- biography text must be the approved biography;
- navigation must expose new routes;
- images must be fully visible and correctly integrated;
- article text must be readable;
- desktop spacing must be intentional;
- mobile must have no clipping or horizontal overflow;
- accessibility controls must work with actual keyboard interaction.

A technically successful release that fails the visible outcome is considered a **failed release**.

---

## 14. CSS and Visual Governance

The site previously accumulated overlapping CSS generations during rapid corrective releases.

The governing rule now is:

> **Fix causes. Remove conflicts. Do not win specificity wars.**

Requirements:

- identify the controlling selector before changing behavior;
- consolidate conflicting rules;
- avoid unnecessary `!important`;
- do not append broad resets to compensate for unknown source behavior;
- keep image rendering contracts asset-specific where necessary;
- maintain one authoritative spacing model per page family;
- treat desktop and mobile behavior explicitly.

---

## 15. Content and Terminology Guardrails

Canonical terminology includes:

- Governance Ecosystem for the Autonomous Era
- Trust Infrastructure
- Autonomous Execution Governance (AEG)
- Institutional Chain of Legitimacy
- Autonomous Governed Execution
- Institutional Assurance
- Institutional Trust

Avoid positioning CoreIdentity as:

- a generic SaaS company;
- a conventional software platform;
- a product suite defined primarily by feature names.

Preferred framing:

- institutional governance infrastructure enterprise;
- Governance Ecosystem;
- operational institutional architecture;
- institutional architecture for autonomous execution.

---

## 16. Repository Operating Principle

The repository should optimize for **successful outcomes, not successful scripts**.

A release is not high quality because:

- TypeScript compiled;
- Vite built;
- HTTP returned `200`;
- a CSS string exists;
- a Git push succeeded.

Those are engineering controls.

Product quality is established only when the intended institutional experience is correct in production.

---

## 17. Current Design-State Guardrails

The following visual decisions are considered accepted and should not be casually modified:

- black institutional masthead;
- platinum CoreIdentity identity system;
- editorial serif hero typography;
- light institutional content canvas;
- Governance Ecosystem / AEG production visual;
- Trust Infrastructure production visual;
- institutional footer structure;
- Markets We Serve priority taxonomy;
- shared navigation architecture;
- canonical Founder & CEO biography path;
- Git-based Cloudflare deployment model;
- shared-layout accessibility architecture.

Any future redesign should be deliberate, documented, and released through the same First-Principles acceptance process.

---

## 18. Build

Install dependencies:

```bash
npm install
```

Run the production build:

```bash
npm run build
```

The production build uses TypeScript and Vite and writes the version attestation into `dist/version.json`.

---

## 19. Production Standard

The website exists to communicate institutional control in the autonomous era.

Every design, engineering, accessibility, content, and deployment decision should reinforce the same principle:

> **Autonomy may increase. Institutional control must not decrease.**
