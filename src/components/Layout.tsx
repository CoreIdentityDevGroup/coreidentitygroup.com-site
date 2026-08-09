import { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import Footer from "./Footer";

export function Layout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    if (hash?.startsWith("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="cidg-platinum-site">
      
      <a className="skip-link" href="#main-content">Skip to main content</a>
<Header />
      <main className="cidg-platinum-main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

