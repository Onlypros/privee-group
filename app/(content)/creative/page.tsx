// app/creative/page.tsx
import EmailCTA from "../../components/EmailCTA";
import PortalButton from "../../components/PortalButton";

export const metadata = {
  title: "Creative — PRIVÉE GROUP",
  description:
    "The studio arm of The Privée Group. We shape visual identity and storytelling through branding and photography.",
  openGraph: {
    title: "Creative — PRIVÉE GROUP",
    description:
      "The studio arm of The Privée Group. We shape visual identity and storytelling through branding and photography.",
    url: "/creative",
  },
};

export default function CreativePage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          OUR <span className="font-serif italic">STUDIO</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-sm leading-relaxed md:text-[9px]">
            The studio arm of The Privée Group.
          </p>
          <p className="mt-5 text-sm leading-relaxed md:text-[9px]">
            We shape visual identity and storytelling through branding and photography.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* What We Do */}
      <section className="mx-auto max-w-6xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          What We Do
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Branding
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              Logos, identity systems, and brand materials that build recognition and clarity.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Photography
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              Editorial, portrait, lifestyle, and spaces. Visual work created for brands and projects.
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
          <li>Founders building distinct brands</li>
          <li>Companies shaping lifestyle or real estate projects</li>
          <li>Creators and organizations working across culture and industry</li>
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
