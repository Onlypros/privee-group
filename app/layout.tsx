// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Server Components: render immediately as HTML (no client flag here)
import GlobalNav from "./components/GlobalNav";
import LuxuryFooter from "./components/LuxuryFooter";

// Tiny utilities that contain "use client" internally.
// Keeping them as direct imports is fine; they hydrate after paint.
import VHFix from "./components/VHFix";
import HeaderSizer from "./components/HeaderSizer";

/**
 * Font: use next/font with:
 * - display: "swap"  → paint immediately with system fallback (prevents LCP render delay)
 * - preload: true    → request font early to shorten the swap window
 * - variable         → we bind a CSS var; the actual fallback stack lives in globals.css
 *
 * NOTE: We deliberately do NOT use `inter.className` on <body>. Using the variable
 * plus a fallback stack in CSS guarantees immediate text paint.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,              // ⬅️ important for LCP on text
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.priveegroup.co"),
  title: "Privee Group",
  description: "Photography & Creative Direction",
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Privee Group",
    description: "Photography & Creative Direction",
    url: "https://www.priveegroup.co",
    siteName: "Privee Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privee Group",
    description: "Photography & Creative Direction",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /**
     * Put ONLY the font variable on <html>. Tailwind/CSS reads it and provides a
     * real fallback stack (see globals.css), so text can paint instantly and Inter
     * swaps in when ready.
     */
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      {/**
       * Keep <body> lean. `min-h-dvh` is the modern viewport unit, so we avoid
       * double height utilities. Colors use your CSS tokens.
       */}
      <body className="antialiased min-h-dvh bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        {/**
         * Client helpers:
         * - VHFix sets --vhpx for mobile 100vh quirks.
         * - HeaderSizer measures header height into a CSS var.
         * They are tiny and mount after hydration; no need for dynamic(..., { ssr:false })
         * inside the server layout (that would error). This is the safe, simple pattern.
         */}
        <VHFix />
        <HeaderSizer />

        {/** Skip link for keyboard users (a11y) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        {/**
         * Server-rendered nav/footer: immediate HTML, interactivity hydrates after paint.
         * If any nav links are non-critical, you can set prefetch={false} on them inside
         * the component to reduce unused JS on initial route.
         */}
        <GlobalNav />

        {/** Landmark for main content; keeps the layout flexible */}
        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>

        <LuxuryFooter />
      </body>
    </html>
  );
}
