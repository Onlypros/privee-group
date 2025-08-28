// app/lib/seo.ts
// Purpose: Generate consistent Next.js Metadata objects with minimal boilerplate.

import type { Metadata } from "next";

/** ---- Site constants ---- */
const SITE = {
  name: "Privee Group",
  defaultDesc: "Photography & Creative Direction",
  twitterCard: "summary_large_image" as const,
};

/** Allowed OG types per Next.js Metadata typing */
type AllowedOGType =
  | "website"
  | "article"
  | "profile"
  | "book"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";

/** Reuse Next’s image type to stay future-proof */
type OGImages = NonNullable<NonNullable<Metadata["openGraph"]>["images"]>;

/** Input options for building page metadata. */
type SEOInput = {
  title: string;
  description?: string;
  /** Route path starting with "/", e.g. "/photography" */
  path?: `/${string}`;
  /** Defaults to "website" */
  type?: AllowedOGType;
  /** Optional OG/Twitter images (absolute URLs or objects) */
  images?: OGImages;
};

/** Build a Metadata object for a page. */
export function seo({
  title,
  description,
  path,
  type = "website",
  images,
}: SEOInput): Metadata {
  const desc = description ?? SITE.defaultDesc;

  return {
    title,
    description: desc,

    // If app/layout.tsx sets metadataBase (recommended), a relative canonical is fine.
    alternates: path ? { canonical: path } : undefined,

    openGraph: {
      title,
      description: desc,
      type,          // ✅ strictly typed union (no plain string)
      url: path,     // Next will resolve against metadataBase if set
      siteName: SITE.name,
      images,        // optional
    },

    twitter: {
      card: SITE.twitterCard,
      title,
      description: desc,
      images,        // mirror OG when provided
    },
  };
}
