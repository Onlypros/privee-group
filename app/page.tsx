// app/page.tsx
"use client"; 
// ✅ NEW: enable a tiny effect so we can set a WebP poster with PNG fallback.
// (No other behavior is moved client-side.)

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  // ✅ NEW: we need a ref so we can set the poster attribute at runtime
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // ✅ NEW: quick WebP support probe (runs once)
    const canWebP =
      typeof document !== "undefined" &&
      document.createElement("canvas").toDataURL("image/webp").includes("image/webp");

    // ✅ NEW: set PNG first (universal), then upgrade to WebP when supported
    const v = videoRef.current;
    if (v) {
      v.setAttribute("poster", "/creative/hero-poster.png");   // fallback shown instantly
      if (canWebP) v.setAttribute("poster", "/creative/hero-poster.webp"); // smaller on modern browsers
    }
  }, []);

  return (
    <div className="relative bg-black flex-1 flex flex-col min-h-0">
      <section
        data-hero="full"
        className="relative w-full overflow-hidden flex items-center justify-center flex-1 min-h-0"
        style={{
          // ✅ UNCHANGED: this is the height model that worked for you
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Background video */}
        <video
          ref={videoRef} // ✅ NEW: hook for setting poster in the effect above
          src="/video/herovideo1.mp4"
          // NOTE: poster is set programmatically to allow WebP→PNG fallback
          autoPlay
          muted
          loop
          playsInline
          preload="auto" // ✅ UNCHANGED: keep your original preload behavior
          style={{
            // ✅ UNCHANGED: preserve your exact sizing/positioning so layout stays identical
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Overlay for readability (unchanged) */}
        <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

        {/* Centered logo (unchanged) */}
        <div className="relative z-20 flex items-center justify-center">
          <Image
            src="/creative/nothelogo.png"
            alt="PRIVÉE GROUP"
            width={800}
            height={1200}
            priority
            className="w-[200px] md:w-[320px] lg:w-[360px] h-auto"
          />
        </div>
      </section>
    </div>
  );
}
