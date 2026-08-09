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
const TODD_CANONICAL_BIO = [
  `Todd Morgan is the Founder and Chief Executive Officer of CoreIdentity Development Group Inc., the architect of the Governance Ecosystem for the Autonomous Era.`,
  `He brings more than 30 years of executive leadership experience across complex, highly regulated, multi-stakeholder operating environments spanning national security, defense, technology, and private enterprise. His career has centered on building and leading organizations where accountability, operational integrity, resilience, and institutional control are fundamental requirements.`,
  `Todd is the architect of the Trust Infrastructure discipline and Autonomous Execution Governance (AEG), establishing an institutional model for governing autonomous execution through continuously verifiable identity, authority, policy enforcement, evidence, assurance, and accountability.`,
  `Under his leadership, CoreIdentity is advancing an operational institutional architecture that enables governments, regulated industries, and enterprises to safely delegate autonomous execution while ensuring they remain in control.`
];

function MemberCard({ member }: { member: SanityTeamMember }) {
  const isFallback = member._id === 'todd-morgan';

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
            TODD_CANONICAL_BIO.map((para, i) => (
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
            className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-secondary transition cidg-linkedin-link"
          >
            <img src="/images/brand/linkedin-transparent.png" alt="" className="h-5 w-5 object-contain" aria-hidden="true" />
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
