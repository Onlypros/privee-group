"use client";

import { useEffect } from "react";

/**
 * Sets --vhpx to window.innerHeight (px), updating on resize/orientation.
 * This avoids the iOS/Android 100vh bugs.
 */
export default function VHFix() {
  useEffect(() => {
    const set = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.documentElement.style.setProperty("--vhpx", `${vh}px`);
    };
    set();
    window.addEventListener("resize", set);
    window.addEventListener("orientationchange", set);
    return () => {
      window.removeEventListener("resize", set);
      window.removeEventListener("orientationchange", set);
    };
  }, []);
  return null;
}
