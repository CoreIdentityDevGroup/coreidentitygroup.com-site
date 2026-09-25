import React from 'react';
import {renderToString} from 'react-dom/server';
import {createRouter,createMemoryHistory,RouterProvider} from '@tanstack/react-router';
import {HelmetProvider} from 'react-helmet-async';
import {routeTree} from '../src/router';
import {blogPosts} from '../src/data/blogPosts';
import {isSanityConfigured} from '../src/lib/queries';
export const posts=blogPosts;
export const remoteCMS=isSanityConfigured;
export async function renderPage(path:string){
 const router=createRouter({routeTree,history:createMemoryHistory({initialEntries:[path]}),isServer:true});
 await router.load();
 const context:any={};
 const html=renderToString(<HelmetProvider context={context}><RouterProvider router={router}/></HelmetProvider>);
 const h=context.helmet;
 return {html,title:h.title.toString(),meta:h.meta.toString(),link:h.link.toString(),script:h.script.toString()};
}
