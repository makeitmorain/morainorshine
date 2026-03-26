"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xzzblkjp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="rounded-lg p-6"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <h2 className="font-semibold text-base mb-5" style={{ color: "#ffffff" }}>
        Send a message
      </h2>

      {status === "success" ? (
        <div
          className="rounded px-4 py-3 text-sm"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            color: "#22c55e",
          }}
        >
          Message sent. I will get back to you.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-medium mb-1.5"
              style={{ color: "#a1a1aa" }}
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
              className="w-full px-3 py-2 rounded text-sm"
              style={{
                backgroundColor: "var(--surface-raised)",
                border: "1px solid var(--border)",
                color: "#ffffff",
                outline: "none",
              }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-medium mb-1.5"
              style={{ color: "#a1a1aa" }}
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
              className="w-full px-3 py-2 rounded text-sm"
              style={{
                backgroundColor: "var(--surface-raised)",
                border: "1px solid var(--border)",
                color: "#ffffff",
                outline: "none",
              }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-medium mb-1.5"
              style={{ color: "#a1a1aa" }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
              className="w-full px-3 py-2 rounded text-sm resize-none"
              style={{
                backgroundColor: "var(--surface-raised)",
                border: "1px solid var(--border)",
                color: "#ffffff",
                outline: "none",
              }}
              placeholder="What's on your mind?"
            />
          </div>

          {status === "error" && (
            <p className="text-xs" style={{ color: "#ef4444" }}>
              Something went wrong. Try again or reach out on X.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-4 py-2 rounded text-sm font-medium"
            style={{
              backgroundColor: "var(--accent)",
              color: "#ffffff",
              border: "none",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
