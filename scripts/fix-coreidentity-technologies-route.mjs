import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();

const WRAPPER_REL = "src/components/CoreIdentityTechnologiesComposed.tsx";
const WRAPPER_ABS = path.join(ROOT, WRAPPER_REL);

function exists(p) { return fs.existsSync(p); }
function read(p) { return fs.readFileSync(p, "utf8"); }
function write(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s, "utf8"); }

function walk(dir, exts = [".ts", ".tsx", ".js", ".jsx"]) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    if (!exists(d)) continue;
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      if (["node_modules", "dist", ".git"].includes(ent.name)) continue;
      const fp = path.join(d, ent.name);
      if (ent.isDirectory()) stack.push(fp);
      else if (exts.some((e) => ent.name.endsWith(e))) out.push(fp);
    }
  }
  return out;
}

function writeIfChanged(abs, next) {
  const prev = exists(abs) ? read(abs) : null;
  if (prev === next) return false;
  write(abs, next);
  return true;
}

function toRelImport(fromAbsFile, toAbsFile) {
  const fromDir = path.dirname(fromAbsFile);
  const noExt = toAbsFile.replace(/\.(tsx|ts|jsx|js)$/, "");
  let rel = path.relative(fromDir, noExt).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
}

function findPageModuleAbs() {
  const files = walk(path.join(ROOT, "src"));
  const definers = files.filter((f) => {
    const s = read(f);
    return (
      s.includes("CoreIdentityTechnologiesPage") &&
      (s.includes("function CoreIdentityTechnologiesPage") ||
        s.includes("export function CoreIdentityTechnologiesPage") ||
        s.includes("export const CoreIdentityTechnologiesPage") ||
        s.includes("const CoreIdentityTechnologiesPage") ||
        s.includes("export default function CoreIdentityTechnologiesPage"))
    );
  });
  if (definers.length) return definers.sort((a,b)=>a.length-b.length)[0];

  const any = files.filter((f) => read(f).includes("CoreIdentityTechnologiesPage"));
  if (!any.length) throw new Error("Could not locate CoreIdentityTechnologiesPage anywhere under src/.");
  return any.sort((a,b)=>a.length-b.length)[0];
}

function detectExportStyle(pageAbs) {
  const s = read(pageAbs);
  const hasDefault =
    s.includes("export default function CoreIdentityTechnologiesPage") ||
    /export\s+default\s+CoreIdentityTechnologiesPage\b/.test(s) ||
    /export\s+default\s+function\b/.test(s);
  const hasNamed =
    /export\s+(const|function)\s+CoreIdentityTechnologiesPage\b/.test(s) ||
    /export\s*\{\s*CoreIdentityTechnologiesPage\s*\}/.test(s);
  return { hasDefault, hasNamed };
}

function createWrapper(pageAbs) {
  const { hasDefault, hasNamed } = detectExportStyle(pageAbs);
  const pageRelImport = toRelImport(WRAPPER_ABS, pageAbs);

  let pageImportStmt = "";
  if (hasNamed) pageImportStmt = `import { CoreIdentityTechnologiesPage } from "${pageRelImport}";`;
  else if (hasDefault) pageImportStmt = `import CoreIdentityTechnologiesPage from "${pageRelImport}";`;
  else pageImportStmt =
`import * as PageModule from "${pageRelImport}";
const CoreIdentityTechnologiesPage: any =
  (PageModule as any).CoreIdentityTechnologiesPage ?? (PageModule as any).default;`;

  return `import * as React from "react";
${pageImportStmt}

function TechnologiesOverlay() {
  return (
    <section style={{ marginTop: 32 }}>
    </section>
  );
}

export function CoreIdentityTechnologiesComposed() {
  return (
    <>
      <CoreIdentityTechnologiesPage />
      <TechnologiesOverlay />
    </>
  );
}
`;
}

function isPatchableCandidate(fileAbs) {
  const s = read(fileAbs);

  // Skip patching the page module itself and our wrapper
  if (path.resolve(fileAbs) === path.resolve(WRAPPER_ABS)) return false;
  if (fileAbs.includes("CoreIdentityTechnologiesComposed")) return false;

  // Must reference the identifier
  if (!s.includes("CoreIdentityTechnologiesPage")) return false;

  // Strong signals it's routing config
  const routingSignals = [
    "createFileRoute(",
    "createRoute(",
    "routeTree",
    "routes",
    "Router",
    "component:",
    "lazyRouteComponent",
    "lazy(",
    "path:",
  ];
  return routingSignals.some((sig) => s.includes(sig));
}

function findRouteWiringFile() {
  const files = walk(path.join(ROOT, "src"));
  const candidates = files.filter(isPatchableCandidate);

  if (!candidates.length) {
    // fallback: any file referencing identifier (even without routing signals)
    const any = files.filter((f) => read(f).includes("CoreIdentityTechnologiesPage") && path.resolve(f) !== path.resolve(WRAPPER_ABS));
    if (!any.length) throw new Error("Could not find any reference to CoreIdentityTechnologiesPage under src/ besides the page module itself.");
    return any.sort((a,b)=>a.length-b.length)[0];
  }

  // Prefer the one that includes 'component:' usage
  const preferred = candidates.find((f) => read(f).includes("component:") && read(f).includes("CoreIdentityTechnologiesPage"));
  return (preferred || candidates.sort((a,b)=>a.length-b.length)[0]);
}

function patchWiringFile(wiringAbs, wrapperAbs) {
  const sentinel = "/* CHC_COMPOSED_TECHNOLOGIES_PATCH */";
  const src = read(wiringAbs);
  if (src.includes(sentinel)) return false;

  // We will:
  // - add import { CoreIdentityTechnologiesComposed } from "<rel>";
  // - replace identifier references CoreIdentityTechnologiesPage -> CoreIdentityTechnologiesComposed
  //   (minimal; assumes the wiring file already imports the page)
  const relImport = toRelImport(wiringAbs, wrapperAbs);
  const importLine = `import { CoreIdentityTechnologiesComposed } from "${relImport}";\n`;

  let next = src;

  // Insert import line after existing import block
  const importRegex = /^(import[\s\S]*?;\s*)+/m;
  const m = next.match(importRegex);
  if (m) next = next.replace(importRegex, (block) => block + importLine);
  else next = importLine + next;

  // Replace identifier usage (word boundary)
  next = next.replace(/\bCoreIdentityTechnologiesPage\b/g, "CoreIdentityTechnologiesComposed");

  next = `${sentinel}\n${next}`;

  if (next === src) return false;
  write(wiringAbs, next);
  return true;
}

(function main() {
  const pageAbs = findPageModuleAbs();

  let changed = false;

  // Always rewrite wrapper to be clean/deterministic
  const wrapperSource = createWrapper(pageAbs);
  changed = writeIfChanged(WRAPPER_ABS, wrapperSource) || changed;

  const wiringAbs = findRouteWiringFile();
  changed = patchWiringFile(wiringAbs, WRAPPER_ABS) || changed;

  console.log(changed ? "Applied composition via route-wiring patch." : "Already applied (idempotent).");
  execSync("npm run build", { stdio: "inherit" });
})();
