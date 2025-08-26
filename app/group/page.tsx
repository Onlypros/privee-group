// app/group/page.tsx
import Link from "next/link";
import EmailCTA from "../components/EmailCTA";

export const metadata = {
  title: "Our Group — PRIVÉE GROUP",
  description:
    "The Privée Group is a cultural house for creative work, mission, and collaboration.",
  openGraph: {
    title: "Our Group — PRIVÉE GROUP",
    description:
      "The Privée Group is a cultural house for creative work, mission, and collaboration.",
    url: "/group",
    type: "website",
  },
};

export default function GroupPage() {
  return (
    <main className="px-6">
      {/* Hero */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="tracking-wide uppercase text-4xl md:text-5xl font-semibold">
          OUR <span className="font-serif italic normal-case">GROUP</span>
        </h1>

        <div className="mx-auto mt-5 max-w-2xl">
          <p className="italic leading-relaxed text-[var(--foreground)]/70 text-sm md:text-base">
            The Privée Group is a cultural house for creative work, mission, and collaboration.
          </p>
          <p className="mt-3 leading-relaxed text-sm md:text-base text-[var(--foreground)]/80">
            We work with founders, organizations, and investors building with clarity, purpose, and long-term value.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-5xl border-[color:var(--foreground)]/10" />

      {/* What We Do */}
      <section className="mx-auto max-w-5xl py-12 text-center">
        <p className="tracking-widest uppercase text-[11px] md:text-xs text-[var(--foreground)]/70">
          What We Do
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
          <div className="flex flex-col items-center">
            <h3 className="uppercase tracking-wide font-semibold text-sm md:text-base">
              Creative
            </h3>
            <p className="mt-2 max-w-[38ch] leading-relaxed text-sm md:text-base text-[var(--foreground)]/80">
              Branding, photography, and cultural work led through our studio.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="uppercase tracking-wide font-semibold text-sm md:text-base">
              Mission
            </h3>
            <p className="mt-2 max-w-[38ch] leading-relaxed text-sm md:text-base text-[var(--foreground)]/80">
              Partnerships with individuals and organizations serving people and purpose.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="uppercase tracking-wide font-semibold text-sm md:text-base">
              Collaborations
            </h3>
            <p className="mt-2 max-w-[38ch] leading-relaxed text-sm md:text-base text-[var(--foreground)]/80">
              Selective ventures with founders and investors aligned with long-term vision.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-5xl border-[color:var(--foreground)]/10" />

      {/* Who It's For */}
      <section className="mx-auto max-w-3xl py-12 text-center">
        <p className="tracking-widest uppercase text-[11px] md:text-xs text-[var(--foreground)]/70">
          Who It’s For
        </p>
        <ul className="mt-6 space-y-2 text-sm md:text-base leading-relaxed text-[var(--foreground)]/85">
          <li>Founders shaping meaningful companies</li>
          <li>Creators and teams building culture through design, art, or media</li>
          <li>Organizations rooted in purpose and community impact</li>
          <li>Investors seeking curated, long-term collaborations</li>
        </ul>
      </section>

      <hr className="mx-auto my-8 max-w-5xl border-[color:var(--foreground)]/10" />

      {/* Request Collaboration */}
      <section className="mx-auto max-w-3xl py-12 text-center">
        <p className="tracking-widest uppercase text-[11px] md:text-xs text-[var(--foreground)]/70">
          Request Collaboration
        </p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--foreground)]/75">
          Collaborations are reviewed privately.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href="/portal"
            className="inline-block border border-[color:var(--foreground)] px-5 py-2 text-xs md:text-sm tracking-widest
                       hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] transition"
            aria-label="Open the Portal page"
          >
            PORTAL
          </Link>

          <EmailCTA />
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}
