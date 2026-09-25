// Apply the approved reference as responsive live content, with validated repeat runs.
import {readFileSync,writeFileSync,renameSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID,createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const pending=new Map();
function change(file,before,after){const p=resolve(root,file),s=pending.get(p)??readFileSync(p,'utf8');if(s.includes(after))return;if(s.split(before).length!==2)throw Error('Unexpected target: '+file);pending.set(p,s.replace(before,after));}
const asset=resolve(root,'public/images/brand/coreidentity-hero-reference-202609.png');
const source=resolve(process.argv[2]||'/Users/toddmorgan/Pictures/ChatGPT Image Sep 25, 2026, 12_57_00 PM.png');
if(!existsSync(asset))pending.set(asset,readFileSync(source));
else if(existsSync(source)&&createHash('sha256').update(readFileSync(source)).digest('hex')!==createHash('sha256').update(readFileSync(asset)).digest('hex'))throw Error('Reference asset mismatch');
change('src/components/Header.tsx','<header className="cidg-platinum-header" ref={headerRef}>','<header className={`cidg-platinum-header cidg-unified-header ${pathname === "/" ? "has-brand-hero" : ""}`} ref={headerRef}>');
change('src/components/Header.tsx','<img src="/images/brand/coreidentity-website-header-202609.png" width="2056" height="765" fetchPriority="high" alt="CoreIdentity Group — Making Autonomy Trustworthy. Governance, Intelligence, Assurance, Trust. Delegate execution. Never surrender control." />','<span className="cidg-live-wordmark"><strong>COREIDENTITY</strong> <span>GROUP</span></span>\n        <span className="cidg-live-tagline">Making Autonomy Trustworthy</span>');
change('src/components/Header.tsx','    </header>','      {pathname === "/" && <section className="cidg-brand-hero" aria-labelledby="cidg-brand-title">\n        <h1 id="cidg-brand-title"><span>Making</span><strong>Autonomy</strong><span>Trustworthy</span></h1>\n        <ul className="cidg-brand-pillars" aria-label="Institutional functions"><li>Governance</li><li>Intelligence</li><li>Assurance</li><li>Trust</li></ul>\n        <p>Delegate execution. Never surrender control.</p>\n      </section>}\n    </header>');
change('src/pages/HomePage.tsx','<h1 id="cidg-platinum-title">Start with executive direction.<br />Build toward governed autonomy.</h1>','<h2 id="cidg-platinum-title">Start with executive direction.<br />Build toward governed autonomy.</h2>');
const css=`
/* CIDG_UNIFIED_REFERENCE_202609 */
.cidg-platinum-site > .cidg-platinum-main { padding-top:0!important; }
:root { --cidg-content-width:1440px; --cidg-gutter:clamp(20px,4vw,64px); --cidg-page-inset:max(var(--cidg-gutter),calc((100% - var(--cidg-content-width))/2)); }
.cidg-unified-header { padding:24px var(--cidg-page-inset); grid-template-columns:minmax(0,1fr) auto; gap:0 32px; background:#080f13!important; }
.cidg-unified-header::before { background-size:auto 125%; background-position:right bottom; mask-image:linear-gradient(to right,transparent 48%,#000 75%); opacity:.65; }
.cidg-unified-header:not(.has-brand-hero)::before { background-size:100% auto; mask-image:linear-gradient(to right,transparent 68%,#000 88%); opacity:.35; }
.cidg-unified-header.has-brand-hero::before { background-image:url('/images/brand/coreidentity-hero-reference-202609.png'); }
.cidg-unified-header .cidg-website-banner { max-width:none; color:#eef0f1; text-decoration:none; width:fit-content; }
.cidg-live-wordmark { display:block; font-family:Arial,sans-serif; font-size:clamp(20px,2vw,32px); letter-spacing:.08em; line-height:1.2; white-space:nowrap; }
.cidg-live-wordmark strong { font-weight:700; }
.cidg-live-wordmark>span { font-weight:300; }
.cidg-live-tagline { display:block; margin-top:8px; font-size:clamp(8px,.8vw,12px); letter-spacing:.32em; text-transform:uppercase; }
.cidg-unified-header .cidg-platinum-masthead { min-height:56px; padding:0; background:transparent!important; box-shadow:none; border-radius:0; }
.cidg-unified-header .cidg-platinum-contact { background:rgba(6,10,14,.65); border:1px solid #c1c3c4; border-radius:999px; padding:0 24px; }
.cidg-brand-hero { grid-column:1/-1; padding:72px 0 84px; color:#edf0f2; }
.cidg-brand-hero h1 { margin:0; font-family:Arial,sans-serif; font-size:clamp(40px,5.2vw,80px); font-weight:300; letter-spacing:.09em; line-height:1.1; text-transform:uppercase; }
.cidg-brand-hero h1 span,.cidg-brand-hero h1 strong { display:block; }
.cidg-brand-hero h1 strong { font-weight:700; }
.cidg-brand-pillars { display:flex; flex-wrap:wrap; list-style:none; gap:16px 0; margin:32px 0; padding:0; font-size:clamp(12px,1.25vw,18px); text-transform:uppercase; letter-spacing:.1em; }
.cidg-brand-pillars li+li { border-left:1px solid #c8c8c8; margin-left:24px; padding-left:24px; }
.cidg-brand-hero>p { margin:0; padding-top:28px; position:relative; font-size:clamp(12px,1.15vw,17px); letter-spacing:.12em; text-transform:uppercase; }
.cidg-brand-hero>p::before { content:""; position:absolute; top:0; left:0; width:80px; height:2px; background:#d5bd98; }
/* Shared containers retain readable line lengths and predictable centered gutters. */
.cidg-interior-frame { width:calc(100% - 2 * var(--cidg-gutter)); max-width:var(--cidg-content-width); margin-inline:auto; }
.cidg-ecosystem-hero,.cidg-journey,.cidg-platinum-footer,.advisory-lockup,.advisory-hero,.advisory-nav,.advisory-section { padding-left:var(--cidg-page-inset)!important; padding-right:var(--cidg-page-inset)!important; }
.advisory-section-inner,.cidg-platinum-footer-grid,.cidg-platinum-footer-legal { width:100%; max-width:var(--cidg-content-width); margin-inline:auto; }
.advisory-nav { top:0; }
.cidg-ecosystem-hero h2 { color:#172234!important; max-width:26ch; margin:0; font-size:clamp(32px,3.2vw,48px); line-height:1.12; letter-spacing:-.035em; font-weight:600; }
@media(max-width:1080px) { .cidg-unified-header { gap:0 20px; } .cidg-brand-hero { padding:56px 0 64px; } .cidg-unified-header::before { opacity:.4; } }
@media(max-width:600px) { .cidg-unified-header { padding:20px var(--cidg-gutter); gap:0 12px; } .cidg-live-wordmark { font-size:18px; letter-spacing:.035em; } .cidg-live-tagline { font-size:7px; letter-spacing:.2em; } .cidg-brand-hero { padding:48px 0; } .cidg-brand-hero h1 { font-size:clamp(28px,7.4vw,44px); letter-spacing:.055em; } .cidg-brand-pillars { display:grid; grid-template-columns:1fr 1fr; gap:14px; } .cidg-brand-pillars li+li { border:0; margin:0; padding:0; } .cidg-brand-hero>p { max-width:30ch; line-height:1.7; } .cidg-unified-header.has-brand-hero::before { background-size:auto 125%; mask-image:linear-gradient(to right,transparent,#000); opacity:.22; } .cidg-unified-header .cidg-platinum-menu { padding-inline:0; } }
`;
const p=resolve(root,'src/styles.css'),s=readFileSync(p,'utf8');
if(!s.includes('/* CIDG_UNIFIED_REFERENCE_202609 */'))pending.set(p,s+css);else if(!s.endsWith(css))throw Error('Unexpected unified stylesheet state');
for(const [p,content] of pending){const temp=p+'.'+randomUUID()+'.tmp';writeFileSync(temp,content,{flag:'wx'});renameSync(temp,p);}
console.log('Updated '+pending.size+' files.');
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
