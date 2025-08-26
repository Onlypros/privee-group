// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNav from "./components/GlobalNav";
import LuxuryFooter from "./components/LuxuryFooter";

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
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ✅ Add data-scroll-behavior to opt into smooth scrolling across route transitions
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        <GlobalNav />

        {/* pad content so it isn’t under the fixed nav (uses --header-h from globals.css) */}
        <main id="main" className="pt-[var(--header-h)] min-h-[calc(100svh-var(--header-h))]">
          {children}
        </main>

        <LuxuryFooter />
      </body>
    </html>
  );
}
