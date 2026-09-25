import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const pending=new Map();
const header=resolve(root,'src/components/Header.tsx'),before=readFileSync(header,'utf8');
const anchor='      <Link to="/" className="cidg-website-banner" aria-label="CoreIdentity Group home">';
const emblem='\n        <img className="cidg-header-emblem" src="/images/brand/coreidentity-header-sphere.webp" width="56" height="56" alt="" aria-hidden="true" decoding="async" />';
if(!before.includes('className="cidg-header-emblem"')){if(before.split(anchor).length!==2)throw Error('Unexpected header markup');pending.set(header,before.replace(anchor,anchor+emblem));}
const css=`
/* CIDG_HEADER_EMBLEM_202609 */
.cidg-website-banner { grid-template-columns:56px max-content; column-gap:12px; align-items:center; }
.cidg-header-emblem { grid-column:1; grid-row:1 / 3; display:block; width:50px; height:50px; justify-self:center; transform:translateY(3px); object-fit:contain; mix-blend-mode:screen; mask-image:none; }
.cidg-live-wordmark,.cidg-live-tagline { grid-column:2; }
@media(max-width:1240px) {
 .cidg-platinum-desktop-nav { display:none; }
 .cidg-platinum-menu-button { display:inline-flex; }
}
@media(max-width:600px) {
 .cidg-website-banner { grid-template-columns:36px max-content; column-gap:8px; }
 .cidg-header-emblem { width:30px; height:30px; transform:translateY(2px); }
 .cidg-live-wordmark { font-size:clamp(13px,4.25vw,18px); }
 .cidg-live-tagline { min-width:0; width:100%; max-width:100%; }
 .cidg-website-banner { grid-template-columns:36px minmax(0,max-content); }
}
`;
const style=resolve(root,'src/visual-system.css'),old=readFileSync(style,'utf8');
if(!old.includes('/* CIDG_HEADER_EMBLEM_202609 */'))pending.set(style,old+css);
else if(!old.endsWith(css)){ const marker='/* CIDG_HEADER_EMBLEM_202609 */'; if(old.split(marker).length!==2)throw Error('Unexpected duplicate emblem styles'); pending.set(style,old.slice(0,old.indexOf(marker)).trimEnd()+'\n'+css); }
for(const [path,text]of pending){const temp=path+'.'+randomUUID()+'.tmp';writeFileSync(temp,text,{flag:'wx'});renameSync(temp,path);}
console.log(`Updated ${pending.size} files.`);
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
