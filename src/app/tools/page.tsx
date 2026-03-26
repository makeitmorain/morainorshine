import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Web-based baseball and analytics tools by Zac Morain.",
};

type ToolStatus = "coming-soon" | "in-development" | "live";

const statusConfig: Record<ToolStatus, { label: string; color: string; bg: string }> = {
  "coming-soon": {
    label: "Coming Soon",
    color: "#888888",
    bg: "#242424",
  },
  "in-development": {
    label: "In Development",
    color: "#00bcd4",
    bg: "#0d2f33",
  },
  live: {
    label: "Live",
    color: "#22c55e",
    bg: "#0d2d1a",
  },
};

const tools: {
  title: string;
  description: string;
  status: ToolStatus;
  href?: string;
}[] = [
  {
    title: "Life Planner",
    description:
      "Personal productivity and planning tool. Habit tracking, goal management, and daily planning built around how I actually work.",
    status: "in-development",
  },
  {
    title: "CoachAI Interface",
    description:
      "AI-powered pitching and hitting analysis. Driveline-informed coaching through a chat interface. Ask about mechanics, pitch design, and development plans.",
    status: "in-development",
  },
  {
    title: "FL League Dashboard",
    description:
      "Stats, leaderboards, and spray charts for the Fantasy Life Men's Baseball League. Built on Statcast data with custom analytics on top.",
    status: "in-development",
  },
  {
    title: "Matchup Analyzer",
    description:
      "Fantasy baseball matchup grading. Pitcher arsenals vs lineup swing profiles. Pitch shape meets swing shape -- quantifying the edge.",
    status: "coming-soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>
          Tools
        </p>
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#ffffff" }}>
          Things I&apos;m Building
        </h1>
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: "#a1a1aa" }}>
          Web tools, dashboards, and interfaces built around baseball analytics and personal
          productivity. All are works in progress. Check back as they ship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => {
          const status = statusConfig[tool.status];
          const Wrapper = tool.href ? "a" : "div";
          const wrapperProps = tool.href
            ? { href: tool.href, target: "_blank" as const, rel: "noopener noreferrer" }
            : {};

          return (
            <Wrapper
              key={tool.title}
              {...wrapperProps}
              className="block rounded-lg p-6"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-semibold text-base" style={{ color: "#ffffff" }}>
                  {tool.title}
                </h2>
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full shrink-0 ml-3 font-medium"
                  style={{
                    backgroundColor: status.bg,
                    color: status.color,
                  }}
                >
                  {status.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                {tool.description}
              </p>
            </Wrapper>
          );
        })}
      </div>

      <div
        className="mt-12 pt-8 text-sm"
        style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}
      >
        Follow{" "}
        <a
          href="https://x.com/makeitmorain"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent)" }}
        >
          @makeitmorain
        </a>{" "}
        for launch updates.
      </div>
    </div>
  );
}
