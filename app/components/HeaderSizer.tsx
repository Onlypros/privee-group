// app/components/HeaderSizer.tsx
"use client";

import { useEffect } from "react";

export default function HeaderSizer() {
  useEffect(() => {
    const el = document.getElementById("site-nav");
    if (!el) return;

    let raf: number | null = null;
    let t: number | null = null;
    let last = -1;

    const commit = (h: number) => {
      // Prevent wild values (e.g., during iOS UI transitions)
      const clamped = Math.max(40, Math.min(120, Math.round(h)));
      if (clamped !== last) {
        document.documentElement.style.setProperty("--header-h", `${clamped}px`);
        last = clamped;
      }
    };

    const measure = () => {
      const rect = el.getBoundingClientRect();
      commit(rect.height);
    };

    const schedule = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure); // measure after layout/paint
    };

    // Initial after paint
    schedule();
    // Once more shortly after mount (fonts/safe-area settle)
    t = window.setTimeout(schedule, 60);

    // Re-run on element size changes
    const ro = new ResizeObserver(schedule);
    ro.observe(el);

    // Re-run on viewport changes
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);

    // Re-run when web fonts finish loading (if supported)
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(schedule).catch(() => {});
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (t) clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
    };
  }, []);

  return null;
}
