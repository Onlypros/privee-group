// app/(content)/mission/page.tsx
import EmailCTA from "../../components/EmailCTA";
import PortalButton from "../../components/PortalButton";

export const metadata = {
  title: "Mission — PRIVÉE GROUP",
  description:
    "What Privée Missions is, what we believe, the projects we take on, and why it matters.",
  openGraph: {
    title: "Mission — PRIVÉE GROUP",
    description:
      "What Privée Missions is, what we believe, the projects we take on, and why it matters.",
    url: "/mission",
  },
};

export default function MissionPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-10 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
            OUR <span className="font-serif italic">MISSION</span>
          </h1>

          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black">
              Creative production and brand collaboration in service of mission-led work.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-black">
              Privée Missions partners with missionaries, founders, and purpose-driven
              ventures to support stories and projects that reflect responsibility,
              intention, and cultural depth.
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
                Partnerships
              </h3>
              <p className="mt-2 max-w-[34ch]">
                We collaborate with individuals and organizations doing work that serves
                people, communities, and purpose.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Storytelling
              </h3>
              <p className="mt-2 max-w-[34ch]">
                We help clarify visual direction, refine brand tone, and support media
                that communicates mission with authenticity and care.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Projects
              </h3>
              <p className="mt-2 max-w-[34ch]">
                We develop creative projects and collaborations with ventures rooted in
                sustainability, healing, and social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keep divider width consistent with other pages */}
      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Who It's For */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            Who It’s For
          </h2>
          <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
            <li>Missionaries</li>
            <li>Faith-rooted and values-based founders</li>
            <li>Eco-luxury and purpose-driven brands</li>
            <li>Projects that serve communities, not trends</li>
          </ul>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Our Belief */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            Our Belief
          </h2>
          <div className="mx-auto mt-4 max-w-3xl italic">
            <p className="text-base md:text-lg leading-relaxed text-black">
              We are here for the mission, not the noise.
            </p>
          </div>
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
