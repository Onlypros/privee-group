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

// CHANGED: Centralized sizes so each image fetches only what's needed.
// - On phones: 100vw
// - In your 2-col 1152px container: ~50vw (≈576px)
// - Hard cap 576px avoids oversize fetches on very wide screens
const SIZES = '(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 576px';

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
              // CHANGED: revert to existing JPG to prevent 404
              src="/creative/hallway-1152.jpg"
              // CHANGED: descriptive alt for a11y/SEO
              alt="Long hotel hallway with dramatic lighting and a figure centered"
              fill
              sizes={SIZES}
              className="object-cover object-center"
              // CHANGED: keep only first image as priority (LCP)
              priority
              fetchPriority="high"
              // NOTE: removed blurDataURL since you don't have blur files yet
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/girl-1152.jpg"
              alt="Portrait in soft window light, subject facing camera"
              fill
              sizes={SIZES}
              className="object-cover object-center"
              // Default lazy loading (no priority/eager) to avoid network dogpile
              decoding="async"
            />
          </figure>

          {/* Row 2 */}
          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/lounge2-1152.jpg"
              alt="Lounge interior with warm ambient lighting and velvet seating"
              fill
              sizes={SIZES}
              className="object-cover object-[50%_40%]" // keep your framing tweak
              decoding="async"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/puppy-1152.jpg"
              alt="Small puppy looking up while sitting on lounge seating"
              fill
              sizes={SIZES}
              className="object-cover object-center"
              decoding="async"
            />
          </figure>

          {/* Row 3 */}
          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/lobby-1152.jpg"
              alt="Grand lobby with chandelier and plush seating"
              fill
              sizes={SIZES}
              className="object-cover object-center"
              decoding="async"
            />
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
            <Image
              src="/creative/girl2-1152.jpg"
              alt="Candid portrait with motion blur in dim light"
              fill
              sizes={SIZES}
              className="object-cover object-center"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
