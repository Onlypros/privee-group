// app/(content)/photography/page.tsx
import EmailCTA from "../../components/EmailCTA";
import PortalButton from "../../components/PortalButton";
import ViewArchiveButton from "../../components/ViewArchiveButton";

export const metadata = {
  title: "Photography — PRIVÉE GROUP",
  description:
    "PRIVÉE GROUP documents culture and identity through images — spanning editorial, portraiture, lifestyle, movement, and environments.",
  openGraph: {
    title: "Photography — PRIVÉE GROUP",
    description:
      "PRIVÉE GROUP documents culture and identity through images — spanning editorial, portraiture, lifestyle, movement, and environments.",
    url: "/photography",
  },
};

export default function PhotographyPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-10 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
            OUR <span className="font-serif italic">PHOTOGRAPHY</span>
          </h1>

          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black">
              PRIVÉE GROUP documents culture and identity through images.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-black">
              Work spanning editorial, portraiture, lifestyle, movement, and environments.
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
            {/* Editorial */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Editorial
              </h3>
              <p className="mx-auto mt-2 max-w-[42ch]">
                Campaigns, publications, cultural projects.
              </p>
            </div>

            {/* Portraiture */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Portraiture
              </h3>
              <p className="mx-auto mt-2 max-w-[42ch]">
                Individuals, groups, teams.
              </p>
            </div>

            {/* Lifestyle & Spaces */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Lifestyle &amp; Spaces
              </h3>
              <p className="mx-auto mt-2 max-w-[42ch]">
                Design, interiors, environments.
              </p>
            </div>

            {/* Pets */}
            <div className="flex flex-col items-center">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Pets
              </h3>
              <p className="mx-auto mt-2 max-w-[42ch]">
                Pets captured for personal keepsakes and brand work.
              </p>
            </div>

            {/* Movement (full width on desktop) */}
            <div className="flex flex-col items-center md:col-span-2">
              <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
                Movement
              </h3>
              <p className="mx-auto mt-2 max-w-[42ch]">
                Dance, fitness, martial arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Archive Section */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-base md:text-lg leading-relaxed text-black">
            Selected work is available in our archive.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <ViewArchiveButton />
          </div>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Who It’s For */}
      <section className="py-12 md:py-16 text-center">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            Who It’s For
          </h2>
          <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
            <li>Founders and brands building distinct visual presence</li>
            <li>Developers shaping lifestyle, real estate, or design projects</li>
            <li>Creators, performers, and cultural projects</li>
            <li>Individuals seeking refined portraiture or personal commissions</li>
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
