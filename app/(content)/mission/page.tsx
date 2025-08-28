// app/(content)/mission/page.tsx
// Refactor notes:
// - Hero → <PageHeader topPad="roomy"> (desktop whitespace, safe on mobile).
// - Dividers → <Divider /> (keeps the original max-w-4xl look).
// - “What We Do” → <FeatureGrid cols={3}>.
// - “Who It’s For” → <AudienceList>.
// - “Our Belief” → <AudienceQuote>.
// - Final CTA → <RequestCollab>.

import { seo } from "@/app/lib/seo";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import { FeatureGrid, FeatureItem } from "../../components/FeatureGrid";
import AudienceList from "../../components/AudienceList";
import AudienceQuote from "../../components/AudienceQuote";
import RequestCollab from "../../components/RequestCollab";

export const metadata = seo({
  title: "Mission — PRIVÉE GROUP",
  description:
    "What Privée Missions is, what we believe, the projects we take on, and why it matters.",
  path: "/mission",
});

export default function MissionPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <PageHeader
        topPad="roomy"
        title={
          <>
            OUR <span className="font-serif italic">MISSION</span>
          </>
        }
        lead={
          <>
            <p>
              Creative production and brand collaboration in service of mission-led work.
            </p>
            <p>
              Privée Missions partners with missionaries, founders, and purpose-driven
              ventures to support stories and projects that reflect responsibility,
              intention, and cultural depth.
            </p>
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

          <FeatureGrid cols={3}>
            <FeatureItem title="Partnerships">
              We collaborate with individuals and organizations doing work that serves
              people, communities, and purpose.
            </FeatureItem>

            <FeatureItem title="Storytelling">
              We help clarify visual direction, refine brand tone, and support media
              that communicates mission with authenticity and care.
            </FeatureItem>

            <FeatureItem title="Projects">
              We develop creative projects and collaborations with ventures rooted in
              sustainability, healing, and social impact.
            </FeatureItem>
          </FeatureGrid>
        </Container>
      </Section>

      <Divider />

      {/* Who It's For */}
      <AudienceList
        title="Who It’s For"
        items={[
          "Missionaries",
          "Faith-rooted and values-based founders",
          "Eco-luxury and purpose-driven brands",
          "Projects that serve communities, not trends",
        ]}
      />

      <Divider />

      {/* Our Belief */}
      <AudienceQuote title="Our Belief">
        We are here for the mission, not the noise.
      </AudienceQuote>

      <Divider />

      {/* Request Collaboration */}
      <RequestCollab />

      <div className="h-12" />
    </main>
  );
}
