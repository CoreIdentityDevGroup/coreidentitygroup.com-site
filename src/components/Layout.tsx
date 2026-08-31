import { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import Footer from "./Footer";

const FRAMED_ROUTES = new Set(["/about", "/leadership", "/governance-console", "/contact"]);

export function Layout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonical = `https://coreidentitygroup.com${canonicalPath}`;
  const framed = FRAMED_ROUTES.has(canonicalPath);

  useEffect(() => {
    if (hash?.startsWith("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="cidg-platinum-site">
      <Helmet>
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main className={`cidg-platinum-main ${framed ? "cidg-platinum-main--framed" : ""}`} id="main-content">
        {framed ? <div className="cidg-interior-frame"><Outlet /></div> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
