import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Replacement Level Media",
  description:
    "AI-generated baseball analysis through a rotating cast of fictional beat reporters.",
};

const writers = [
  {
    name: "Clueless Charley",
    role: "National Correspondent",
    description: "Covers every team with total confidence and zero accuracy.",
  },
  {
    name: "Crazy Chris",
    role: "Fantasy Baseball Analyst",
    description: "The guy who has a reason for every roster move. All of them wrong.",
  },
  {
    name: "Ol' Gus",
    role: "Old School Scout",
    description:
      "Forty years in the game. Trusts his eyes. Has not updated his model since 1987.",
  },
  {
    name: "Intern Teddy",
    role: "Data Intern",
    description: "Overconfident in the numbers. Underconfident in everything else.",
  },
  {
    name: "Driveline Max",
    role: "Pitching Development Writer",
    description:
      "Everything is spin rate, attack angle, and extension. Sometimes he is right.",
  },
];

export default async function RlmPage() {
  const allPosts = await getAllPosts();
  const rlmPosts = allPosts.filter((p) => !!p.author_name).slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* RLM header */}
      <div
        className="rounded-lg p-8 mb-12"
        style={{ backgroundColor: "var(--rlm-navy)", border: "1px solid #2d3f6b" }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--rlm-gold)" }}
        >
          Replacement Level Media
        </p>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
          Baseball analysis. AI-generated. Chaos intended.
        </h1>
        <p style={{ color: "#94a3b8" }}>
          Six fictional baseball writers. Each with a distinct voice, a
          distinct blind spot, and a shared mission to publish something about
          baseball. Not all of it is right. All of it is authentic.
        </p>
      </div>

      {/* Writers */}
      <section className="mb-14">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: "var(--muted)" }}
        >
          The Roster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {writers.map((w) => (
            <div
              key={w.name}
              className="rounded-lg p-4"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="font-semibold text-sm mb-0.5" style={{ color: "#ffffff" }}>
                {w.name}
              </p>
              <p
                className="text-xs mb-1.5"
                style={{ color: "var(--rlm-gold)" }}
              >
                {w.role}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#a1a1aa" }}>
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RLM articles */}
      {rlmPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              Recent Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm"
              style={{ color: "var(--accent)" }}
            >
              All posts
            </Link>
          </div>
          <div className="flex flex-col">
            {rlmPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-4"
                style={{
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="text-xs font-medium mb-1 inline-block"
                      style={{ color: "var(--rlm-gold)" }}
                    >
                      {post.author_name}
                    </span>
                    <h3
                      className="font-medium text-base leading-snug"
                      style={{ color: "#ffffff" }}
                    >
                      {post.title}
                    </h3>
                  </div>
                  <span
                    className="text-xs shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {rlmPosts.length === 0 && (
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Content migrating. Check back soon.
        </p>
      )}
    </div>
  );
}
