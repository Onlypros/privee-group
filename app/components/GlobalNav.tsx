// app/components/GlobalNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Data at module scope avoids re-alloc each render
 */
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

  // ─────────────────────────────────────────────────────────────
  // MOBILE STATE
  // ─────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false); // mobile submenu
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("overflow-hidden", open);
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // Click outside closes drawer on mobile
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const el = drawerRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Escape closes menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCreativeOpen(false);
        setDesktopOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close drawers when route changes
  useEffect(() => {
    setOpen(false);
    setCreativeOpen(false);
    setDesktopOpen(false);
  }, [pathname]);

  // Active helper
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  // ─────────────────────────────────────────────────────────────
  // DESKTOP DROPDOWN (single source of truth + linger)
  // - No pointer-events-none (ever)
  // - No onBlur on container (avoids focus race)
  // - Use pointer events enter/leave to manage a close timer
  // ─────────────────────────────────────────────────────────────
  const [desktopOpen, setDesktopOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = (ms = 1500) => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setDesktopOpen(false), ms);
  };

  // Clean timers on unmount
  useEffect(() => () => clearCloseTimer(), []);

  return (
    <nav
      id="site-nav"
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[999] bg-black text-white"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Header bar */}
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center">
        {/* Brand (left) */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* Desktop links (centered via flex instead of translate to avoid stacking context oddities) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-7">
            {links.map((item) => {
              if ("children" in item) {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    // Keep open while pointer hovers trigger or panel; close after small delay when leaving.
                    onPointerEnter={() => {
                      clearCloseTimer();
                      setDesktopOpen(true);
                    }}
                    onPointerLeave={() => {
                      scheduleClose(1500); // linger ms
                    }}
                  >
                    <button
                      type="button"
                      // Button for reliable a11y & focus; still navigable via submenu parent link below.
                      aria-expanded={desktopOpen}
                      aria-haspopup="menu"
                      className={`inline-flex items-center gap-1 px-3 text-[10px] font-light tracking-[0.02em] leading-tight transition-colors
                                  outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                                  ${isActive(item.href ?? "/creative") ? "underline underline-offset-4" : "hover:text-gray-300"}`}
                      onClick={() => {
                        // Toggle on click; users can also go to /creative from first item in submenu.
                        setDesktopOpen((v) => !v);
                      }}
                    >
                      {item.label}
                      <svg
                        className={`h-3 w-3 transition-transform ${desktopOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown panel (no pointer-events-none, higher z-index) */}
                    {desktopOpen && (
                      <div
                        role="menu"
                        className="absolute left-0 top-full mt-2 rounded-md bg-black text-white shadow-lg ring-1 ring-white/10 border border-white/5 w-max z-[1000]"
                        onPointerEnter={clearCloseTimer}
                        onPointerLeave={() => scheduleClose(400)} // shorter close after leaving panel feels snappy
                      >
                        <ul className="py-1">
                          {/* Provide direct parent link as first item so users can reach /creative */}
                          <li>
                            <Link
                              href={item.href ?? "/creative"}
                              prefetch={false}
                              role="menuitem"
                              className={`block px-3 py-2 whitespace-nowrap text-[9px] font-light tracking-[0.02em] leading-tight hover:underline underline-offset-4 hover:opacity-80 transition ${
                                isActive(item.href ?? "/creative") ? "opacity-90 underline underline-offset-4" : ""
                              }`}
                              onClick={() => setDesktopOpen(false)}
                            >
                              {item.label} HOME
                            </Link>
                          </li>

                          {item.children.map((c) => {
                            const active = isActive(c.href);
                            return (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  prefetch={false}
                                  role="menuitem"
                                  className={`relative block px-3 py-2 whitespace-nowrap text-[9px] font-light tracking-[0.02em] leading-tight hover:underline underline-offset-4 hover:opacity-80 transition ${
                                    active ? "opacity-90 underline underline-offset-4" : ""
                                  }`}
                                  onClick={() => setDesktopOpen(false)}
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
                    )}
                  </li>
                );
              }

              // Simple link (desktop)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
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
        </div>

        {/* Mobile hamburger (right) */}
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

      {/* Mobile backdrop (md+: hidden; never intercepts desktop clicks) */}
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
          {/* CREATIVE (Mobile): label navigates; caret toggles submenu */}
          <div>
            <div className="w-full flex items-stretch">
              <Link
                href="/creative"
                prefetch={false}
                onClick={() => {
                  setOpen(false);
                  setCreativeOpen(false);
                }}
                className="flex-1 py-2 text-base hover:text-gray-300
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                aria-current={isActive("/creative") ? "page" : undefined}
              >
                CREATIVE
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCreativeOpen((v) => !v);
                }}
                aria-expanded={creativeOpen}
                aria-controls="creative-submenu"
                aria-label={creativeOpen ? "Collapse Creative submenu" : "Expand Creative submenu"}
                className="shrink-0 px-3 py-2 text-base hover:text-gray-300
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
              >
                <span className={`inline-block transition ${creativeOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
            </div>

            {creativeOpen && (
              <ul id="creative-submenu" className="pl-0 border-l-0 space-y-1">
                <li>
                  <Link
                    href="/branding"
                    prefetch={false}
                    className={`block py-2 text-sm hover:text-gray-300 ${isActive("/branding") ? "underline underline-offset-4" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    BRANDING
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photography"
                    prefetch={false}
                    className={`block py-2 text-sm hover:text-gray-300 ${isActive("/photography") ? "underline underline-offset-4" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    PHOTOGRAPHY
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Remaining top-level links */}
          {links
            .filter((l): l is { href: string; label: string } => "href" in l)
            .filter((l) => l.label !== "CREATIVE")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
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
