import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <div style={{ color: "white", padding: "2rem" }}>
    <h1>React is rendering</h1>
    <p>If you see this, the black screen is router/layout related.</p>
  </div>
);
