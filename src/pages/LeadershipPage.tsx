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
  `Under his leadership, CoreIdentity is building the technology and institutional infrastructure that transforms those principles into operational reality, enabling governments, regulated industries, and enterprises to deploy autonomous execution with verifiable trust, accountability, and control.`,
  `Todd holds a Bachelor of Science in Information Systems from American Sentinel University (now Post University) and a Master of Business Administration from the University of Maryland Global Campus, where he was elected to Phi Kappa Phi, the nation's oldest and most selective all-discipline honor society. He is building CoreIdentity as a category-defining company to become the institutional trust infrastructure the agentic era is built on.`,
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

        {isFallback ? (
          <div
            className="badge-base LI-profile-badge mt-3"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="todd-morgan-ceo"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/todd-morgan-ceo?trk=profile-badge"
            >
              Todd Morgan
            </a>
          </div>
        ) : (
          member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition mt-3"
            >
              Connect with Todd on LinkedIn →
            </a>
          )
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

  // LinkedIn's platform.js only auto-scans the DOM on its own initial load.
  // On a client-routed SPA, navigating back to this page without a full
  // reload won't re-trigger that scan -- ask it to re-scan explicitly if
  // it's already loaded from a prior visit.
  useEffect(() => {
    const w = window as any;
    if (w.IN && typeof w.IN.parse === "function") {
      w.IN.parse();
    }
  }, []);

  return (
    <div className="space-y-12">
      <Helmet>
        <title>Leadership | CoreIdentity</title>
        <meta name="description" content="CoreIdentity is led by operators who have built and governed mission-critical systems in the most demanding institutional environments — where trust is proven, not asserted." />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
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
