// app/components/OutlinedButton.tsx
// Purpose: One source of truth for the outlined button style.
// Why: PortalButton, ViewArchiveButton, PortalLoginButton all duplicate classes.
// Usage: <OutlinedButton href="/portal">PORTAL</OutlinedButton>
//        <OutlinedButton onClick={handleClick}>EMAIL</OutlinedButton>

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type OutlinedButtonProps = {
  /** Text or elements inside the button */
  children: ReactNode;
  /** Destination link (optional). If omitted, renders a <button>. */
  href?: string;
  /** Optional aria-label for accessibility */
  ariaLabel?: string;
  /** Extra classes for one-off tweaks */
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function OutlinedButton({
  children,
  href,
  ariaLabel,
  className = "",
  ...props
}: OutlinedButtonProps) {
  const base =
    [
      "inline-flex items-center justify-center select-none",
      "uppercase tracking-widest no-underline",
      "border border-black text-black bg-transparent rounded-none",
      "px-5 py-2 text-[11px] md:text-sm",
      "min-h-[44px] min-w-[112px]",
      "transition-all duration-150",
      "hover:font-semibold hover:border-2", // thicker border + bold
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
      "active:opacity-90",
      className,
    ].join(" ");

  if (href) {
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
}
