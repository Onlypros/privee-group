// app/components/GlobalNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem =
  | { href: string; label: string }
  | { label: string; href?: string; children: Array<{ href: string; label: string }> };

const links: NavItem[] = [
  {
    label: "CREATIVE",
    href: "/creative",
    children: [
      { href: "/branding", label: "BRANDING" },
      { href: "/photography", label: "PHOTOGRAPHY" },
    ],
  },
  { href: "/mission", label: "MISSION" },
  { href: "/group", label: "GROUP" },
  { href: "/portal", label: "PORTAL" },
];

export default function GlobalNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close + return focus
  function closeMenu() {
    setOpen(false);
    setCreativeOpen(false);
    menuButtonRef.current?.focus();
  }

  // Close on route change
  useEffect(() => {
    if (open || creativeOpen) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock <html> scroll
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Click outside
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const el = drawerRef.current;
      if (el && !el.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Toggle inert correctly
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    if (open) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <nav
      id="site-nav"
      aria-label="Primary"
      className="sticky top-0 z-[999] w-full bg-black text-white"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Header bar */}
      <div className="mx-auto max-w-6xl px-6 min-h-14 flex items-center gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="self-center text-sm font-semibold tracking-[0.18em] hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex flex-1 justify-center items-start gap-7">
          {links.map((item) => {
            if ("children" in item) {
              return (
                <li
                  key={item.label}
                  className="group grid grid-rows-[auto,0fr] transition-[grid-template-rows] duration-200 ease-out"
                >
                  <Link
                    href={item.href ?? "/creative"}
                    aria-haspopup="menu"
                    className={`inline-flex items-center gap-1 px-3 text-[11px] font-light tracking-[0.02em] leading-tight
                                text-white hover:text-neutral-200 transition-colors
                                outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                                ${isActive(item.href ?? "/creative") ? "underline underline-offset-4" : ""}`}
                  >
                    {item.label}
                    <svg
                      className="h-3 w-3 transition-transform group-hover:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>

                  {/* In-flow dropdown */}
                  <div className="overflow-hidden row-start-2">
                    <div
                      role="menu"
                      className="mt-2 rounded-md bg-black text-white shadow-lg ring-1 ring-white/10 border border-white/5
                                 max-h-0 group-hover:max-h-60 transition-[max-height] duration-200 ease-out"
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
                                           text-[11px] font-light tracking-[0.02em] leading-tight
                                           text-white bg-black
                                           hover:text-neutral-200 hover:underline underline-offset-4
                                           transition-colors"
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
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href} className="grid grid-rows-1">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-[11px] font-light tracking-[0.02em] leading-tight
                              text-white hover:text-neutral-200 transition-colors
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                              ${isActive(item.href) ? "underline underline-offset-4" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="ml-auto md:hidden self-center">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center p-2 text-sm hover:text-gray-300 transition-colors
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
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
      </div>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 ${open ? "bg-black/50 z-[998]" : "pointer-events-none bg-transparent"} transition-opacity duration-200`}
        style={{ opacity: open ? 1 : 0 }}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <div
        id="primary-menu"
        ref={drawerRef}
        aria-hidden={!open}
        className={`md:hidden fixed top-14 inset-x-0 z-[1000] bg-black ${open ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
          {/* CREATIVE accordion */}
          <div>
            <button
              onClick={() => setCreativeOpen((v) => !v)}
              aria-expanded={creativeOpen}
              aria-controls="creative-submenu"
              className="w-full flex items-center justify-between py-2 text-base hover:text-gray-300
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
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
                    onClick={closeMenu}
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photography"
                    className={`block py-2 text-base hover:text-gray-300 ${isActive("/photography") ? "underline underline-offset-4" : ""}`}
                    onClick={closeMenu}
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
                onClick={closeMenu}
                className="block py-2 text-base bg-black text-white hover:text-gray-300 transition-colors
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              >
                {l.label}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
