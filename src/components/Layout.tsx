import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "@tanstack/react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
