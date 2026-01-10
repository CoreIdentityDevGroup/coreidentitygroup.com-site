import React, { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import Footer from "./Footer";

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (hash && hash.startsWith("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_700px_at_50%_0%,rgba(59,130,246,0.18),rgba(0,0,0,0)_55%),linear-gradient(180deg,rgba(2,6,23,1)_0%,rgba(0,0,0,1)_70%)]">
      <Header />
      <main className="mx-auto container-max px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
