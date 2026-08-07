import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";

import HomePage from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { SmartNationAIPage } from "./pages/SmartNationAIPage";
import { CoreIdentityAdvisoryGroupPage } from "./pages/CoreIdentityAdvisoryGroupPage";
import { PortalPage } from "./pages/PortalPage";
import { FoundersPage } from "./pages/FoundersPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { FAQPage } from "./pages/FAQPage";
import { AboutPage } from "./pages/AboutPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import ContactPage from "./pages/ContactPage";
import { RegulatedIndustriesPage } from "./pages/RegulatedIndustriesPage";
import { HealthcareGovernancePage } from "./pages/HealthcareGovernancePage";
import { BFSIGovernancePage } from "./pages/BFSIGovernancePage";
import { SovereignGovernancePage } from "./pages/SovereignGovernancePage";
import { LegalGovernancePage } from "./pages/LegalGovernancePage";
import { EducationGovernancePage } from "./pages/EducationGovernancePage";
import { FinanceGovernancePage } from "./pages/FinanceGovernancePage";
import { HospitalityGovernancePage } from "./pages/HospitalityGovernancePage";
import { LogisticsGovernancePage } from "./pages/LogisticsGovernancePage";
import { ManufacturingGovernancePage } from "./pages/ManufacturingGovernancePage";
import { PrivateCapitalGovernancePage } from "./pages/PrivateCapitalGovernancePage";
import { RealEstateGovernancePage } from "./pages/RealEstateGovernancePage";
import { RetailGovernancePage } from "./pages/RetailGovernancePage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import { GovernanceConsolePage } from "./pages/GovernanceConsolePage";
import { TrustInfrastructurePage } from "./pages/TrustInfrastructurePage";
import { GovernanceEcosystemPage } from "./pages/GovernanceEcosystemPage";
import { IntelligencePage } from "./pages/IntelligencePage";
import { AssurancePage } from "./pages/AssurancePage";
import { TrustPage } from "./pages/TrustPage";

// Institutional Carbon restructure — four governance layers + platform deep-dive.
import { PlatformPage } from "./pages/PlatformPage";
import { LayerAPage } from "./pages/LayerAPage";
import { LayerBPage } from "./pages/LayerBPage";
import { LayerCPage } from "./pages/LayerCPage";
import { LayerDPage } from "./pages/LayerDPage";

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

// ── Governance layers (A → D) + platform architecture ───────────────────
const trustInfrastructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trust-infrastructure",
  component: TrustInfrastructurePage,
});

const governanceEcosystemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance-ecosystem",
  component: GovernanceEcosystemPage,
});


const intelligenceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/intelligence",
  component: IntelligencePage,
});

const assuranceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/assurance",
  component: AssurancePage,
});

const trustRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trust",
  component: TrustPage,
});

const platformRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/platform",
  component: PlatformPage,
});

const layerARoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/layer-a",
  component: LayerAPage,
});

const layerBRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/layer-b",
  component: LayerBPage,
});

const layerCRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/layer-c",
  component: LayerCPage,
});

const layerDRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/layer-d",
  component: LayerDPage,
});

// ── Portfolio (Governance Infrastructure + Commercial Products) ──────────
const govintraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance-infrastructure",
  component: PortfolioPage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const smartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/smartnation-ai",
  component: SmartNationAIPage,
});

// ── Advisory (canonical + aliases) ──────────────────────────────────────
const ciagRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ciag",
  component: CoreIdentityAdvisoryGroupPage,
});

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

// ── Company + legal ─────────────────────────────────────────────────────
const foundersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/founders",
  component: FoundersPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const portalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portal",
  component: PortalPage,
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

// ── Blog ────────────────────────────────────────────────────────────────
const blogIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogIndexPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPostPage,
});

// ── Governance verticals ────────────────────────────────────────────────
const regulatedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/regulated",
  component: RegulatedIndustriesPage,
});

const healthcareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/healthcare",
  component: HealthcareGovernancePage,
});

const bfsiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/bfsi",
  component: BFSIGovernancePage,
});

const sovereignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/sovereign",
  component: SovereignGovernancePage,
});

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/legal",
  component: LegalGovernancePage,
});

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/education",
  component: EducationGovernancePage,
});

const financeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/finance",
  component: FinanceGovernancePage,
});

const hospitalityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/hospitality",
  component: HospitalityGovernancePage,
});

const logisticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/logistics",
  component: LogisticsGovernancePage,
});

const manufacturingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/manufacturing",
  component: ManufacturingGovernancePage,
});

const privateCapitalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/private-capital",
  component: PrivateCapitalGovernancePage,
});

const realEstateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/real-estate",
  component: RealEstateGovernancePage,
});

const retailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/retail",
  component: RetailGovernancePage,
});

const governanceConsoleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance-console",
  component: GovernanceConsolePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,

  trustInfrastructureRoute,
  governanceEcosystemRoute,
  intelligenceRoute,
  assuranceRoute,
  trustRoute,

  // Layers + platform
  platformRoute,
  layerARoute,
  layerBRoute,
  layerCRoute,
  layerDRoute,

  // Portfolio
  govintraRoute,
  portfolioRoute,
  smartRoute,

  // Advisory: canonical first, aliases second
  ciagRoute,
  coreidentityAIAdvisoryGroupRoute,
  advisoryRoute,

  // Company + legal
  portalRoute,
  foundersRoute,
  privacyRoute,
  termsRoute,
  resourcesRoute,
  faqRoute,
  aboutRoute,
  leadershipRoute,
  contactRoute,

  // Blog
  blogIndexRoute,
  blogPostRoute,

  // Governance verticals
  regulatedRoute,
  healthcareRoute,
  bfsiRoute,
  sovereignRoute,
  legalRoute,
  educationRoute,
  financeRoute,
  hospitalityRoute,
  logisticsRoute,
  manufacturingRoute,
  privateCapitalRoute,
  realEstateRoute,
  retailRoute,
  governanceConsoleRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
