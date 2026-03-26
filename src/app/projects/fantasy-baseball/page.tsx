import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fantasy Baseball",
  description:
    "Fantasy baseball analysis and draft strategy by Zac Morain. Content at xFantasy Performance Lab on Medium (@xFPLab) and on X (@makeitmorain).",
  openGraph: {
    title: "Fantasy Baseball -- xFPLab",
    description:
      "Advanced fantasy baseball analysis. Draft journals, trade analysis, in-season strategy. Content lives on Medium (@xFPLab) due to MLB employment.",
    type: "website",
  },
};

const contentHighlights = [
  {
    title: "The Three-Peat Quest",
    type: "Draft Journal Series",
    description:
      "A season-long draft journal tracking the attempt to win a third consecutive fantasy championship. Real draft decisions, real in-season logic, real outcomes -- with the analytical framework spelled out.",
  },
  {
    title: "The Nolan Jones Trade Analysis",
    type: "Trade Analysis",
    description:
      "A deep dive into the value proposition on a high-ceiling, injury-prone outfielder. The kind of analysis that either looks brilliant or like the most expensive learning experience in your league.",
  },
];

const platforms = [
  {
    name: "Medium: @xFPLab",
    handle: "xFantasy Performance Lab",
    url: "https://medium.com/@xFPLab",
    description:
      "The main content hub. Draft journals, player analysis, in-season roster strategy, and methodology breakdowns. Updated during the season.",
  },
  {
    name: "X: @makeitmorain",
    handle: "@makeitmorain",
    url: "https://x.com/makeitmorain",
    description:
      "Real-time takes, roster moves, trade opinions, and whatever is happening in baseball right now.",
  },
];

export default function FantasyBaseballPage() {
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
          border: "1px solid #6366f1",
          color: "#6366f1",
        }}
      >
        External
      </span>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
        Fantasy Baseball
      </h1>

      <p className="text-lg mb-6 leading-relaxed" style={{ color: "#a1a1aa" }}>
        Advanced matchup analysis, draft strategy, and in-season roster decisions. Data-driven, not vibes-based.
      </p>

      {/* Why external */}
      <div
        className="rounded px-4 py-3 mb-10 text-sm"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          color: "#a1a1aa",
        }}
      >
        Fantasy baseball content stays on Medium and X. It does not live on this site due to a part-time role at MLB. The xFPLab brand keeps that content separate and distinct from the projects hosted here.
      </div>

      {/* Where to find it */}
      <section className="mb-10">
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: "var(--muted)" }}
        >
          Where to find it
        </h2>
        <div className="flex flex-col gap-3">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between p-4 rounded-lg"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#ffffff" }}>
                  {p.name}
                </p>
                <p className="text-xs mb-2" style={{ color: "#6366f1" }}>
                  {p.handle}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.description}
                </p>
              </div>
              <span className="ml-4 shrink-0 mt-1" style={{ color: "var(--muted)" }}>
                -&gt;
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Notable content */}
      <section>
        <h2
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: "var(--muted)" }}
        >
          Notable content
        </h2>
        <div className="flex flex-col gap-4">
          {contentHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-lg p-4"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: "#6366f1" }}>
                {item.type}
              </p>
              <p className="text-sm font-semibold mb-1.5" style={{ color: "#ffffff" }}>
                {item.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
