import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const WRAPPER = path.join(ROOT, "src/components/CoreIdentityTechnologiesComposed.tsx");

if (!fs.existsSync(WRAPPER)) {
  throw new Error("Wrapper not found: src/components/CoreIdentityTechnologiesComposed.tsx");
}

let s = fs.readFileSync(WRAPPER, "utf8");

// Replace ANY existing import of the page with a namespace import,
// then normalize to a single component reference.
s = s.replace(
  /^\s*import\s+.*CoreIdentityTechnologiesPage.*from\s+["']\.\.\/pages\/CoreIdentityTechnologiesPage["']\s*;\s*$/gm,
  ""
);

// Ensure we have a namespace import (idempotent)
const nsImport = `import * as PageModule from "../pages/CoreIdentityTechnologiesPage";\n`;
if (!s.includes(nsImport)) {
  // Insert after React import if present, else top
  if (s.includes('import * as React from "react";')) {
    s = s.replace('import * as React from "react";\n', 'import * as React from "react";\n' + nsImport);
  } else {
    s = nsImport + s;
  }
}

// Ensure we have a resolver for the page component
const resolver =
`const CoreIdentityTechnologiesPage: any =
  (PageModule as any).CoreIdentityTechnologiesPage ?? (PageModule as any).default;
`;

if (!s.includes("const CoreIdentityTechnologiesPage")) {
  // place after namespace import
  s = s.replace(nsImport, nsImport + resolver + "\n");
}

// Add sentinel
const sentinel = "/* CHC_WRAPPER_IMPORT_NORMALIZED */";
if (!s.startsWith(sentinel)) s = `${sentinel}\n${s}`;

fs.writeFileSync(WRAPPER, s, "utf8");

console.log("Normalized wrapper to support default OR named page export (idempotent).");

execSync("npm run build", { stdio: "inherit" });
