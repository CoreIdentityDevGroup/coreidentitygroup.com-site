// Validated, repeatable presentation refinement; source artwork stays intact.
import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const path=resolve(root,'src/styles.css');
const marker='/* CIDG_COMPACT_BRANDING_202609 */';
const css=`
${marker}
/* Keep the complete banner at a restrained scale beside the navigation. */
.cidg-platinum-header { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:0 24px; padding:8px clamp(16px,3vw,48px); }
.cidg-website-banner { width:100%; max-width:560px; background:transparent; }
.cidg-website-banner img { mask-image:linear-gradient(to right,#000 94%,transparent 100%); }
.cidg-platinum-masthead { width:auto; min-height:64px; margin:0; padding:8px 0; justify-content:flex-end; border:0; background:transparent!important; }
.cidg-platinum-desktop-nav { justify-content:flex-end; }
.cidg-platinum-menu { grid-column:1/-1; padding:0 8px 24px; }
/* Screen blending removes the black tile; the soft edge removes its seam. */
.cidg-platinum-footer-brand { isolation:isolate; }
.cidg-platinum-footer-mark { background:transparent; overflow:visible; }
.cidg-platinum-footer-mark img { background:transparent; mix-blend-mode:screen; mask-image:radial-gradient(ellipse at center,#000 54%,transparent 73%); }
@media(max-width:1080px) { .cidg-website-banner { max-width:460px; } .cidg-platinum-masthead { min-height:64px; } }
@media(max-width:600px) { .cidg-platinum-header { gap:0 12px; padding:8px 12px; } .cidg-platinum-menu-button { min-width:66px; min-height:44px; font-size:.85rem; } .cidg-platinum-footer-mark { width:80px; height:80px; } }
`;
const before=readFileSync(path,'utf8');
if(!before.includes('/* CIDG_WEBSITE_BANNER_202609 */')) throw Error('Expected banner baseline missing.');
if(before.includes(marker)) { if(!before.endsWith(css)) throw Error('Refinement differs from expected state; review required.'); console.log('Updated 0 files.'); }
else { const temp=path+'.'+randomUUID()+'.tmp'; writeFileSync(temp,before+css,{flag:'wx'}); renameSync(temp,path); console.log('Updated styles.css.'); }
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
