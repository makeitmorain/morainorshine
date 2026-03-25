import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fantasy Baseball",
  description:
    "Fantasy baseball analysis and draft strategy. Content lives on Medium and X.",
};

export default function FantasyBaseballPage() {
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
          border: "1px solid #6366f1",
          color: "#6366f1",
        }}
      >
        External
      </span>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
        Fantasy Baseball
      </h1>

      <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a1a1aa" }}>
        Fantasy baseball analysis and draft strategy. Draft journals, player
        breakdowns, and in-season roster decisions.
      </p>

      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#ffffff" }}>
          Where the content lives
        </h2>
        <p className="text-sm mb-5" style={{ color: "#a1a1aa" }}>
          Fantasy baseball content stays on Medium and X due to my part-time
          role at MLB. It does not live on this site.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://medium.com/@xFPLab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded"
            style={{
              backgroundColor: "var(--surface-raised)",
              border: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
                Medium: @xFPLab
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                xFantasy Performance Lab. Draft journals, player analysis,
                in-season strategy.
              </p>
            </div>
          </a>
          <a
            href="https://x.com/makeitmorain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded"
            style={{
              backgroundColor: "var(--surface-raised)",
              border: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
                X: @makeitmorain
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Daily takes, roster moves, and real-time fantasy baseball
                content.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
