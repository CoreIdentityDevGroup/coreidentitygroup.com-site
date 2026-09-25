// Deterministic, validated branding transform. Repeat runs preserve identical output.
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pending = new Map();
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
for (const [source, target, expected] of [
 ['CIDG Website Header.png', 'coreidentity-website-header-202609.png', 'c43354150f6fea26077b0f77f42e6fe62d12ab5ef16cb2ae8c17a8cba385e315'],
 ['CIDG Website Logo.png', 'coreidentity-website-logo-202609.png', 'e2860d98ef5e9675d6869fb48f106ed60ef1109c76c009e8518e55ec37f81245'],
]) {
 const dest = resolve(root, 'public/images/brand', target);
 const bytes = existsSync(dest) ? readFileSync(dest) : readFileSync(resolve(process.argv[2] || '/Users/toddmorgan/Pictures', source));
 if (hash(bytes) !== expected) throw Error(`Unexpected asset content: ${source}`);
 if (!existsSync(dest)) pending.set(dest, bytes);
}
function replaceOnce(file, before, after) {
 const path = resolve(root, file);
 const content = pending.get(path) ?? readFileSync(path, 'utf8');
 if (content.includes(after) && !content.includes(before)) return;
 if (content.split(before).length !== 2) throw Error(`Expected one transform target: ${file}`);
 pending.set(path, content.replace(before, after));
}
replaceOnce('src/components/Header.tsx', `      <div className="cidg-platinum-masthead">
        <Link to="/" className="cidg-platinum-brand" aria-label="CoreIdentity home">
          <span className="cidg-platinum-mark"><img src="/images/brand/coreidentity-logo-202609.png" alt="" /></span>
          <span className="cidg-platinum-wordmark">COREIDENTITY</span>
        </Link>`, `      <Link to="/" className="cidg-website-banner" aria-label="CoreIdentity Group home">
        <img src="/images/brand/coreidentity-website-header-202609.png" width="2056" height="765" fetchPriority="high" alt="CoreIdentity Group — Making Autonomy Trustworthy. Governance, Intelligence, Assurance, Trust. Delegate execution. Never surrender control." />
      </Link>
      <div className="cidg-platinum-masthead">`);
replaceOnce('src/components/Header.tsx', '    document.documentElement.classList.toggle("cidg-menu-open", mobileOpen);', '    // The expandable menu stays in document flow so every item remains reachable.\n    document.documentElement.classList.remove("cidg-menu-open");');
replaceOnce('src/components/Footer.tsx', '<img src="/images/brand/coreidentity-logo-202609.png" alt="" />', '<img src="/images/brand/coreidentity-website-logo-202609.png" width="1254" height="1254" loading="lazy" alt="" />');
const cssPath = resolve(root, 'src/styles.css');
const marker = '/* CIDG_WEBSITE_BANNER_202609 */';
const css = `
${marker}
.cidg-platinum-header { position:relative; inset:auto; padding:0; pointer-events:auto; }
.cidg-website-banner { display:block; width:100%; background:#0a0a0a; }
.cidg-website-banner img { display:block; width:100%; height:auto; }
.cidg-platinum-masthead { width:100%; min-height:72px; padding:12px 24px; box-sizing:border-box; justify-content:center; border:0; border-top:1px solid #383838; border-bottom:1px solid #383838; border-radius:0; box-shadow:none; backdrop-filter:none; }
.cidg-platinum-main { padding-top:0; }
.cidg-platinum-menu { position:static; inset:auto; display:none; padding:0 24px 24px; opacity:1; visibility:visible; }
.cidg-platinum-menu.is-open { display:block; }
.cidg-platinum-menu-inner { height:auto; overflow:visible; }
.cidg-platinum-menu-button { color:#f3f3f3; background:#202020; border-color:#737373; }
.cidg-platinum-footer-mark { width:80px; height:80px; border-radius:0; }
.cidg-website-banner:focus-visible, .cidg-platinum-header button:focus-visible, .cidg-platinum-header a:focus-visible { outline:2px solid #fff; outline-offset:-3px; }
@media(max-width:1080px) { .cidg-platinum-masthead { justify-content:flex-end; min-height:72px; } }
`;
const original = readFileSync(cssPath, 'utf8');
if (!original.includes(marker)) pending.set(cssPath, original + css);
else if (!original.endsWith(css)) throw Error('Branding CSS has changed; review before reapplying.');
for (const [path, bytes] of pending) {
 mkdirSync(dirname(path), { recursive:true });
 const temp = `${path}.${randomUUID()}.tmp`;
 writeFileSync(temp, bytes, { flag:'wx' });
 renameSync(temp, path);
}
console.log(`Updated ${pending.size} files.`);
execFileSync('npm', ['run', 'build'], { cwd:root, stdio:'inherit' });
