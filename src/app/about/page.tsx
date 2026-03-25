import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zac Morain -- baseball pitching coach turned analytics and AI developer.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "#ffffff" }}
      >
        About
      </h1>
      <p className="text-sm mb-12" style={{ color: "var(--muted)" }}>
        Zac Morain
      </p>

      <div className="prose">
        <p>
          I spent years coaching pitchers. Throwing programs, biomechanics,
          Driveline methodology, high-speed video, TrackMan -- that whole world.
          I ran programming at 802 Baseball Lab before it closed in early 2024,
          and I have been a part-time staff member at Driveline Baseball since
          2024.
        </p>

        <p>
          Somewhere along the way I got obsessed with the data side. Statcast,
          pitch design, expected stats, spin rates -- all of it. The coaching
          eye and the analytics lens started to merge, and that is mostly what I
          build now.
        </p>

        <p>
          My current projects live at the intersection of baseball and
          technology: an AI coaching system built on Driveline principles
          (CoachAI), a fantasy baseball analytics league engine (Scout / FL
          Men&rsquo;s League), a pitch-vs-lineup grading system (Matchup+), and a
          rotating-cast AI baseball media outlet (Replacement Level Media). More
          tools on the way.
        </p>

        <p>
          I also write. Mostly about baseball, sometimes about the process of
          building these things. The older pitching content lives here from the
          Pitcher Lyfe days. The fantasy baseball analysis lives on Medium under{" "}
          <a
            href="https://medium.com/@xFPLab"
            target="_blank"
            rel="noopener noreferrer"
          >
            @xFPLab
          </a>
          .
        </p>

        <h2>Connect</h2>
        <ul>
          <li>
            <a
              href="https://x.com/makeitmorain"
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter: @makeitmorain
            </a>{" "}
            -- daily baseball takes and analytics content
          </li>
          <li>
            <a
              href="https://medium.com/@xFPLab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium: @xFPLab
            </a>{" "}
            -- fantasy baseball analysis (stays on Medium)
          </li>
          <li>
            <a
              href="https://github.com/makeitmorain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: makeitmorain
            </a>{" "}
            -- open source projects and tools
          </li>
          <li>
            <Link href="/contact">Contact form</Link> -- for everything else
          </li>
        </ul>

        <h2>The name</h2>
        <p>
          Morain or Shine. Rain or shine. You build regardless. The name works
          on a few levels and I will let you figure out the rest.
        </p>
      </div>
    </div>
  );
}
