// app/selected-work/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Selected Work — PRIVÉE GROUP",
  description:
    "A curated selection of photographic work from Privée Group — editorial, portraiture, lifestyle, movement, and environments.",
  openGraph: {
    title: "Selected Work — PRIVÉE GROUP",
    description:
      "A curated selection of photographic work from Privée Group — editorial, portraiture, lifestyle, movement, and environments.",
    url: "/selected-work",
  },
};

export default function SelectedWorkPage() {
  return (
    <main className="px-6">
      {/* Hero */}
      <section className="pt-20 pb-10 text-center">
        <p className="text-[10px] tracking-widest text-black/70 md:text-xs">
          WHAT WE DO
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          SELECTED <span className="font-serif normal-case">WORK</span>
        </h1>
        <p className="mt-3 text-[12px] leading-snug text-black/80 md:text-sm">
          A curated selection of photographic work.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Row 1 */}
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/creative/cat1.png"
              alt="Placeholder image cat1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/creative/cat2.png"
              alt="Placeholder image cat2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Row 2 */}
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/creative/cat3.png"
              alt="Placeholder image cat3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/creative/cat4.png"
              alt="Placeholder image cat4"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Row 3 */}
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/creative/cat5.png"
              alt="Placeholder image cat5"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-black">
            <Image
              src="/creative/cat6.png"
              alt="Placeholder image cat6"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
