// Canonical shared header and fluid page layout. Validates before atomic writes.
import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),pending=new Map();
function change(file,fn){const p=resolve(root,file),s=readFileSync(p,'utf8'),n=fn(s);if(n!==s)pending.set(p,n);}
change('src/components/Header.tsx',s=>{
 const old='<header className={`cidg-platinum-header cidg-unified-header ${pathname === "/" ? "has-brand-hero" : ""}`} ref={headerRef}>';
 const next='<header className="cidg-platinum-header cidg-unified-header" ref={headerRef}>';
 if(!s.includes(old)&&!s.includes(next))throw Error('Unknown header baseline');
 s=s.replace(old,next);
 const hero=/      \{pathname === "\/" && <section className="cidg-brand-hero"[\s\S]*?      <\/section>\}\n/g;
 s=s.replace(hero,'');
 if(s.includes('cidg-brand-hero'))throw Error('Unexpected remaining hero');return s;
});
change('src/pages/HomePage.tsx',s=>s.replace('<h2 id="cidg-platinum-title">Start with executive direction.<br />Build toward governed autonomy.</h2>','<h1 id="cidg-platinum-title">Start with executive direction.<br />Build toward governed autonomy.</h1>'));
const css=`/* CIDG_SHARED_FLUID_LAYOUT_202609 */
:root { --cidg-gutter:48px; --cidg-page-inset:var(--cidg-gutter); }
/* One compact header for every route. Artwork exposes only the source's right globe. */
.cidg-platinum-header { position:relative; inset:auto; z-index:1000; isolation:isolate; display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:0 24px; padding:20px var(--cidg-gutter); min-height:104px; box-sizing:border-box; pointer-events:auto; background:#080f13!important; }
.cidg-platinum-header::before { content:""; position:absolute; inset:0 0 0 auto; width:38%; z-index:-1; pointer-events:none; background-image:url('/images/brand/coreidentity-website-header-202609.png'); background-size:350% auto; background-position:right center; background-repeat:no-repeat; mask-image:linear-gradient(to right,transparent,#000 65%); opacity:.32; }
.cidg-website-banner { display:block; width:fit-content; color:#eef0f1; text-decoration:none; }
.cidg-live-wordmark { display:block; font-family:Arial,sans-serif; font-size:28px; letter-spacing:.07em; line-height:1.2; white-space:nowrap; }
.cidg-live-wordmark strong { font-weight:700; }
.cidg-live-wordmark>span { font-weight:300; }
.cidg-live-tagline { display:block; margin-top:8px; font-size:10px; letter-spacing:.3em; text-transform:uppercase; }
.cidg-platinum-masthead { width:auto; min-height:56px; margin:0; padding:0; justify-content:flex-end; border:0; border-radius:0; background:transparent!important; box-shadow:none; backdrop-filter:none; }
.cidg-platinum-desktop-nav { justify-content:flex-end; }
.cidg-platinum-desktop-nav .cidg-platinum-contact { background:rgba(6,10,14,.7); border:1px solid #c1c3c4; border-radius:999px; padding:0 24px; }
.cidg-platinum-menu-button { color:#fff; background:#151d23; border-color:#737373; }
.cidg-platinum-menu { grid-column:1/-1; position:static; inset:auto; display:none; padding:16px 0 24px; opacity:1; visibility:visible; }
.cidg-platinum-menu.is-open { display:block; }
.cidg-platinum-menu-inner { height:auto; overflow:visible; }
.cidg-platinum-header a:focus-visible,.cidg-platinum-header button:focus-visible { outline:2px solid #fff; outline-offset:3px; }
.cidg-platinum-site>.cidg-platinum-main { padding-top:0!important; }
/* Edge anchored containers: extra monitor width becomes usable column space. */
.cidg-interior-frame { width:auto; max-width:none; margin-inline:var(--cidg-gutter); padding:48px 0 64px; }
.cidg-interior-frame>*,.cidg-interior-frame>*>section { margin-left:0!important; margin-right:0!important; }
.cidg-interior-frame .mx-auto { margin-left:0!important; margin-right:0!important; }
.cidg-ecosystem-hero,.cidg-journey,.cidg-platinum-footer,.advisory-lockup,.advisory-hero,.advisory-nav,.advisory-section,.advisory-form-section { padding-left:var(--cidg-gutter)!important; padding-right:var(--cidg-gutter)!important; }
.advisory-section-inner,.cidg-platinum-footer-grid,.cidg-platinum-footer-legal { width:100%; max-width:none; margin-inline:0; }
.advisory-site { --ad-frame:100%; }
.advisory-nav { top:0; }
.cidg-ecosystem-hero { grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:40px; }
.cidg-ecosystem-hero-copy { max-width:760px; }
.cidg-ecosystem-hero h1 { font-size:48px; color:#172234!important; }
.cidg-ecosystem-hero-art { width:100%; max-width:520px; justify-self:center; }
.cidg-ecosystem-hero .cidg-ecosystem-hero-image,.cidg-ecosystem-hero .cidg-ecosystem-hero-image img { width:100%; max-width:440px; max-height:380px; margin-inline:auto; }
.cidg-platinum-footer-brand { isolation:isolate; }
.cidg-platinum-footer-mark { width:80px; height:80px; border-radius:0; background:transparent; overflow:visible; }
.cidg-platinum-footer-mark img { background:transparent; mix-blend-mode:screen; mask-image:radial-gradient(ellipse at center,#000 54%,transparent 73%); }
@media(max-width:1080px) { :root { --cidg-gutter:32px; } .cidg-live-wordmark { font-size:24px; } .cidg-ecosystem-hero { gap:28px; } .cidg-ecosystem-hero h1 { font-size:40px; } }
@media(max-width:600px) { :root { --cidg-gutter:20px; } .cidg-platinum-header { min-height:88px; padding:16px var(--cidg-gutter); gap:0 12px; } .cidg-live-wordmark { font-size:18px; letter-spacing:.035em; } .cidg-live-tagline { font-size:7px; letter-spacing:.2em; } .cidg-platinum-menu-button { min-width:60px; min-height:44px; font-size:.85rem; } .cidg-ecosystem-hero { grid-template-columns:minmax(0,1fr); } .cidg-ecosystem-hero h1 { font-size:34px; } .cidg-ecosystem-hero-art { display:flex; max-width:100%; } .cidg-ecosystem-hero .cidg-ecosystem-hero-image { flex:0 0 110px; max-width:110px; } .cidg-ecosystem-hero .cidg-ecosystem-hero-image img { max-height:110px; } }
`;
change('src/styles.css',s=>{
 const marker='/* CIDG_SHARED_FLUID_LAYOUT_202609 */';
 if(s.includes(marker)){if(!s.endsWith(css))throw Error('Canonical layout differs; review required');return s;}
 const start=s.indexOf('/* CIDG_WEBSITE_BANNER_202609 */');if(start<0)throw Error('Missing experimental layout baseline');return s.slice(0,start)+css;
});
for(const [p,s]of pending){const tmp=p+'.'+randomUUID()+'.tmp';writeFileSync(tmp,s,{flag:'wx'});renameSync(tmp,p);}
console.log('Updated '+pending.size+' files.');
execFileSync('npm',['run','build'],{cwd:root,stdio:'inherit'});
