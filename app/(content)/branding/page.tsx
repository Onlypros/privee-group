// app/branding/page.tsx
// Refactor notes:
// - Replaced repeated hero markup with <PageHeader topPad="roomy"> to satisfy client whitespace on desktop while keeping mobile sane.
// - Centralized section spacing via <Section> and widths via <Container>.
// - Standardized dividers via <Divider />.
// - “What We Do” converted to <FeatureGrid>/<FeatureItem> (3 columns).
// - “Who It’s For” converted to <AudienceList>.
// - Final CTA converted to <RequestCollab> (uses existing PortalButton + EmailCTA under the hood).
// - Kept the trailing <div className="h-12" /> spacer to maintain exact page rhythm.

import { seo } from "@/app/lib/seo";
import PageHeader from "../../components/PageHeader";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Divider from "../../components/Divider";
import { FeatureGrid, FeatureItem } from "../../components/FeatureGrid";
import AudienceList from "../../components/AudienceList";
import RequestCollab from "../../components/RequestCollab";

export const metadata = seo({
  title: "Branding — PRIVÉE GROUP",
  description:
    "Brand identity systems, creative direction, and guidelines that make your story feel inevitable.",
  path: "/branding",
});

export default function BrandingPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero header: title + lead, with desktop-luxury spacing */}
      <PageHeader
        topPad="roomy" // desktop pt-36, mobile remains safe
        title={
          <>
            OUR <span className="font-serif italic">BRANDING</span>
          </>
        }
        lead={
          <>
            <p>
              Branding defined by precision, clarity, and consistency across digital and print.
            </p>
            <p>
              Visual identity, logos, and print design for founders and teams
              <span className="hidden md:inline"><br /></span>
              who value clarity, restraint, and long-term brand equity.
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
            <FeatureItem title="Visual Identity">
              Logos, brand marks, color systems, and typography that define a brand’s look and recognition.
            </FeatureItem>

            <FeatureItem title="Print Collateral">
              Business cards, stationery, packaging, and other crafted brand artifacts.
            </FeatureItem>

            <FeatureItem title="Digital Assets">
              Social profiles, templates, and on-brand systems that keep your presence consistent online.
            </FeatureItem>
          </FeatureGrid>
        </Container>
      </Section>

      <Divider />

      {/* Who It’s For */}
      <AudienceList
        title="Who It’s For"
        items={[
          "Founders building long-term brands",
          "Companies seeking refined visual identity",
          "Teams needing logos, wordmarks, and brand assets",
          "Partners requiring luxury print collateral",
        ]}
      />

      <Divider />

      {/* Request Collaboration */}
      <RequestCollab />

      {/* Preserve tiny end spacer from original page */}
      <div className="h-12" />
    </main>
  );
}
