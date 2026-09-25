// Extend the approved artwork through presentation only; safe to repeat.
import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const path=resolve(root,'src/styles.css');
const marker='/* CIDG_FULL_WIDTH_HEADER_202609 */';
const css=`
${marker}
.cidg-platinum-header { isolation:isolate; background:linear-gradient(105deg,#131c21,#090d0f 55%,#151b1e)!important; }
/* Only the globe at the right of the source is exposed by this decorative layer. */
.cidg-platinum-header::before { content:""; position:absolute; inset:0; z-index:-1; pointer-events:none; background-image:url('/images/brand/coreidentity-website-header-202609.png'); background-size:100% auto; background-position:right center; background-repeat:no-repeat; mask-image:linear-gradient(to right,transparent 68%,#000 88%); opacity:.75; }
.cidg-website-banner { position:relative; }
.cidg-website-banner img { mix-blend-mode:screen; mask-image:linear-gradient(to right,transparent,#000 8%,#000 62%,transparent 100%),linear-gradient(to bottom,transparent,#000 15%,#000 80%,transparent); mask-composite:intersect; }
.cidg-platinum-masthead { position:relative; z-index:1; padding:10px 16px; border-radius:12px; background:rgba(7,10,12,.9)!important; box-shadow:0 0 24px 12px rgba(7,10,12,.32); }
@media(max-width:1080px) { .cidg-platinum-masthead { padding:4px; } }
@media(max-width:600px) { .cidg-platinum-header::before { background-size:auto 100%; mask-image:linear-gradient(to right,transparent 55%,#000); opacity:.4; } }
`;
const before=readFileSync(path,'utf8');
if(!before.includes('/* CIDG_COMPACT_BRANDING_202609 */')) throw Error('Expected compact header baseline missing.');
if(before.includes(marker)){if(!before.endsWith(css))throw Error('Unexpected modified header rules.');console.log('Updated 0 files.');}
else{const temp=path+'.'+randomUUID()+'.tmp';writeFileSync(temp,before+css,{flag:'wx'});renameSync(temp,path);console.log('Updated styles.css.');}
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
