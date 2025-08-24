// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <header className="w-full px-6 py-4 flex justify-between">
        <div className="font-semibold tracking-wide">PRIVEE GROUP</div>
        <nav className="space-x-6 text-sm">
          <Link href="/creative" className="hover:opacity-70">Creative</Link>
          <Link href="/mission" className="hover:opacity-70">Mission</Link>
        </nav>
      </header>

      <section className="flex-1 w-full flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">Privee Group</h1>
          <p className="mt-4 text-base md:text-lg text-neutral-600">
            Photography & creative direction
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/creative"
              className="px-5 py-2 border border-black hover:bg-black hover:text-white transition"
            >
              View Creative
            </Link>
            <Link href="/mission" className="px-5 py-2 underline underline-offset-4">
              Mission
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full px-6 py-4 text-xs text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} Privee Group</span>
        <div className="space-x-4">
          <a href="#" className="hover:opacity-70">Instagram</a>
          <a href="#" className="hover:opacity-70">Email</a>
        </div>
      </footer>
    </main>
  );
}
