import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const PAGE = path.join(ROOT, "src/pages/CoreIdentityTechnologiesPage.tsx");
const WRAPPER = path.join(ROOT, "src/components/CoreIdentityTechnologiesComposed.tsx");

function read(p){ return fs.readFileSync(p, "utf8"); }
function write(p,s){ fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p,s,"utf8"); }
function exists(p){ return fs.existsSync(p); }

if (!exists(PAGE)) throw new Error("Missing page: src/pages/CoreIdentityTechnologiesPage.tsx");
if (!exists(WRAPPER)) throw new Error("Missing wrapper: src/components/CoreIdentityTechnologiesComposed.tsx");

let changed = false;

/**
 * 1) PAGE: ensure it exports a default page component.
 *    - remove any lingering CoreIdentityTechnologiesComposed exports/imports
 *    - ensure `export default CoreIdentityTechnologiesPage;` exists (if the symbol exists)
 */
{
  let s = read(PAGE);

  // Remove lingering composed junk (defensive, idempotent)
  s = s.replace(/^\s*import\s+\{\s*CoreIdentityTechnologiesComposed\s*\}[\s\S]*?;\s*\n/gm, "");
  s = s.replace(/export\s+function\s+CoreIdentityTechnologiesComposed[\s\S]*?\n\}\s*\n?/gm, "");
  s = s.replace(/^\s*export\s+default\s+CoreIdentityTechnologiesComposed\s*;\s*\n?/gm, "");

  const hasDefaultFn = /export\s+default\s+function\s+\w+/.test(s);
  const hasDefaultRef = /export\s+default\s+CoreIdentityTechnologiesPage\s*;/.test(s);

  // If already default-exporting something, we do NOT touch it.
  if (!hasDefaultFn && !hasDefaultRef) {
    // We only add default export if the symbol exists in the file.
    const hasSymbol =
      /\bfunction\s+CoreIdentityTechnologiesPage\b/.test(s) ||
      /\bconst\s+CoreIdentityTechnologiesPage\b/.test(s) ||
      /\bclass\s+CoreIdentityTechnologiesPage\b/.test(s);

    if (!hasSymbol) {
      throw new Error(
        "CoreIdentityTechnologiesPage symbol not found in page file. " +
        "We cannot safely add a default export without knowing the component name."
      );
    }

    if (!s.endsWith("\n")) s += "\n";
    s += "\nexport default CoreIdentityTechnologiesPage;\n";
  }

  const sentinel = "/* CHC_PAGE_DEFAULT_EXPORT_ENFORCED */";
  if (!s.startsWith(sentinel)) s = `${sentinel}\n${s}`;

  const prev = read(PAGE);
  if (prev !== s) { write(PAGE, s); changed = true; }
}

/**
 * 2) WRAPPER: normalize to a single default import of the page
 *    and remove any named/namespace imports previously injected.
 */
{
  let s = read(WRAPPER);

  // Remove any prior page imports (named, default, namespace)
  s = s.replace(/^\s*import\s+\*\s+as\s+PageModule\s+from\s+["']\.\.\/pages\/CoreIdentityTechnologiesPage["']\s*;\s*\n/gm, "");
  s = s.replace(/^\s*import\s+CoreIdentityTechnologiesPage\s+from\s+["']\.\.\/pages\/CoreIdentityTechnologiesPage["']\s*;\s*\n/gm, "");
  s = s.replace(/^\s*import\s+\{\s*CoreIdentityTechnologiesPage\s*\}\s+from\s+["']\.\.\/pages\/CoreIdentityTechnologiesPage["']\s*;\s*\n/gm, "");

  // Remove any resolver block we injected
  s = s.replace(/^\s*const\s+CoreIdentityTechnologiesPage: any[\s\S]*?\;\s*\n/gm, "");

  // Ensure React import exists (don’t assume)
  if (!s.includes('import * as React from "react";')) {
    s = 'import * as React from "react";\n' + s;
  }

  // Ensure page default import exists
  const pageImport = `import CoreIdentityTechnologiesPage from "../pages/CoreIdentityTechnologiesPage";\n`;
  if (!s.includes(pageImport)) {
    // insert after React import
    s = s.replace('import * as React from "react";\n', 'import * as React from "react";\n' + pageImport);
  }

  const sentinel = "/* CHC_WRAPPER_DEFAULT_IMPORT_ENFORCED */";
  if (!s.startsWith(sentinel)) s = `${sentinel}\n${s}`;

  const prev = read(WRAPPER);
  if (prev !== s) { write(WRAPPER, s); changed = true; }
}

console.log(changed ? "Enforced page default export + wrapper default import." : "Already enforced (idempotent).");
execSync("npm run build", { stdio: "inherit" });
