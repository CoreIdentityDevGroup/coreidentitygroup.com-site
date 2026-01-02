import React from "react";
import { Card, PageTitle } from "../components/ui";

const INTRO = "Core Holding Corporation is the parent organization that builds and governs infrastructure for agentic digital labor through CoreIdentity Technologies\u2014a platform delivering a three-layer governed execution stack consisting of Sentinel OS, Nexus OS, and SmartNation AI, supported by CoreIdentity Advisory Group and AgentIdentity Systems. This FAQ explains the naming, structure, and architectural intent behind the portfolio.";
const ANSWER = "Core Holding Corporation is named to reflect its role as a holding and governance structure, not an operating product company. The word Core signals foundational systems, durable intellectual property, governance discipline, and long-term control. The name is intentionally direct. It reflects the company's purpose as a parent organization that originates, governs, and scales multiple technology and advisory businesses without being tied to a single product or market cycle. In practical terms, CHC is the control plane for the portfolio: it sets governance posture, defines operating boundaries, and ensures every subsidiary and platform layer remains aligned to a single execution doctrine\u2014governance first.";

export function FAQPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Frequently Asked Questions</PageTitle>
        <p className="text-white/70 max-w-3xl">{INTRO}</p>
      </div>

      <Card>
        <div className="font-semibold text-lg">Why is the parent company called Core Holding Corporation?</div>
        <p className="mt-3 text-white/75 leading-relaxed">{ANSWER}</p>
      </Card>
    </div>
  );
}
