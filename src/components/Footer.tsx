import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer
      className="mt-16"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-4">
        <div className="mb-8 max-w-md">
          <NewsletterSignup variant="inline" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 pb-8">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt="MoS"
              width={40}
              height={40}
              style={{ height: "40px", width: "auto", opacity: 0.9 }}
            />
            <div>
              <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                Morain <span className="or-gold">or</span> Shine
              </p>
              <p className="text-xs tagline-gold">So what, next pitch.</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://x.com/makeitmorain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm social-link"
            >
              X @makeitmorain
            </a>
            <a
              href="https://github.com/makeitmorain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm social-link"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@xFPLab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm social-link"
            >
              Medium @xFPLab
            </a>
            <Link
              href="/contact"
              className="text-sm social-link"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-center md:text-left" style={{ color: "var(--muted)", opacity: 0.5 }}>
          &copy; {new Date().getFullYear()} Zac Morain
        </p>
      </div>
    </footer>
  );
}
