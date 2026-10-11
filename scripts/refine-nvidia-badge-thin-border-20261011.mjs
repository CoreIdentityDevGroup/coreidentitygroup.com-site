#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const styleSheet = resolve(root, "src/styles.css");
const previous = ".cidg-inception-badge-frame{display:flex;align-items:center;justify-content:center;width:100%;max-width:420px;margin-inline:auto}";
const refined = ".cidg-inception-badge-frame{display:flex;align-items:center;justify-content:center;width:100%;max-width:420px;margin-inline:auto;padding:0;background:#fff;border:1px solid #c7cdd5;border-radius:0;box-shadow:none;overflow:hidden;box-sizing:border-box}";

let css = readFileSync(styleSheet, "utf8");
if (css.includes(previous)) {
  css = css.replace(previous, refined);
} else if (!css.includes(refined)) {
  throw new Error("Expected centered badge-frame rule was not found.");
}
writeFileSync(styleSheet, css);

const verified = readFileSync(styleSheet, "utf8");
if ((verified.split(refined).length - 1) !== 1) throw new Error("Thin-border badge-frame rule is not unique.");
if (!verified.includes(".cidg-inception-badge-frame img{display:block;width:100%;height:auto}")) throw new Error("Badge image sizing rule changed unexpectedly.");

console.log("Verified centered NVIDIA badge with a one-pixel even border, zero padding, and no shadow.");

const workspaceNpm = resolve(root, "..", "bin", "npm");
const npmCommand = existsSync(workspaceNpm) ? workspaceNpm : "npm";
const build = spawnSync(npmCommand, ["run", "build"], { cwd: root, stdio: "inherit", shell: false });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
