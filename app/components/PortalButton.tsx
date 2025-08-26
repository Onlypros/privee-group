// app/components/PortalButton.tsx
import Link from "next/link";

type Props = { className?: string };

export default function PortalButton({ className = "" }: Props) {
  return (
    <Link
      href="/portal"
      className={[
        "w-30 inline-flex items-center justify-center",
        "tracking-widest border-1 border-black px-6 py-2 text-[10px] uppercase",
        "transition no-underline hover:no-underline",
        "font-normal hover:font-bold", // 🔑 normal → bold on hover

        "!bg-transparent !text-black",
        "hover:!bg-black hover:!text-white",

        className,
      ].join(" ")}
      aria-label="Open the Portal page"
    >
      Portal
    </Link>
  );
}
