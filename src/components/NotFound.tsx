import {Helmet} from 'react-helmet-async';
import {Link} from '@tanstack/react-router';
export default function NotFound(){return <section style={{padding:'48px'}}><Helmet><title>Page not found | CoreIdentity</title><meta name="robots" content="noindex, follow"/></Helmet><h1>Page not found</h1><p>This address is unavailable.</p><Link to="/">Return to CoreIdentity</Link></section>;}
