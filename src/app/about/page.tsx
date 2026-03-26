import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zac Morain -- pitching coach, baseball lab director, CS student, builder. The story behind the site.",
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
          It started with throwing. I got obsessed with the science of it --
          arm path, hip-to-shoulder separation, spin rate, pitch tunneling --
          back when most coaches were still working purely on feel. I went deep
          on Driveline methodology, high-speed video, Rapsodo, Trackman,
          biomechanics research. I wanted to understand the thing at a level
          where I could actually explain it to an athlete and have it change
          how they threw a baseball.
        </p>

        <p>
          That obsession turned into a career. I coached 200+ athletes. I
          built 802 Baseball Lab from scratch and ran player development there
          until we closed in early 2024. I worked at Driveline Academy Flex.
          I became an Official Scorer for the Florida Complex League. The
          coaching eye and the analytical lens started to merge -- and I
          realized the most interesting work was happening at that intersection.
        </p>

        <p>
          Then I walked away from coaching. Twice, actually (saving that drama
          for another time). Not because I failed at it. Because the path
          wasn't aligned with where I needed to go. The pivot to CS and data
          analytics wasn't a consolation prize -- it was the logical next move.
          I wanted to stay connected to baseball from the technology side.
          Build the tools. Write the systems. Teach the AI everything I learned
          in the lab.
        </p>

        <p>
          Now I'm a CS student at CSU Global, building CoachAI, Scout
          Analytics, Matchup+, and Replacement Level Media -- an absurdist AI
          sports media operation covering a Sunday men's league like it's the
          World Series (Bill barely holds it together). I play right-handed in
          that same league. I'm a dad. I have ADHD. I'm a perpetual student who
          learns by doing and figures it out as it goes. Can't swim until
          you're in the water.
        </p>

        <p>
          Try hard. Ship things. Move forward. That's the whole operating
          system.
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
            -- daily baseball takes, analytics content, and whatever I'm
            building right now
          </li>
          <li>
            <a
              href="https://medium.com/@xFPLab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium: @xFPLab
            </a>{" "}
            -- fantasy baseball analysis (lives on Medium, MLB employment reasons)
          </li>
          <li>
            <a
              href="https://github.com/makeitmorain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: makeitmorain
            </a>{" "}
            -- the actual code
          </li>
          <li>
            <Link href="/contact">Contact form</Link> -- for everything else
          </li>
        </ul>

        <h2>The name</h2>
        <p>
          Morain or Shine. Rain or shine. You show up regardless. You build
          regardless. The name works on a few levels and I'll let you figure
          out the rest.
        </p>
      </div>
    </div>
  );
}
