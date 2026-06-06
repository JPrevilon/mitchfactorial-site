"use client";

import { useEffect, useRef } from "react";

export default function ReactiveBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (prefersReducedMotion.matches || coarsePointer.matches) {
      return;
    }

    const updatePosition = (event: PointerEvent) => {
      const x = `${(event.clientX / window.innerWidth) * 100}%`;
      const y = `${(event.clientY / window.innerHeight) * 100}%`;

      ref.current?.style.setProperty("--mouse-x", x);
      ref.current?.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePosition);
    };
  }, []);

  return <div ref={ref} aria-hidden className="reactive-backdrop" />;
}
