import React from "react";
import { Link } from "@tanstack/react-router";
import { Card, PageTitle, SectionTitle } from "../components/ui";

export function LeadershipPage() {
  return (
    <div className="space-y-12">

      <div className="space-y-4">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          COREIDENTITY DEVELOPMENT GROUP
        </div>
        <PageTitle>Leadership</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity is led by operators who have built and governed
          mission-critical systems in the most demanding institutional
          environments — and who understand that governance infrastructure
          is not a product category. It is an operational requirement.
        </p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Executive Leadership</SectionTitle>
        <Card>
          <div className="space-y-5">
            <div>
              <div className="text-2xl font-semibold text-white">Todd Morgan</div>
              <div className="text-sm text-white/50 tracking-widest mt-1">FOUNDER & CHIEF EXECUTIVE OFFICER</div>
            </div>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Todd Morgan founded CoreIdentity Development Group Inc. to address
                what he identified as the defining infrastructure gap of the agentic
                era: the absence of a purpose-built control plane for autonomous AI
                execution. CoreIdentity is his answer to that gap — a vertically
                integrated enforcement stack built to institutional standards, from
                first principles, without compromise.
              </p>
              <p>
                Todd brings an extensive background in National Intelligence and
                Department of Defense sectors, where he led complex, multi-entity
                operational programs requiring the highest standards of accountability,
                auditability, and governance under adversarial conditions. That
                experience forms the foundational design philosophy of every system
                CoreIdentity builds: enforcement first, evidence always, no exceptions
                for operational convenience.
              </p>
              <p>
                Prior to CoreIdentity, Todd operated at the intersection of federal
                contracting, multi-entity organizational leadership, and technology
                deployment — managing portfolios and programs where failure was not
                an acceptable outcome. He applies that same operational standard
                to the infrastructure his company builds for enterprise and
                sovereign clients.
              </p>
              <p>
                Todd built CoreIdentity through a period of profound personal
                adversity — a circumstance that sharpened rather than diminished
                his conviction that the right infrastructure, built correctly,
                can change outcomes at institutional scale. CoreIdentity is not
                a pivot or a pivot story. It is the deliberate construction of
                something that should exist and did not.
              </p>
            </div>

            <p className="mt-6 text-sm text-white/35 italic">
              “The greatest superpower is the ability to change yourself.”
            </p>


          </div>
        </Card>
      </section>


    </div>
  );
}
