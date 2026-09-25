import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const {default:sharp}=await import(process.env.CIDG_SHARP_MODULE || 'sharp');
const source=resolve(root,'scripts/assets/header-sphere-source.png');
const meta=await sharp(source).metadata();
if(meta.width!==304||meta.height!==274)throw Error('Unexpected source dimensions; review crop before proceeding');
const mask=Buffer.from('<svg width="260" height="258"><ellipse cx="130" cy="129" rx="128" ry="127" fill="white"/></svg>');
const asset=await sharp(source).extract({left:20,top:12,width:260,height:258}).composite([{input:mask,blend:'dest-in'}]).webp({lossless:true}).toBuffer();
const edits=new Map();
const output=resolve(root,'public/images/brand/coreidentity-header-sphere.webp');
let existing;try{existing=readFileSync(output);}catch(e){if(e.code!=='ENOENT')throw e;}
if(!existing?.equals(asset))edits.set(output,asset);
for(const rel of ['src/components/Header.tsx','scripts/add-header-emblem-202609.mjs']){
 const path=resolve(root,rel),old=readFileSync(path,'utf8');
 const from='/images/brand/coreidentity-logo-optimized.webp',to='/images/brand/coreidentity-header-sphere.webp';
 if(old.includes(from)){if(old.split(from).length!==2)throw Error('Unexpected logo references: '+rel);edits.set(path,old.replace(from,to));}
 else if(!old.includes(to))throw Error('Missing header logo: '+rel);
}
// The new tightly cropped sphere uses the full existing 56px box. Remove the
// old feathering, which would otherwise erase the new sphere's metal rim.
for(const rel of ['src/visual-system.css','scripts/add-header-emblem-202609.mjs']){
 const path=resolve(root,rel),old=edits.get(path)||readFileSync(path,'utf8');
 const from='mask-image:radial-gradient(ellipse at center,#000 54%,transparent 73%);',to='mask-image:none;';
 if(old.includes(from)){if(old.split(from).length!==2)throw Error('Unexpected mask references');edits.set(path,old.replace(from,to));}
 else if(!old.includes(to))throw Error('Missing emblem mask');
}
for(const rel of ['src/visual-system.css','scripts/add-header-emblem-202609.mjs']){
 const path=resolve(root,rel),old=edits.get(path)||readFileSync(path,'utf8');
 const next=old.replace('display:block; width:56px; height:56px; object-fit:contain;', 'display:block; width:60px; height:60px; justify-self:center; transform:translateY(3px); object-fit:contain;').replace('.cidg-header-emblem { width:36px; height:36px; }','.cidg-header-emblem { width:36px; height:36px; transform:translateY(2px); }');
 if(next!==old)edits.set(path,next);
}
for(const [path,data] of edits){const temp=path+'.'+randomUUID()+'.tmp';writeFileSync(temp,data,{flag:'wx'});renameSync(temp,path);}
console.log(`Updated ${edits.size} files.`);
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
