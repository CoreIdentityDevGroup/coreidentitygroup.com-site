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
    linkedIn: 'https://www.linkedin.com/in/todd-morgan-ceo',
  },
];

// Hardcoded bio paragraphs shown for the fallback member
const TODD_FALLBACK_BIO = [
  `Todd is the Founder and Chief Executive Officer of CoreIdentity Development Group Inc., the company advancing the Trust Infrastructure discipline.`,
  `He brings more than 30 years of executive leadership experience across highly regulated, multi-stakeholder operating environments supporting the National Intelligence Community, the Department of Defense, and private enterprise. Throughout his career, he has built governance frameworks for environments where accountability, auditability, and operational integrity are institutional requirements rather than aspirational goals.`,
  `That experience led to a fundamental observation: the governance systems organizations rely on today were designed for people making decisions at human speed. As autonomous systems assume responsibility for increasingly consequential work, institutions require a new model—one capable of governing autonomous execution with the same rigor historically applied to people, processes, and financial controls.`,
  `Todd is the architect of the Trust Infrastructure discipline and the Autonomous Execution Governance (AEG) doctrine, establishing the governance principles and institutional trust model that enable autonomous execution at enterprise scale.`,
  `Under his leadership, CoreIdentity is building the technology and institutional infrastructure that transforms those principles into operational reality, enabling governments, regulated industries, and enterprises to deploy autonomous execution with verifiable trust, accountability, and control. He is building CoreIdentity as a category-defining company to become the institutional trust infrastructure the agentic era is built on.`,
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

        {isFallback && (
          <p className="mt-4 text-sm text-white/35 italic">
            "The greatest superpower is the ability to change yourself."
          </p>
        )}

        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-carbon-panel text-ink-secondary transition hover:border-accent/40 hover:text-accent cidg-linkedin-link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.881 3.88 6 2.5 6S0 4.881 0 3.5 1.12 1 2.5 1 4.98 2.119 4.98 3.5zM.216 8.25h4.568V23H.216V8.25zM8.5 8.25h4.38v2.014h.062c.61-1.155 2.1-2.373 4.32-2.373 4.62 0 5.47 3.043 5.47 7v8.109h-4.57v-7.19c0-1.716-.03-3.923-2.39-3.923-2.39 0-2.76 1.868-2.76 3.8v7.313H8.5V8.25z"/>
            </svg>
          </a>
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
        <p className="text-white/70 max-w-3xl leading-relaxed">CoreIdentity's leadership comprises experienced operators who have built and led complex organizations, programs, and institutional systems in environments where accountability, resilience, and execution matter.</p>
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
