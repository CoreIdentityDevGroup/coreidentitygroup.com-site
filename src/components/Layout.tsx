import React, { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import Footer from "./Footer";

export function Layout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    if (hash && hash.startsWith("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <div className="relative z-10">
        <Header />
        <main className="mx-auto container-max px-4 pb-10 pt-[calc(6rem+2rem)]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
