import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const changes=new Map();
const file=resolve(root,'src/pages/GovernanceEcosystemPage.tsx');
let source=readFileSync(file,'utf8');
if(!source.includes('cidg-governance-hero-copy')){
 const before='<section className="cidg-framework-hero">';
 const end='      </section>\n\n      <div className="cidg-alpha-stage';
 const close='      </div>\n\n      {/* CIDG_V716B';
 for(const needle of [before,end,close])if(source.split(needle).length!==2)throw Error('Unexpected governance markup');
 source=source.replace(before,'<section className="cidg-framework-hero cidg-governance-hero-grid">\n        <div className="cidg-governance-hero-copy">').replace(end,'        </div>\n\n      <div className="cidg-alpha-stage').replace(close,'      </div>\n      </section>\n\n      {/* CIDG_V716B');
 changes.set(file,source);
}
const css=`
/* CIDG_IMAGE_ALIGNMENT_REFINEMENT_202609 */
/* Account for the wordmark's trailing letter spacing, not just its box. */
.cidg-live-tagline { width:calc(100% - 2px); }
@media(min-width:1101px) { .cidg-platinum-desktop-nav { margin-right:156px; } }
#main-content .cidg-ecosystem-hero,
#main-content .cidg-framework-page .cidg-governance-hero-grid { display:grid!important; grid-template-columns:minmax(0,760px) minmax(0,560px); justify-content:start; align-items:center; gap:32px 64px; }
#main-content .cidg-ecosystem-hero-art { width:100%; max-width:560px; justify-self:start; }
#main-content .cidg-ecosystem-hero .cidg-ecosystem-hero-image { width:100%; max-width:560px; height:auto; max-height:none; margin:0; }
#main-content .cidg-ecosystem-hero .cidg-ecosystem-hero-image img { width:100%; max-width:560px; max-height:480px; object-fit:contain; }
#main-content .cidg-framework-page .cidg-governance-hero-grid .cidg-alpha-stage { width:100%!important; max-width:560px!important; margin:0!important; padding:0!important; }
#main-content .cidg-framework-page .cidg-governance-hero-grid .cidg-alpha-stage figure { width:100%!important; max-width:560px!important; margin:0!important; }
#main-content .cidg-framework-page .cidg-governance-hero-grid .cidg-alpha-stage img { max-height:520px; object-fit:contain!important; }
@media(max-width:1100px) {
 #main-content .cidg-ecosystem-hero,#main-content .cidg-framework-page .cidg-governance-hero-grid { grid-template-columns:minmax(0,1.2fr) minmax(0,1fr); gap:28px; }
}
@media(max-width:700px) {
 #main-content .cidg-ecosystem-hero,#main-content .cidg-framework-page .cidg-governance-hero-grid { grid-template-columns:minmax(0,1fr); }
 #main-content .cidg-ecosystem-hero-art { display:block; max-width:400px; text-align:center; }
 #main-content .cidg-ecosystem-hero .cidg-ecosystem-hero-image { max-width:100%; }
 #main-content .cidg-ecosystem-hero .cidg-ecosystem-hero-image img { max-height:340px; }
 #main-content .cidg-framework-page .cidg-governance-hero-grid .cidg-alpha-stage { max-width:400px; }
}
`;
const style=resolve(root,'src/visual-system.css'),current=readFileSync(style,'utf8');
if(!current.includes('/* CIDG_IMAGE_ALIGNMENT_REFINEMENT_202609 */'))changes.set(style,current+css);
else if(!current.endsWith(css))throw Error('Refinement rules differ; review before replacing');
for(const [path,value]of changes){const tmp=path+'.'+randomUUID()+'.tmp';writeFileSync(tmp,value,{flag:'wx'});renameSync(tmp,path);}
console.log(`Updated ${changes.size} files.`);
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
