import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const ROUTER = path.join(ROOT, "src/router.tsx");

if (!fs.existsSync(ROUTER)) throw new Error("src/router.tsx not found.");

let s = fs.readFileSync(ROUTER, "utf8");

// Sentinel marker so we can keep this deterministic
const SENTINEL = "/* CHC_TECHNOLOGIES_NESTED_ROUTE_LOCK */";
if (!s.includes(SENTINEL)) s = `${SENTINEL}\n` + s;

/**
 * We assume router has a route entry for /coreidentity/technologies.
 * We normalize it into a layout route using CoreIdentityTechnologiesComposed
 * and an index child that renders the existing page route component (whatever it is).
 *
 * Because the page component name may drift, we do NOT reference it directly here.
 * We only nest a child that uses the pre-existing route component if it exists.
 *
 * Implementation approach:
 * - If router currently maps "/coreidentity/technologies" to CoreIdentityTechnologiesComposed,
 *   we rewrite that entry to use a layout-style route with children.
 *
 * This is intentionally conservative: it only changes the technologies route block.
 */

function replaceTechnologiesRouteBlock(src) {
  // Heuristic: find block containing the route path and component: CoreIdentityTechnologiesComposed
  // and replace with a nested layout + index child.
  const re = /(\bpath:\s*["']\/coreidentity\/technologies["'][\s\S]{0,400}?\bcomponent:\s*CoreIdentityTechnologiesComposed\s*,?)([\s\S]*?\})/m;
  const m = src.match(re);
  if (!m) return { src, changed: false };

  // If it already has children, leave it
  if (m[0].includes("children:") || m[0].includes("childRoutes") || m[0].includes("addChildren")) {
    return { src, changed: false };
  }

  // Replace within the matched object: add children with an index route that renders <Outlet/> target.
  // We don’t know the page component, but if the project uses a Page component for this route,
  // the simplest is to render nothing at index and rely on the actual page being moved under the layout.
  // So instead, we create an index child that lazy-imports the page module directly and renders whatever it exports.
  // This avoids needing to know the symbol name.

  const indexChild = `
    children: [
      {
        path: "/",
        component: () => {
          // Lazy import the page module and render its default export if present, else any first export.
          const React = require("react");
          const Mod = require("./pages/CoreIdentityTechnologiesPage");
          const C = Mod?.default ?? Mod?.CoreIdentityTechnologiesPage ?? Mod?.Route ?? Object.values(Mod || {})[0];
          return React.createElement(C || "div", null);
        },
      },
    ],`;

  // Insert children before the closing brace of the matched route object.
  const replaced = m[0].replace(/\}\s*$/, `${indexChild}\n  }`);

  return { src: src.replace(m[0], replaced), changed: true };
}

const out = replaceTechnologiesRouteBlock(s);

if (out.changed) {
  fs.writeFileSync(ROUTER, out.src, "utf8");
  console.log("Locked nested technologies route wiring.");
} else {
  console.log("Technologies route wiring already locked (or pattern not found).");
}

execSync("npm run build", { stdio: "inherit" });
