// app/components/LuxuryFooter.tsx
import Link from "next/link";

export default function LuxuryFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-black text-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }} // iOS safe area
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-3 pb-5">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* CREATIVE */}
          <div className="sm:justify-self-start">
            <Link
              href="/creative"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              CREATIVE
            </Link>
            <ul className="mt-2 space-y-1 text-[9px] text-white/80">
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
          <div className="sm:justify-self-center">
            <Link
              href="/mission"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              MISSION
            </Link>
          </div>

          {/* OUR GROUP */}
          <div className="sm:justify-self-end">
            <Link
              href="/group"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              OUR GROUP
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 border-t border-white/10" />

        {/* Bottom copyright */}
        <div className="mt-2 flex justify-center">
          <div className="text-center text-[10px] tracking-[0.14em] text-white/70">
            © {year} THE PRIVÉE GROUP
          </div>
        </div>
      </div>
    </footer>
  );
}
