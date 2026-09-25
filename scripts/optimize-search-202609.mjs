import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash,randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const payload=JSON.parse(readFileSync(resolve(root,'scripts/seo-transform.json'),'utf8'));
const pending=new Map();
for(const {file,before,after}of payload.patches){const path=resolve(root,file),s=pending.get(path)??readFileSync(path,'utf8');if(after ? s.includes(after) : !s.includes(before))continue;if(s.split(before).length!==2)throw Error('Unexpected transform target: '+file);pending.set(path,s.replace(before,after));}
for(const [file,s]of Object.entries(payload.files)){
 const path=resolve(root,file);if(!path.startsWith(root+'/'))throw Error('Invalid output path');
 try{const current=readFileSync(path,'utf8');if(current!==s&&!payload.allowedPreimages[file]?.includes(createHash('sha256').update(current).digest('hex')))throw Error('Refusing to overwrite changed file: '+file);}catch(error){if(error.code!=='ENOENT')throw error;}
 pending.set(path,s);
}
for(const asset of payload.assets??[]){
 const input=readFileSync(resolve(root,asset.source));
 if(createHash('sha256').update(input).digest('hex')!==asset.sha256)throw Error('Image source changed: '+asset.source);
 const {default:sharp}=await import(process.env.CIDG_SHARP_MODULE || 'sharp');
 const image=sharp(input).rotate().resize({width:asset.width,withoutEnlargement:true});
 const output=await (asset.destination.endsWith('.png')?image.png():image.webp({quality:88})).toBuffer();
 pending.set(resolve(root,asset.destination),output);
}
for(const [path,value]of pending){try{if(readFileSync(path).equals(Buffer.isBuffer(value)?value:Buffer.from(value)))continue;}catch(error){if(error.code!=='ENOENT')throw error;}const tmp=path+'.'+randomUUID()+'.tmp';writeFileSync(tmp,value,{flag:'wx'});renameSync(tmp,path);}
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
