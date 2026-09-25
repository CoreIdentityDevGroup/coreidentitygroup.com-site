import {Helmet} from 'react-helmet-async';
import {useRouterState} from '@tanstack/react-router';
import catalog from '../data/searchMetadata.json';
import {blogPosts} from '../data/blogPosts';
const origin='https://coreidentitygroup.com';
const aliases:Record<string,string>={'/ciag':'/advisory','/coreidentity-ai-advisory-group':'/advisory','/coreidentity-advisory-group':'/advisory','/governance-infrastructure':'/portfolio'};
export default function SearchMetadata(){
 const path=useRouterState({select:s=>s.location.pathname}).replace(/\/+$/,'')||'/';
 const canonical=origin+(aliases[path]||path);
 const entry=(catalog as Record<string,{title:string;description:string}>)[aliases[path]||path];
 const fallback:Record<string,[string,string]>={
 '/privacy':['Privacy Policy | CoreIdentity','How CoreIdentity collects, uses, and protects information when we interact through its website and services.'],
 '/terms':['Terms of Use | CoreIdentity','Terms governing use of the CoreIdentity corporate website and its information.'],
 '/founders':["Founder’s Brief | CoreIdentity",'Internal CoreIdentity founder briefing.'],
 };
 const defaults=fallback[path];
 const title=entry?.title||defaults?.[0]||'CoreIdentity — Making Autonomy Trustworthy';
 const description=entry?.description||defaults?.[1]||'CoreIdentity connects executive AI governance, workforce transformation, and Trust Infrastructure to preserve institutional authority and accountability.';
 const graph=[{'@type':'Organization','@id':origin+'/#organization',name:'CoreIdentity Development Group',url:origin,logo:origin+'/images/brand/coreidentity-logo-optimized.webp'}, {'@type':'WebSite','@id':origin+'/#website',name:'CoreIdentity',url:origin,publisher:{'@id':origin+'/#organization'}},{'@type':'WebPage','@id':canonical+'#page',url:canonical,name:title,description,isPartOf:{'@id':origin+'/#website'}}];
 const post=blogPosts.find(p=>path==='/blog/'+p.slug);
 const article=post?{'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,datePublished:post.date,description:post.excerpt,author:{'@type':'Person',name:post.author.split(',')[0]},publisher:{'@id':origin+'/#organization'},mainEntityOfPage:canonical}:null;
 return <Helmet>
 {defaults&&<title>{defaults[0]}</title>}{defaults&&<meta name="description" content={defaults[1]}/>}
 <link rel="canonical" href={canonical}/>
 <meta name="robots" content={path==='/founders'?'noindex, nofollow':'index, follow, max-image-preview:large'}/>
 <meta property="og:site_name" content="CoreIdentity Group"/><meta property="og:locale" content="en_US"/>
 <meta property="og:type" content={path.startsWith('/blog/')?'article':'website'}/>
 <meta property="og:url" content={canonical}/><meta property="og:title" content={title}/><meta property="og:description" content={description}/>
 <meta property="og:image" content={origin+'/images/brand/coreidentity-website-header-202609.png'}/><meta property="og:image:alt" content="CoreIdentity Group — Making Autonomy Trustworthy"/>
 <meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={title}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={origin+'/images/brand/coreidentity-website-header-202609.png'}/><meta name="twitter:image:alt" content="CoreIdentity Group — Making Autonomy Trustworthy"/>
 <script type="application/ld+json">{JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script>
 {article&&<script type="application/ld+json">{JSON.stringify(article).replace(/</g,'\\u003c')}</script>}
 </Helmet>;
}
