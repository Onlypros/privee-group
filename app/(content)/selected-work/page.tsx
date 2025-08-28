// app/(content)/selected-work/page.tsx
// Refactor notes:
// - Hero → <PageHeader topPad="roomy">.
// - Divider → <Divider />.
// - Grid → <ImageGrid images={[…]}> (first image priority; lounge2 keeps object position).

import { seo } from "@/app/lib/seo";
import PageHeader from "../../components/PageHeader";
import Divider from "../../components/Divider";
import Section from "../../components/Section";
import Container from "../../components/Container";
import ImageGrid, { type GridImage } from "../../components/ImageGrid";

export const metadata = seo({
  title: "Selected Work — PRIVÉE GROUP",
  description:
    "A curated selection of photographic work from Privée Group — editorial, portraiture, lifestyle, movement, and environments.",
  path: "/selected-work",
});

const IMAGES: GridImage[] = [
  {
    src: "/creative/hallway-1152.jpg",
    alt: "Long hotel hallway with dramatic lighting and a figure centered",
    priority: true, // LCP
  },
  {
    src: "/creative/girl-1152.jpg",
    alt: "Portrait in soft window light, subject facing camera",
  },
  {
    src: "/creative/lounge2-1152.jpg",
    alt: "Lounge interior with warm ambient lighting and velvet seating",
    objectPos: "object-[50%_40%]",
  },
  {
    src: "/creative/puppy-1152.jpg",
    alt: "Small puppy looking up while sitting on lounge seating",
  },
  {
    src: "/creative/lobby-1152.jpg",
    alt: "Grand lobby with chandelier and plush seating",
  },
  {
    src: "/creative/girl2-1152.jpg",
    alt: "Candid portrait with motion blur in dim light",
  },
];

export default function SelectedWorkPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen">
      <PageHeader
        topPad="roomy"
        title={<>SELECTED WORK</>}
        lead={<p>A curated selection of photographic work.</p>}
      />

      <Divider />

      <Section padY="md">
        <Container className="max-w-6xl">
          <ImageGrid images={IMAGES} />
        </Container>
      </Section>
    </main>
  );
}
