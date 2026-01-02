import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "./styles.css";

function showFatal(message: string) {
  const el = document.getElementById("root");
  if (!el) return;

  el.innerHTML = `
    <div style="padding:16px;font-family:system-ui;color:#fff;background:#111;min-height:100vh;">
      <h1 style="font-size:20px;margin:0 0 12px 0;">Site Error</h1>
      <pre style="white-space:pre-wrap;word-break:break-word;background:#222;padding:12px;border-radius:8px;">
${message}
      </pre>
      <p style="opacity:.8;margin-top:12px;">(This is a temporary debug screen.)</p>
    </div>
  `;
}

// Catch runtime errors that otherwise cause a blank page
window.addEventListener("error", (e) => {
  showFatal(`window.error:\n${e.message}\n\n${e.filename}:${e.lineno}:${e.colno}`);
});
window.addEventListener("unhandledrejection", (e) => {
  const reason =
    typeof e.reason === "string"
      ? e.reason
      : e.reason?.message || JSON.stringify(e.reason, null, 2);
  showFatal(`unhandledrejection:\n${reason}`);
});

try {
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    showFatal(`Missing #root element. Check index.html for <div id="root"></div>.`);
  } else {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
} catch (err: any) {
  showFatal(`Top-level mount error:\n${err?.stack || err?.message || String(err)}`);
}
