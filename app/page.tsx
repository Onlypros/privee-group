// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black">
      <section className="relative w-full overflow-hidden min-h-[calc(100vh-var(--header-h))] flex items-center justify-center">
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
            src="/creative/nothelogo.png"
            alt="PRIVÉE GROUP"
            width={800}
            height={1200}
            priority
            className="w-[200px] md:w-[320px] lg:w-[360px] h-auto"
          />
        </div>

        {/* Soft fade into the footer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black/70 z-20"
        />
      </section>
    </main>
  );
}
