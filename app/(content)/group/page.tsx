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
      <section className="pt-20 pb-10 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
            OUR <span className="font-serif italic normal-case">GROUP</span>
          </h1>

          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black/80">
              The Privée Group is a cultural house for creative work, mission, and collaboration.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-black/80">
              We work with founders, organizations, and investors building with clarity, purpose, and long-term value.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* What We Do */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            What We Do
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 text-sm md:text-base leading-relaxed">
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Creative
              </h3>
              <p className="mt-2 max-w-[38ch]">
                Branding, photography, and cultural work led through our studio.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Mission
              </h3>
              <p className="mt-2 max-w-[38ch]">
                Partnerships with individuals and organizations serving people and purpose.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Collaborations
              </h3>
              <p className="mt-2 max-w-[38ch]">
                Selective ventures with founders and investors aligned with long-term vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Who It's For */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            Who It’s For
          </h2>
          <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
            <li>Founders shaping meaningful companies</li>
            <li>Creators and teams building culture through design, art, or media</li>
            <li>Organizations rooted in purpose and community impact</li>
            <li>Investors seeking curated, long-term collaborations</li>
          </ul>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Request Collaboration */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            Request Collaboration
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-black/80">
            Collaborations are reviewed privately.
          </p>

          <div className="mt-6 flex items-center justify-center gap-6">
            <PortalButton />
            <EmailCTA />
          </div>
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}
