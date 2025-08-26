// app/group/page.tsx
import Link from "next/link";
import EmailCTA from "../components/EmailCTA";

export const metadata = {
  title: "The Group — PRIVÉE GROUP",
  description:
    "Filler description for the Group page. Replace with real content later.",
  openGraph: {
    title: "The Group — PRIVÉE GROUP",
    description:
      "Filler description for the Group page. Replace with real content later.",
    url: "/group",
  },
};

export default function GroupPage() {
  return (
    <main className="px-6">
      {/* Hero */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          OUR <span className="font-serif italic">GROUP</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-sm italic leading-relaxed text-black md:text-[9px]">
            The Privée Group is a cultural house for creative work, mission, and collaboration.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-black md:text-[9px]">
            We work with founders, organizations, and investors <br /> building with clarity, purpose, and long-term value.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* What We Do */}
      <section className="mx-auto max-w-6xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          What We Do
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Creative
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed text-black md:text-[9px]">
              Branding, photography, and cultural work <br /> led through our studio.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Mission
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed text-black md:text-[9px]">
              Partnerships with individuals and organizations serving people and purpose.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Collaborations
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed text-black md:text-[9px]">
              Selective ventures with founders and investors aligned with long-term vision.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Who It's For */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          Who It’s For
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-snug text-black md:text-[9px]">
          <li>Founders shaping meaningful companies</li>
          <li>Creators and teams building culture through design, art, or media</li>
          <li>Organizations rooted in purpose and community impact</li>
          <li>Investors seeking curated, long-term collaborations</li>
        </ul>
      </section>

      {/* <hr className="mx-auto my-8 max-w-3xl border-black/10" /> */}

      {/* Our Belief */}
      {/* <section className="mx-auto max-w-3xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          Our Belief
        </h2>
        <div className="mx-auto mt-4 max-w-xl text-center text-black italic">
          <p className="text-sm leading-snug md:text-[9px]">
            Placeholder belief statement in italics.
          </p>
        </div>
      </section> */}

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Request Collaboration */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          Request Collaboration
        </h2>
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
