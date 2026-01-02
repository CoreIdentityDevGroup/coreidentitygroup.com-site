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

  // No template literals (backticks) -> avoids TS1160 errors
  el.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.style.padding = "16px";
  wrap.style.fontFamily = "system-ui";
  wrap.style.color = "#fff";
  wrap.style.background = "#111";
  wrap.style.minHeight = "100vh";

  const h1 = document.createElement("h1");
  h1.textContent = "Site Error";
  h1.style.fontSize = "20px";
  h1.style.margin = "0 0 12px 0";

  const pre = document.createElement("pre");
  pre.textContent = message;
  pre.style.whiteSpace = "pre-wrap";
  pre.style.wordBreak = "break-word";
  pre.style.background = "#222";
  pre.style.padding = "12px";
  pre.style.borderRadius = "8px";

  const p = document.createElement("p");
  p.textContent = "(Temporary debug screen.)";
  p.style.opacity = "0.8";
  p.style.marginTop = "12px";

  wrap.appendChild(h1);
  wrap.appendChild(pre);
  wrap.appendChild(p);
  el.appendChild(wrap);
}

window.addEventListener("error", (e) => {
  showFatal(
    "window.error:\n" +
      e.message +
      "\n\n" +
      (e.filename || "") +
      ":" +
      String(e.lineno) +
      ":" +
      String(e.colno)
  );
});

window.addEventListener("unhandledrejection", (e: any) => {
  const reason =
    typeof e.reason === "string"
      ? e.reason
      : e.reason?.message || JSON.stringify(e.reason, null, 2);
  showFatal("unhandledrejection:\n" + reason);
});

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('Missing #root element. Check index.html for <div id="root"></div>.');
}

forceVisibleRoot(rootEl);

// Immediate boot marker
rootEl.innerHTML = "";
const boot = document.createElement("div");
boot.style.padding = "16px";
boot.style.fontFamily = "system-ui";
boot.style.color = "#fff";
boot.style.background = "#111";
boot.style.minHeight = "100vh";

const bootH = document.createElement("h1");
bootH.textContent = "Loading…";
bootH.style.fontSize = "20px";
bootH.style.margin = "0 0 12px 0";

const bootP = document.createElement("p");
bootP.textContent = "Booting application bundle.";
bootP.style.opacity = "0.8";

boot.appendChild(bootH);
boot.appendChild(bootP);
rootEl.appendChild(boot);

// Lazy-load router so import-time crashes are catchable
import("./router")
  .then(({ router }) => {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  })
  .catch((err: any) => {
    showFatal("Router import failed:\n" + (err?.stack || err?.message || String(err)));
  });
