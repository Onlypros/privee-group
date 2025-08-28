// app/creative/page.tsx
// Refactor notes:
// - Hero → <PageHeader topPad="roomy"> for desktop whitespace, safe on mobile.
// - Section spacing via <Section>, widths via <Container>.
// - Dividers via <Divider />.
// - “What We Do” → <FeatureGrid cols={2}> with <FeatureItem>s.
// - “Who It’s For” → <AudienceList>.
// - Final CTA → <RequestCollab>.

import { seo } from "@/app/lib/seo";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import { FeatureGrid, FeatureItem } from "../../components/FeatureGrid";
import AudienceList from "../../components/AudienceList";
import RequestCollab from "../../components/RequestCollab";

export const metadata = seo({
  title: "Creative — PRIVÉE GROUP",
  description:
    "The studio arm of The Privée Group. We shape visual identity and storytelling through branding and photography.",
  path: "/creative",
});

export default function CreativePage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      <PageHeader
        topPad="roomy"
        title={
          <>
            OUR <span className="font-serif italic">STUDIO</span>
          </>
        }
        lead={
          <>
            <p>The studio arm of The Privée Group.</p>
            <p>We shape visual identity and storytelling through branding and photography.</p>
          </>
        }
      />

      <Divider />

      {/* What We Do */}
      <Section padY="md" className="text-center">
        <Container size="md">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-wide">
            What We Do
          </h2>

          <FeatureGrid cols={2}>
            <FeatureItem title="Branding">
              Logos, identity systems, and brand materials that build recognition and clarity.
            </FeatureItem>

            <FeatureItem title="Photography">
              Editorial, portrait, lifestyle, and spaces. Visual work created for brands and projects.
            </FeatureItem>
          </FeatureGrid>
        </Container>
      </Section>

      <Divider />

      {/* Who It’s For */}
      <AudienceList
        title="Who It’s For"
        items={[
          "Founders building distinct brands",
          "Companies shaping lifestyle or real estate projects",
          "Creators and organizations working across culture and industry",
        ]}
      />

      <Divider />

      {/* Request Collaboration */}
      <RequestCollab />
    </main>
  );
}
