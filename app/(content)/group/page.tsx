// app/group/page.tsx
// Refactor notes:
// - Hero → <PageHeader topPad="roomy">.
// - Dividers → <Divider />.
// - “What We Do” → <FeatureGrid cols={3}>.
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
  title: "Our Group — PRIVÉE GROUP",
  description:
    "The Privée Group is a cultural house for creative work, mission, and collaboration.",
  path: "/group",
  type: "website",
});

export default function GroupPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      <PageHeader
        topPad="roomy"
        title={
          <>
            OUR <span className="font-serif italic normal-case">GROUP</span>
          </>
        }
        lead={
          <>
            <p>
              The Privée Group is a cultural house for creative work, mission, and collaboration.
            </p>
            <p>
              We work with founders, organizations, and investors building with clarity, purpose, and long-term value.
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
            <FeatureItem title="Creative">
              Branding, photography, and cultural work led through our studio.
            </FeatureItem>

            <FeatureItem title="Mission">
              Partnerships with individuals and organizations serving people and purpose.
            </FeatureItem>

            <FeatureItem title="Collaborations">
              Selective ventures with founders and investors aligned with long-term vision.
            </FeatureItem>
          </FeatureGrid>
        </Container>
      </Section>

      <Divider />

      {/* Who It’s For */}
      <AudienceList
        title="Who It’s For"
        items={[
          "Founders shaping meaningful companies",
          "Creators and teams building culture through design, art, or media",
          "Organizations rooted in purpose and community impact",
          "Investors seeking curated, long-term collaborations",
        ]}
      />

      <Divider />

      {/* Request Collaboration */}
      <RequestCollab />

      <div className="h-12" />
    </main>
  );
}
