"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-tight hover:no-underline"
          style={{ textDecoration: "none" }}
        >
          Morain or Shine
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: active ? "#ffffff" : "var(--muted)",
                  textDecoration: "none",
                  borderBottom: active ? "1px solid var(--accent)" : "none",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-sm"
          style={{ color: "var(--muted)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium py-1"
                style={{
                  color: active ? "#ffffff" : "var(--muted)",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
