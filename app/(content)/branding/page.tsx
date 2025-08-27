// app/branding/page.tsx
import EmailCTA from "../../components/EmailCTA";
import PortalButton from "../../components/PortalButton";

export const metadata = {
  title: "Branding — PRIVÉE GROUP",
  description:
    "Brand identity systems, creative direction, and guidelines that make your story feel inevitable.",
  openGraph: {
    title: "Branding — PRIVÉE GROUP",
    description:
      "Brand identity systems, creative direction, and guidelines that make your story feel inevitable.",
    url: "/branding",
  },
};

export default function BrandingPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-10 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
            OUR <span className="font-serif italic">BRANDING</span>
          </h1>

          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black/80">
              Branding defined by precision, clarity, and consistency across digital and print.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-black/80">
              Visual identity, logos, and print design for founders and teams
              <span className="hidden md:inline"><br /></span>
              who value clarity, restraint, and long-term brand equity.
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

          {/* Mobile: 1 col; Desktop: 3 cols */}
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 text-sm md:text-base leading-relaxed">
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Visual Identity
              </h3>
              <p className="mx-auto mt-2 max-w-[34ch]">
                Logos, brand marks, color systems, and typography that define a brand’s look and recognition.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Print Collateral
              </h3>
              <p className="mx-auto mt-2 max-w-[34ch]">
                Business cards, stationery, packaging, and other crafted brand artifacts.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Digital Assets
              </h3>
              <p className="mx-auto mt-2 max-w-[34ch]">
                Social profiles, templates, and on-brand systems that keep your presence consistent online.
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
            <li>Founders building long-term brands</li>
            <li>Companies seeking refined visual identity</li>
            <li>Teams needing logos, wordmarks, and brand assets</li>
            <li>Partners requiring luxury print collateral</li>
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
