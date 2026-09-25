import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const names=execFileSync('git',['diff','--name-only'],{cwd:root,encoding:'utf8'}).trim().split('\n');
for(const name of names.filter(n=>n.startsWith('src/pages/')&&n.endsWith('.tsx'))){
 const path=resolve(root,name),before=readFileSync(path,'utf8'),after=before.replace(/^[\t ]+$/gm,'');
 if(before!==after){const temp=path+'.'+randomUUID()+'.tmp';writeFileSync(temp,after,{flag:'wx'});renameSync(temp,path);}
}
execFileSync('git',['diff','--check'],{cwd:root,stdio:'inherit'});
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
