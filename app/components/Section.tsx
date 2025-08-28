// app/components/Section.tsx
// Purpose: Normalize vertical rhythm across pages (hero tops, regular sections).
// Why: Prevents duplicated Tailwind padding classes in every page.
// Usage: Wrap each major section in <Section padY="md">…</Section>

import { ReactNode } from "react";

type SectionProps = {
  /**
   * Vertical padding scale.
   * - "none"   → no extra padding (rare, e.g. full-bleed media)
   * - "sm"     → py-8 md:py-10 (tight spacing)
   * - "md"     → py-12 md:py-16 (default)
   * - "lg"     → py-16 md:py-24 (extra roomy)
   */
  padY?: "none" | "sm" | "md" | "lg";
  /** Extra classes to handle text alignment, background color, etc. */
  className?: string;
  /** Content inside the section. */
  children: ReactNode;
};

const pads = {
  none: "py-0",
  sm: "py-8 md:py-10",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
};

export default function Section({
  padY = "md", // default matches most of your sections
  className = "",
  children,
}: SectionProps) {
  return <section className={`${pads[padY]} ${className}`}>{children}</section>;
}
