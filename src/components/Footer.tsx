import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-16"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Zac Morain. Baseball analytics, AI, and software.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://x.com/makeitmorain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            X
          </a>
          <a
            href="https://github.com/makeitmorain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@xFPLab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            Medium
          </a>
          <Link
            href="/contact"
            className="text-sm"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
