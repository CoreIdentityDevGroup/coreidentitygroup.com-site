import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";
import { getTeamMembers, isSanityConfigured, type SanityTeamMember } from "../lib/queries";
import { Helmet } from "react-helmet-async";

import ToddMorganLeadershipProfile from "../assets/leadership/todd-morgan-leadership-profile-v3.png";
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
  `Todd Morgan is the Founder and Chief Executive Officer of CoreIdentity Development Group and the architect of the CoreIdentity Governance Ecosystem for the Autonomous Era.`,
  `His current work is focused on establishing Trust Infrastructure as a foundational institutional discipline for organizations adopting increasingly autonomous systems. He originated Autonomous Execution Governance as the operating doctrine for governing delegated machine authority and developed the Institutional Chain of Legitimacy to connect every autonomous action to a valid source of institutional authority.`,
  `Together, these concepts form the CoreIdentity Governance Ecosystem—an integrated architecture spanning executive governance, operational controls, verifiable identity, policy-bound execution, continuous assurance, and institutional accountability. Through CoreIdentity, Todd is leading the development of the infrastructure and governance capabilities institutions will require to safely expand autonomous execution without surrendering control.`,
  `Todd also leads CoreIdentity Advisory Group (CIAG), the company's executive AI governance practice. Through CIAG, he works with institutional leaders to establish the decision rights, operating models, controls, assurance, and accountability required to govern AI today while preparing for increasingly autonomous execution.`,
  `This work is informed by more than 30 years of executive leadership across complex, highly regulated, and mission-critical environments in national security, defense, technology, and private enterprise. Todd holds an MBA and a Bachelor of Science in Information Systems and has completed executive education in artificial intelligence.`,
];

function MemberCard({ member }: { member: SanityTeamMember }) {
  const isTodd = member.name.trim().toLowerCase() === 'todd morgan';

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
            {member._id === "todd-morgan" ? (
              <div className="cidg-leadership-profile-photo-wrap">
                <img src={ToddMorganLeadershipProfile} alt="Todd Morgan, Founder and Chief Executive Officer of CoreIdentity Development Group" className="cidg-leadership-profile-photo" loading="eager" decoding="async" />
              </div>
            ) : null}
            <div className="text-2xl font-semibold text-white">{member.name}</div>
            <div className="text-sm text-white/50 tracking-widest mt-1 uppercase">
              {member.title}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {isTodd ? (
            TODD_CANONICAL_BIO.map((para, i) => (
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
    <div className="space-y-12 cidg-leadership-page">
      <Helmet>
        <title>Leadership | CoreIdentity</title>
        <meta name="description" content="Todd Morgan leads CoreIdentity as Founder and CEO, establishing Trust Infrastructure and the Governance Ecosystem for the Autonomous Era." />
      </Helmet>
      <div className="space-y-4">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>Leadership</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">CoreIdentity is led by founder and Chief Executive Officer Todd Morgan, who is establishing the institutional architecture required for organizations to govern autonomous execution while preserving human authority, accountability, and control.</p>
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
