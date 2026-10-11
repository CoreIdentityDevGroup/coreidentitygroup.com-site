#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const styleSheet = resolve(root, "src/styles.css");
const previous = ".cidg-inception-badge-frame{display:flex;align-items:center;justify-content:center;width:100%;max-width:420px;margin-inline:auto;padding:0;background:#fff;border:1px solid #c7cdd5;border-radius:0;box-shadow:none;overflow:hidden;box-sizing:border-box}";
const refined = ".cidg-inception-badge-frame{display:flex;align-items:center;justify-content:center;width:100%;max-width:420px;margin-inline:auto;padding:clamp(1rem,2.1vw,1.5rem);background:#fff;border:1px solid rgba(23,34,52,.09);border-radius:8px;box-shadow:none;box-sizing:border-box}";

let css = readFileSync(styleSheet, "utf8");
if (css.includes(previous)) {
  css = css.replace(previous, refined);
} else if (!css.includes(refined)) {
  throw new Error("Expected thin-border badge-frame rule was not found.");
}
writeFileSync(styleSheet, css);

const verified = readFileSync(styleSheet, "utf8");
if ((verified.split(refined).length - 1) !== 1) throw new Error("Balanced badge-card rule is not unique.");
if (!verified.includes("align-items:center;justify-content:center")) throw new Error("Badge centering controls are missing.");
if (!verified.includes("padding:clamp(1rem,2.1vw,1.5rem)")) throw new Error("Balanced card spacing is missing.");
if (!verified.includes("border:1px solid rgba(23,34,52,.09)")) throw new Error("Low-contrast hairline border is missing.");

console.log("Verified centered NVIDIA badge with equal card spacing and a low-contrast hairline border.");

const workspaceNpm = resolve(root, "..", "bin", "npm");
const npmCommand = existsSync(workspaceNpm) ? workspaceNpm : "npm";
const build = spawnSync(npmCommand, ["run", "build"], { cwd: root, stdio: "inherit", shell: false });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
