import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { getBlogPosts, isSanityConfigured, type SanityPost } from "../lib/queries";
import { blogPosts } from "../data/blogPosts";

// Normalize local static posts into the shared display shape
type DisplayPost = Pick<SanityPost, "_id" | "title" | "slug" | "publishedAt" | "excerpt" | "author">;

function localToDisplay(p: (typeof blogPosts)[0]): DisplayPost {
  return { _id: p.slug, title: p.title, slug: p.slug, publishedAt: p.date, excerpt: p.excerpt, author: p.author };
}

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<DisplayPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSanityConfigured) {
      const sorted = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map(localToDisplay);
      setPosts(sorted);
      setLoading(false);
      return;
    }
    getBlogPosts()
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Helmet>
        <title>Blog — CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Insights on provable AI decision governance, post-quantum cryptography, and enterprise AI operations from CoreIdentity Development Group."
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
        institutional trust infrastructure for autonomous systems.
      </p>

      {loading ? (
        <div className="space-y-10">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-black/30 p-8 animate-pulse">
              <div className="h-3 bg-white/10 rounded w-24 mb-4" />
              <div className="h-5 bg-white/10 rounded w-3/4 mb-3" />
              <div className="h-4 bg-white/10 rounded w-full mb-2" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-white/40 text-center py-16">No posts yet.</div>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <article
              key={post._id}
              className="rounded-2xl border border-white/10 bg-black/30 p-8"
            >
              <div className="text-xs text-white/40 tracking-widest mb-3">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric", timeZone: "UTC",
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
      )}
    </div>
  );
}
