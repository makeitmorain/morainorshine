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
        Swing and a miss.
      </h1>
      <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>
        That page doesn&apos;t exist. Might&apos;ve been moved, might&apos;ve never been.
      </p>
      <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
        So what, next pitch.
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
