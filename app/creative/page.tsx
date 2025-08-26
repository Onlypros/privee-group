// app/creative/page.tsx
import Image from "next/image";

type Photo = { src: string; title?: string; w: number; h: number };

const photos: Photo[] = [
  { src: "/creative/cat1.png", title: "Cat One", w: 800, h: 600 },
  { src: "/creative/cat2.png", title: "Cat Two", w: 800, h: 600 },
  { src: "/creative/cat3.png", title: "Cat Three", w: 800, h: 600 },
  { src: "/creative/cat4.png", title: "Cat Four", w: 800, h: 600 },
  { src: "/creative/cat5.png", title: "Cat Five", w: 800, h: 600 },
  { src: "/creative/cat6.png", title: "Cat Six", w: 800, h: 600 },
];

export default function Creative() {
  return (
    <>
      {/* gallery grid */}
      <section className="px-6 md:px-10 lg:px-16 pb-16">
        <h1 className="sr-only">Portfolio</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p) => (
            <li key={p.src} className="group relative overflow-hidden bg-neutral-100">
              <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={p.src}
                  alt={p.title ?? "Portfolio image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {p.title && (
                <div
                  className="pointer-events-none absolute inset-0 flex items-end
                             bg-gradient-to-t from-black/50 via-transparent to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-white text-sm md:text-base p-3">{p.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
// Note: Header and footer are now in the GlobalNav and LuxuryFooter components
