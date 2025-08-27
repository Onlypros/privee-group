// app/components/PortalButton.tsx
import Link from "next/link";

type Props = { className?: string };

export default function PortalButton({ className = "" }: Props) {
  return (
    <Link
      href="/portal"
      className={[
        "w-30 inline-flex items-center justify-center",
        "tracking-widest px-6 py-2 text-[10px] uppercase",
        "border border-black font-normal no-underline",
        "!bg-transparent !text-black",
        "transition-all duration-150",
        "hover:font-bold hover:bg-black hover:text-white",
        "hover:border-2", // <- thicker border on hover, stays black
        className,
      ].join(" ")}
      aria-label="Open the Portal page"
    >
      Portal
    </Link>
  );
}
