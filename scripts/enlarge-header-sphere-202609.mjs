import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const pending=[];
for(const rel of ['src/visual-system.css','scripts/add-header-emblem-202609.mjs','scripts/replace-header-sphere-202609.mjs']){
 const path=resolve(root,rel),old=readFileSync(path,'utf8');
 let next=old;
 for(const [from,to] of [['width:50px; height:50px;','width:60px; height:60px;'],['width:30px; height:30px;','width:36px; height:36px;']]){
  if(next.includes(from))next=next.replaceAll(from,to);
  else if(!next.includes(to))throw Error('Unexpected sphere sizing in '+rel);
 }
 if(rel!=='scripts/replace-header-sphere-202609.mjs'){
  next=next.replace('grid-template-columns:56px max-content;','grid-template-columns:60px max-content;');
  if(!next.includes('grid-template-columns:60px max-content;'))throw Error('Missing desktop brand grid');
 }
 if(next!==old)pending.push([path,next]);
}
for(const [path,data] of pending){const tmp=path+'.'+randomUUID()+'.tmp';writeFileSync(tmp,data,{flag:'wx'});renameSync(tmp,path);}
console.log(`Updated ${pending.length} files.`);
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
