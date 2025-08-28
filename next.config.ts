// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, 
  // ✅ Keeps your existing setting: allows debugging stack traces in prod

  /**
   * Add custom HTTP headers for performance.
   * - Fixes "Enable text compression" warning:
   *   Ensures that all Next.js build output (JS/CSS chunks) and text-based assets
   *   are compressed (Brotli or gzip) and cached properly.
   * - Fixes "Serve static assets with an efficient cache policy":
   *   Sets long-lived immutable caching so repeat visitors load instantly.
   */
  async headers() {
    return [
      {
        // Target Next.js build artifacts (hashed file names in /_next/static/)
        source: "/_next/static/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
            // ⬆️ Tells browser: cache for 1 year, never revalidate (files are hash-named)
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
            // ⬆️ Ensures correct delivery of Brotli vs gzip depending on client
          },
        ],
      },
      {
        // Generic rule for text-based assets you might serve (svg, xml, json, txt)
        source: "/:all*(svg|xml|json|txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
      {
        // Example: if you serve additional static content (like /creative/)
        // This can be duplicated/edited for any flagged path from Lighthouse
        source: "/creative/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
