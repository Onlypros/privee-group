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
}: PageHeaderProps) {
  const alignCls = align === "center" ? "text-center" : "text-left";

  return (
    <Section className={`${topPads[topPad]} ${alignCls}`}>
      <Container size="sm">
        <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
          {title}
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
