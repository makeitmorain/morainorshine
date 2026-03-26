import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on baseball, analytics, AI, and building things.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const tags = await getAllTags();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#ffffff" }}>
        Blog
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
        Baseball, analytics, AI, and what it actually looks like to build things. Process included, mess and all.
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
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

      {/* Post list */}
      {posts.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-5"
              style={{
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    {post.category && (
                      <span
                        className="text-xs"
                        style={{ color: "var(--accent)" }}
                      >
                        {post.category}
                      </span>
                    )}
                    {post.author_name && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: "#1a2744",
                          color: "#c9a84c",
                        }}
                      >
                        RLM: {post.author_name}
                      </span>
                    )}
                  </div>
                  <h2
                    className="font-semibold text-base mb-1 leading-snug"
                    style={{ color: "#ffffff" }}
                  >
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-sm" style={{ color: "#a1a1aa" }}>
                      {post.description}
                    </p>
                  )}
                </div>
                <span
                  className="text-xs shrink-0 mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
