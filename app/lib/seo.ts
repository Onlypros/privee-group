// app/lib/seo.ts
// Purpose: Generate consistent Next.js Metadata objects with minimal boilerplate.
// Why: Your pages repeat the same structure (title/description/openGraph/url).
// Usage: export const metadata = seo({ title: "...", description: "...", path: "/route" });

import type { Metadata } from "next";

/**
 * Site defaults that rarely change.
 * NOTE: metadataBase is already set in app/layout.tsx → we don't repeat it here.
 */
const SITE = {
  name: "Privee Group",
  defaultDesc: "Photography & Creative Direction",
  twitterCard: "summary_large_image" as const,
};

/**
 * Input options for building page metadata.
 * - title: Page title (required)
 * - description: Page description (recommended)
 * - path: Route path starting with "/" (recommended for canonical/og:url)
 * - type: OpenGraph type (defaults to "website")
 */
type SEOInput = {
  title: string;
  description?: string;
  path?: `/${string}`; // e.g., "/photography"
  type?: "website" | "article" | "profile" | "book" | "music.song" | string;
  // If/when you add OG images, you can extend this with: images?: Metadata["openGraph"]["images"];
};

/**
 * Build a Metadata object for a page. Safe defaults; easy to extend later.
 */
export function seo({ title, description, path, type = "website" }: SEOInput): Metadata {
  // Prefer the page description; fall back to a sane site default.
  const desc = description ?? SITE.defaultDesc;

  return {
    title,
    description: desc,
    // Canonical URL (relative). Next merges with metadataBase from layout.tsx
    alternates: path
      ? { canonical: path }
      : undefined,

    openGraph: {
      title,
      description: desc,
      type,
      url: path, // relative is fine; Next will resolve with metadataBase
      siteName: SITE.name,
      // images: images, // add when you have OG images
    },

    twitter: {
      card: SITE.twitterCard,
      title,
      description: desc,
      // images: images, // mirror OG when added
    },
  };
}
