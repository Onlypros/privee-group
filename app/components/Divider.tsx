// app/components/Divider.tsx
// Purpose: Standardize section dividers (the <hr> lines).
// Why: Prevents duplicating Tailwind classes across every page.
// Usage: <Divider size="sm" /> (default = sm / 4xl width)

import { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  /**
   * Width preset:
   * - "sm" → max-w-4xl (default)
   * - "md" → max-w-5xl
   * - "lg" → max-w-6xl
   * - "full" → full width (no max)
   */
  size?: "sm" | "md" | "lg" | "full";
};

const sizeMap = {
  sm: "max-w-4xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  full: "w-full",
};

export default function Divider({
  size = "sm",
  className = "",
  ...props
}: DividerProps) {
  return (
    <hr
      {...props}
      className={`mx-auto my-12 w-full ${sizeMap[size]} border-black/10 ${className}`}
    />
  );
}
