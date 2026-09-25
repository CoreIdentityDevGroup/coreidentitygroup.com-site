import {readFileSync,existsSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const catalog=JSON.parse(readFileSync('src/data/searchMetadata.json','utf8'));
const redirects=readFileSync('public/_redirects','utf8').split('\n').filter(x=>x&&!x.startsWith('#')).map(x=>x.trim().split(/\s+/)[0]);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(x=>[x[1],x[2]]));
const missing=new Set(), warnings=[];
for(const [route,meta]of Object.entries(catalog)){
 const file=route==='/'?'dist/index.html':`dist${route}.html`;
 const html=readFileSync(file,'utf8'),head=html.split('</head>')[0];
 assert.equal((head.match(/<title[\s>]/g)||[]).length,1,route+' title');
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,route+' h1');
 for(const name of ['description','robots','twitter:title','twitter:description','twitter:image'])assert.equal([...head.matchAll(/<meta\b[^>]*>/g)].filter(m=>attrs(m[0]).name===name).length,1,route+' '+name);
 const canon=[...head.matchAll(/<link\b[^>]*>/g)].filter(m=>attrs(m[0]).rel==='canonical');assert.equal(canon.length,1,route+' canonical');assert.equal(attrs(canon[0][0]).href,'https://coreidentitygroup.com'+route);
 for(const m of head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
 for(const m of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)){
  const a=attrs(m[0]),url=a.src||a.href;if(!url?.startsWith('/')||url.startsWith('//'))continue;
  const path=url.split(/[?#]/)[0];if(path==='/')continue;
  if(!existsSync('dist'+path)&&!existsSync('dist'+path+'.html')&&!redirects.includes(path))missing.add(route+' → '+path);
  if(m[0].startsWith('<img'))assert.ok('alt'in a,route+' missing image alt');
 }
 if(meta.title.length>70||meta.description.length>180)warnings.push({route,titleLength:meta.title.length,descriptionLength:meta.description.length});
 assert.ok(!html.includes('PENDING_VERIFICATION'),route+' placeholder');
 assert.ok(!html.includes('animate-pulse'),route+' loading skeleton');
 if(route==='/leadership'){assert.ok(html.includes('Senior Advisor'));assert.ok(html.includes('todd-morgan-optimized.webp'));}
}
assert.equal(missing.size,0,'Broken internal targets:\n'+[...missing].join('\n'));
const map=readFileSync('dist/sitemap.xml','utf8');assert.ok(!map.includes('/founders'));
assert.ok(readFileSync('dist/founders.html','utf8').includes('noindex'));
assert.ok(!readFileSync('public/_redirects','utf8').includes('/* /index.html 200'));
const {onRequest}=await import('../functions/_middleware.js');
for(const ua of ['Googlebot','bingbot','LinkedInBot','Mozilla/5.0']){let calls=0;const response=await onRequest({request:new Request('https://coreidentitygroup.com/',{headers:{'user-agent':ua}}),next:()=>{calls++;return new Response('complete page');}});assert.equal(calls,1);assert.equal(await response.text(),'complete page');}
writeFileSync('dist/seo-validation.json',JSON.stringify({pages:Object.keys(catalog).length,sitemapUrls:(map.match(/<loc>/g)||[]).length,missingInternalTargets:0,metadataLengthReview:warnings},null,2)+'\n');
console.log(`SEO validation passed: ${Object.keys(catalog).length} pages; no missing internal targets; ${warnings.length} metadata length review notes.`);
