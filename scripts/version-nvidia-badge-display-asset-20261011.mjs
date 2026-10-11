#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const currentAsset = resolve(root, "public/images/partners/nvidia-inception-program-member.png");
const versionedAsset = resolve(root, "public/images/partners/nvidia-inception-program-member-cropped-v2.png");
const homePage = resolve(root, "src/pages/HomePage.tsx");
const expectedHash = "8d05f405caee825d8dcd0aaf5954f7c4bc57be32c2d958d3c00b5834f47cfec5";
const sha256 = buffer => createHash("sha256").update(buffer).digest("hex");

const asset = readFileSync(currentAsset);
if (sha256(asset) !== expectedHash) throw new Error("Corrected display badge hash mismatch.");
if (!existsSync(versionedAsset) || Buffer.compare(readFileSync(versionedAsset), asset) !== 0) writeFileSync(versionedAsset, asset);

let home = readFileSync(homePage, "utf8");
const oldPath = "/images/partners/nvidia-inception-program-member.png";
const newPath = "/images/partners/nvidia-inception-program-member-cropped-v2.png";
if (home.includes(oldPath)) {
  home = home.replace(oldPath, newPath);
  writeFileSync(homePage, home);
} else if (!home.includes(newPath)) {
  throw new Error("Homepage badge path was not found.");
}

if (sha256(readFileSync(versionedAsset)) !== expectedHash) throw new Error("Versioned badge asset changed.");
if ((readFileSync(homePage, "utf8").split(newPath).length - 1) !== 1) throw new Error("Versioned badge path is not unique.");
console.log("Verified cache-busting badge URL references the pixel-corrected display asset.");

const workspaceNpm = resolve(root, "..", "bin", "npm");
const npmCommand = existsSync(workspaceNpm) ? workspaceNpm : "npm";
const build = spawnSync(npmCommand, ["run", "build"], { cwd: root, stdio: "inherit", shell: false });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
