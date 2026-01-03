import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { Layout } from "./components/Layout";

import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { CoreIdentityTechnologiesPage } from "./pages/CoreIdentityTechnologiesPage";
import { SentinelOSPage } from "./pages/SentinelOSPage";
import { NexusOSPage } from "./pages/NexusOSPage";
import { SmartNationAIPage } from "./pages/SmartNationAIPage";
import { CoreIdentityAdvisoryGroupPage } from "./pages/CoreIdentityAdvisoryGroupPage";
import { AgentIdentitySystemsPage } from "./pages/AgentIdentitySystemsPage";
import { AGO1Page } from "./pages/AGO1Page";
import { ResourcesPage } from "./pages/ResourcesPage";
import { FAQPage } from "./pages/FAQPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

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

const coreIdentityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentity",
  component: CoreIdentityTechnologiesPage,
});

const sentinelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sentinel",
  component: SentinelOSPage,
});

const nexusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/nexus",
  component: NexusOSPage,
});

const smartNationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/smartnation",
  component: SmartNationAIPage,
});

/* SECONDARY */
export const ago1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ago1",
  component: AGO1Page,
});

const advisoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coreidentityadvisorygroup",
  component: CoreIdentityAdvisoryGroupPage,
});

const aisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/agentidentitysystems",
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

/* TREE */
const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  coreIdentityRoute,
  sentinelRoute,
  nexusRoute,
  smartNationRoute,
  ago1Route,
  advisoryRoute,
  aisRoute,
  resourcesRoute,
  faqRoute,
  aboutRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
