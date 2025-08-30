// app/components/PageHeader.tsx
// Purpose: Standardize page hero headers (H1 + lead).
// Why: This block repeats on every page. Client often asks for "more whitespace."
// Usage: <PageHeader title="OUR MISSION" lead={<><p>…</p><p>…</p></>} topPad="roomy" />

import { ReactNode } from "react";
import Container from "./Container";
import Section from "./Section";

type PageHeaderProps = {
  /** Main title (can include spans for italics/serif styling) */
  title: ReactNode;
  /** Optional lead paragraphs (can be one or many <p>) */
  lead?: ReactNode;
  /** Controls whitespace above header */
  topPad?: "tight" | "normal" | "roomy";
  /** Text alignment (default center) */
  align?: "center" | "left";

  // NEW: Force the title to break into two lines on mobile only (and remain one line on desktop)
  // WHY: Long titles like "OUR PHOTOGRAPHY" overflow on small screens; this guarantees a clean wrap.
  // HOW: Inserts a <br className="md:hidden" /> between words (default after the first word).
  mobileBreak?: boolean;

  // NEW: When mobileBreak is active and the title is a plain string,
  // italicize everything after the first segment (matches "OUR <italic>PHOTOGRAPHY</italic>").
  // If you don’t want this style, just omit the prop (defaults to false).
  italicRest?: boolean;

  // NEW: Choose where to insert the mobile break (word index).
  // Example: title="OUR ARCHITECTURAL PHOTOGRAPHY" with mobileBreakAt=2 breaks after "OUR ARCHITECTURAL".
  // Default is 1 (after the first word).
  mobileBreakAt?: number;
};

const topPads = {
  tight: "pt-16 md:pt-20 pb-8",
  normal: "pt-20 md:pt-28 pb-10",
  roomy: "pt-20 md:pt-36 pb-10", // ← client luxury mode
};

export default function PageHeader({
  title,
  lead,
  topPad = "normal",
  align = "center",
  // NEW: default mobile break OFF so existing pages are unchanged
  mobileBreak = false,
  // NEW: default no italics unless explicitly requested
  italicRest = false,
  // NEW: default break after the first word (e.g., "OUR" | "PHOTOGRAPHY")
  mobileBreakAt = 1,
}: PageHeaderProps) {
  const alignCls = align === "center" ? "text-center" : "text-left";

  // NEW: Formatter for the title when we want an automatic mobile-only line break.
  // WHAT: If `title` is a string, we split it into two parts and insert a <br className="md:hidden" />.
  // WHY: Guarantees two lines on mobile, one line on desktop, without changing font sizes.
  // HOW: Keep H1 classes universal; add minimal span utilities:
  //      - md:whitespace-nowrap → force single line on desktop
  //      - break-normal → do NOT break inside words (prevents "PHOTOGRA / PHY")
  //      - [text-wrap:balance] → nicer line balance on supporting browsers
  const formattedTitle =
    mobileBreak && typeof title === "string"
      ? (() => {
          const words = title.trim().split(/\s+/);
          const idx = Math.max(1, Math.min(mobileBreakAt, words.length - 1)); // clamp between [1, last-1]
          const first = words.slice(0, idx).join(" ");
          const rest = words.slice(idx).join(" ");

          return (
            <span
              className="
                md:whitespace-nowrap
                break-normal [text-wrap:balance]
                leading-[1.05]
              "
            >
              {first} <br className="md:hidden" />
              {/* If italicRest is on, only the 'rest' segment gets serif/italic styling */}
              {rest ? (
                <span className={italicRest ? "font-serif italic" : undefined}>{rest}</span>
              ) : null}
            </span>
          );
        })()
      : title;

  return (
    <Section className={`${topPads[topPad]} ${alignCls}`}>
      <Container size="sm">
        {/* NOTE: We did NOT change H1 size classes below.
                 This preserves site-wide consistency so the client sees all H1s the same size. */}
        <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
          {formattedTitle}
        </h1>

        {lead && (
          <div className="mx-auto mt-4 max-w-3xl space-y-3 text-base md:text-lg leading-relaxed text-black">
            {lead}
          </div>
        )}
      </Container>
    </Section>
  );
}
