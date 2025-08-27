"use client";

import { useEffect, useRef, useState } from "react";

const TO = "hello@priveegroup.co";
const gmailHref = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(TO)}`;

export default function EmailCTA() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailHelp, setMailHelp] = useState(false);
  const mailAttemptRef = useRef<number | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(TO);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      alert(`Email: ${TO}`);
    }
  }

  function tryMailto() {
    setMailHelp(false);
    window.location.href = `mailto:${TO}`;

    if (mailAttemptRef.current) window.clearTimeout(mailAttemptRef.current);
    mailAttemptRef.current = window.setTimeout(() => {
      setMailHelp(true);
    }, 1500);
  }

  useEffect(() => {
    return () => {
      if (mailAttemptRef.current) window.clearTimeout(mailAttemptRef.current);
    };
  }, []);

  return (
    <>
      {/* Single visible button */}
      <button
        onClick={() => setOpen(true)}
        className={[
          "inline-flex items-center justify-center select-none",
          "uppercase tracking-widest no-underline",
          "border border-black text-black bg-transparent rounded-none",
          "px-5 py-2 text-[11px] md:text-sm",
          "min-h-[44px] min-w-[112px]",
          "transition-all duration-150",
          "hover:font-semibold hover:border-2", // only bold + thicker border
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
          "active:opacity-90",
        ].join(" ")}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        EMAIL
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-semibold">How would you like to email us?</h3>
            <p className="mt-2 text-xs text-black/70">
              Choose Gmail (works in-browser), your mail app, or copy our address.
            </p>

            <div className="mt-4 grid gap-2">
              <a
                href={gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex items-center justify-center select-none",
                  "uppercase tracking-widest no-underline",
                  "border border-black text-black bg-transparent rounded-none",
                  "px-5 py-2 text-sm",
                  "transition-all duration-150",
                  "hover:font-semibold hover:border-2",
                ].join(" ")}
              >
                Email via Gmail
              </a>

              <button
                onClick={tryMailto}
                className="w-full border border-black/30 px-4 py-2 text-sm text-center transition hover:border-black"
              >
                Use my mail app
              </button>

              <button
                onClick={copyEmail}
                className="w-full border border-black/30 px-4 py-2 text-sm transition hover:border-black"
              >
                {copied ? "Copied!" : `Copy ${TO}`}
              </button>
            </div>

            {mailHelp && (
              <div className="mt-3 rounded-lg bg-black/5 p-3 text-xs leading-relaxed text-black/80">
                It looks like no default mail app is set on this device.
                You can either:
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    Use <span className="font-medium">Email via Gmail</span> above (opens in browser), or
                  </li>
                  <li>
                    Tap <span className="font-medium">Copy</span> and paste the address into any email app.
                  </li>
                </ul>
              </div>
            )}

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full text-center text-xs text-black/60 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
