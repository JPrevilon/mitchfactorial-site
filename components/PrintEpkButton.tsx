"use client";

import { Printer } from "lucide-react";

export default function PrintEpkButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="gold-readable focus-ring inline-flex min-h-11 max-w-full items-center justify-center gap-3 rounded-card border border-kompa-gold bg-kompa-gold px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-black shadow-[0_0_32px_rgba(255,209,102,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-cream"
    >
      Print / Save PDF
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/10">
        <Printer aria-hidden className="h-4 w-4" />
      </span>
    </button>
  );
}
