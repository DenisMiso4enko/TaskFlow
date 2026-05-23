import { getPostBySlug, posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm font-medium text-brand hover:text-brand-hover"
      >
        ← Back to blog
      </Link>
      <time className="mt-6 block text-sm text-mkt-text-muted">{post.date}</time>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{post.title}</h1>
      <div className="mt-8 space-y-4 text-mkt-text-muted leading-relaxed">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
