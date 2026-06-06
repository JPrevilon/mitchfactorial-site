"use client";

import { FormEvent, useState } from "react";
import { Radio, Send } from "lucide-react";
import { cn } from "@/lib/cn";

type JoinSignalSignupProps = {
  className?: string;
};

export default function JoinSignalSignup({ className }: JoinSignalSignupProps) {
  const [joined, setJoined] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this signup to Formspree, Resend, or the selected email backend.
    setJoined(true);
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-card border border-kompa-gold/25 bg-black2/86 p-5 shadow-[0_0_70px_rgba(255,209,102,0.08),0_0_60px_rgba(18,60,255,0.1)] sm:p-6 lg:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(18,60,255,0.26),transparent_28%),radial-gradient(circle_at_88%_68%,rgba(217,20,43,0.2),transparent_30%),linear-gradient(120deg,rgba(246,241,232,0.06),transparent_42%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-kompa-gold">
            <Radio aria-hidden className="h-4 w-4" />
            Signal List
          </div>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-none text-cream sm:text-5xl">
            Join the Signal
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/68">
            Get first access to new sets, parties, merch drops, and
            M!TCHFACTOR!AL updates.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="join-signal-email">
            Email address
          </label>
          <input
            id="join-signal-email"
            name="email"
            type="email"
            required
            placeholder="email@example.com"
            className="min-h-12 rounded-card border border-cream/12 bg-black/66 px-4 text-base font-medium text-cream outline-none transition placeholder:text-cream/28 focus:border-kompa-gold"
          />
          <button
            type="submit"
            className="gold-readable focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-card border border-kompa-gold bg-kompa-gold px-5 py-2 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:-translate-y-0.5 hover:bg-cream"
          >
            Join the Signal
            <Send aria-hidden className="h-4 w-4" />
          </button>
          {joined ? (
            <p className="text-sm font-bold text-kompa-gold sm:col-span-2">
              Signal noted. Email signup backend coming soon.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
