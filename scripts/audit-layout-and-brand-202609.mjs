// Canonical repair for every route family, with explicit state checks and atomic writes.
import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),pending=new Map();
function replace(file,before,after){const p=resolve(root,file),s=pending.get(p)??readFileSync(p,'utf8');if(s.includes(after))return;if(s.split(before).length!==2)throw Error('Unexpected target '+file);pending.set(p,s.replace(before,after));}
replace('src/components/Header.tsx','<span className="cidg-live-tagline">Making Autonomy Trustworthy</span>','<svg className="cidg-live-tagline" viewBox="0 0 400 18" role="img" aria-label="Making Autonomy Trustworthy"><text x="0" y="14" textLength="400" lengthAdjust="spacing">MAKING AUTONOMY TRUSTWORTHY</text></svg>');
{
 const p=resolve(root,'src/components/Layout.tsx'),s=readFileSync(p,'utf8');
 const next=s.replace(/^  "\/(?:ciag|coreidentity-ai-advisory-group|coreidentity-advisory-group)",\n/gm,'').replace(/(  "\/blog",\n)+/g,'  "/blog",\n');
 const out=next.includes('  "/blog",')?next:next.replace('  "/faq",','  "/faq",\n  "/blog",');
 if(out!==s)pending.set(p,out);
}
replace('src/components/Layout.tsx','const FRAMED_ROUTE_PREFIXES = ["/governance/"];','const FRAMED_ROUTE_PREFIXES = ["/governance/", "/blog/"];');
replace('src/visual-system.css','--site-content:1180px;--site-gutter:24px;--site-inset:max(var(--site-gutter),calc((100% - var(--site-content))/2))','--site-content:100%;--site-gutter:var(--cidg-gutter);--site-inset:var(--cidg-gutter)');
const css=`
/* CIDG_COMPLETE_ALIGNMENT_AUDIT_202609 */
.cidg-website-banner { display:inline-grid; grid-template-columns:max-content; }
.cidg-live-wordmark>span { font-family:"Helvetica Neue",Helvetica,Arial,sans-serif; font-weight:200; }
.cidg-live-tagline { display:block; width:100%; height:auto; margin-top:7px; overflow:visible; fill:currentColor; letter-spacing:0; font:12px Arial,sans-serif; }
.cidg-platinum-header::before { width:180px; background-image:url('/images/brand/coreidentity-hero-reference-202609.png'); background-size:auto 130px; background-position:right bottom; opacity:.85; mask-image:linear-gradient(to right,transparent,#000 30%); }
.cidg-platinum-desktop-nav { position:relative; padding:8px 12px; border-radius:8px; background:rgba(8,15,19,.88); }
/* The framework family had its own centered sections outside the route frame. */
#main-content .cidg-framework-page { width:100%!important; max-width:none!important; margin-inline:0!important; }
#main-content .cidg-framework-page>section,
#main-content .cidg-framework-page>nav,
#main-content .cidg-framework-page>.flex { width:100%!important; max-width:none!important; margin-left:0!important; margin-right:0!important; padding-left:var(--cidg-gutter)!important; padding-right:var(--cidg-gutter)!important; box-sizing:border-box; }
#main-content .cidg-framework-page>section>* { margin-left:0!important; margin-right:0!important; }
#main-content .cidg-framework-page>section>div:not([class*="grid"]):not([class*="flex"]) { max-width:none!important; }
#main-content .cidg-framework-page .cidg-framework-hero { text-align:left!important; }
#main-content .cidg-framework-page .cidg-framework-hero h1 { margin-inline:0!important; }
#main-content .cidg-framework-page .cidg-framework-lead { margin-inline:0!important; text-align:left!important; }
#main-content .cidg-markets-shell { width:auto; max-width:none; margin-inline:var(--cidg-gutter); }
#main-content .cidg-resources-page { width:auto; max-width:none; margin-inline:var(--cidg-gutter); }
#main-content .cidg-resources-page>section { width:100%; max-width:none; margin-inline:0; padding-inline:0; }
#main-content .cidg-insight-article { margin-left:0!important; margin-right:0!important; padding-inline:0; }
#main-content .cidg-interior-frame .cidg-framework-page>section { padding-inline:0!important; }

#main-content .cidg-interior-frame .advisory-site { margin-inline:calc(-1 * var(--cidg-gutter)); width:calc(100% + 2 * var(--cidg-gutter)); max-width:none; }
#main-content .cidg-insight-article.cidg-insight-article { padding-inline:0!important; }
#main-content .cidg-insights-index { width:100%; margin-inline:0; }
#main-content .cidg-platinum-closing,#main-content .advisory-closing { text-align:left; align-items:start; justify-items:start; padding-inline:var(--cidg-gutter); }
#main-content .cidg-platinum-closing h2,#main-content .advisory-closing h2 { margin-inline:0; }
@media(max-width:600px) { .cidg-platinum-header::before { width:150px; opacity:.45; } }
`;
const p=resolve(root,'src/styles.css'),s=readFileSync(p,'utf8');if(!s.includes('/* CIDG_COMPLETE_ALIGNMENT_AUDIT_202609 */'))pending.set(p,s+css);else if(!s.endsWith(css))throw Error('Audit rules changed; review required');
for(const [p,s]of pending){const tmp=p+'.'+randomUUID()+'.tmp';writeFileSync(tmp,s,{flag:'wx'});renameSync(tmp,p);}
console.log('Updated '+pending.size+' files.');
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
