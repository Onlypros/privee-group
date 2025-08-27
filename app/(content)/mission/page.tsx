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
      <section className="pt-20 pb-12 text-center">
        <h1 className="text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          OUR <span className="font-serif italic">MISSION</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl">
          {/* body size: 14px mobile, 9px desktop */}
          <p className="text-sm leading-relaxed md:text-[9px]">
            Creative production and brand collaboration in service of mission-led work.
          </p>
          <p className="mt-5 text-sm leading-relaxed md:text-[9px]">
            Privée Missions partners with missionaries, founders, and purpose-driven
            ventures <span className="hidden md:inline"><br /></span> to support stories
            and projects that reflect responsibility, intention, and cultural depth.
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
              Partnerships
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              We collaborate with individuals and organizations doing work that serves
              <br /> people, communities, and purpose.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Storytelling
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              We help clarify visual direction, refine brand tone, and support media that
              communicates mission with authenticity and care.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[12px] font-semibold md:text-sm tracking-wide uppercase">
              Projects
            </h3>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed md:text-[9px]">
              We develop creative projects and collaborations with ventures rooted in
              sustainability, healing, and social impact.
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
          <li>Missionaries</li>
          <li>Faith-rooted and values-based founders</li>
          <li>Eco-luxury and purpose-driven brands</li>
          <li>Projects that serve communities, not trends</li>
        </ul>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Our Belief */}
      <section className="mx-auto max-w-3xl py-10 text-center">
        <h2 className="text-xl font-medium md:text-xs uppercase tracking-wide">
          Our Belief
        </h2>
        <div className="mx-auto mt-4 max-w-xl italic">
          <p className="text-sm leading-snug md:text-[9px]">
            We are here for the mission, not the noise.
          </p>
        </div>
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
