// Approved gray-background portrait. Usage: node scripts/update-todd-profile-202609.mjs /path/to/source.png
// Re-runs need no source once the approved bytes are installed. Build failures propagate.
import { readFileSync, writeFileSync, renameSync, unlinkSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(root, 'src/assets/leadership/todd-morgan-leadership-profile-v3.png');
const approved = 'b15476c8748d01708b71aa6494453660effbfaf1067e8f9112053023771d2ad4';
const previous = '0ae7b8848de52970f88ecf46e7d543454aba8a21a5320e79ebc0a64e3c0b08fb';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
if (process.argv.length > 3) throw new Error('Expected at most one source image path.');
const component = readFileSync(resolve(root, 'src/pages/LeadershipPage.tsx'), 'utf8');
if (!component.includes('import ToddMorganLeadershipProfile from "../assets/leadership/todd-morgan-leadership-profile-v3.png";')) {
  throw new Error('Portrait import changed; review the component before applying.');
}
const current = hash(readFileSync(target));
if (![previous, approved].includes(current)) throw new Error('Unexpected existing portrait; refusing to overwrite.');
if (process.argv[2] || current !== approved) {
  if (!process.argv[2]) throw new Error('Provide the approved source image path on the first run.');
  const bytes = readFileSync(resolve(process.argv[2]));
  if (hash(bytes) !== approved) throw new Error('Source does not match the approved portrait.');
  if (current !== approved) {
    const temporary = target + '.' + randomUUID() + '.tmp';
    try {
      writeFileSync(temporary, bytes, { flag: 'wx', mode: 0o644 });
      renameSync(temporary, target);
    } finally {
      if (existsSync(temporary)) unlinkSync(temporary);
    }
  }
}
if (hash(readFileSync(target)) !== approved) throw new Error('Installed portrait verification failed.');
console.log(current === approved ? 'Approved portrait already installed; no changes.' : 'Approved portrait installed; layout unchanged.');
// Required final operation: npm run build, including the existing postbuild attestation.
execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
