import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <p
        className="text-6xl font-bold mb-4"
        style={{ color: "var(--surface-raised)" }}
      >
        404
      </p>
      <h1 className="text-xl font-semibold mb-3" style={{ color: "#ffffff" }}>
        Page not found
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        That page does not exist or was moved.
      </p>
      <Link
        href="/"
        className="text-sm"
        style={{ color: "var(--accent)" }}
      >
        Back to home
      </Link>
    </div>
  );
}
