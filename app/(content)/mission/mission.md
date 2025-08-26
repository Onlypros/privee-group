// app/mission/page.tsx
import Link from "next/link";
import ContactOptions from "../components/ContactOptions";

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
    <main className="px-6">
      {/* Hero — narrow column + tall lines */}
      <section className="pt-20 pb-12">
        <h1 className="text-center text-3xl font-semibold tracking-wide md:text-4xl">
          OUR <span className="font-serif italic">MISSION</span>
        </h1>

        <div className="mx-auto mt-6 max-w-xl text-center">
          <p className="text-[10px] italic leading-relaxed text-black md:text-[15px]">
            Creative production and brand collaboration in service of mission-led work.
          </p>
          <p className="mt-5 text-[10px] leading-[1.9] text-black md:text-[16px]">
            Privée Missions partners with missionaries, founders, and purpose-driven
            ventures to support stories <br /> and projects that reflect responsibility,
            intention, and cultural depth.
          </p>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-black/10" />

      {/* What We Do */}
      <section className="mx-auto max-w-6xl py-10">
        <h2 className="text-center text-xl font-medium md:text-2xl">What We Do</h2>

        <div className="mt-8 grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-[12px] font-semibold">Mission-Aligned Partnerships</h3>
            <p className="mx-auto mt-2 text-[10px] leading-relaxed text-black">
              We collaborate with individuals and organizations doing work that serves
              people, communities, and purpose — including missionaries, non-profits,
              and value-driven founders.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold">Creative Support &amp; Storytelling</h3>
            <p className="mx-auto mt-2 text-[10px] leading-relaxed text-black">
              We help clarify visual direction, refine brand tone, and support media that
              communicates mission with authenticity and care.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold">Cultural Projects</h3>
            <p className="mx-auto mt-2 text-[10px] leading-relaxed text-black">
              We develop creative projects and collaborations with ventures rooted in
              sustainability, healing, and social impact.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-black/10" />

      {/* Who It's For */}
      <section className="mx-auto max-w-3xl py-10">
        <h2 className="text-center text-xl font-medium md:text-2xl">Who It's For</h2>
        <ul className="mt-4 list-disc list-inside space-y-2 text-center text-[10px] leading-snug text-black">
          <li>Missionaries</li>
          <li>Faith-rooted and values-based founders</li>
          <li>Eco-luxury and purpose-driven brands</li>
          <li>Projects that serve communities, not trends</li>
        </ul>
      </section>

      <hr className="mx-auto max-w-3xl border-black/10" />

      {/* Our Belief */}
      <section className="mx-auto max-w-3xl py-10">
        <h2 className="text-center text-xl font-medium md:text-2xl">Our Belief</h2>
        <div className="mx-auto mt-4 max-w-xl text-center text-[10px] leading-snug text-black italic md:text-[12px]">
          <p>Privée Missions exists to amplify work that serves something greater.</p>
          <p className="mt-2">We are not here for the algorithm — we are here for the mission.</p>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-black/10" />

      {/* Request Collaboration (form + copy + Gmail + mail app) */}
      <ContactOptions />

      <div className="h-12" />
    </main>
  );
}
