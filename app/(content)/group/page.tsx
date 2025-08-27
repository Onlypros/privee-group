// app/group/page.tsx
import EmailCTA from "../../components/EmailCTA";
import PortalButton from "../../components/PortalButton";

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
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          OUR <span className="font-serif italic normal-case">GROUP</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-sm leading-relaxed md:text-[9px]">
            The Privée Group is a cultural house for creative work, mission, and collaboration.
          </p>
          <p className="mt-5 text-sm leading-relaxed md:text-[9px]">
            We work with founders, organizations, and investors building with clarity, purpose, and long-term value.
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
            <h3 className="uppercase tracking-wide font-semibold text-sm md:text-base">
              Creative
            </h3>
            <p className="mt-2 max-w-[38ch] text-sm md:text-[9px] leading-relaxed text-black/80">
              Branding, photography, and cultural work led through our studio.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="uppercase tracking-wide font-semibold text-sm md:text-base">
              Mission
            </h3>
            <p className="mt-2 max-w-[38ch] text-sm md:text-[9px] leading-relaxed text-black/80">
              Partnerships with individuals and organizations serving people and purpose.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="uppercase tracking-wide font-semibold text-sm md:text-base">
              Collaborations
            </h3>
            <p className="mt-2 max-w-[38ch] text-sm md:text-[9px] leading-relaxed text-black/80">
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
        <ul className="mt-4 space-y-2 text-sm leading-snug md:text-[9px]">
          <li>Founders shaping meaningful companies</li>
          <li>Creators and teams building culture through design, art, or media</li>
          <li>Organizations rooted in purpose and community impact</li>
          <li>Investors seeking curated, long-term collaborations</li>
        </ul>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Request Collaboration */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          Request Collaboration
        </h2>
        <p className="mt-3 text-sm leading-snug md:text-[9px]">
          Collaborations are reviewed privately.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <PortalButton />
          <EmailCTA />
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}
