// app/components/ViewArchiveButton.tsx
// Purpose: Wrapper to keep existing imports intact, style via OutlinedButton.

import OutlinedButton from "./OutlinedButton";

type Props = { className?: string };

export default function ViewArchiveButton({ className = "" }: Props) {
  return (
    <OutlinedButton href="/selected-work" ariaLabel="View selected work archive" className={className}>
      VIEW ARCHIVE
    </OutlinedButton>
  );
}
