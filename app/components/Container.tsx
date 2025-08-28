// app/components/Container.tsx
// Purpose: Centralize page/content width and horizontal gutters.
// Why: Change one place → update alignment across all pages/sections.
// Usage: Wrap page sections/content to keep consistent columns.

import { ReactNode } from "react";

type ContainerProps = {
  /**
   * Visual width preset.
   * - "sm"  → max-w-4xl   (used for tight text blocks / dividers)
   * - "md"  → max-w-5xl   (used for most feature grids)
   * - "lg"  → max-w-6xl   (default shell width)
   */
  size?: "sm" | "md" | "lg";
  /** Extra classes for one-off spacing tweaks (rarely needed). */
  className?: string;
  /** Content to render inside the centered container. */
  children: ReactNode;
};

const sizeMap = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
};

export default function Container({
  size = "lg",          // Default matches most outer shells in your pages
  className = "",
  children,
}: ContainerProps) {
  // mx-auto → centers; px-6 → page gutter; sizeMap[size] → consistent column width.
  return (
    <div className={`mx-auto w-full ${sizeMap[size]} px-6 ${className}`}>
      {children}
    </div>
  );
}
