import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const WRAPPER = path.join(ROOT, "src/components/CoreIdentityTechnologiesComposed.tsx");

const source = `/* CHC_TECHNOLOGIES_LAYOUT_ROUTE */
import * as React from "react";
import { Outlet } from "@tanstack/react-router";

export function CoreIdentityTechnologiesComposed() {
  return (
    <>
      <Outlet />
      <section style={{ marginTop: 32 }}>
        {/* additive content goes here */}
      </section>
    </>
  );
}
`;

const prev = fs.existsSync(WRAPPER) ? fs.readFileSync(WRAPPER, "utf8") : null;
if (prev !== source) {
  fs.mkdirSync(path.dirname(WRAPPER), { recursive: true });
  fs.writeFileSync(WRAPPER, source, "utf8");
  console.log("Rewrote CoreIdentityTechnologiesComposed as layout route.");
} else {
  console.log("Layout route already finalized (idempotent).");
}

execSync("npm run build", { stdio: "inherit" });
