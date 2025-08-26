// app/(content)/selected-work/page.tsx
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
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-10 text-center">
        <p className="text-[10px] tracking-widest text-black/70 md:text-xs">
          ARCHIVE
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          OUR <span className="font-serif italic">SELECTED WORK</span>
        </h1>
        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-sm italic leading-relaxed md:text-[9px]">
            A curated selection of photographic work.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Grid */}
      <section className="mx-auto max-w-6xl pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Row 1 */}
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat1.png"
              alt="Selected work image 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat2.png"
              alt="Selected work image 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Row 2 */}
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat3.png"
              alt="Selected work image 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat4.png"
              alt="Selected work image 4"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Row 3 */}
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat5.png"
              alt="Selected work image 5"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat6.png"
              alt="Selected work image 6"
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
