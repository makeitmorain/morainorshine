import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoachAI",
  description:
    "AI-powered baseball coaching assistant built on Driveline methodology. Pitching instruction, biomechanics analysis, pitch design, and Statcast-integrated arsenal development.",
  openGraph: {
    title: "CoachAI",
    description:
      "AI-powered baseball coaching assistant. Pitching instruction, biomechanics, pitch design, and Statcast data integration.",
    type: "website",
  },
};

const capabilities = [
  {
    label: "Pitching Instruction",
    description:
      "Mechanics analysis, arm path, hip-to-shoulder separation, extension. Driveline-informed cues and drill programming based on the athlete's movement patterns.",
  },
  {
    label: "Pitch Design",
    description:
      "Arsenal building from first principles. Pitch tunneling analysis, grip adjustments, movement profile targets. Backed by Statcast shapes and expected outcomes.",
  },
  {
    label: "Biomechanics Analysis",
    description:
      "Kinematic sequencing, force application, injury risk assessment. Frameworks built from professional coaching experience with Rapsodo and Trackman.",
  },
  {
    label: "Statcast Integration",
    description:
      "Live MLB Statcast data via 24-tool MCP integration. Spin rate benchmarks, movement profiles, pitch usage trends across the league.",
  },
  {
    label: "Arsenal Documentation",
    description:
      "Per-pitch documentation: 4-seam fastball, kick-change, curveball, slider. Velocity targets, shape targets, usage strategy, and in-game attack patterns.",
  },
];

export default function CoachAiPage() {
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
        CoachAI
      </h1>

      <p className="text-lg mb-10 leading-relaxed" style={{ color: "#a1a1aa" }}>
        An AI-powered baseball coaching assistant built on Driveline methodology and 200+ athlete coaching experience. Pitching instruction, biomechanics analysis, and pitch design -- currently operating as a knowledge base and research tool on the path to a full product.
      </p>

      {/* Origin */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          Where it comes from
        </h2>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#a1a1aa" }}>
          Built by a former professional baseball development coach with hands-on experience at Driveline Academy Flex and 802 Baseball Lab. The coaching frameworks aren't pulled from the internet -- they're documented from real athlete work using Rapsodo, Trackman, Blast Motion sensors, and biomechanics labs.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          The Statcast integration connects the coaching knowledge base to live MLB data, making it possible to benchmark pitch shapes, compare movement profiles, and research pitch tunneling strategies against the full population of major league pitchers.
        </p>
      </div>

      {/* Capabilities */}
      <div
        className="rounded-lg p-6 mb-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-4" style={{ color: "#ffffff" }}>
          Capabilities (v1)
        </h2>
        <div className="flex flex-col gap-4">
          {capabilities.map((cap) => (
            <div key={cap.label} className="flex items-start gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: "#f59e0b" }}
              />
              <div>
                <p className="text-sm font-medium mb-0.5" style={{ color: "#ffffff" }}>
                  {cap.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
                  {cap.description}
                </p>
              </div>
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
        <p className="text-sm leading-relaxed mb-3" style={{ color: "#a1a1aa" }}>
          v1 is an internal research and development tool -- a structured knowledge base for pitching coaching and arsenal design. It's operational and actively used for real coaching decisions and personal pitcher development.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
          v2 planning is underway. If CoachAI becomes a public product or service, this page becomes the landing page with access options. For now, it's a portfolio project showcasing applied AI development in a domain where the builder has genuine subject matter expertise.
        </p>
      </div>
    </div>
  );
}
