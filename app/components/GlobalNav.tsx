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
    href: "/creative", // parent is clickable
    children: [
      { href: "/branding", label: "BRANDING" },
      { href: "/photography", label: "PHOTOGRAPHY" },
    ],
  },
  { href: "/mission", label: "MISSION" },
  { href: "/group", label: "GROUP" },
  { href: "/selected-work", label: "WORK" }, // added
  { href: "/portal", label: "PORTAL" },
];

export default function GlobalNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);              // mobile drawer
  const [creativeOpen, setCreativeOpen] = useState(false); // mobile accordion
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
    setCreativeOpen(false);
  }, [pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("overflow-hidden", open);
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // Close on Escape
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

  // Click outside to close (mobile)
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
      className="fixed top-0
