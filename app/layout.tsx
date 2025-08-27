// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNav from "./components/GlobalNav";
import LuxuryFooter from "./components/LuxuryFooter";
import VHFix from "./components/VHFix";
import HeaderSizer from "./components/HeaderSizer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Privee Group",
  description: "Photography & Creative Direction",
  metadataBase: new URL("https://www.priveegroup.com"),
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Privee Group",
    description: "Photography & Creative Direction",
    url: "https://www.priveegroup.com",
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
    <html lang="en" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased h-full min-h-dvh bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen`}>
        {/* Mobile viewport height fixer (sets --vhpx) */}
        <VHFix />

        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        {/* Fixed global nav on top */}
        <GlobalNav />
        <HeaderSizer />

        {/* Render page content directly (no page-shell here) */}
        <main id="main" className="flex-1 flex flex-col">{children}</main>

        {/* Global footer */}
        <LuxuryFooter />
      </body>
    </html>
  );
}
