import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const isRlm = !!post.author_name;
  const author = isRlm ? post.author_name : (post.author ?? "Zac Morain");

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: author ? [author] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const isRlm = !!post.author_name;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="text-sm mb-8 inline-block"
        style={{ color: "var(--muted)" }}
      >
        Back to Blog
      </Link>

      {/* RLM header badge */}
      {isRlm && (
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-6 text-xs font-semibold"
          style={{ backgroundColor: "var(--rlm-navy)", color: "var(--rlm-gold)" }}
        >
          Replacement Level Media
          {post.author_team && <span style={{ color: "#a0aec0" }}>/ {post.author_team}</span>}
        </div>
      )}

      {/* Post header */}
      <header className="mb-10">
        {post.category && (
          <p className="text-xs font-medium mb-2" style={{ color: "var(--accent)" }}>
            {post.category}
          </p>
        )}
        <h1
          className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          style={{ color: "#ffffff" }}
        >
          {post.title}
        </h1>
        {post.description && (
          <p className="text-lg mb-5" style={{ color: "#a1a1aa" }}>
            {post.description}
          </p>
        )}
        <div
          className="flex items-center gap-3 text-sm"
          style={{ color: "var(--muted)" }}
        >
          <span>
            {isRlm ? post.author_name : post.author}
          </span>
          {isRlm && post.author_role && (
            <>
              <span>|</span>
              <span>{post.author_role}</span>
            </>
          )}
          <span>|</span>
          <time dateTime={post.date}>{formattedDate}</time>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Post content */}
      <article className="prose">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>

      {/* Newsletter signup */}
      <div className="mt-16">
        <NewsletterSignup />
      </div>

      {/* Footer nav */}
      <div
        className="mt-8 pt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <Link
          href="/blog"
          className="text-sm"
          style={{ color: "var(--accent)" }}
        >
          All posts
        </Link>
      </div>
    </div>
  );
}
