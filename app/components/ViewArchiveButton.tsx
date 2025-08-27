// app/components/ViewArchiveButton.tsx
import Link from "next/link";

type Props = { className?: string };

export default function ViewArchiveButton({ className = "" }: Props) {
  const outlined =
    [
      "inline-flex items-center justify-center select-none",
      "uppercase tracking-widest no-underline",
      "border border-black text-black bg-transparent rounded-none",
      "px-5 py-2 text-[11px] md:text-sm",
      "min-h-[44px] min-w-[112px]",
      "transition-all duration-150",
      "hover:font-semibold hover:border-2", // thicker border + bold only
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
      "active:opacity-90",
      className,
    ].join(" ");

  return (
    <Link
      href="/selected-work"
      className={outlined}
      aria-label="View selected work archive"
    >
      VIEW ARCHIVE
    </Link>
  );
}
