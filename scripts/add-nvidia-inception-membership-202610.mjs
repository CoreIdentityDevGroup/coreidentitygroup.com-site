#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceArgument = process.argv[2] ? resolve(process.argv[2]) : null;
const stableSource = resolve(root, "artifacts/brand/nvidia-inception-program-member-source.png");
const webAsset = resolve(root, "public/images/partners/nvidia-inception-program-member.png");
const socialAsset = resolve(root, "artifacts/social/coreidentity-nvidia-inception-program-member-linkedin.png");
const socialCopy = resolve(root, "artifacts/social/CoreIdentity-NVIDIA-Inception-LinkedIn.md");
const homePage = resolve(root, "src/pages/HomePage.tsx");
const styleSheet = resolve(root, "src/styles.css");

const expectedBadgeHash = "877f59feb8498a6322083957ac155f2fe5ce4f9eb4fca5a67f6ae5ba12561906";
const sectionMarker = "NVIDIA_INCEPTION_MEMBERSHIP_202610";
const styleMarker = "NVIDIA_INCEPTION_MEMBERSHIP_STYLES_202610";

function fail(message) {
  throw new Error(message);
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function readPngDimensions(buffer) {
  if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG") fail("NVIDIA badge source is not a valid PNG.");
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function writeIfChanged(path, contents) {
  mkdirSync(dirname(path), { recursive: true });
  if (existsSync(path) && Buffer.compare(readFileSync(path), contents) === 0) return false;
  writeFileSync(path, contents);
  return true;
}

function replaceOnce(source, anchor, replacement, label) {
  const count = source.split(anchor).length - 1;
  if (count !== 1) fail(`${label}: expected exactly one anchor, found ${count}.`);
  return source.replace(anchor, replacement);
}

const selectedSource = sourceArgument && existsSync(sourceArgument)
  ? sourceArgument
  : existsSync(stableSource)
    ? stableSource
    : null;

if (!selectedSource) fail("Provide the approved NVIDIA Inception badge PNG on the first run.");
const badge = readFileSync(selectedSource);
const badgeHash = sha256(badge);
const dimensions = readPngDimensions(badge);
if (badgeHash !== expectedBadgeHash) fail(`Badge hash mismatch: ${badgeHash}`);
if (dimensions.width !== 2084 || dimensions.height !== 835) fail(`Unexpected badge dimensions: ${dimensions.width}x${dimensions.height}`);

writeIfChanged(stableSource, badge);
writeIfChanged(webAsset, badge);
writeIfChanged(socialAsset, badge);

const membershipSection = `      {/* ${sectionMarker} */}
      <section className="cidg-inception-membership" aria-labelledby="nvidia-inception-title">
        <div className="cidg-inception-badge-frame">
          <img
            src="/images/partners/nvidia-inception-program-member.png"
            alt="NVIDIA Inception Program member badge"
            width="2084"
            height="835"
            loading="lazy"
          />
        </div>
        <div className="cidg-inception-copy">
          <p className="cidg-platinum-kicker">NVIDIA Inception Program Member</p>
          <h2 id="nvidia-inception-title">Advancing Trustworthy Autonomous AI Infrastructure.</h2>
          <p>CoreIdentity Development Group Inc. is a member of the NVIDIA Inception program. Through the program, we gain access to developer resources, technical training, preferred technology offerings, and opportunities across NVIDIA’s startup ecosystem as we continue advancing infrastructure for governable, accountable, and provable autonomous AI execution.</p>
          <p className="cidg-inception-legal">© 2025 NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries.</p>
        </div>
      </section>
`;

let home = readFileSync(homePage, "utf8");
if (!home.includes(sectionMarker)) {
  const anchor = `      <section className="cidg-platinum-shift cidg-journey" aria-labelledby="journey-title">`;
  home = replaceOnce(home, anchor, `${membershipSection}${anchor}`, "Homepage membership section");
  writeFileSync(homePage, home);
}

const styles = `
/* ${styleMarker} */
.cidg-inception-membership{display:grid;grid-template-columns:minmax(260px,420px) minmax(0,1fr);gap:clamp(2rem,5vw,5rem);align-items:center;padding:clamp(2.5rem,5vw,4.5rem) var(--cidg-gutter);background:#f6f7f8;border-top:1px solid #dce1e7;border-bottom:1px solid #dce1e7;color:#172234}
.cidg-inception-membership>*{min-width:0}
.cidg-inception-badge-frame{padding:clamp(.7rem,1.5vw,1rem);background:#fff;border:1px solid #cfd5dc;border-radius:12px;box-shadow:0 18px 44px rgba(23,34,52,.08)}
.cidg-inception-badge-frame img{display:block;width:100%;height:auto}
.cidg-inception-copy{max-width:760px}
.cidg-inception-copy h2{max-width:28ch;margin:.55rem 0 1rem;color:#172234;font-size:clamp(1.8rem,3vw,2.8rem);line-height:1.12;letter-spacing:-.035em}
.cidg-inception-copy>p:not(.cidg-platinum-kicker):not(.cidg-inception-legal){max-width:68ch;color:#485568;font-size:1.04rem;line-height:1.75}
.cidg-inception-legal{max-width:82ch;margin:1.35rem 0 0;color:#687488;font-size:.72rem;line-height:1.55}
@media(max-width:820px){.cidg-inception-membership{grid-template-columns:1fr}.cidg-inception-badge-frame{max-width:520px}.cidg-inception-copy{max-width:none}}
@media(max-width:520px){.cidg-inception-membership{gap:1.5rem}.cidg-inception-badge-frame{padding:.5rem;border-radius:8px}.cidg-inception-copy h2{font-size:1.75rem}}
`;

let css = readFileSync(styleSheet, "utf8");
if (!css.includes(styleMarker)) {
  css = `${css.trimEnd()}\n${styles}`;
  writeFileSync(styleSheet, css);
}

const post = `# LinkedIn Publication Copy — NVIDIA Inception

CoreIdentity Development Group Inc. is excited to announce its membership in the NVIDIA Inception program.

As institutions move from AI experimentation toward autonomous execution, the challenge is no longer capability alone. Organizations must be able to establish who or what may act, under whose authority, within what scope, and with what evidence.

Through the NVIDIA Inception program, CoreIdentity gains access to developer resources, technical training, preferred technology offerings, and opportunities across NVIDIA’s startup ecosystem as we continue advancing infrastructure for governable, accountable, and provable autonomous AI execution.

This membership will support our work to evaluate scalable inference, agent evaluation, safety testing, and governed institutional deployment patterns while preserving human authority and institutional accountability.

Making autonomy trustworthy.

#NVIDIAInception #AIGovernance #AgenticAI #ResponsibleAI #TrustInfrastructure

© 2025 NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries.

## Publication Asset

Attach \`coreidentity-nvidia-inception-program-member-linkedin.png\` unchanged. Do not crop, recolor, redraw, overlay, or combine the badge with another logo.
`;
writeIfChanged(socialCopy, Buffer.from(post));

const finalHome = readFileSync(homePage, "utf8");
const finalCss = readFileSync(styleSheet, "utf8");
if ((finalHome.split(sectionMarker).length - 1) !== 1) fail("Homepage marker is not unique.");
if ((finalCss.split(styleMarker).length - 1) !== 1) fail("Styles marker is not unique.");
if (sha256(readFileSync(webAsset)) !== expectedBadgeHash || sha256(readFileSync(socialAsset)) !== expectedBadgeHash) fail("Published badge assets do not match the approved source.");
if (!finalHome.includes("CoreIdentity Development Group Inc. is a member of the NVIDIA Inception program.")) fail("Approved membership wording is missing.");
if (!finalHome.includes("© 2025 NVIDIA, the NVIDIA logo, and NVIDIA Inception")) fail("Required NVIDIA attribution is missing.");

console.log(`Verified approved badge ${dimensions.width}x${dimensions.height} (${badgeHash}).`);
console.log("Verified idempotent homepage section, responsive styles, social copy, and unchanged publication assets.");

const workspaceNpm = resolve(root, "..", "bin", "npm");
const npmCommand = existsSync(workspaceNpm) ? workspaceNpm : "npm";
const build = spawnSync(npmCommand, ["run", "build"], { cwd: root, stdio: "inherit", shell: false });
if (build.error) throw build.error;
process.exit(build.status ?? 1);
