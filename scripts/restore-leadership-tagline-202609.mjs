import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const target = new URL('../src/pages/LeadershipPage.tsx', import.meta.url);
const original = readFileSync(target, 'utf8');
const marker = '        {member.linkedIn && (';
const quote = 'The greatest superpower is the ability to change yourself.';
const addition = `        {isTodd && (
          <p className="text-white/70 leading-relaxed italic" data-leadership-tagline>
            “The greatest superpower is the ability to change yourself.”
          </p>
        )}

`;
if (!original.includes('data-leadership-tagline')) {
  if (original.includes(quote) || original.split(marker).length !== 2) {
    throw new Error('Unexpected leadership page content; refusing ambiguous replacement.');
  }
  const updated = original.replace(marker, addition + marker);
  const temp = fileURLToPath(target) + '.tmp';
  writeFileSync(temp, updated);
  renameSync(temp, target);
}
const verified = readFileSync(target, 'utf8');
if (verified.split(quote).length !== 2 || !verified.includes(addition)) {
  throw new Error('Expected exactly one Todd-only closing tagline.');
}
execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
