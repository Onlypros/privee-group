"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/creative", label: "CREATIVE" },
  { href: "/mission", label: "MISSION" },
  { href: "/thegroup", label: "OUR GROUP" },
  { href: "/portal", label: "PORTAL" },
];

export default function GlobalNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // lock scroll when open
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("overflow-hidden", open);
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[999] bg-black text-white"
    >
      {/* relative so the centered row can be absolutely centered */}
      <div className="relative mx-auto max-w-6xl px-6 h-[var(--header-h)] flex items-center">
        {/* Left: Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* Center: small, centered links (desktop only) */}
        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-[7px] font-light tracking-[0.02em] leading-tight text-white/70 transition-colors ${
                isActive(l.href) ? "text-white" : "hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Mobile hamburger (phones only) */}
        <button
          type="button"
          className="sm:hidden ml-auto inline-flex items-center justify-center p-2 text-sm hover:text-gray-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Backdrop (mobile only) */}
      <div
        className={`sm:hidden fixed inset-0 ${
          open ? "bg-black/50 z-[998]" : "pointer-events-none bg-transparent"
        } transition-opacity duration-200`}
        style={{ opacity: open ? 1 : 0 }}
        onClick={() => setOpen(false)}
      />

      {/* Drawer (mobile only) */}
      <div
        id="primary-menu"
        className={`sm:hidden fixed top-[var(--header-h)] inset-x-0 z-[1000] origin-top bg-black/95 backdrop-blur transition-transform duration-200 ${
          open ? "scale-y-100" : "scale-y-0 pointer-events-none"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
