// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNav from "./components/GlobalNav";
import LuxuryFooter from "./components/LuxuryFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // available in CSS if you want to target var(--font-inter)
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
  viewportFit: "cover",          // respect iOS safe areas
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`
          ${inter.className}
          antialiased h-full min-h-dvh
          bg-[var(--background)] text-[var(--foreground)]
        `}
        // iOS safe-area padding for the fixed nav/footer
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Skip to content for keyboard/screen readers */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>

        {/* Fixed global nav on top; height controlled by --header-h */}
        <GlobalNav />

        {/* Content: pad below fixed header; make page stretch to footer */}
        <div className="min-h-dvh flex flex-col pt-[var(--header-h)]">
          <main id="main" className="flex-1">
            {children}
          </main>
          <LuxuryFooter />
        </div>
      </body>
    </html>
  );
}
