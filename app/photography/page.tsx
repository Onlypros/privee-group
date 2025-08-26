// app/photography/page.tsx
import Link from "next/link";
import EmailCTA from "../components/EmailCTA";

export const metadata = {
  title: "Photography — PRIVÉE GROUP",
  description:
    "PRIVÉE GROUP documents culture and identity through images — spanning editorial, portraiture, lifestyle, movement, and environments.",
  openGraph: {
    title: "Photography — PRIVÉE GROUP",
    description:
      "PRIVÉE GROUP documents culture and identity through images — spanning editorial, portraiture, lifestyle, movement, and environments.",
    url: "/photography",
  },
};

export default function PhotographyPage() {
  return (
    <main className="px-6">
      {/* Hero */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          OUR <span className="font-serif italic">PHOTOGRAPHY</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-sm leading-relaxed text-black md:text-[9px]">
            PRIVÉE GROUP documents culture and identity through images — spanning editorial,
            portraiture, lifestyle, movement, and environments.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* What We Do */}
      <section className="mx-auto max-w-6xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          What We Do <span className="normal-case">(5 Clear Pillars)</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Editorial */}
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">Editorial</h3>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm leading-relaxed text-black md:text-[9px]">
              Photography shaped for campaigns, <br /> publications, and cultural narratives.
            </p>
          </div>

          {/* Portraiture */}
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">Portraiture</h3>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm leading-relaxed text-black md:text-[9px]">
              Individuals, groups, and teams captured <br /> in timeless photographs with presence.
            </p>
          </div>

          {/* Lifestyle & Spaces */}
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">Lifestyle &amp; Spaces</h3>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm leading-relaxed text-black md:text-[9px]">
              Design, interiors, and experiences with focus and detail.
            </p>
          </div>

          {/* Movement */}
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">Movement</h3>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm leading-relaxed text-black md:text-[9px]">
              Dance, fitness, and martial arts — the body in motion, documented with energy and clarity.
            </p>
          </div>

          {/* Pets */}
          <div className="flex flex-col items-center md:col-span-2">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">Pets</h3>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm leading-relaxed text-black md:text-[9px]">
              Personal and brand-focused pet portraits, capturing character and connection.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Request Collaboration (matches other pages) */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">Request Collaboration</h2>
        <p className="mt-3 text-sm leading-snug text-black md:text-[9px]">
          Collaborations are reviewed privately.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <Link
            href="/portal"
            className="w-30 inline-block text-center tracking-widest border-1 border-black px-6 py-2 text-[10px] uppercase transition hover:bg-black hover:text-white"
            aria-label="Open the Portal page"
          >
            Portal
          </Link>

          <EmailCTA />
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}
