import {build} from 'vite';
import {readFileSync,writeFileSync} from 'node:fs';
await build({mode:'production',logLevel:'error',build:{ssr:'scripts/render-pages.tsx',outDir:'work/seo-build',emptyOutDir:true,manifest:false}});
try{
 const {renderPage,posts,remoteCMS}=await import('../work/seo-build/render-pages.js');
 if(remoteCMS)throw Error('CMS enabled: a verified build snapshot is required before publishing.');
 const aliases=new Set(['/ciag','/coreidentity-ai-advisory-group','/coreidentity-advisory-group','/governance-infrastructure']);
 const paths=[...readFileSync('src/router.tsx','utf8').matchAll(/path:\s*"([^"$]+)"/g)].map(m=>m[1]).filter(p=>!aliases.has(p));
 paths.push(...posts.map(p=>'/blog/'+p.slug));
 const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
 const catalog={};const titles=new Set();
 for(const path of paths){const r=await renderPage(path);const title=decode(r.title.replace(/<[^>]+>/g,''));const description=decode(r.meta.match(/name="description" content="([^"]*)"/)?.[1]||'');if(!description)throw Error('Missing description: '+path);if(titles.has(title))throw Error('Duplicate title: '+title);titles.add(title);catalog[path]={title,description};}
 writeFileSync('src/data/searchMetadata.json',JSON.stringify(catalog,null,2)+'\n');
 writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+paths.filter(p=>p!=='/founders').map(p=>'  <url><loc>https://coreidentitygroup.com'+p+'</loc></url>').join('\n')+'\n</urlset>\n');
 console.log('Prepared unique metadata for '+paths.length+' routes.');
}finally{}
