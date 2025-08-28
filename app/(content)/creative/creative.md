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
      <section className="pt-20 pb-10 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
            OUR <span className="font-serif italic">STUDIO</span>
          </h1>

          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black">
              The studio arm of The Privée Group.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-black">
              We shape visual identity and storytelling through branding and photography.
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

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 text-sm md:text-base leading-relaxed">
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Branding
              </h3>
              <p className="mx-auto mt-2 max-w-[34ch]">
                Logos, identity systems, and brand materials that build recognition and clarity.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Photography
              </h3>
              <p className="mx-auto mt-2 max-w-[34ch]">
                Editorial, portrait, lifestyle, and spaces. Visual work created for brands and projects.
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
            <li>Founders building distinct brands</li>
            <li>Companies shaping lifestyle or real estate projects</li>
            <li>Creators and organizations working across culture and industry</li>
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
          <p className="mt-3 text-base md:text-lg leading-relaxed text-black">
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
