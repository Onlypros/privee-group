// app/components/LuxuryFooter.tsx
import Link from "next/link";

export default function LuxuryFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-0 bg-black text-white">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        {/* top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* CREATIVE */}
          <div>
            <Link
              href="/creative"
              className="text-[11px] tracking-[0.14em] text-white/90 hover:opacity-80"
            >
              CREATIVE
            </Link>
            <ul className="mt-3 space-y-2 text-[7px] text-white/80">
              <li>
                <Link href="/branding" className="hover:opacity-80">
                  BRANDING
                </Link>
              </li>
              <li>
                <Link href="/photography" className="hover:opacity-80">
                  PHOTOGRAPHY
                </Link>
              </li>
            </ul>
          </div>

          {/* MISSION */}
          <div>
            <Link
              href="/mission"
              className="text-[11px] tracking-[0.14em] text-white/90 hover:opacity-80"
            >
              MISSION
            </Link>
            <ul className="mt-3 space-y-2 text-[7px] text-white/80">
              {/* add sub-links later if needed */}
            </ul>
          </div>

          {/* OUR GROUP */}
          <div>
            <Link
              href="/about"
              className="text-[11px] tracking-[0.14em] text-white/90 hover:opacity-80"
            >
              OUR GROUP
            </Link>
            {/* add sub-links later if needed */}
          </div>
        </div>

        {/* bottom / copyright */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.14em] text-white/70">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-full border border-white/50"
            />
            <span>© {year} THE PRIVÉE GROUP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
