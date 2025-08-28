// app/components/FeatureGrid.tsx
// Purpose: Reusable grid for "What We Do" style sections.
// Why: Removes duplicated grid + item styles across pages.
// Usage: <FeatureGrid cols={3}><FeatureItem … /></FeatureGrid>

import { ReactNode } from "react";

type FeatureGridProps = {
  /** Number of columns on desktop (default 3). */
  cols?: 2 | 3;
  /** Items inside the grid (use FeatureItem). */
  children: ReactNode;
  /** Extra classes for layout tweaks. */
  className?: string;
};

export function FeatureGrid({ cols = 3, children, className = "" }: FeatureGridProps) {
  const colCls = cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div className={`mt-8 grid grid-cols-1 gap-10 ${colCls} md:gap-12 text-sm md:text-base leading-relaxed ${className}`}>
      {children}
    </div>
  );
}

// ---------------------------------------------

type FeatureItemProps = {
  /** Small uppercase heading. */
  title: string;
  /** Supporting text. */
  children: ReactNode;
  /** Optional column span (useful for wide items like Photography "Movement"). */
  colSpan?: number;
};

export function FeatureItem({ title, children, colSpan }: FeatureItemProps) {
  return (
    <div
      className={`flex flex-col items-center ${colSpan ? `md:col-span-${colSpan}` : ""}`}
    >
      <h3 className="text-sm md:text-base font-semibold tracking-wide uppercase">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-[42ch]">{children}</p>
    </div>
  );
}
