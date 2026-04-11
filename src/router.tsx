/* CHC_TECHNOLOGIES_IMPORT_NORMALIZED */
/* CHC_COMPOSED_TECHNOLOGIES_PATCH */
import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";

import HomePage from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { SentinelOSPage } from "./pages/SentinelOSPage";
import { NexusOSPage } from "./pages/NexusOSPage";
import { SmartNationAIPage } from "./pages/SmartNationAIPage";
import { CoreIdentityAdvisoryGroupPage } from "./pages/CoreIdentityAdvisoryGroupPage";
import { AgentIdentitySystemsPage } from "./pages/AgentIdentitySystemsPage";
import { PortalPage } from "./pages/PortalPage";
import { QuantumHardeningPage } from "./pages/QuantumHardeningPage";
import { AGO1Page } from "./pages/AGO1Page";
import { ResourcesPage } from "./pages/ResourcesPage";
import { FAQPage } from "./pages/FAQPage";
import { AboutPage } from "./pages/AboutPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import ContactPage from "./pages/ContactPage";
// CHC-MCP-ROUTE-v1
import { MCPPage } from "./pages/MCPPage";
import { CoreIdentityTechnologiesComposed } from "./components/CoreIdentityTechnologiesComposed";
const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const coreidentityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentity-technologies",
  component: CoreIdentityTechnologiesComposed,
});

const sentinelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sentinel-os",
  component: SentinelOSPage,
});

const nexusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nexus-os",
  component: NexusOSPage,
});

const smartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/smartnation-ai",
  component: SmartNationAIPage,
});

const ago1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ago-1",
  component: AGO1Page,
});

/**
 * Advisory Group routes
 * Canonical: /coreidentity-ai-advisory-group
 * Alias:     /coreidentity-advisory-group
 */
const coreidentityAIAdvisoryGroupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentity-ai-advisory-group",
  component: CoreIdentityAdvisoryGroupPage,
});

const advisoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentity-advisory-group",
  component: CoreIdentityAdvisoryGroupPage,
});

const portalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portal",
  component: PortalPage,
});

const pqcRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quantum-hardening",
  component: QuantumHardeningPage,
});

const aisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/agentidentity-systems",
  component: AgentIdentitySystemsPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: ResourcesPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQPage,
});

const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leadership",
  component: LeadershipPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const mcpRoute = createRoute({ getParentRoute: () => rootRoute, path: "/mcp", component: MCPPage });

import { SALPage } from "./pages/SALPage";
const salRoute = createRoute({ getParentRoute: () => rootRoute, path: "/sal", component: SALPage });

const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  coreidentityRoute,
  sentinelRoute,
  nexusRoute,
  smartRoute,
  ago1Route,

  // Advisory Group: canonical first, alias second
  coreidentityAIAdvisoryGroupRoute,
  advisoryRoute,

  aisRoute,
  pqcRoute,
  portalRoute,
  resourcesRoute,
  faqRoute,
  aboutRoute,
  leadershipRoute,
  contactRoute,
  mcpRoute,
  salRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
