"use client";

type AdPosition = "sidebar" | "in-content" | "header" | "footer";

interface AdSlotProps {
  position: AdPosition;
  className?: string;
}

/**
 * Ad slot placeholder. Renders nothing in production until an ad provider
 * is configured. In development, renders a labeled placeholder so you can
 * see where ads will appear.
 *
 * Usage in layouts or pages:
 *   <AdSlot position="in-content" />
 *   <AdSlot position="sidebar" />
 *
 * When ready to wire up AdSense or Carbon Ads, swap the dev placeholder
 * with the provider script here. One place, all slots update.
 */

const slotDimensions: Record<AdPosition, { width: string; height: string; label: string }> = {
  sidebar: { width: "300px", height: "250px", label: "Sidebar Ad (300x250)" },
  "in-content": { width: "100%", height: "90px", label: "In-Content Ad (728x90)" },
  header: { width: "100%", height: "90px", label: "Header Ad (728x90)" },
  footer: { width: "100%", height: "90px", label: "Footer Ad (728x90)" },
};

const isDev = process.env.NODE_ENV === "development";

export default function AdSlot({ position, className }: AdSlotProps) {
  // In production with no provider configured, render nothing
  if (!isDev) {
    return null;
  }

  // In development, render a visible placeholder
  const { width, height, label } = slotDimensions[position];

  return (
    <div
      className={className}
      style={{
        width,
        height,
        border: "1px dashed #2e2e2e",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
      }}
    >
      <span style={{ color: "#555555", fontSize: "11px", fontFamily: "monospace" }}>
        {label}
      </span>
    </div>
  );
}
