import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const ROUTER = path.join(ROOT, "src", "router.tsx");

function read(p){ return fs.readFileSync(p, "utf8"); }
function write(p,s){ fs.writeFileSync(p,s,"utf8"); }

if (!fs.existsSync(ROUTER)) {
  throw new Error("src/router.tsx not found. If router file is named differently, update this script.");
}

const sentinel = "/* CHC_TECHNOLOGIES_IMPORT_NORMALIZED */";

let src = read(ROUTER);

// 1) Remove the known-bad import (pages path)
src = src.replace(
  /^\s*import\s+\{\s*CoreIdentityTechnologiesComposed\s*\}\s+from\s+["']\.\/pages\/CoreIdentityTechnologiesComposed["']\s*;\s*\n/gm,
  ""
);

// 2) Remove any duplicate composed imports (we'll re-add a single canonical one)
src = src.replace(
  /^\s*import\s+\{\s*CoreIdentityTechnologiesComposed\s*\}\s+from\s+["'][^"']*CoreIdentityTechnologiesComposed["']\s*;\s*\n/gm,
  ""
);

// 3) Ensure canonical import exists exactly once
const canonical = `import { CoreIdentityTechnologiesComposed } from "./components/CoreIdentityTechnologiesComposed";\n`;

// Insert canonical after the last import block
if (!src.includes(canonical)) {
  const importBlock = /^(import[\s\S]*?;\s*)+/m;
  const m = src.match(importBlock);
  if (m) src = src.replace(importBlock, (block) => block + canonical);
  else src = canonical + src;
}

// 4) Add sentinel for idempotency tracking (doesn't affect runtime)
if (!src.startsWith(sentinel)) src = `${sentinel}\n${src}`;

write(ROUTER, src);

console.log("Normalized CoreIdentityTechnologiesComposed import in src/router.tsx.");

execSync("npm run build", { stdio: "inherit" });
