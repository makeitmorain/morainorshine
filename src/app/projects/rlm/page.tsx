import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Replacement Level Media",
  description:
    "Major League Coverage for Replacement Level Talent. AI-powered sports media covering a Florida men's recreational baseball league.",
  openGraph: {
    title: "Replacement Level Media",
    description:
      "Major League Coverage for Replacement Level Talent. Barstool meets Moneyball -- six AI writer personas covering Sunday men's league baseball like it's the World Series.",
    type: "website",
  },
};

const writers = [
  {
    name: "Bill",
    role: "Editor-in-Chief",
    team: "League-wide",
    description:
      "Ron Swanson energy. Whiskey in the coffee cup. Does not write recaps -- he writes Power Rankings, makes editorial calls, and argues with everyone. Has a nemesis. It's the league board.",
  },
  {
    name: "Max",
    role: "Analytics Beat Writer",
    team: "White Sox",
    description:
      "Zac's alter-ego. Created wRC+, WAR, and xCHAOS for a men's recreational league. UCL never fully fixed. Brings a laptop to Sunday games and tries to show people graphs. Everyone hates it.",
  },
  {
    name: "Gus",
    role: "Senior Columnist",
    team: "Giants",
    description:
      "Retired Florida Man. Forty years in the game. Pen and paper, sunflower seeds, complete distrust of launch angle. Bill is the only person he respects. The feeling is mostly mutual.",
  },
  {
    name: "Teddy",
    role: "Intern -- Errors & Excuses",
    team: "League-wide",
    description:
      "No car. Always late. Crypto guy. Wears slacks to a Sunday game. Runs the weekly roast column. Terrified of Bill. Podcast co-host with Max, mostly talks Bitcoin.",
  },
  {
    name: "Johnny",
    role: "Beat Writer",
    team: "Mets",
    description:
      "Unhinged homer. Banned from caps lock after the 2024 incident. Convinced the league scheduler, the umpires, and possibly the weather are all conspiring against his team.",
  },
  {
    name: "Charley",
    role: "Beat Writer",
    team: "Blue Jays",
    description:
      "Corporate Reframer. Wears the wrong sport's gear to games. Has a job title nobody understands. Currently trying to propose to Bill's daughter. Bill does not know this.",
  },
];

const contentTypes = [
  {
    label: "Game Recaps",
    description: "Each beat writer covers their team. Wire report meets Statcast.",
  },
  {
    label: "Errors & Excuses",
    description: "Teddy's weekly roast column. The Shaqtin' a Fool of the men's league.",
  },
  {
    label: "Bill's Rankings Suite",
    description: "Power Rankings, MVP Rankings, Cy Young Rankings. Eye test plus grit plus Bill's grudges.",
  },
  {
    label: "Analytics Features",
    description: "Max's territory: wRC+, WAR, xCHAOS breakdowns with full methodology.",
  },
  {
    label: "Op-Eds",
    description: "Old School vs. New School debates. Primarily Gus vs. Max. Usually ends badly.",
  },
];

export default async function RlmPage() {
  const allPosts = await getAllPosts();
  const rlmPosts = allPosts.filter((p) => !!p.author_name).slice(0, 6);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* RLM masthead */}
      <div
        className="rounded-lg p-8 mb-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a2744 100%)",
          border: "1px solid #2d3f6b",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded"
            style={{
              backgroundColor: "#c9a84c",
              color: "#0a1628",
            }}
          >
            RLM
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c9a84c" }}>
            Replacement Level Media
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-3 leading-tight" style={{ color: "#ffffff" }}>
          Major League Coverage for Replacement Level Talent.
        </h1>
        <p className="text-base mb-4 leading-relaxed" style={{ color: "#94a3b8" }}>
          Barstool meets Moneyball. Six AI writers covering a Florida Sunday beer league like it&apos;s the World Series. The analysis is accurate. The packaging is completely unhinged. Bill barely holds it together. The bit is always real.
        </p>
        <p className="text-sm" style={{ color: "#6b7fa3" }}>
          Built on GameChanger data, custom analytics (wRC+, WAR, xCHAOS), and a Ghost publishing pipeline. Club style -- no budget, full ambition.
        </p>
      </div>

      {/* Tech stack bar */}
      <div
        className="rounded px-5 py-3 mb-12 flex flex-wrap gap-3 items-center"
        style={{ backgroundColor: "#111827", border: "1px solid #1e2d4a" }}
      >
        <span className="text-xs" style={{ color: "#6b7fa3" }}>Stack:</span>
        {["Python", "Ghost CMS", "GameChanger API", "wRC+ / WAR / xCHAOS", "GCP Cloud Run", "Next.js"].map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: "#1a2744", color: "#8ba3c7" }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* The Staff */}
      <section className="mb-14">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: "#c9a84c" }}
        >
          The Staff
        </h2>
        <p className="text-sm mb-6" style={{ color: "#6b7fa3" }}>
          Six writers. Each with a distinct voice, a distinct blind spot, and a shared goal: say something true about baseball.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {writers.map((w) => (
            <div
              key={w.name}
              className="rounded-lg p-4"
              style={{
                backgroundColor: "#111827",
                border: "1px solid #1e2d4a",
              }}
            >
              <div className="flex items-start justify-between mb-1.5">
                <p className="font-bold text-sm" style={{ color: "#ffffff" }}>
                  {w.name}
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded shrink-0 ml-2"
                  style={{ backgroundColor: "#1a2744", color: "#8ba3c7" }}
                >
                  {w.team}
                </span>
              </div>
              <p className="text-xs mb-2 font-medium" style={{ color: "#c9a84c" }}>
                {w.role}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7fa3" }}>
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content types */}
      <section className="mb-14">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "#c9a84c" }}
        >
          What We Publish
        </h2>
        <div className="flex flex-col gap-3">
          {contentTypes.map((ct) => (
            <div
              key={ct.label}
              className="flex items-start gap-4 px-4 py-3 rounded"
              style={{ backgroundColor: "#111827", border: "1px solid #1e2d4a" }}
            >
              <div
                className="w-1 rounded-full shrink-0 mt-1"
                style={{ backgroundColor: "#c9a84c", height: "1rem" }}
              />
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#ffffff" }}>
                  {ct.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7fa3" }}>
                  {ct.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats system callout */}
      <section className="mb-14">
        <div
          className="rounded-lg p-6"
          style={{
            backgroundColor: "#0a1628",
            border: "1px solid #2d3f6b",
          }}
        >
          <h2 className="text-sm font-bold mb-4" style={{ color: "#c9a84c" }}>
            The Stats System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>wRC+</p>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7fa3" }}>
                League-calibrated weighted runs created. 100 = average. 150+ = Mike Trout tier of this specific Sunday league. Below 75 = you are actively costing your team games.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>WAR</p>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7fa3" }}>
                Custom men's league version. Replacement level is the sub you found on Facebook 20 minutes before the game wearing gray sweatpants and borrowing a glove. Negative WAR exists.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>xCHAOS</p>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7fa3" }}>
                Three-pillar z-scored chaos index. Measures a batter's ability to create unpredictable situations. Outcome (50%), Process (30%), Contact (20%). 115+ is elite in this context.
              </p>
            </div>
          </div>
          <p className="text-xs mt-4" style={{ color: "#3d5a80" }}>
            All metrics computed by <code style={{ color: "#8ba3c7" }}>stats_calculator.py</code> from GameChanger CSV exports.
          </p>
        </div>
      </section>

      {/* Recent articles */}
      {rlmPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#c9a84c" }}
            >
              From the Bullpen
            </h2>
            <Link
              href="/blog"
              className="text-sm"
              style={{ color: "#8ba3c7", textDecoration: "none" }}
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
                  borderBottom: "1px solid #1e2d4a",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded"
                        style={{ backgroundColor: "#1a2744", color: "#c9a84c" }}
                      >
                        {post.author_name}
                      </span>
                      {post.author_role && (
                        <span className="text-xs" style={{ color: "#3d5a80" }}>
                          {post.author_role}
                        </span>
                      )}
                    </div>
                    <h3
                      className="font-medium text-base leading-snug"
                      style={{ color: "#ffffff" }}
                    >
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-sm mt-1" style={{ color: "#6b7fa3" }}>
                        {post.description}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-xs shrink-0"
                    style={{ color: "#3d5a80" }}
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
        <div
          className="rounded px-5 py-4 text-sm"
          style={{ backgroundColor: "#111827", border: "1px solid #1e2d4a", color: "#6b7fa3" }}
        >
          2026 season content incoming. The bullpen is warming up.
        </div>
      )}

      {/* Back link */}
      <div className="mt-14 pt-6" style={{ borderTop: "1px solid #1e2d4a" }}>
        <Link href="/projects" className="text-sm" style={{ color: "#6b7fa3" }}>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
