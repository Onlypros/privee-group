// app/components/PortalLoginButton.tsx
import Link from "next/link";

type Props = { className?: string };

export default function PortalLoginButton({ className = "" }: Props) {
  return (
    <Link
      href="/portal/private"
      className={[
        "inline-flex items-center justify-center",
        "tracking-widest font-normal hover:font-bold",
        "border-1 border-black px-6 py-2 text-[10px] md:text-sm uppercase",
        "transition no-underline hover:no-underline",
        "!bg-transparent !text-black",
        "hover:!bg-black hover:!text-white",
        className,
      ].join(" ")}
      aria-label="Enter partner portal (login required)"
    >
      Enter Portal (login required)
    </Link>
  );
}
