import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./styles.css";

function forceVisibleRoot(el: HTMLElement) {
  el.style.display = "block";
  el.style.opacity = "1";
  el.style.visibility = "visible";
  el.style.minHeight = "100vh";
  document.body.style.margin = "0";
  document.body.style.background = "#111";
}

function showFatal(message: string) {
  const el = document.getElementById("root");
  if (!el) return;

  forceVisibleRoot(el);

  el.innerHTML = `
    <div style="padding:16px;font-family:system-ui;color:#fff;background:#111;min-height:100vh;">
      <h1 style="font-size:20px;margin:0 0 12px 0;">Site Error</h1>
      <pre style="white-space:pre-wrap;word-break:break-word;background:#222;padding:12px;border-radius:8px;">
${message}
      </pre>
      <p style="opacity:.8;margin-top:12px;">(Temporary debug screen.)</p>
    </div>
  `;
}

// These only help if code executes—so we also lazy-load router below
window.addEventListener("error", (e) => {
  showFatal(`window.error:\n${e.message}\n\n${e.filename}:${e.lineno}:${e.colno}`);
});
window.addEventListener("unhandledrejection", (e: any) => {
  const reason =
    typeof e.reason === "string"
      ? e.reason
      : e.reason?.message || JSON.stringify(e.reason, null, 2);
  showFatal(`unhandledrejection:\n${reason}`);
});

const rootEl = document.getElementById("root");
if (!rootEl) {
  // If index.html is wrong, this will show nothing—but at least we tried
  throw new Error(`Missing #root element. Check index.html for <div id="root"></div>.`);
}

forceVisibleRoot(rootEl);

// Render a boot message immediately (proves main.tsx is executing)
rootEl.innerHTML = `
  <div style="padding:16px;font-family:system-ui;color:#fff;background:#111;min-height:100vh;">
    <h1 style="font-size:20px;margin:0 0 12px 0;">Loading…</h1>
    <p style="opacity:.8;">Booting application bundle.</
