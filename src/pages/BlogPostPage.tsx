import { useEffect, useState } from "react";
import { getRouteApi, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import { getBlogPost, isSanityConfigured, type SanityPost } from "../lib/queries";
import { blogPosts } from "../data/blogPosts";

const Route = getRouteApi("/blog/$slug");

// Portable text renderer that matches the site's existing prose styling
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-white/70 leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold tracking-tight mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold tracking-tight mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-teal-500/40 pl-5 italic text-white/55 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 space-y-2 text-white/70 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-2 text-white/70 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-white">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="text-teal-300 bg-white/5 px-1 rounded font-mono text-xs cidg-insight-article">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-teal-400 hover:text-teal-300 no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogPostPage() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [localPost, setLocalPost] = useState<(typeof blogPosts)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSanityConfigured) {
      const found = blogPosts.find((p) => p.slug === slug) ?? null;
      setLocalPost(found);
      setLoading(false);
      return;
    }
    getBlogPost(slug)
      .then(setPost)
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 animate-pulse">
        <div className="h-3 bg-white/10 rounded w-16 mb-10" />
        <div className="h-3 bg-white/10 rounded w-32 mb-4" />
        <div className="h-8 bg-white/10 rounded w-3/4 mb-3" />
        <div className="h-3 bg-white/10 rounded w-40 mb-12" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-white/10 rounded w-full" />
          ))}
        </div>
      </div>
    );
  }

  // ── Sanity post ───────────────────────────────────────────────────
  if (isSanityConfigured) {
    if (!post) {
      return (
        <div className="mx-auto max-w-4xl px-4 py-32 text-center">
          <Helmet><title>Post Not Found — CoreIdentity</title></Helmet>
          <div className="text-white/40 text-lg mb-4">Post not found</div>
          <Link to="/blog" className="text-sm text-white/50 hover:text-white transition">
            ← Back to Blog
          </Link>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Helmet>
          <title>{post.title} — CoreIdentity Development Group</title>
          <meta name="description" content={post.excerpt} />
        </Helmet>

        <div className="mb-10">
          <Link to="/blog" className="text-xs text-white/40 hover:text-white/70 transition tracking-widest uppercase">
            ← Blog
          </Link>
        </div>

        <div className="text-xs text-white/40 tracking-widest mb-4">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
          })}
        </div>

        <h1 className="text-3xl font-semibold tracking-tight leading-snug mb-4">
          {post.title}
        </h1>

        <div className="text-sm text-white/40 mb-12 pb-8 border-b border-white/10">
          {post.author}
        </div>

        <div className="leading-relaxed">
          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-white/40">No content available.</p>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link to="/blog" className="text-sm text-white/50 hover:text-white transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // ── Local static fallback ────────────────────────────────────────
  if (!localPost) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-32 text-center">
        <Helmet><title>Post Not Found — CoreIdentity</title></Helmet>
        <div className="text-white/40 text-lg mb-4">Post not found</div>
        <Link to="/blog" className="text-sm text-white/50 hover:text-white transition">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Helmet>
        <title>{localPost.title} — CoreIdentity Development Group</title>
        <meta name="description" content={localPost.excerpt} />
      </Helmet>

      <div className="mb-10">
        <Link to="/blog" className="text-xs text-white/40 hover:text-white/70 transition tracking-widest uppercase">
          ← Blog
        </Link>
      </div>

      <div className="text-xs text-white/40 tracking-widest mb-4">
        {new Date(localPost.date).toLocaleDateString("en-US", {
          year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
        })}
      </div>

      <h1 className="text-3xl font-semibold tracking-tight leading-snug mb-4">
        {localPost.title}
      </h1>

      <div className="text-sm text-white/40 mb-12 pb-8 border-b border-white/10">
        {localPost.author}
      </div>

      <div
        className="prose prose-invert prose-sm max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:text-white/70 prose-ul:leading-relaxed prose-li:mb-2
          prose-strong:text-white
          prose-code:text-teal-300 prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
          prose-a:text-teal-400 prose-a:no-underline hover:prose-a:text-teal-300"
        dangerouslySetInnerHTML={{ __html: localPost.content }}
      />

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link to="/blog" className="text-sm text-white/50 hover:text-white transition">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
