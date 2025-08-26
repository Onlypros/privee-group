// app/components/LuxuryFooter.tsx
import Link from "next/link";

export default function LuxuryFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-black text-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // iOS safe area
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* CREATIVE */}
          <div>
            <Link
              href="/creative"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              CREATIVE
            </Link>
            <ul className="mt-3 space-y-1.5 text-[9px] text-white/80">
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
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              MISSION
            </Link>
            <ul className="mt-3 space-y-1.5 text-[9px] text-white/80">
              {/* add sub-links later if needed */}
            </ul>
          </div>

          {/* OUR GROUP */}
          <div>
            <Link
              href="/group"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              OUR GROUP
            </Link>
            {/* sub-links later if needed */}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom copyright */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.14em] text-white/70">
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-full border border-white/50"
            />
            <span>© {year} THE PRIVÉE GROUP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
