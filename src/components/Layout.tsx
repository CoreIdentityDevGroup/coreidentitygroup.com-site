import React, { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (hash && hash.startsWith("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div style={{ minHeight: "100vh", background: "#0b1220", color: "white" }}>
      <Header />
      <main className="mx-auto container-max px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
