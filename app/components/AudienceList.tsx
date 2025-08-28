// app/components/AudienceList.tsx
// Purpose: Standardize "Who It’s For" sections (heading + bullet list).
// Why: Same structure repeats on multiple pages.
// Usage: <AudienceList title="Who It’s For" items={[…]} />

import Container from "./Container";
import Section from "./Section";

type AudienceListProps = {
  /** Heading above the list (usually "Who It’s For"). */
  title: string;
  /** List of audience items. */
  items: string[];
};

export default function AudienceList({ title, items }: AudienceListProps) {
  return (
    <Section padY="md" className="text-center">
      <Container size="sm">
        <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
          {title}
        </h2>

        <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
