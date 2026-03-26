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
        Fantasy baseball analytics platform for weekly lineup decisions. Advanced matchup analysis that quantifies the actual edge -- not platoon splits and park factors, but pitch shape vs. swing shape at the pitch-type level.
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
          Standard fantasy baseball matchup analysis uses park factors, FIP, and platoon splits. Those are useful but blunt. They don't tell you whether a pitcher's specific arsenal is well-suited or poorly-suited against a specific lineup's swing tendencies.
        </p>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#a1a1aa" }}>
          A sinker-ball pitcher against a dead-pull right-handed lineup plays completely differently than the same pitcher against a lineup full of opposite-field hitters. A nasty sweeper against a pull-heavy left-handed group is a different start than against a lineup full of guys who let it travel.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          Matchup+ tries to quantify that specific edge or disadvantage using Statcast pitch shape data and swing tendency profiles. The output is a matchup grade -- a single number that captures how a pitcher's arsenal aligns against a lineup's contact profile.
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
          Core grading system is built and running. Currently working on visualization and a public demo interface. The Statcast data pipeline is live; the scoring model is in active iteration.
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
