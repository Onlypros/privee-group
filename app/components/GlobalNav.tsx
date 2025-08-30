// app/components/GlobalNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Keep data at module scope (doesn't recreate on each render)
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

  /**
   * Mobile state only.
   * We delete desktop dropdown JS and use CSS :hover/:focus-within instead,
   * EXCEPT for a small linger enhancement on desktop (see below).
   */
  const [open, setOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false); // mobile submenu
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // ─────────────────────────────────────────────────────────────
  // DESKTOP LINGER (NEW)
  // WHAT: keep the desktop "CREATIVE" dropdown open for ~3s after hover leaves
  // WHY: prevents accidental closes when moving cursor toward submenu
  // HOW: small state machine + timeout; still preserves :hover/:focus for a11y
  // ─────────────────────────────────────────────────────────────
  const [desktopCreativeOpen, setDesktopCreativeOpen] = useState(false);
  const desktopHideTimer = useRef<number | null>(null);

  const clearDesktopHideTimer = () => {
    if (desktopHideTimer.current) {
      clearTimeout(desktopHideTimer.current);
      desktopHideTimer.current = null;
    }
  };

  const startDesktopHideTimer = () => {
    clearDesktopHideTimer();
    desktopHideTimer.current = window.setTimeout(() => {
      setDesktopCreativeOpen(false);
    }, 1500); // 1.5s linger — tweak here if you want a different duration
  };

  useEffect(() => {
    // Cleanup any pending timers on unmount
    return () => clearDesktopHideTimer();
  }, []);

  // Close drawers when route changes
  useEffect(() => {
    setOpen(false);
    setCreativeOpen(false);
    setDesktopCreativeOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("overflow-hidden", open);
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // Escape closes drawer on mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCreativeOpen(false);
        setDesktopCreativeOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
        {/* Brand (critical route) → keep prefetch default */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* Desktop links (centered) */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
          {links.map((item) => {
            if ("children" in item) {
              // ─────────────────────────────────────────────────────
              // DESKTOP DROPDOWN (CREATIVE) with 3s linger (NEW)
              // WHAT: CSS handles instant open on hover/focus; JS state holds it open after leave
              // WHY: more forgiving UX; keyboard still works via :focus-within
              // HOW: mouse enter/focus => open + clear timer; mouse leave/blur => start 3s close timer
              // ─────────────────────────────────────────────────────
              return (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => {
                    clearDesktopHideTimer();
                    setDesktopCreativeOpen(true);
                  }}
                  onMouseLeave={() => {
                    startDesktopHideTimer();
                  }}
                  onFocus={() => {
                    clearDesktopHideTimer();
                    setDesktopCreativeOpen(true);
                  }}
                  onBlur={() => {
                    startDesktopHideTimer();
                  }}
                >
                  <Link
                    href={item.href ?? "/creative"}
                    prefetch={false} // non-critical; reduce “unused JS”
                    aria-haspopup="menu"
                    className={`inline-flex items-center gap-1 px-3 text-[10px] font-light tracking-[0.02em] leading-tight transition-colors
                                outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                                ${isActive(item.href ?? "/creative") ? "underline underline-offset-4" : "hover:text-gray-300"}`}
                  >
                    {item.label}
                    <svg
                      className={`h-3 w-3 transition-transform ${
                        desktopCreativeOpen ? "rotate-180" : ""
                      } group-hover:rotate-180 group-focus-within:rotate-180`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>

                  <div
                    role="menu"
                    className={`pointer-events-none opacity-0 translate-y-1 transition
                               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                               group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                               absolute left-0 top-full mt-2 rounded-md bg-black text-white shadow-lg ring-1 ring-white/10 border border-white/5 w-max z-50
                               ${desktopCreativeOpen ? "opacity-100 translate-y-0 pointer-events-auto" : ""}`}
                  >
                    <ul className="py-1">
                      {item.children.map((c) => {
                        const active = isActive(c.href);
                        return (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              prefetch={false} // non-critical
                              role="menuitem"
                              className="relative inline-flex px-3 py-2 whitespace-nowrap text-[9px] font-light tracking-[0.02em] leading-tight hover:underline underline-offset-4 hover:opacity-80 transition"
                              onMouseEnter={() => clearDesktopHideTimer()}
                              onFocus={() => clearDesktopHideTimer()}
                              onClick={() => {
                                // navigating away → no linger needed
                                setDesktopCreativeOpen(false);
                              }}
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

            // Simple link (desktop)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false} // non-critical on initial view
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
          {/* ──────────────────────────────────────────────────────────────
             CREATIVE (Mobile) — label navigates, caret toggles submenu (NEW)
             WHAT: <Link> to /creative + sibling caret <button>
             WHY: Users can go to parent page directly; caret just expands
             HOW: preventDefault on caret; close drawer on navigation
             ────────────────────────────────────────────────────────────── */}
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
                  e.preventDefault(); // ensure caret never triggers navigation
                  setCreativeOpen((v) => !v); // toggle submenu visibility
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
                    onClick={() => setOpen(false)} // close drawer after navigation
                  >
                    BRANDING
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photography"
                    prefetch={false}
                    className={`block py-2 text-sm hover:text-gray-300 ${isActive("/photography") ? "underline underline-offset-4" : ""}`}
                    onClick={() => setOpen(false)} // close drawer after navigation
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
