// app/portal/page.tsx
export const metadata = {
  title: "Partner Portal — PRIVÉE GROUP",
  description: "Partners, clients, and investors.",
};

export default function PortalPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Partner Portal</h1>
      <p className="mt-4 text-neutral-600 max-w-md">
        Exclusive access for partners, clients, and investors. Click below to enter.
      </p>
      <a
        href="/portal/private"
        className="mt-6 inline-block border border-black px-5 py-2 hover:bg-black hover:text-white transition"
      >
        Enter Portal (login required)
      </a>
    </section>
  );
}
