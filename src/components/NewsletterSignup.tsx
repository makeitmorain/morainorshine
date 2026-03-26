"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  /** Optional heading text. Defaults to "Stay in the loop" */
  heading?: string;
  /** Optional subtext. Defaults to a generic description. */
  description?: string;
  /** Visual variant: "card" wraps in a bordered container; "inline" is bare. */
  variant?: "card" | "inline";
}

/**
 * Email capture component. Drop into blog layout, footer, or anywhere.
 *
 * The submission endpoint is read from NEXT_PUBLIC_NEWSLETTER_ENDPOINT.
 * When that env var is not set, the form does nothing (safe fallback).
 *
 * Compatible providers: Buttondown, Resend, ConvertKit, or any endpoint
 * that accepts POST { email } as JSON. Set the env var and it just works.
 *
 * Usage:
 *   <NewsletterSignup />
 *   <NewsletterSignup variant="inline" heading="Get updates" />
 */
export default function NewsletterSignup({
  heading = "Stay in the loop",
  description = "New posts on baseball analytics, AI tools, and building in public. No spam.",
  variant = "card",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !endpoint) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Could not connect. Check your connection and try again.");
      setStatus("error");
    }
  }

  const inner = (
    <>
      <p className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>
        {heading}
      </p>
      <p className="text-sm mb-4" style={{ color: "#a1a1aa" }}>
        {description}
      </p>

      {status === "success" ? (
        <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
          You&apos;re in. Talk soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="flex-1 min-w-0 text-sm px-3 py-2 rounded outline-none"
            style={{
              backgroundColor: "var(--surface-raised)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              minWidth: "180px",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading" || !endpoint}
            className="text-sm font-medium px-4 py-2 rounded transition-opacity"
            style={{
              backgroundColor: "var(--accent)",
              color: "#000000",
              opacity: status === "loading" || !endpoint ? 0.6 : 1,
              cursor: status === "loading" || !endpoint ? "not-allowed" : "pointer",
              border: "none",
            }}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-xs mt-2" style={{ color: "#ef4444" }}>
          {errorMsg}
        </p>
      )}

      {!endpoint && process.env.NODE_ENV === "development" && (
        <p className="text-xs mt-2" style={{ color: "#555555" }}>
          Set NEXT_PUBLIC_NEWSLETTER_ENDPOINT to enable signups.
        </p>
      )}
    </>
  );

  if (variant === "inline") {
    return <div>{inner}</div>;
  }

  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {inner}
    </div>
  );
}
