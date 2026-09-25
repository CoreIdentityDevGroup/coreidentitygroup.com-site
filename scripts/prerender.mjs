import {build} from 'vite';
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
await build({mode:'production',logLevel:'error',build:{ssr:'scripts/render-pages.tsx',outDir:'work/seo-build',emptyOutDir:true,manifest:false}});
try {
 const {renderPage,posts,remoteCMS}=await import('../work/seo-build/render-pages.js');
 if(remoteCMS)throw Error('Remote CMS enabled: implement a verified CMS build snapshot before prerendering.');
 const aliases=new Set(['/ciag','/coreidentity-ai-advisory-group','/coreidentity-advisory-group','/governance-infrastructure']);
 const routes=[...readFileSync(resolve(root,'src/router.tsx'),'utf8').matchAll(/path:\s*"([^"$]+)"/g)].map(m=>m[1]).filter(p=>!aliases.has(p));
 routes.push(...posts.map(p=>'/blog/'+p.slug));
 const template=readFileSync(resolve(root,'dist/index.html'),'utf8');
 const entries=[];
 for(const route of routes){
  const result=await renderPage(route);
  if(!result.html.includes('<h1'))throw Error('Missing crawlable heading: '+route);
  if(!result.title||!result.meta.includes('name="description"'))throw Error('Missing metadata: '+route);
  const manifest=JSON.parse(readFileSync(resolve(root,'dist/.vite/manifest.json'),'utf8'));
  result.html=result.html.replace(/src="(\/src\/[^"]+)"/g,(_,url)=>{const asset=manifest[url.slice(1)];if(!asset)throw Error('Unmapped image '+url);return 'src="/'+asset.file+'"';});
  const file=resolve(root,'dist',route==='/'?'index.html':route.slice(1)+'.html');mkdirSync(dirname(file),{recursive:true});
  writeFileSync(file,template.replace('<!-- SEO_HEAD -->',[result.title,result.meta,result.link,result.script].join('\n')).replace('<div id="root"></div>','<div id="root">'+result.html+'</div>'));
  if(!result.meta.includes('noindex'))entries.push(route);
 }
 writeFileSync(resolve(root,'dist/sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+entries.map(p=>'  <url><loc>https://coreidentitygroup.com'+p+'</loc></url>').join('\n')+'\n</urlset>\n');
 writeFileSync(resolve(root,'dist/404.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | CoreIdentity</title></head><body><main><h1>Page not found</h1><p>This address is unavailable.</p><a href="/">Return to CoreIdentity</a></main></body></html>');
 console.log('Prerendered '+entries.length+' crawlable pages.');
}finally{}
