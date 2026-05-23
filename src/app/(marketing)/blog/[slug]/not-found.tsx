import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold">Post not found</h1>
      <p className="mt-2 text-mkt-text-muted">
        This article does not exist or was removed.
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-block text-sm font-medium text-brand hover:text-brand-hover"
      >
        ← Back to blog
      </Link>
    </section>
  );
}
