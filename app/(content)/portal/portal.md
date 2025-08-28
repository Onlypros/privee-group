// app/(content)/portal/page.tsx
import PortalLoginButton from "../../components/PortalLoginButton";

export const metadata = {
  title: "Partner Portal — PRIVÉE GROUP",
  description: "Partners, clients, and investors.",
};

export default function PortalPage() {
  return (
    <main className="px-6 bg-white text-black min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl leading-tight font-semibold tracking-wide uppercase">
        PARTNER <span className="font-serif italic normal-case">PORTAL</span>
      </h1>

      <p className="mt-6 text-base md:text-lg text-black max-w-xl leading-relaxed">
        Exclusive access for partners, clients, and investors. Click below to enter.
      </p>

      <div className="mt-8">
        <PortalLoginButton />
      </div>
    </main>
  );
}
