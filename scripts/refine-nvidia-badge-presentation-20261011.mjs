#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const styleSheet = resolve(root, "src/styles.css");
const previousFrame = ".cidg-inception-badge-frame{padding:clamp(.7rem,1.5vw,1rem);background:#fff;border:1px solid #cfd5dc;border-radius:12px;box-shadow:0 18px 44px rgba(23,34,52,.08)}";
const refinedFrame = ".cidg-inception-badge-frame{display:flex;align-items:center;justify-content:center;width:100%;max-width:420px;margin-inline:auto}";
const previousMobile = "@media(max-width:520px){.cidg-inception-membership{gap:1.5rem}.cidg-inception-badge-frame{padding:.5rem;border-radius:8px}.cidg-inception-copy h2{font-size:1.75rem}}";
const refinedMobile = "@media(max-width:520px){.cidg-inception-membership{gap:1.5rem}.cidg-inception-copy h2{font-size:1.75rem}}";

let css = readFileSync(styleSheet, "utf8");

function replaceOrVerify(previous, refined, label) {
  if (css.includes(previous)) {
    css = css.replace(previous, refined);
    return;
  }
  if (!css.includes(refined)) throw new Error(`${label}: neither the expected source nor refined rule was found.`);
}

replaceOrVerify(previousFrame, refinedFrame, "Badge frame");
replaceOrVerify(previousMobile, refinedMobile, "Mobile badge frame");
writeFileSync(styleSheet, css);

const verified = readFileSync(styleSheet, "utf8");
if ((verified.split(refinedFrame).length - 1) !== 1) throw new Error("Refined badge frame rule is not unique.");
if (/\.cidg-inception-badge-frame\{[^}]*background:|\.cidg-inception-badge-frame\{[^}]*border:|\.cidg-inception-badge-frame\{[^}]*box-shadow:|\.cidg-inception-badge-frame\{[^}]*padding:/u.test(verified)) {
  throw new Error("Decorative badge container styling remains.");
}

console.log("Verified centered NVIDIA badge with no decorative card treatment.");

const workspaceNpm = resolve(root, "..", "bin", "npm");
const npmCommand = existsSync(workspaceNpm) ? workspaceNpm : "npm";
const build = spawnSync(npmCommand, ["run", "build"], { cwd: root, stdio: "inherit", shell: false });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
