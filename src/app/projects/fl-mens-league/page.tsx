import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FL Men's League Analytics",
  description:
    "Full analytics system for a Florida men's recreational baseball league. Python pipeline computes wRC+, WAR, and xCHAOS from GameChanger data. Powers RLM's statistical coverage.",
  openGraph: {
    title: "FL Men's League Analytics",
    description:
      "Python-powered analytics for a Florida men's baseball league. Custom metrics: wRC+, WAR, xCHAOS. Four seasons of data. Feeds RLM's editorial operation.",
    type: "website",
  },
};

const metrics = [
  {
    name: "wRC+",
    summary: "Weighted Runs Created Plus",
    description:
      "League-calibrated offensive production. 100 = average player in this specific league. Accounts for park and league context -- which matters when you're playing on a 250-foot left field line.",
  },
  {
    name: "WAR",
    summary: "Wins Above Replacement",
    description:
      "Custom men's league version. Replacement level is defined as the sub you found on Facebook 20 minutes before the game in gray sweatpants borrowing someone else's glove. Negative WAR exists and is tracked.",
  },
  {
    name: "xCHAOS",
    summary: "Chaos Index",
    description:
      "Three-pillar z-scored index measuring a batter's ability to create unpredictable situations. Outcome (50%), Process (30%), Contact (20%). Built as a more holistic alternative to OPS for recreational league context.",
  },
];

const pipelineSteps = [
  "Export box score and play-by-play CSV from GameChanger after each game",
  "Drop CSV into the Scout input folder",
  "Run stats_calculator.py to compute all metrics",
  "Output CSVs update the leaderboard automatically",
  "RLM uses the updated stats for that week's analytics features",
];

export default function FlMensLeaguePage() {
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
          border: "1px solid #22c55e",
          color: "#22c55e",
        }}
      >
        Active
      </span>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
        FL Men&apos;s League Analytics
      </h1>

      <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a1a1aa" }}>
        A full analytics and scouting system built from four seasons of recreational men's league baseball data. Custom metrics, automated pipelines, leaderboards, spray charts, and player analysis -- all powered by GameChanger data and Python.
      </p>

      {/* What it is */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          What it is
        </h2>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#a1a1aa" }}>
          Scout Analytics is the data infrastructure layer that powers Replacement Level Media. Every stat that shows up in a Max article, every number Bill cites in Power Rankings, every xCHAOS leaderboard that Teddy gets wrong -- it all comes from this pipeline.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          The system goes beyond tracking box scores. It applies major league analytical frameworks -- adjusted for a recreational league where the talent range runs from "former D1 player" to "found on Facebook this morning" -- and produces actionable player evaluations.
        </p>
      </div>

      {/* Custom metrics */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#ffffff" }}>
          Custom Metrics
        </h2>
        <div className="flex flex-col gap-5">
          {metrics.map((m) => (
            <div key={m.name}>
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-sm font-bold" style={{ color: "#22c55e" }}>
                  {m.name}
                </p>
                <p className="text-xs" style={{ color: "#a1a1aa" }}>
                  {m.summary}
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#ffffff" }}>
          The Pipeline
        </h2>
        <p className="text-sm mb-4" style={{ color: "#a1a1aa" }}>
          Fully automated from data drop to published leaderboard. The weekly workflow runs in minutes.
        </p>
        <ol className="flex flex-col gap-2">
          {pipelineSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="text-xs font-bold shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--surface-raised)", color: "#22c55e" }}
              >
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {step}
              </p>
            </li>
          ))}
        </ol>
        <p className="text-xs mt-4 font-mono" style={{ color: "var(--muted)" }}>
          python stats_calculator.py --update --publish
        </p>
      </div>

      {/* Tech */}
      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "pandas", "NumPy", "GameChanger CSV", "Ghost CMS", "Custom z-score engine"].map(
            (tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded"
                style={{
                  backgroundColor: "var(--surface-raised)",
                  border: "1px solid var(--border)",
                  color: "#a1a1aa",
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>
        <p className="text-sm mt-4" style={{ color: "#a1a1aa" }}>
          Four seasons of historical data. Each season builds on the last. The formulas are calibrated to this specific league -- not copy-pasted from FanGraphs.
        </p>
      </div>
    </div>
  );
}
