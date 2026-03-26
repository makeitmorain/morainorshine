import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://morainorshine.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Morain or Shine",
    template: "%s | Morain or Shine",
  },
  description:
    "Zac Morain -- baseball analytics, AI, and software development. Projects, tools, and writing.",
  openGraph: {
    siteName: "Morain or Shine",
    type: "website",
    url: SITE_URL,
    title: "Morain or Shine",
    description:
      "Zac Morain -- baseball analytics, AI, and software development. Projects, tools, and writing.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Morain or Shine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@makeitmorain",
    creator: "@makeitmorain",
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
