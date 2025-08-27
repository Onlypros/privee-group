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
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
            SELECTED WORK
          </h1>
          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black">
              A curated selection of photographic work.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto my-12 w-full max-w-4xl border-black/10" />

      {/* Grid */}
      <section className="mx-auto max-w-6xl pb-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
          {/* Row 1 */}
          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/hallway-1152.jpg"
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
              src="/creative/girl-1152.jpg"
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
              src="/creative/lounge2-1152.jpg"
              alt="Selected work image 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[50%_40%]"
              loading="lazy"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/puppy-1152.jpg"
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
              src="/creative/lobby-1152.jpg"
              alt="Selected work image 5"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/girl2-1152.jpg"
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
