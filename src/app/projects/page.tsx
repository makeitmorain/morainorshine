import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Baseball analytics, AI, and software projects by Zac Morain.",
};

const projects = [
  {
    title: "Replacement Level Media",
    slug: "rlm",
    description:
      "AI-generated baseball analysis through a rotating cast of fictional beat reporters. Six personas. One shared goal: say something true about baseball.",
    status: "Active",
    tags: ["Content", "AI", "Baseball"],
  },
  {
    title: "CoachAI",
    slug: "coachai",
    description:
      "An AI coaching system built on Driveline methodology. Pitching mechanics, hitting analysis, and player development powered by biomechanics data.",
    status: "Building",
    tags: ["AI", "Pitching", "Baseball"],
  },
  {
    title: "FL Men's League",
    slug: "fl-mens-league",
    description:
      "Analytics engine for the Fantasy Life Men's Baseball League. Leaderboards, stat tracking, and tools built on Statcast data.",
    status: "Active",
    tags: ["Analytics", "Fantasy Baseball"],
  },
  {
    title: "Matchup+",
    slug: "matchup-plus",
    description:
      "Pitcher vs lineup grading system. Quantifies the edge by measuring how pitch shape matches up against swing shape tendencies.",
    status: "Building",
    tags: ["Analytics", "Pitching", "Data"],
  },
  {
    title: "Fantasy Baseball",
    slug: "fantasy-baseball",
    description:
      "Fantasy baseball analysis and draft strategy. Hosted on Medium due to MLB employment. Links out to @xFPLab and @makeitmorain.",
    status: "External",
    tags: ["Fantasy Baseball", "Writing"],
  },
];

const statusColor: Record<string, string> = {
  Active: "#22c55e",
  Building: "#f59e0b",
  External: "#6366f1",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#ffffff" }}>
        Projects
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--muted)" }}>
        Everything I&apos;m building, in one place.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-lg p-6 transition-all card-gold-hover"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h2
                className="font-semibold text-base"
                style={{ color: "#ffffff" }}
              >
                {project.title}
              </h2>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-2"
                style={{
                  backgroundColor: "transparent",
                  border: `1px solid ${statusColor[project.status] || "var(--border)"}`,
                  color: statusColor[project.status] || "var(--muted)",
                }}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "#a1a1aa" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: "var(--surface-raised)",
                    color: "var(--muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
