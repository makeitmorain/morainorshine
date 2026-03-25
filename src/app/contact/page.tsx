import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Zac Morain.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#ffffff" }}>
        Contact
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--muted)" }}>
        Questions, collaborations, or just want to talk baseball.
      </p>

      <div className="flex flex-col gap-4 mb-12">
        <a
          href="https://x.com/makeitmorain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            textDecoration: "none",
          }}
        >
          <div>
            <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
              X / Twitter
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              @makeitmorain
            </p>
          </div>
          <span style={{ color: "var(--muted)" }}>-&gt;</span>
        </a>

        <a
          href="https://github.com/makeitmorain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 rounded-lg"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            textDecoration: "none",
          }}
        >
          <div>
            <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
              GitHub
            </p>
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              makeitmorain
            </p>
          </div>
          <span style={{ color: "var(--muted)" }}>-&gt;</span>
        </a>
      </div>

      <div
        className="rounded-lg p-6"
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2 className="font-semibold text-base mb-3" style={{ color: "#ffffff" }}>
          Contact form
        </h2>
        <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
          Contact form coming soon. For now, reach out on X or GitHub.
        </p>
      </div>
    </div>
  );
}
