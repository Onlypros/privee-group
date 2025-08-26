// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GlobalNav from "./components/GlobalNav";
import LuxuryFooter from "./components/LuxuryFooter";
import VHFix from "./components/VHFix";

// ✅ Keep: provides shared state for the dropdown
import { NavMenuProvider } from "./components/NavMenuContext";

// ❌ Remove/disable: second dropdown path (caused duplication/conflicts)
// import HeaderStack from "./components/HeaderStack";
// import CreativePanel from "./components/CreativePanel";

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
      <body
        className={`${inter.className} antialiased h-full min-h-dvh bg-[var(--background)] text-[var(--foreground)]`}
        // ❌ Remove/disable: double safe-area padding (nav already handles safe-area)
        // style={{
        //   paddingTop: "env(safe-area-inset-top)",
        //   paddingBottom: "env(safe-area-inset-bottom)",
        // }}
      >
        {/* Mobile viewport height fixer (sets --vhpx) */}
        <VHFix />

        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        {/* ✅ Single dropdown path: context + GlobalNav only */}
        <NavMenuProvider>
          {/* Fixed global nav on top */}
          <GlobalNav />
          {/* ❌ Disabled: duplicate sticky panel route */}
          {/*
          <HeaderStack>
            <CreativePanel />
          </HeaderStack>
          */}
        </NavMenuProvider>

        {/* Page content */}
        <main id="main">{children}</main>

        {/* Global footer */}
        <LuxuryFooter />
      </body>
    </html>
  );
}
