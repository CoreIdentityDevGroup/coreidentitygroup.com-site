import { createRouter, createRootRoute, createRoute } from "@tanstack/react-router";
import { Layout } from "./components/Layout";

import HomePage from "./pages/HomePage";
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

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: HomePage });
const portfolioRoute = createRoute({ getParentRoute: () => rootRoute, path: "/portfolio", component: PortfolioPage });
const coreIdentityRoute = createRoute({ getParentRoute: () => rootRoute, path: "/coreidentity-technologies", component: CoreIdentityTechnologiesPage });
const sentinelRoute = createRoute({ getParentRoute: () => rootRoute, path: "/sentinel-os", component: SentinelOSPage });
const nexusRoute = createRoute({ getParentRoute: () => rootRoute, path: "/nexus-os", component: NexusOSPage });
const smartRoute = createRoute({ getParentRoute: () => rootRoute, path: "/smartnation-ai", component: SmartNationAIPage });
const ago1Route = createRoute({ getParentRoute: () => rootRoute, path: "/ago-1", component: AGO1Page });
const advisoryRoute = createRoute({ getParentRoute: () => rootRoute, path: "/coreidentity-advisory-group", component: CoreIdentityAdvisoryGroupPage });
const coreidentityAIAdvisoryGroupRoute = createRoute({ getParentRoute: () => rootRoute, path: "/coreidentity-ai-advisory-group", component: CoreIdentityAdvisoryGroupPage });
const aisRoute = createRoute({ getParentRoute: () => rootRoute, path: "/agentidentity-systems", component: AgentIdentitySystemsPage });
const resourcesRoute = createRoute({ getParentRoute: () => rootRoute, path: "/resources", component: ResourcesPage });
const faqRoute = createRoute({ getParentRoute: () => rootRoute, path: "/faq", component: FAQPage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: "/about", component: AboutPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: "/contact", component: ContactPage });

const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  coreIdentityRoute,
  sentinelRoute,
  nexusRoute,
  smartRoute,
  ago1Route,
  advisoryRoute,
  coreidentityAIAdvisoryGroupRoute,
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
