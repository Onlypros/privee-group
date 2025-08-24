// app/creative/page.tsx
import Image from "next/image";
import Link from "next/link";

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
    <main className="min-h-screen flex flex-col">
      {/* header */}
      <header className="w-full px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold tracking-wide hover:opacity-70">
          PRIVEE GROUP
        </Link>
        <nav className="space-x-6 text-sm">
          <Link href="/creative" className="hover:opacity-70">Creative</Link>
          <Link href="/mission" className="hover:opacity-70">Mission</Link>
        </nav>
      </header>

      {/* gallery grid */}
      <section className="px-6 md:px-10 lg:px-16 pb-16">
        <h1 className="sr-only">Portfolio</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <li key={i} className="group relative overflow-hidden bg-neutral-100">
              <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={p.src}
                  alt={p.title ?? `Photo ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={i < 3}
                />
              </div>
              {p.title && (
                <div className="pointer-events-none absolute inset-0 flex items-end
                                bg-gradient-to-t from-black/50 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm md:text-base p-3">{p.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* footer */}
      <footer className="mt-auto w-full px-6 py-4 text-xs text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} Privee Group</span>
        <div className="space-x-4">
          <a href="#" className="hover:opacity-70">Instagram</a>
          <a href="#" className="hover:opacity-70">Email</a>
        </div>
      </footer>
    </main>
  );
}
