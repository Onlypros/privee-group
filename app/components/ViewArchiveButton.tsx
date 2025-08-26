// app/components/ViewArchiveButton.tsx
import Link from "next/link";

type Props = { className?: string };

export default function ViewArchiveButton({ className = "" }: Props) {
  return (
    <Link
      href="/selected-work"
      className={[
        "inline-flex items-center justify-center",
        "tracking-widest font-normal hover:font-bold",
        "border-1 border-black px-6 py-2 text-[10px] uppercase",
        "transition no-underline hover:no-underline",
        "!bg-transparent !text-black",
        "hover:!bg-black hover:!text-white",
        className,
      ].join(" ")}
      aria-label="View selected work archive"
    >
      View Archive
    </Link>
  );
}
