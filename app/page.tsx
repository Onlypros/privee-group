// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    // negate the global header padding just for the homepage
    <main className="relative min-h-screen -mt-[var(--header-h)]">
      <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background video */}
        <video
          src="/video/herovideo1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

        {/* Centered logo */}
        <div className="relative z-20 flex items-center justify-center">
          <Image
            src="/creative/vectorlogo.png"
            alt="PRIVÉE GROUP"
            width={800}
            height={1200}
            priority
            className="w-[260px] md:w-[420px] h-auto"
          />
        </div>

        {/* Scroll cue (optional) */}
        {/*
        <a
          href="#mission"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70 hover:text-white transition"
        >
          <span className="mb-1 text-[11px] tracking-[0.2em]">SCROLL</span>
          <span className="scroll-caret text-2xl">⌄</span>
        </a>
        */}

        {/* Soft fade into the footer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24
                     bg-gradient-to-b from-transparent to-black/70 z-20"
        />
      </section>
    </main>
  );
}
