import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

const focusAreas = [
  {
    title: "Replacement Level Media",
    slug: "rlm",
    description:
      "Six AI writers covering a Sunday beer league like it's the World Series. The analysis is real. The absurdity is the point.",
    href: "/projects/rlm",
    tag: "Content",
  },
  {
    title: "CoachAI",
    slug: "coachai",
    description:
      "I coached 200+ athletes and spent years in biomechanics labs. Now I'm teaching AI everything I know.",
    href: "/projects/coachai",
    tag: "AI",
  },
  {
    title: "FL Men's League",
    slug: "fl-mens-league",
    description:
      "wRC+, WAR, and a chaos metric for a league where guys work day jobs and play on Sundays. The absurdity is the point. The analytics are legit.",
    href: "/projects/fl-mens-league",
    tag: "Analytics",
  },
  {
    title: "Matchup+",
    slug: "matchup-plus",
    description:
      "Fantasy baseball analytics for people who care about process. Pitch shape meets swing shape. Data-driven, not vibes-based.",
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
        {/* Logo mark visual anchor */}
        <div className="mb-6">
          <Image
            src="/logo-mark.png"
            alt="Morain or Shine"
            width={72}
            height={72}
            className="hero-mark-glow"
            style={{ height: "72px", width: "auto" }}
            priority
          />
        </div>

        <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>
          Zac Morain
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
          style={{ color: "#ffffff" }}
        >
          Morain <span className="or-gold">or</span> Shine.
        </h1>
        <p
          className="text-lg max-w-2xl leading-relaxed mb-3"
          style={{ color: "#a1a1aa" }}
        >
          Former pitching coach. Now building AI tools, analytics systems, and an absurdist sports media operation. Never the best at one thing. Obsessively good at a lot of things through sheer grind.
        </p>
        <p
          className="text-sm max-w-2xl tagline-gold font-medium"
        >
          So what, next pitch.
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
              className="block rounded-lg p-5 transition-all group card-gold-hover"
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
                className="block py-4 pl-3 group card-accent-left transition-all"
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
