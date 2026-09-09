import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./router";
import "./styles.css";
import "./visual-system.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
  </React.StrictMode>,
);
