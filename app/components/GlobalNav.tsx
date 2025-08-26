"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useNavMenu } from "./NavMenuContext";

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

  // include menuOffset (needed to position the dropdown)
  const { openMenu, openCreative, closeAll, setMenuOffset, menuOffset } = useNavMenu();

  // local mobile drawer state
  const [open, setOpen] = useState(false);
  const [creativeOpen, setCreativeOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // refs to measure alignment
  const barRef = useRef<HTMLDivElement | null>(null);             // centered container
  const creativeLinkRef = useRef<HTMLAnchorElement | null>(null); // CREATIVE link
  const rafRef = useRef<number | null>(null);

  // compute offset RELATIVE TO CONTAINER CENTER (not viewport)
  const updateMenuOffset = () => {
    const btn = creativeLinkRef.current;
    const parent = barRef.current;
    if (!btn || !parent) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const b = btn.getBoundingClientRect();
      const p = parent.getBoundingClientRect();
      const btnCenterX = b.left + b.width / 2;
      const parentCenterX = p.left + p.width / 2;
      setMenuOffset(btnCenterX - parentCenterX);
    });
  };

  // re-measure on resize
  useEffect(() => {
    const onResize = () => updateMenuOffset();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close on route change (both desktop + mobile)
  useEffect(() => {
    setOpen(false);
    setCreativeOpen(false);
    closeAll();
  }, [pathname, closeAll]);

  // Lock scroll when drawer open (mobile)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("overflow-hidden", open);
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // Close on Escape (both)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCreativeOpen(false);
        closeAll();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  // Click outside (mobile drawer)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!open) return;
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-[999] bg-black text-white isolate"
      style={{ height: "var(--header-h)", paddingTop: "env(safe-area-inset-top)" }}
      onKeyDown={(e) => e.key === "Escape" && closeAll()}
    >
      {/* Bar (centered container that the dropdown uses too) */}
      <div ref={barRef} className="relative mx-auto max-w-6xl px-6 h-full flex items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] hover:text-gray-300 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
        >
          PRIVÉE GROUP
        </Link>

        {/* Desktop links (centered) */}
        <ul className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-5">
          {links.map((item) => {
            if ("children" in item) {
              const active = isActive(item.href ?? "/creative");
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => { updateMenuOffset(); openCreative(); }}
                  onFocusCapture={() => { updateMenuOffset(); openCreative(); }}
                >
                  <Link
                    ref={creativeLinkRef}
                    href={item.href ?? "/creative"}
                    aria-haspopup="menu"
                    aria-expanded={openMenu === "creative"}
                    className={`text-[10px] font-light tracking-[0.02em] leading-tight transition-colors
                                outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded
                                ${active ? "underline underline-offset-4" : "hover:text-gray-300"}`}
                    onMouseEnter={updateMenuOffset}
                    onFocus={updateMenuOffset}
                  >
                    {item.label}
                  </Link>
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

        {/* Mobile Hamburger */}
        <div className="ml-auto sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-sm hover:text-gray-300 transition-colors
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

        {/* 🔽 CREATIVE dropdown panel (inside the SAME container) */}
        <div
          className={`absolute left-1/2 z-[1001] transition-opacity duration-100 ${
            openMenu === "creative" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            // directly below the barRef container (header bar), with a small gap
            top: "calc(100% + 8px)",
            // center to container, then shift by measured menuOffset
            transform: `translateX(calc(-50% + ${menuOffset}px))`,
          }}
          onMouseLeave={closeAll}
        >
          <div className="min-w-[200px] rounded-md bg-black text-white shadow-xl ring-1 ring-white/10 border border-white/10">
            <ul className="py-2 text-sm uppercase tracking-widest">
              <li>
                <Link className="block px-4 py-2 hover:bg-white/10" href="/branding" onClick={closeAll}>
                  Branding
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-white/10" href="/photography" onClick={closeAll}>
                  Photography
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`sm:hidden fixed inset-0 ${open ? "bg-black/50 z-[998]" : "pointer-events-none bg-transparent"} transition-opacity duration-200`}
        style={{ opacity: open ? 1 : 0 }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        id="primary-menu"
        ref={drawerRef}
        className={`sm:hidden fixed top-[calc(var(--header-h)+env(safe-area-inset-top))] inset-x-0 z-[1000] bg-black ${open ? "block" : "hidden"}`}
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
