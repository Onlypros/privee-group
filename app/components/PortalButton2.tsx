// app/components/PortalButton.tsx
// Purpose: Backward-compatible wrapper around OutlinedButton.
// Why: Keep existing imports working while centralizing style in OutlinedButton.

import OutlinedButton from "./OutlinedButton";

type Props = { className?: string };

export default function PortalButton({ className = "" }: Props) {
  return (
    <OutlinedButton href="/portal" ariaLabel="Open the Portal page" className={className}>
      PORTAL
    </OutlinedButton>
  );
}
