// app/components/ContactOptions.tsx
"use client";

import Link from "next/link";
import { useCallback } from "react";

const TO = "hello@priveegroup.co"; // ← using .co as you requested
const gmailHref = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(TO)}`;

export default function ContactOptions() {
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(TO);
      // Replace with your toast if you have one
      alert(`Email copied: ${TO}`);
    } catch {
      alert("Could not copy email. Please copy manually.");
    }
  }, []);

  return (
    <section className="mx-auto max-w-3xl py-10 text-center">
      <h2 className="text-xl font-medium md:text-2xl">Request Collaboration</h2>
      <p className="mt-3 text-[10px] leading-snug text-black md:text-[12px]">
        Privée Missions is private by design. <br />
        For collaboration requests, please connect with us directly:
      </p>

      {/* Primary: simple contact form (hook up Formspree or your API later) */}
      <form
        action="https://formspree.io/f/your-id" /* TODO: replace with your real endpoint */
        method="POST"
        className="mx-auto mt-6 grid max-w-md gap-3 text-left"
      >
        <input
          name="name"
          placeholder="Your name"
          className="border p-2 text-sm"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          className="border p-2 text-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Tell us about your project…"
          className="border p-2 text-sm h-28"
        />
        <button className="border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white">
          Send
        </button>
      </form>

      {/* Secondary options */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {/* PORTAL */}
        <Link
          href="/portal"
          className="inline-block border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white"
          aria-label="Open the Portal page"
        >
          Portal
        </Link>

        {/* Copy email */}
        <button
          onClick={copyEmail}
          className="inline-block border border-black/30 px-5 py-2 text-sm transition hover:border-black"
        >
          Copy {TO}
        </button>

        {/* Gmail (always works; no handler needed) */}
        <a
          href={gmailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black/30 px-5 py-2 text-sm transition hover:border-black"
        >
          Email via Gmail
        </a>

        {/* Mail app fallback — no target to avoid blank tab if no handler set */}
        <a
          href={`mailto:${TO}`}
          className="inline-block border border-black/30 px-5 py-2 text-sm transition hover:border-black"
          aria-label={`Compose an email to ${TO}`}
        >
          Use my mail app
        </a>
      </div>
    </section>
  );
}
