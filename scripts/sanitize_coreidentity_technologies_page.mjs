import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const PAGE = path.join(ROOT, "src/pages/CoreIdentityTechnologiesPage.tsx");

if (!fs.existsSync(PAGE)) {
  throw new Error("CoreIdentityTechnologiesPage.tsx not found at expected path.");
}

let src = fs.readFileSync(PAGE, "utf8");

// Remove any import of the composed component
src = src.replace(
  /^\s*import\s+\{\s*CoreIdentityTechnologiesComposed\s*\}\s+from\s+["'][^"']*CoreIdentityTechnologiesComposed["']\s*;\s*\n/gm,
  ""
);

// Remove any exported composed function inside the page
src = src.replace(
  /export\s+function\s+CoreIdentityTechnologiesComposed\s*\([\s\S]*?\n\}/gm,
  ""
);

// Defensive: remove non-exported composed definitions too
src = src.replace(
  /function\s+CoreIdentityTechnologiesComposed\s*\([\s\S]*?\n\}/gm,
  ""
);

// Marker for idempotency
const sentinel = "/* CHC_PAGE_SANITIZED */";
if (!src.startsWith(sentinel)) src = `${sentinel}\n${src}`;

fs.writeFileSync(PAGE, src, "utf8");

console.log("Sanitized CoreIdentityTechnologiesPage.tsx (removed composed contamination).");

execSync("npm run build", { stdio: "inherit" });
