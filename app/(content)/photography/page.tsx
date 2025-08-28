// app/(content)/photography/page.tsx
// Refactor notes:
// - Hero → <PageHeader topPad="roomy">.
// - Dividers → <Divider /> everywhere.
// - “What We Do” → <FeatureGrid cols={2}> (with Movement spanning 2 cols).
// - Archive CTA kept as its own short section, using existing ViewArchiveButton.
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
import ViewArchiveButton from "../../components/ViewArchiveButton";

export const metadata = seo({
  title: "Photography — PRIVÉE GROUP",
  description:
    "PRIVÉE GROUP documents culture and identity through images — spanning editorial, portraiture, lifestyle, movement, and environments.",
  path: "/photography",
});

export default function PhotographyPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      {/* Hero */}
      <PageHeader
        topPad="roomy"
        title={
          <>
            OUR <span className="font-serif italic">PHOTOGRAPHY</span>
          </>
        }
        lead={
          <>
            <p>PRIVÉE GROUP documents culture and identity through images.</p>
            <p>Work spanning editorial, portraiture, lifestyle, movement, and environments.</p>
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
            {/* Editorial */}
            <FeatureItem title="Editorial">
              Campaigns, publications, cultural projects.
            </FeatureItem>

            {/* Portraiture */}
            <FeatureItem title="Portraiture">
              Individuals, groups, teams.
            </FeatureItem>

            {/* Lifestyle & Spaces */}
            <FeatureItem title="Lifestyle &amp; Spaces">
              Design, interiors, environments.
            </FeatureItem>

            {/* Pets */}
            <FeatureItem title="Pets">
              Pets captured for personal keepsakes and brand work.
            </FeatureItem>

            {/* Movement (full width on desktop) */}
            <FeatureItem title="Movement" colSpan={2}>
              Dance, fitness, martial arts.
            </FeatureItem>
          </FeatureGrid>
        </Container>
      </Section>

      <Divider />

      {/* Archive Section */}
      <Section padY="md" className="text-center">
        <Container size="sm">
          <p className="text-base md:text-lg leading-relaxed text-black">
            Selected work is available in our archive.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <ViewArchiveButton />
          </div>
        </Container>
      </Section>

      <Divider />

      {/* Who It’s For */}
      <AudienceList
        title="Who It’s For"
        items={[
          "Founders and brands building distinct visual presence",
          "Developers shaping lifestyle, real estate, or design projects",
          "Creators, performers, and cultural projects",
          "Individuals seeking refined portraiture or personal commissions",
        ]}
      />

      <Divider />

      {/* Request Collaboration */}
      <RequestCollab />

      <div className="h-12" />
    </main>
  );
}
