
"use client";

import { useEffect, useRef } from "react";

type HeaderSizerProps = {
  /** If your header is not this component itself, point to it (e.g. "#site-header") */
  targetSelector?: string;
  /** CSS var to write (default: --header-h) */
  varName?: string;
};

/**
 * Measures the header height and writes it to a CSS variable.
 * Avoids `any` to satisfy @typescript-eslint/no-explicit-any.
 */
export default function HeaderSizer({
  targetSelector,
  varName = "--header-h",
}: HeaderSizerProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el: HTMLElement | null =
      targetSelector
        ? document.querySelector<HTMLElement>(targetSelector)
        : hostRef.current;

    if (!el) return;

    const setVar = () => {
      const h = Math.round(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty(varName, `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      // Only respond to our element
      if (entries.some((e) => e.target === el)) setVar();
    });

    ro.observe(el);

    const onResize = () => setVar();
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [targetSelector, varName]);

  // If you’re selecting the real header via `targetSelector`, this renders nothing visible.
  return <div ref={hostRef} style={{ display: "contents" }} data-header-sizer />;
}
