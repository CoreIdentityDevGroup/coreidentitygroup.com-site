// Idempotent portrait geometry and user-approved biography update.
import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const changes = [["src/styles.css", ".cidg-leadership-profile-photo-wrap {\n  display: block;", ".cidg-leadership-profile-photo-wrap {\n  position: relative;\n  display: block;"], ["src/styles.css", ".cidg-leadership-profile-photo {\n  display: block;", ".cidg-leadership-profile-photo {\n  position: absolute;\n  inset: 0;\n  display: block;"], ["src/pages/LeadershipPage.tsx", "  `This work is informed by more than 30 years of executive leadership across complex, highly regulated, and mission-critical environments in national security, defense, technology, and private enterprise. Todd holds an MBA and a Bachelor of Science in Information Systems and has completed executive education in artificial intelligence.`,", "  `In addition to leading CoreIdentity, Todd serves as Senior Advisor and Lead Technical Expert for Executive AI Governance with the International Artificial Intelligence Committee (STANAIC™) and as a member of its Global Advisory Board, contributing to the advancement of executive AI governance and the institutional requirements emerging as AI moves from decision support to autonomous execution.`,\n  `This work is informed by more than 30 years of executive leadership across complex, highly regulated, and mission-critical environments in national security, defense, technology, and private enterprise. Todd holds an MBA and a Bachelor of Science in Information Systems and has completed executive education in artificial intelligence.`,"]];
changes.push(['src/styles.css', '.cidg-leadership-profile-photo {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;', '.cidg-leadership-profile-photo {\n  position: absolute;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100% !important;']);
const pending = new Map();
for (const [file, before, after] of changes) {
  const path = resolve(root, file);
  const text = pending.get(path) ?? readFileSync(path, 'utf8');
  if (text.includes(after)) {
    if (text.split(after).length !== 2) throw new Error(`Duplicate updated block in ${file}`);
    continue;
  }
  if (text.split(before).length !== 2) throw new Error(`Expected unique original block in ${file}`);
  pending.set(path, text.replace(before, after));
}
// Validate every transform before writing any file; replace each file atomically.
for (const [path, text] of pending) {
  const temp = path + '.profile-update.tmp';
  writeFileSync(temp, text, {flag: 'wx'});
  renameSync(temp, path);
}
console.log(`Updated ${pending.size} files.`);
execFileSync('npm', ['run', 'build'], {cwd: root, stdio: 'inherit'});
