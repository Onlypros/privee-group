// app/page.tsx
import Image from "next/image";

export default function Home() {
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
          src="/video/herovideo1.mp4"
          poster="/creative/hero-poster.jpg"
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
