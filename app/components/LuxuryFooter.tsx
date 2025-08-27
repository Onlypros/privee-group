// app/components/LuxuryFooter.tsx
import Link from "next/link";

export default function LuxuryFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-black text-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-3 pb-5">
        {/* Top flex row (always horizontal, even on mobile) */}
        <div className="flex justify-between items-start text-center sm:text-left">
          {/* CREATIVE (left) */}
          <div className="text-left">
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

          {/* MISSION (center) */}
          <div className="text-center">
            <Link
              href="/mission"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              MISSION
            </Link>
          </div>

          {/* GROUP (right) */}
          <div className="text-right">
            <Link
              href="/group"
              className="text-[11px] tracking-[0.14em] font-semibold text-white/90 hover:opacity-80"
            >
              GROUP
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-6 border-t border-white/10" />

        {/* Bottom copyright */}
        <div className="mt-2 flex justify-center">
          <div className="text-center text-[10px] tracking-[0.14em] text-white/70">
            © {year} PRIVÉE GROUP
          </div>
        </div>
      </div>
    </footer>
  );
}
