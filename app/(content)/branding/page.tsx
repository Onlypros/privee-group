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
    // force light UI for this content page
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          OUR <span className="font-serif italic">BRANDING</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl">
          {/* body size: 14px mobile, 9px desktop */}
          <p className="text-sm leading-relaxed md:text-[9px]">
            Branding defined by precision, clarity, and consistency across digital and print.
          </p>
          <p className="mt-5 text-sm leading-relaxed md:text-[9px]">
            Visual identity, logos, and print design for founders and teams
            <span className="hidden md:inline"><br /></span> who value clarity, restraint, and long-term brand equity.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* What We Do */}
      <section className="mx-auto max-w-6xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          What We Do
        </h2>

        {/* Mobile: 1 col; Desktop: 3 cols */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Visual Identity
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              Logos, brand marks, color systems, and typography that define a brand’s look and recognition.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Print Collateral
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              Business cards, stationery, packaging, and other crafted brand artifacts.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Digital Assets
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              Social profiles, templates, and on-brand systems that keep your presence consistent online.
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
          <li>Founders building long-term brands</li>
          <li>Companies seeking refined visual identity</li>
          <li>Teams needing logos, wordmarks, and brand assets</li>
          <li>Partners requiring luxury print collateral</li>
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
