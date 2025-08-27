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
        <h1 className="mt-2 text-3xl font-semibold tracking-wide md:text-4xl uppercase">
          SELECTED WORK
        </h1>
        <div className="mx-auto mt-6 max-w-xl">
          <p className="text-sm leading-relaxed md:text-[9px]">
            A curated selection of photographic work.
          </p>
        </div>
      </section>

      <hr className="mx-auto my-8 max-w-3xl border-black/10" />

      {/* Grid */}
      <section className="mx-auto max-w-6xl pb-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
          {/* Row 1 */}
          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/puppy.jpg"
              alt="Selected work image 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
              loading="eager"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat2.png"
              alt="Selected work image 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
              loading="eager"
            />
          </figure>

          {/* Row 2 */}
          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat3.png"
              alt="Selected work image 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[50%_40%]"
              loading="lazy"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat4.png"
              alt="Selected work image 4"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </figure>

          {/* Row 3 */}
          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat5.png"
              alt="Selected work image 5"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/cat6.png"
              alt="Selected work image 6"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
