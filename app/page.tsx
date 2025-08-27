// app/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // ✅ WebP support check
    const canWebP =
      typeof document !== "undefined" &&
      document.createElement("canvas").toDataURL("image/webp").includes("image/webp");

    const v = videoRef.current;
    if (v && canWebP) {
      // ✅ Upgrade poster to WebP only if supported
      v.setAttribute("poster", "/creative/hero-poster.webp");
    }
  }, []);

  return (
    <div className="relative bg-black flex-1 flex flex-col min-h-0">
      <section
        data-hero="full"
        className="relative w-full overflow-hidden flex items-center justify-center flex-1 min-h-0"
        style={{
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Background video */}
        <video
          ref={videoRef}
          src="/video/herovideo1.mp4"
          poster="/creative/hero-poster.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

        {/* Centered logo */}
        <div className="relative z-20 flex items-center justify-center">
          {/* ✅ FIX: add explicit font-size (text-base) to satisfy new browser rules */}
          <h1 className="sr-only text-base">PRIVÉE GROUP</h1>

          <Image
            src="/creative/nothelogo.png"
            alt=""
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
