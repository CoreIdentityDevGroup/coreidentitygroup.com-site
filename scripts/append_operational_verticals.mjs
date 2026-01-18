#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const FILE = path.join("src", "pages", "CoreIdentityTechnologiesPage.tsx");

// Stable anchor that exists in the file (from your rg output).
const ANCHOR = "{/* Stack */}";

// Idempotency markers (do not change these strings once deployed)
const BEGIN = "{/* BEGIN: OPERATIONAL_VERTICALS (managed) */}";
const END   = "{/* END: OPERATIONAL_VERTICALS (managed) */}";

// Minimal, dependency-free insertion.
// We are NOT importing new UI atoms here; we only call an existing component.
// If the component doesn't exist, build will fail (as it should).
const BLOCK = `${BEGIN}
      <OperationalVerticalsSection />
${END}
`;

function die(msg) {
  console.error(msg);
  process.exit(1);
}

if (!fs.existsSync(FILE)) die(`ERROR: Target file not found: ${FILE}`);

const src = fs.readFileSync(FILE, "utf8");

// Idempotency: if markers exist, do nothing.
if (src.includes(BEGIN) && src.includes(END)) {
  console.log("OK: operational verticals block already present (idempotent no-op).");
  process.exit(0);
}

// Guardrail: must contain the page function signature so we never write garbage.
if (!src.includes("export function CoreIdentityTechnologiesPage")) {
  die("ERROR: Safety check failed: expected page export not found. Refusing to write.");
}

const idx = src.indexOf(ANCHOR);
if (idx === -1) {
  die(`ERROR: Anchor not found: ${JSON.stringify(ANCHOR)}. Refusing to write.`);
}

// Insert AFTER the anchor line
const lineEnd = src.indexOf("\n", idx);
const insertAt = (lineEnd === -1) ? src.length : lineEnd + 1;

const out = src.slice(0, insertAt) + BLOCK + src.slice(insertAt);

// Hard safety checks: refuse to write if we accidentally shrank the file or lost structure.
if (out.length <= src.length) {
  die("ERROR: Safety check failed: output did not grow. Refusing to write.");
}
if (!out.includes("export default CoreIdentityTechnologiesPage")) {
  die("ERROR: Safety check failed: default export missing after transform. Refusing to write.");
}
// Ensure we did not accidentally replace the start of file.
if (out.slice(0, 200) !== src.slice(0, 200)) {
  die("ERROR: Safety check failed: file header changed unexpectedly. Refusing to write.");
}

fs.writeFileSync(FILE, out, "utf8");
console.log("OK: appended operational verticals block safely.");
