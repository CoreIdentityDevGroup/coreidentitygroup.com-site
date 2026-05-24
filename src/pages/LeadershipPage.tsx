import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";
import { getTeamMembers, isSanityConfigured, type SanityTeamMember } from "../lib/queries";
import { Helmet } from "react-helmet-async";

// Portable text renderer for biography blocks
const bioComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-white/70 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-white">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} className="text-teal-400 hover:text-teal-300" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

// Hardcoded fallback — shown while Sanity is not yet configured
const FALLBACK_MEMBERS: SanityTeamMember[] = [
  {
    _id: 'todd-morgan',
    name: 'Todd Morgan',
    title: 'Founder & Chief Executive Officer',
    bio: undefined,
    photo: null,
    linkedIn: undefined,
  },
];

// Hardcoded bio paragraphs shown for the fallback member
const TODD_FALLBACK_BIO = [
  `Todd Morgan is the Founder and CEO of CoreIdentity Development Group Inc.`,
  `His career spans more than 30 years and includes extensive support to the National Intelligence Community and the Department of Defense across a variety of roles — including the management of a multi-million dollar portfolio of federal contracts in operational environments where accountability, auditability, and governance are not aspirational standards but absolute requirements.`,
  `That experience shaped a conviction that became CoreIdentity: the governance frameworks institutions rely on were built for humans making decisions at human speed. They will systematically fail when autonomous AI systems begin acting with institutional authority. No configuration change, policy update, or vendor upgrade addresses that failure. It requires different infrastructure entirely.`,
  `The problem CoreIdentity solves is one Todd encountered directly — in environments where governance gaps are not abstract risks but operational realities with lasting consequences. That experience is the architecture.`,
  `CoreIdentity is what Todd built in response — architecture grounded in the operational realities of environments where governance failures have consequences. Compliance-first. Institutional-grade. Designed to meet the bar that regulators, auditors, and institutional accountability frameworks actually set.`,
  `He is building CoreIdentity as a category-defining, generational company — not for acquisition, but to establish institutional trust infrastructure for autonomous systems as a permanent layer of the agentic era.`,
];

function MemberCard({ member }: { member: SanityTeamMember }) {
  const isFallback = member._id === 'todd-morgan' && !isSanityConfigured;

  return (
    <Card>
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          {member.photo && (
            <img
              src={member.photo}
              alt={member.name}
              className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
            />
          )}
          <div>
            <div className="text-2xl font-semibold text-white">{member.name}</div>
            <div className="text-sm text-white/50 tracking-widest mt-1 uppercase">
              {member.title}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {isFallback ? (
            TODD_FALLBACK_BIO.map((para, i) => (
              <p key={i} className="text-white/70 leading-relaxed">{para}</p>
            ))
          ) : member.bio && member.bio.length > 0 ? (
            <PortableText value={member.bio} components={bioComponents} />
          ) : null}
        </div>

        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition mt-2"
          >
            LinkedIn →
          </a>
        )}

        {isFallback && (
          <p className="mt-4 text-sm text-white/35 italic">
            "The greatest superpower is the ability to change yourself."
          </p>
        )}
      </div>
    </Card>
  );
}

export function LeadershipPage() {
  const [members, setMembers] = useState<SanityTeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSanityConfigured) {
      setMembers(FALLBACK_MEMBERS);
      setLoading(false);
      return;
    }
    getTeamMembers()
      .then((data) => setMembers(data.length > 0 ? data : FALLBACK_MEMBERS))
      .catch(() => setMembers(FALLBACK_MEMBERS))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-12">
      <Helmet>
        <title>Leadership | CoreIdentity</title>
        <meta name="description" content="CoreIdentity is led by operators who have built and governed mission-critical systems in the most demanding institutional environments — where trust is proven, not asserted." />
      </Helmet>
      <div className="space-y-4">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
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

        {loading ? (
          <Card>
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-white/10 rounded w-48" />
              <div className="h-3 bg-white/10 rounded w-32" />
              <div className="space-y-3 mt-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-white/10 rounded w-full" />
                ))}
              </div>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {members.map((member) => (
              <MemberCard key={member._id} member={member} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
