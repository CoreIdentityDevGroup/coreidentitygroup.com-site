import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Helmet>
        <title>Blog — CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Insights on agentic AI governance, post-quantum cryptography, and enterprise AI operations from CoreIdentity Development Group."
        />
      </Helmet>

      <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-6">
        COREIDENTITY BLOG
      </div>
      <h1 className="text-4xl font-semibold tracking-tight mb-4">
        Insights on Governed AI
      </h1>
      <p className="text-white/60 text-lg leading-relaxed mb-16 max-w-2xl">
        Technical perspective and operational experience from the team building
        the control plane for autonomous enterprise AI.
      </p>

      <div className="space-y-10">
        {sorted.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-white/10 bg-black/30 p-8"
          >
            <div className="text-xs text-white/40 tracking-widest mb-3">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h2 className="text-xl font-semibold leading-snug mb-3">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="hover:text-white/80 transition"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-white/35">{post.author}</span>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="text-sm text-white/50 hover:text-white transition"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
