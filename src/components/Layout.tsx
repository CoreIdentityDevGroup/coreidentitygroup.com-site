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
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(0,0,0,1) 70%)',
      }}
    >
      {/* Ambient top radial */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '700px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.14) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ambient orb — left */}
      <div
        className="cidg-orb cidg-orb-blue"
        style={{
          position: 'fixed',
          top: '30%', left: '-10%',
          width: '500px', height: '500px',
          zIndex: 0,
        }}
      />

      {/* Ambient orb — right */}
      <div
        className="cidg-orb cidg-orb-teal"
        style={{
          position: 'fixed',
          top: '60%', right: '-8%',
          width: '400px', height: '400px',
          zIndex: 0,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="cidg-grid-bg"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main className="mx-auto container-max px-4 py-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
