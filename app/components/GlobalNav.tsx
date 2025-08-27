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

  useEffect(() => {
    setOpen(false);
    setCreativeOpen(false);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

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

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const el = drawerRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <nav
      id="site-nav"
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[999] bg-black text-white"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Header bar (fixed height) */}
      <div className="relative mx-auto max-w-6xl px-6 h-14 flex items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
          {links.map((item) => {
            if ("children" in item) {
              return (
                <li key={item.label} className="relative group">
                  <Link
                    href={item.href ?? "/creative"}
                    aria-haspopup="menu"
                    /* ADDED px-3 so the parent text column equals submenu item padding */
                    className={`inline-flex items-center gap-1 px-3 text-[10px] font-light tracking-[0.02em] leading-tight transition-colors
                                outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                                ${isActive(item.href ?? "/creative") ? "underline underline-offset-4" : "hover:text-gray-300"}`}
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

                  {/* Hover dropdown */}
                  <div
                    role="menu"
                    /* CHANGED positioning: left-0 top-full mt-2 (no centering transform) */
                    className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                               absolute left-0 top-full mt-2
                               rounded-md bg-black text-white shadow-lg
                               ring-1 ring-white/10 border border-white/5 min-w-[180px]"
                  >
                    <ul className="py-1">
                      {item.children.map((c) => {
                        const active = isActive(c.href);
                        return (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              role="menuitem"
                              /* submenu items already have px-3 → matches the parent link's px-3 */
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
                  className={`text-[10px] font-light tracking-[0.02em] leading-tight transition-colors
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                              ${isActive(item.href) ? "underline underline-offset-4" : "hover:text-gray-300"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="ml-auto md:hidden">
          <button
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
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        id="primary-menu"
        ref={drawerRef}
        aria-hidden={!open}
        className={`md:hidden fixed top-14 inset-x-0 z-[1000] bg-black ${open ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
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

          {links
            .filter((l): l is { href: string; label: string } => "href" in l)
            .filter((l) => l.label !== "CREATIVE")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
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