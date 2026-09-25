// Apply approved company branding without changing layout. Safe to repeat.
import {readFileSync,writeFileSync,existsSync,renameSync,mkdirSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash,randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const hash=b=>createHash('sha256').update(b).digest('hex');
const assets=[['CIDG LinkedIn Logo.png','coreidentity-logo-202609.png','e2860d98ef5e9675d6869fb48f106ed60ef1109c76c009e8518e55ec37f81245'],['CIDG LinkedIn banner.png','coreidentity-banner-202609.png','f94119669760b13b725eb0df0767f6e2afb4edd184a658d4b4aec9716231acad']];
const pending=new Map();
for(const [name,out,expected] of assets){
 const dest=resolve(root,'public/images/brand',out);
 if(existsSync(dest)){if(hash(readFileSync(dest))!==expected)throw Error('Unexpected destination asset '+out);continue;}
 if(!process.argv[2])throw Error('Supply folder containing the approved source PNGs.');
 const bytes=readFileSync(resolve(process.argv[2],name));
 if(hash(bytes)!==expected)throw Error('Source asset does not match approval: '+name);
 pending.set(dest,bytes);
}
for(const [file,before,after] of [["src/components/Header.tsx", "/logo-mark.png", "/images/brand/coreidentity-logo-202609.png"], ["src/components/Footer.tsx", "/logo-mark.png", "/images/brand/coreidentity-logo-202609.png"], ["index.html", "https://coreidentitygroup.com/assets/coreidentity-logo.png", "https://coreidentitygroup.com/images/brand/coreidentity-logo-202609.png"], ["index.html", "https://coreidentitygroup.com/coreidentity-social-preview-v2.png", "https://coreidentitygroup.com/images/brand/coreidentity-banner-202609.png"], ["index.html", "property=\"og:image:width\" content=\"1200\"", "property=\"og:image:width\" content=\"2056\""], ["index.html", "property=\"og:image:height\" content=\"630\"", "property=\"og:image:height\" content=\"765\""], ["index.html", "property=\"og:image:alt\" content=\"CoreIdentity \u2014 The Institutional Foundation for the Autonomous Era\"", "property=\"og:image:alt\" content=\"CoreIdentity Group \u2014 Making Autonomy Trustworthy\""], ["index.html", "name=\"twitter:image:alt\" content=\"CoreIdentity \u2014 The Institutional Foundation for the Autonomous Era\"", "name=\"twitter:image:alt\" content=\"CoreIdentity Group \u2014 Making Autonomy Trustworthy\""]]){
 const dest=resolve(root,file);const text=pending.get(dest)??readFileSync(dest,'utf8');
 if(text.includes(after)&&!text.includes(before))continue;
 if(!text.includes(before))throw Error('Expected brand reference missing in '+file);
 pending.set(dest,text.split(before).join(after));
}
for(const [dest,content] of pending){mkdirSync(dirname(dest),{recursive:true});const tmp=dest+'.'+randomUUID()+'.tmp';writeFileSync(tmp,content,{flag:'wx'});renameSync(tmp,dest);}
console.log('Branding files updated:',pending.size);
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
