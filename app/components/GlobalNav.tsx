"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem =
  | { href: string; label: string }
  | { label: string; href?: string; children: Array<{ href: string; label: string }> };

const links: NavItem[] = [
  {
    label: "CREATIVE",
    href: "/creative", // <-- make parent clickable
    children: [
      { href: "/branding", label: "BRANDING" },
      { href: "/photography", label: "PHOTOGRAPHY" },
    ],
  },
  { href: "/mission", label: "MISSION" },
  { href: "/group", label: "GROUP" }, // ensure this path matches your page
  { href: "/portal", label: "PORTAL" },
];

export default function GlobalNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [creativeOpen, setCreativeOpen] = useState(false); // mobile accordion

  // close menu on route change
  useEffect(() => {
    setOpen(false);
    setCreativeOpen(false);
  }, [pathname]);

  // lock scroll when open
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("overflow-hidden", open);
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCreativeOpen(false);
      }
    };
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
        <ul className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
          {links.map((item) => {
            if ("children" in item) {
              return (
                <li key={item.label} className="relative group">
                  {/* Parent is now a Link (clickable to /creative) */}
                  <Link
                    href={item.href ?? "/creative"}
                    aria-haspopup="menu"
                    className="text-[10px] font-light tracking-[0.02em] leading-tight
                               hover:text-gray-300 transition-colors outline-none
                               focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown — black bg, white text, compact */}
                  <div
                    className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                               absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2
                               rounded-md bg-black text-white shadow-lg
                               ring-1 ring-white/10 border border-white/5"
                    role="menu"
                  >
                    <ul className="py-1">
                      {item.children.map((c) => {
                        const active = isActive(c.href);
                        return (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              role="menuitem"
                              className="relative block px-3 py-2 whitespace-nowrap
                                         text-[10px] font-light tracking-[0.02em] leading-tight
                                         hover:underline underline-offset-4 hover:opacity-80 transition"
                            >
                              {active && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-[3px] bg-white rounded-sm" />
                              )}
                              {c.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="text-[10px] font-light tracking-[0.02em] leading-tight
                             text-white hover:text-gray-300 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

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

      {/* drawer (mobile only) */}
      <div
        id="primary-menu"
        className={`sm:hidden fixed top-[var(--header-h)] inset-x-0 z-[1000] bg-black ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
          {/* CREATIVE accordion */}
          <div>
            <button
              onClick={() => setCreativeOpen((v) => !v)}
              className="w-full flex items-center justify-between py-2 text-base hover:text-gray-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              aria-expanded={creativeOpen}
              aria-controls="creative-submenu"
            >
              <span>CREATIVE</span>
              <span className={`transition ${creativeOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {creativeOpen && (
              <ul id="creative-submenu" className="pl-3 border-l border-white/10 space-y-1">
                <li>
                  <Link
                    href="/branding"
                    className={`block py-2 text-base hover:text-gray-300 ${isActive("/branding") ? "underline underline-offset-4" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photography"
                    className={`block py-2 text-base hover:text-gray-300 ${isActive("/photography") ? "underline underline-offset-4" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    Photography
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Flat links */}
          {links
            .filter((l): l is { href: string; label: string } => "href" in l)
            .filter((l) => l.label !== "CREATIVE")
            .map((l) => (
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
