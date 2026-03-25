import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoachAI",
  description:
    "AI coaching system built on Driveline methodology for pitching and hitting development.",
};

export default function CoachAiPage() {
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
        CoachAI
      </h1>

      <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a1a1aa" }}>
        An AI coaching system built on Driveline methodology. Pitching
        mechanics, hitting analysis, and player development powered by
        biomechanics data and Statcast.
      </p>

      <div
        className="rounded-lg p-6 mb-10"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          What it does
        </h2>
        <ul className="text-sm space-y-2" style={{ color: "#a1a1aa" }}>
          <li>Pitching analysis: velocity, spin rate, movement profiles, pitch design</li>
          <li>Hitting analysis: swing shape, attack angle, contact quality</li>
          <li>Driveline-informed development programming</li>
          <li>Biomechanics assessment and drill recommendations</li>
          <li>Statcast-powered performance reporting</li>
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
          Status
        </h2>
        <p className="text-sm" style={{ color: "#a1a1aa" }}>
          Active development. Not yet publicly available. When CoachAI reaches
          v2, this page becomes the product landing page with pricing and
          access. For now, it&apos;s a project page.
        </p>
      </div>
    </div>
  );
}
