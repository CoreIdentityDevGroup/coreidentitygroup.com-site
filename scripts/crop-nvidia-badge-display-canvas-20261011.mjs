#!/usr/bin/env node

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "artifacts/brand/nvidia-inception-program-member-source.png");
const displayAsset = resolve(root, "public/images/partners/nvidia-inception-program-member.png");
const homePage = resolve(root, "src/pages/HomePage.tsx");
const sourceHash = "877f59feb8498a6322083957ac155f2fe5ce4f9eb4fca5a67f6ae5ba12561906";
const displayHash = "8d05f405caee825d8dcd0aaf5954f7c4bc57be32c2d958d3c00b5834f47cfec5";

const sha256 = buffer => createHash("sha256").update(buffer).digest("hex");
if (sha256(readFileSync(source)) !== sourceHash) throw new Error("Approved NVIDIA source badge changed.");

const scratch = mkdtempSync(resolve(tmpdir(), "cidg-nvidia-badge-"));
const cropped = resolve(scratch, "nvidia-inception-program-member.png");

try {
  copyFileSync(source, cropped);
  const crop = spawnSync("/usr/bin/sips", ["-c", "689", "1875", "--cropOffset", "73", "0", cropped], { stdio: "pipe" });
  if (crop.error) throw crop.error;
  if (crop.status !== 0) throw new Error(`Badge crop failed: ${crop.stderr.toString().trim()}`);

  const output = readFileSync(cropped);
  if (sha256(output) !== displayHash) throw new Error("Cropped display badge did not match the verified pixel bounds.");
  if (!existsSync(displayAsset) || Buffer.compare(readFileSync(displayAsset), output) !== 0) writeFileSync(displayAsset, output);
} finally {
  rmSync(scratch, { recursive: true, force: true });
}

let home = readFileSync(homePage, "utf8");
const originalDimensions = `            width="2084"\n            height="835"`;
const croppedDimensions = `            width="1875"\n            height="689"`;
if (home.includes(originalDimensions)) {
  home = home.replace(originalDimensions, croppedDimensions);
  writeFileSync(homePage, home);
} else if (!home.includes(croppedDimensions)) {
  throw new Error("Expected NVIDIA badge dimensions were not found in the homepage.");
}

if (sha256(readFileSync(source)) !== sourceHash) throw new Error("Approved source badge was modified.");
if (sha256(readFileSync(displayAsset)) !== displayHash) throw new Error("Website display badge is not the verified crop.");
console.log("Verified official badge artwork preserved; removed only 209px right and 73px top/bottom excess white canvas.");

const workspaceNpm = resolve(root, "..", "bin", "npm");
const npmCommand = existsSync(workspaceNpm) ? workspaceNpm : "npm";
const build = spawnSync(npmCommand, ["run", "build"], { cwd: root, stdio: "inherit", shell: false });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
