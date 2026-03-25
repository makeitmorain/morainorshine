import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matchup+",
  description:
    "Pitcher vs lineup grading system. Pitch shape meets swing shape.",
};

export default function MatchupPlusPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="text-sm mb-8 inline-block"
        style={{ color: "var(--muted)" }}
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
        Pitcher vs lineup grading system. Quantifies the edge by measuring how
        a pitcher&apos;s arsenal matches up against a lineup&apos;s swing shape
        tendencies.
      </p>

      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          The idea
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          Not all matchups are equal. A pitcher with a nasty sweeper gets a
          different edge against a pull-heavy left-handed lineup than a
          sinker-ball guy does. Matchup+ tries to quantify that specific
          advantage or disadvantage using pitch shape data and swing tendency
          profiles from Statcast.
        </p>
      </div>

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
        <p className="text-sm" style={{ color: "#a1a1aa" }}>
          Active development. The core grading system is built and running.
          Working on visualization and a public demo interface.
        </p>
        <div className="mt-3">
          <a
            href="https://github.com/makeitmorain/matchup-plus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: "var(--accent)" }}
          >
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  );
}
