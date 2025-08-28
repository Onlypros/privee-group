// app/components/RequestCollab.tsx
// Purpose: Reusable "Request Collaboration" call-to-action block.
// Why: Identical section repeated across Branding, Creative, Group, Mission, Photography pages.
// Usage: <RequestCollab />

import Container from "./Container";
import Section from "./Section";
import PortalButton from "./PortalButton";
import EmailCTA from "./EmailCTA";

export default function RequestCollab() {
  return (
    <Section padY="md" className="text-center">
      <Container size="sm">
        <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
          Request Collaboration
        </h2>

        <p className="mt-3 text-base md:text-lg leading-relaxed text-black">
          Collaborations are reviewed privately.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <PortalButton />
          <EmailCTA />
        </div>
      </Container>
    </Section>
  );
}
