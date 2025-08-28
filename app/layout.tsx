// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GlobalNav from "./components/GlobalNav";       // server-first
import LuxuryFooter from "./components/LuxuryFooter"; // server-first
import VHFix from "./components/VHFix";               // "use client" inside
import HeaderSizer from "./components/HeaderSizer";   // "use client" inside

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="antialiased min-h-dvh bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        {/* tiny client helpers; hydrate after paint; keep them simple */}
        <VHFix />
        <HeaderSizer />

        {/* a11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        <GlobalNav />

        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>

        <LuxuryFooter />
      </body>
    </html>
  );
}
