import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { Layout } from "./components/Layout";

import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { FAQPage } from "./pages/FAQPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

import { SentinelOSPage } from "./pages/SentinelOSPage";
import { NexusOSPage } from "./pages/NexusOSPage";
import { SmartNationAIPage } from "./pages/SmartNationAIPage";

import { CoreIdentityTechnologiesPage } from "./pages/CoreIdentityTechnologiesPage";
import { CoreIdentityAdvisoryGroupPage } from "./pages/CoreIdentityAdvisoryGroupPage";
import { AgentIdentitySystemsPage } from "./pages/AgentIdentitySystemsPage";
import { AGO1Page } from "./pages/AGO1Page";

/* ROOT */
const rootRoute = createRootRoute({
  component: Layout,
});

/* PRIMARY */
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

/* PLATFORM */
const sentinelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sentinelos",
  component: SentinelOSPage,
});

const nexusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nexusos",
  component: NexusOSPage,
});

const smartnationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/smartnationai",
  component: SmartNationAIPage,
});

/* COREIDENTITY */
const coreidentityTechnologiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentitytechnologies",
  component: CoreIdentityTechnologiesPage,
});

const advisoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentityaiadvisorygroup",
  component: CoreIdentityAdvisoryGroupPage,
});

const agentIdentityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/agentidentitysystems",
  component: AgentIdentitySystemsPage,
});

/* AGENT */
const ago1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ago1",
  component: AGO1Page,
});

/* TREE */
const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  resourcesRoute,
  faqRoute,
  aboutRoute,
  contactRoute,
  sentinelRoute,
  nexusRoute,
  smartnationRoute,
  coreidentityTechnologiesRoute,
  advisoryRoute,
  agentIdentityRoute,
  ago1Route,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
