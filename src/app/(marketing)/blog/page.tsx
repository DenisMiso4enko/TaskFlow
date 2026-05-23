import { posts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-mkt-text-muted">
          Product updates, engineering notes, and how we build TaskFlow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded--lg border border-mkt-border bg-mkt-surface p-6 hover:border-mkt-text-muted transition-colors"
          >
            <time className="text-xs text-mkt-text-muted">{post.date}</time>
            <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-mkt-text-muted line-clamp-3">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-medium text-brand hover:text-brand-hover"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
