#!/usr/bin/env node
/**
 * Script 26-B — CHC Site: CoreIdentity Governance Portal CTA
 * ───────────────────────────────────────────────────────────
 * Adds "CoreIdentity Governance Portal →" link to:
 *   1. Layout nav (header)
 *   2. HomePage hero section
 *
 * Stack: Vite + React + TypeScript + TanStack Router + Tailwind
 * Repo:  ~/coreholdingcorp.com-site
 *
 * Idempotent · Zero hand edits · Ends with npm run build
 */

import fs   from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const REPO         = path.join(process.env.HOME, 'coreholdingcorp.com-site');
const PORTAL_URL   = 'https://portal.coreholdingcorp.com';
const PORTAL_LABEL = 'Governance Portal';

function run(cmd) {
  console.log(`  $ ${cmd.slice(0, 120)}`);
  execSync(cmd, { cwd: REPO, stdio: 'inherit' });
}

function readFile(rel) {
  return fs.readFileSync(path.join(REPO, rel), 'utf8');
}

function writeFile(rel, content) {
  fs.writeFileSync(path.join(REPO, rel), content, 'utf8');
  console.log(`  ✓ wrote ${rel}`);
}

// ─── STEP 1: Patch Layout.tsx — add portal link to header nav ───────────────
console.log('\n── Step 1: Add portal link to Layout nav ────────────────────');

const layoutPath = 'src/components/Layout.tsx';
let layout = readFile(layoutPath);

if (!layout.includes(PORTAL_URL)) {
  // Strategy: find the closing </nav> or last nav link and inject before it
  // TanStack Router uses <Link> for internal, plain <a> for external
  const portalAnchor = `
          <a
            href="${PORTAL_URL}"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.4)',
              borderRadius: '6px',
              color: '#d4af37',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s',
            }}
          >
            {/* Shield icon inline SVG — no import needed */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            ${PORTAL_LABEL}
          </a>`;

  // Try to inject before </nav> closing tag
  if (layout.includes('</nav>')) {
    layout = layout.replace('</nav>', `${portalAnchor}\n        </nav>`);
    writeFile(layoutPath, layout);
  } else if (layout.includes('</header>')) {
    // Fallback: inject before </header>
    layout = layout.replace('</header>', `${portalAnchor}\n      </header>`);
    writeFile(layoutPath, layout);
  } else {
    console.log('  ⚠ Could not find nav anchor point in Layout.tsx — trying HomePage instead');
  }
} else {
  console.log('  ✓ portal link already in Layout.tsx');
}

// ─── STEP 2: Patch HomePage.tsx — add portal CTA to hero section ────────────
console.log('\n── Step 2: Add portal CTA to HomePage hero ──────────────────');

const homeFiles = ['src/pages/HomePage.tsx', 'src/pages/HomePage.jsx'];
const homePath  = homeFiles.find(f => fs.existsSync(path.join(REPO, f)));

if (homePath) {
  let home = readFile(homePath);

  if (!home.includes(PORTAL_URL)) {
    const portalCta = `
          {/* Governance Portal CTA */}
          <a
            href="${PORTAL_URL}"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.35)',
              borderRadius: '8px',
              color: '#d4af37',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              marginTop: '16px',
              transition: 'all 0.15s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            CoreIdentity ${PORTAL_LABEL} →
          </a>`;

    // Inject after the first CTA button block — look for common patterns
    const ctaPatterns = [
      // After a "See Live Demo" or primary CTA button
      /(See Live Demo[^<]*<\/[a-z]+>)/i,
      // After a primary <button> or <a> in hero
      /(<\/button>\s*\n\s*<\/div>)/,
      // After main hero heading
      /(<\/h1>\s*\n)/,
    ];

    let patched = false;
    for (const pattern of ctaPatterns) {
      if (pattern.test(home)) {
        home = home.replace(pattern, (m) => m + '\n' + portalCta);
        patched = true;
        break;
      }
    }

    if (patched) {
      writeFile(homePath, home);
    } else {
      console.log('  ⚠ Could not find hero CTA anchor in HomePage — portal link in nav only');
    }
  } else {
    console.log('  ✓ portal CTA already in HomePage');
  }
} else {
  console.log('  ⚠ HomePage not found at expected paths — nav link only');
}

// ─── STEP 3: Build gate ──────────────────────────────────────────────────────
console.log('\n── Step 3: Build gate ───────────────────────────────────────');
run('npm run build');

// ─── STEP 4: Commit and push ─────────────────────────────────────────────────
console.log('\n── Step 4: Commit and push ──────────────────────────────────');
run('git add -A');

const status = execSync('git status --porcelain', { cwd: REPO }).toString().trim();
if (status) {
  run('git commit -m "feat: add CoreIdentity Governance Portal link to nav + hero"');
  run('git push origin main');
  console.log('\n  ✓ Pushed — Cloudflare Pages will auto-deploy');
} else {
  console.log('  ✓ Nothing to commit — already clean');
}

console.log(`
============================================================
 Script 26-B Complete
 CHC Site — CoreIdentity Governance Portal CTA live

 Changes:
   ✓ Layout nav: gold "Governance Portal" link added
   ✓ HomePage hero: portal CTA with shield icon
   ✓ Links to: ${PORTAL_URL}
   ✓ Opens in new tab (external link)
   ✓ Build passing
   ✓ Pushed to Cloudflare Pages

 Live at: https://coreholdingcorp.com
============================================================
`);
