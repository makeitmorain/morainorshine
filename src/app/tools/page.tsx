import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Web-based baseball and analytics tools by Zac Morain.",
};

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#ffffff" }}>
        Tools
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--muted)" }}>
        Web-based tools and dashboards. More coming as projects ship.
      </p>

      <div
        className="rounded-lg p-8 text-center"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <p className="text-base mb-2" style={{ color: "#ffffff" }}>
          Tools launching soon.
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Analytics dashboards, CoachAI tools, and more are in development.
          Check back or follow{" "}
          <a
            href="https://x.com/makeitmorain"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
          >
            @makeitmorain
          </a>{" "}
          for updates.
        </p>
      </div>
    </div>
  );
}
