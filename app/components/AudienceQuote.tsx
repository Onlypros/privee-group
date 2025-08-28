// app/components/AudienceQuote.tsx
// Purpose: Render a titled block with italicized text (e.g., "Our Belief").
// Why: Standardizes quote/statement style, currently used on Mission page.
// Usage: <AudienceQuote title="Our Belief">We are here for the mission…</AudienceQuote>

import Container from "./Container";
import Section from "./Section";

type AudienceQuoteProps = {
  /** Section title (e.g. "Our Belief"). */
  title: string;
  /** The quote or statement text. */
  children: string;
};

export default function AudienceQuote({ title, children }: AudienceQuoteProps) {
  return (
    <Section padY="md" className="text-center">
      <Container size="sm">
        <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
          {title}
        </h2>
        <div className="mx-auto mt-4 max-w-3xl italic">
          <p className="text-base md:text-lg leading-relaxed text-black">
            {children}
          </p>
        </div>
      </Container>
    </Section>
  );
}
