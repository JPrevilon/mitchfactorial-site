"use client";

import { useEffect, useState } from "react";

const introStorageKey = "mitchfactorial-home-intro-seen";

export default function HomeIntroOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    try {
      if (window.sessionStorage.getItem(introStorageKey)) {
        return;
      }

      window.sessionStorage.setItem(introStorageKey, "true");
    } catch {
      // Session storage can be unavailable in some browser privacy modes.
    }

    setVisible(true);

    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 1050);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden
      className="home-intro-overlay pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="home-intro-logo-wrap relative h-24 w-24 sm:h-28 sm:w-28">
          <img
            src="/assets/branding/mf-logo.png"
            alt=""
            width="1254"
            height="1254"
            decoding="async"
            className="home-intro-logo h-full w-full object-contain"
          />
        </div>
        <p className="home-intro-text text-xs font-black uppercase tracking-[0.22em] text-kompa-gold">
          Signal Loading
        </p>
      </div>
    </div>
  );
}
