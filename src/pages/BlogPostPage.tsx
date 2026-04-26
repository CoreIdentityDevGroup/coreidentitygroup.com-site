import { getRouteApi, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";

const Route = getRouteApi("/blog/$slug");

export default function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-32 text-center">
        <Helmet>
          <title>Post Not Found — CoreIdentity</title>
        </Helmet>
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
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <h1 className="text-3xl font-semibold tracking-tight leading-snug mb-4">
        {post.title}
      </h1>

      <div className="text-sm text-white/40 mb-12 pb-8 border-b border-white/10">
        {post.author}
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
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link to="/blog" className="text-sm text-white/50 hover:text-white transition">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
