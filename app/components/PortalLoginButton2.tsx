// app/components/PortalLoginButton.tsx
// Purpose: Wrapper preserving prefetch={false} behavior for private portal.
// Why: Avoids unintended auto-login/page prefetch while using shared styles.

import Link from "next/link";
import OutlinedButton from "./OutlinedButton";

type Props = { className?: string };

export default function PortalLoginButton({ className = "" }: Props) {
  // Note: OutlinedButton doesn't expose Link props like `prefetch`,
  // so we compose it here to keep prefetch={false}.
  return (
    <Link
      href="/portal/private"
      prefetch={false}               // ← preserved behavior
      aria-label="Enter private portal"
      className={className}
    >
      <OutlinedButton ariaLabel="Enter private portal">ENTER</OutlinedButton>
    </Link>
  );
}
