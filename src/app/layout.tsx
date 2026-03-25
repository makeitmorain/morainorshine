import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Morain or Shine",
    template: "%s | Morain or Shine",
  },
  description:
    "Zac Morain -- baseball analytics, AI, and software development. Projects, tools, and writing.",
  openGraph: {
    siteName: "Morain or Shine",
    type: "website",
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
