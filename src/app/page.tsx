import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const focusAreas = [
  {
    title: "Replacement Level Media",
    slug: "rlm",
    description:
      "AI-generated baseball analysis through a rotating cast of beat reporters. Chaos is the brand.",
    href: "/projects/rlm",
    tag: "Content",
  },
  {
    title: "CoachAI",
    slug: "coachai",
    description:
      "Driveline-informed pitching and hitting analysis. AI coaching built on biomechanics and data.",
    href: "/projects/coachai",
    tag: "AI",
  },
  {
    title: "FL Men's League",
    slug: "fl-mens-league",
    description:
      "Analytics engine powering the Fantasy Life Men's Baseball League. Leaderboards, stats, tools.",
    href: "/projects/fl-mens-league",
    tag: "Analytics",
  },
  {
    title: "Matchup+",
    slug: "matchup-plus",
    description:
      "Pitcher vs lineup grading system. Pitch shape meets swing shape. Quantifying the edge.",
    href: "/projects/matchup-plus",
    tag: "Analytics",
  },
];

export default async function HomePage() {
  const recentPosts = (await getAllPosts()).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>
          Zac Morain
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
          style={{ color: "#ffffff" }}
        >
          Morain or Shine.
        </h1>
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: "#a1a1aa" }}
        >
          Baseball analytics, AI tools, and software development. Former
          pitching coach turned data guy. Building things at the intersection of
          baseball and technology.
        </p>
        <div className="flex gap-4 mt-8">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--accent)" }}
          >
            See projects
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 rounded text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--surface-raised)",
              color: "var(--foreground)",
            }}
          >
            About me
          </Link>
        </div>
      </section>

      {/* Current focus */}
      <section className="mb-20">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "var(--muted)" }}
        >
          Current Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {focusAreas.map((area) => (
            <Link
              key={area.slug}
              href={area.href}
              className="block rounded-lg p-5 transition-colors group"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3
                  className="font-semibold text-base"
                  style={{ color: "#ffffff" }}
                >
                  {area.title}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--surface-raised)",
                    color: "var(--muted)",
                  }}
                >
                  {area.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent writing */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              Recent Writing
            </h2>
            <Link
              href="/blog"
              className="text-sm"
              style={{ color: "var(--accent)" }}
            >
              All posts
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-4 group"
                style={{
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="font-medium text-base mb-1"
                      style={{ color: "#ffffff" }}
                    >
                      {post.title}
                    </h3>
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
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
