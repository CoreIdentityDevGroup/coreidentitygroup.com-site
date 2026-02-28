import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();

const PAGE = path.join(ROOT, "src/pages/CoreIdentityTechnologiesPage.tsx");
const WRAPPER = path.join(ROOT, "src/components/CoreIdentityTechnologiesComposed.tsx");

function mustExist(p) {
  if (!fs.existsSync(p)) throw new Error(`Missing file: ${p}`);
}
function read(p){ return fs.readFileSync(p, "utf8"); }
function writeIfChanged(p, next){
  const prev = fs.existsSync(p) ? read(p) : null;
  if (prev === next) return false;
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, next, "utf8");
  return true;
}

mustExist(PAGE);
mustExist(WRAPPER);

let changed = false;

/**
 * 1) Sanitize PAGE: remove any lingering default export to CoreIdentityTechnologiesComposed
 *    and ensure the default export points to the page component (if needed).
 */
{
  let s = read(PAGE);

  // Remove the bad lingering default export line
  s = s.replace(/^\s*export\s+default\s+CoreIdentityTechnologiesComposed\s*;\s*\n?/gm, "");

  // If the file defines the page function but doesn't default-export it,
  // add `export default CoreIdentityTechnologiesPage;` at end.
  const hasDefaultPageFn =
    /export\s+default\s+function\s+CoreIdentityTechnologiesPage\b/.test(s);

  const hasDefaultExportRef =
    /export\s+default\s+CoreIdentityTechnologiesPage\s*;/.test(s);

  const hasNamedPageDecl =
    /\bfunction\s+CoreIdentityTechnologiesPage\b/.test(s) ||
    /\bconst\s+CoreIdentityTechnologiesPage\b/.test(s);

  if (!hasDefaultPageFn && !hasDefaultExportRef && hasNamedPageDecl) {
    // Ensure file ends with newline then add default export
    if (!s.endsWith("\n")) s += "\n";
    s += "export default CoreIdentityTechnologiesPage;\n";
  }

  const sentinel = "/* CHC_PAGE_EXPORT_REPAIRED */";
  if (!s.startsWith(sentinel)) s = `${sentinel}\n${s}`;

  changed = writeIfChanged(PAGE, s) || changed;
}

/**
 * 2) Fix WRAPPER import style to match default-exported page:
 *    - convert `import { CoreIdentityTechnologiesPage } from "../pages/CoreIdentityTechnologiesPage";`
 *      to `import CoreIdentityTechnologiesPage from "../pages/CoreIdentityTechnologiesPage";`
 */
{
  let s = read(WRAPPER);

  // Normalize to default import (idempotent)
  s = s.replace(
    /^\s*import\s+\{\s*CoreIdentityTechnologiesPage\s*\}\s+from\s+["'](\.\.\/pages\/CoreIdentityTechnologiesPage)["']\s*;\s*$/m,
    `import CoreIdentityTechnologiesPage from "$1";`
  );

  // If wrapper is still using an alias-based import from older attempts, fix it too
  s = s.replace(
    /^\s*import\s+\{\s*CoreIdentityTechnologiesPage\s*\}\s+from\s+["'][^"']*CoreIdentityTechnologiesPage["']\s*;\s*$/m,
    `import CoreIdentityTechnologiesPage from "../pages/CoreIdentityTechnologiesPage";`
  );

  const sentinel = "/* CHC_WRAPPER_IMPORT_REPAIRED */";
  if (!s.startsWith(sentinel)) s = `${sentinel}\n${s}`;

  changed = writeIfChanged(WRAPPER, s) || changed;
}

console.log(changed ? "Repaired page exports + wrapper import (idempotent)." : "Already repaired (idempotent).");

execSync("npm run build", { stdio: "inherit" });
