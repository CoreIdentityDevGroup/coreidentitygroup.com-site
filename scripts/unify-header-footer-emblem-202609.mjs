import { existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import { execFileSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const approvedAsset = "/images/brand/coreidentity-logo-optimized.webp";
const retiredAsset = "/images/brand/coreidentity-header-sphere.webp";
const approvedMask = "mask-image:radial-gradient(ellipse at center,#000 54%,transparent 73%);";

const assetPath = resolve(root, `public${approvedAsset}`);
if (!existsSync(assetPath) || readFileSync(assetPath).byteLength < 1_000) {
  throw new Error("The approved CI emblem is missing or unexpectedly empty.");
}

const transforms = [
  {
    path: "src/components/Header.tsx",
    apply: (source) => source.replace(retiredAsset, approvedAsset),
  },
  {
    path: "src/visual-system.css",
    apply: (source) => source.replace(
      "mix-blend-mode:screen; mask-image:none;",
      `mix-blend-mode:screen; ${approvedMask}`,
    ),
  },
  {
    path: "scripts/add-header-emblem-202609.mjs",
    apply: (source) => source
      .replace(retiredAsset, approvedAsset)
      .replace("mix-blend-mode:screen; mask-image:none;", `mix-blend-mode:screen; ${approvedMask}`),
  },
];

for (const transform of transforms) {
  const absolutePath = resolve(root, transform.path);
  const current = readFileSync(absolutePath, "utf8");
  const updated = transform.apply(current);
  if (updated !== current) {
    const temporaryPath = `${absolutePath}.${randomUUID()}.tmp`;
    writeFileSync(temporaryPath, updated, { flag: "wx" });
    renameSync(temporaryPath, absolutePath);
  }
}

const header = readFileSync(resolve(root, "src/components/Header.tsx"), "utf8");
const footer = readFileSync(resolve(root, "src/components/Footer.tsx"), "utf8");
const styles = readFileSync(resolve(root, "src/visual-system.css"), "utf8");
if (!header.includes(approvedAsset) || !footer.includes(approvedAsset)) {
  throw new Error("Header and footer are not using the same approved CI emblem.");
}
if (header.includes(retiredAsset) || !styles.includes(approvedMask)) {
  throw new Error("The retired header sphere or an unblended header emblem remains.");
}

execFileSync("npm", ["run", "build"], { cwd: root, stdio: "inherit" });
