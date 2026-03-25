import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FL Men's League",
  description:
    "Analytics engine for the Fantasy Life Men's Baseball League. Leaderboards, stats, and tools.",
};

export default function FlMensLeaguePage() {
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
          border: "1px solid #22c55e",
          color: "#22c55e",
        }}
      >
        Active
      </span>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
        FL Men&apos;s League
      </h1>

      <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a1a1aa" }}>
        Analytics engine for the Fantasy Life Men&apos;s Baseball League. Stat
        tracking, leaderboards, and tools built on Statcast and real MLB data.
      </p>

      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          What it includes
        </h2>
        <ul className="text-sm space-y-2" style={{ color: "#a1a1aa" }}>
          <li>Live leaderboard with hitting and pitching splits</li>
          <li>Statcast-powered player performance metrics</li>
          <li>Weekly game notes and box score reports</li>
          <li>Season standings and historical data</li>
          <li>Custom stat categories built for the league format</li>
        </ul>
      </div>

      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-2" style={{ color: "#ffffff" }}>
          Built with Scout
        </h2>
        <p className="text-sm" style={{ color: "#a1a1aa" }}>
          The analytics engine behind FL Men&apos;s League is Scout, a data
          pipeline built on top of MLB Statcast. The tools and dashboards for
          this project are powered by the same data infrastructure.
        </p>
      </div>
    </div>
  );
}
