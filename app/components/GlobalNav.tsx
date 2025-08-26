"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/creative", label: "CREATIVE" },
  { href: "/mission",  label: "MISSION" },
  { href: "/group",    label: "GROUP" },   // ensure this path matches your page
  { href: "/portal",   label: "PORTAL" },
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
    <nav aria-label="Primary" className="fixed top-0 inset-x-0 z-[999] bg-black text-white isolate">
      {/* bar */}
      <div className="relative mx-auto max-w-6xl px-6 h-[var(--header-h)] flex items-center">
        {/* brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* desktop center links */}
        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className="text-[10px] font-light tracking-[0.02em] leading-tight
                         text-white hover:text-gray-300 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* hamburger (mobile only) */}
        <button
          type="button"
          className="sm:hidden ml-auto inline-flex items-center justify-center p-2 text-sm hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* backdrop (mobile only) */}
      <div
        className={`sm:hidden fixed inset-0 ${open ? "bg-black/50 z-[998]" : "pointer-events-none bg-transparent"} transition-opacity duration-200`}
        style={{ opacity: open ? 1 : 0 }}
        onClick={() => setOpen(false)}
      />

      {/* drawer (mobile only) — NO transforms/opacity/blur; always solid bg */}
      <div
        id="primary-menu"
        className={`sm:hidden fixed top-[var(--header-h)] inset-x-0 z-[1000] bg-black ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-base bg-black text-white hover:text-gray-300 transition-colors
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
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
