import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matchup+",
  description:
    "Fantasy baseball analytics platform for weekly lineup decisions. Advanced matchup analysis that quantifies pitcher vs. lineup edges using Statcast pitch shapes and swing tendency profiles.",
  openGraph: {
    title: "Matchup+",
    description:
      "Advanced matchup analysis for fantasy baseball. Pitcher arsenal vs. lineup swing shape -- data-driven, not vibes-based.",
    type: "website",
  },
};

const useCases = [
  {
    label: "Weekly Start Decisions",
    description:
      "Is this pitcher a good start against this lineup? Not gut feel -- a score based on how his actual pitch shapes interact with how this lineup actually swings.",
  },
  {
    label: "Streaming Pitchers",
    description:
      "Find the guys everyone else is missing. A mid-tier starter with a filthy sweeper gets a big bump against a pull-heavy left-handed lineup. Matchup+ surfaces that edge.",
  },
  {
    label: "Lineup Construction",
    description:
      "Identify which hitters in your pool have favorable shape matchups this week. Not just platoon splits -- actual pitch type exploitation.",
  },
  {
    label: "DFS Stacking",
    description:
      "Stack lineups against pitchers whose arsenals are weak against the types of contact this group of hitters makes. More specific than park factor, more actionable than FIP.",
  },
];

export default function MatchupPlusPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="text-sm mb-8 inline-block"
        style={{ color: "var(--muted)", textDecoration: "none" }}
      >
        Back to Projects
      </Link>

      <span
        className="text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-4"
        style={{
          backgroundColor: "transparent",
          border: "1px solid #f59e0b",
          color: "#f59e0b",
        }}
      >
        Building
      </span>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
        Matchup+
      </h1>

      <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a1a1aa" }}>
        Fantasy baseball analytics for people who care about process, not just results. Pitch shape meets swing shape. Data-driven, not vibes-based.
      </p>

      {/* The core idea */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          The problem it solves
        </h2>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#a1a1aa" }}>
          Park factors, FIP, and platoon splits are useful. They&apos;re also blunt. They don&apos;t tell you whether this pitcher&apos;s specific arsenal is a good matchup against this specific lineup&apos;s swing tendencies.
        </p>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#a1a1aa" }}>
          A sinker-ball guy against a dead-pull lineup is a different start than the same pitcher against a group that lets the ball travel. A nasty sweeper against a pull-heavy left-handed lineup is a different start than against guys who cover the outside corner. Same FIP. Completely different outcomes.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          Matchup+ scores that specific edge using Statcast pitch shape data and swing tendency profiles. Single matchup grade. Pitch-type level. No vibes required.
        </p>
      </div>

      {/* How it works */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#ffffff" }}>
          How it works
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#f59e0b" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
              Pull pitcher arsenal data from Statcast: pitch types, shapes, horizontal/vertical break, usage rates, and results against different batter profiles.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#f59e0b" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
              Pull opposing lineup swing tendency profiles: chase rate, whiff rate by zone, contact type, pull/oppo rates, and performance against specific pitch shapes.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#f59e0b" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
              Score the matchup at the pitch-type level. Aggregate across the lineup. Output a single matchup grade weighted by lineup construction and pitcher arsenal mix.
            </p>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#ffffff" }}>
          Use cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.label}>
              <p className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>
                {uc.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Status */}
      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-2" style={{ color: "#ffffff" }}>
          Status
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#a1a1aa" }}>
          Core grading system is built and running. The Statcast pipeline is live and the scoring model is in active iteration. Working on a public demo interface -- the kind where you type in a pitcher and a lineup and get a grade back in seconds.
        </p>
        <a
          href="https://github.com/makeitmorain/matchup-plus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          GitHub repo
        </a>
      </div>
    </div>
  );
}
