"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Clock3, MapPin, Radio, Ticket } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import type { EventItem } from "@/data/mitchfactorial-data";
import { formatEventDate } from "@/data/mitchfactorial-data";

type NextSignalCountdownProps = {
  events: EventItem[];
};

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
};

function getEventStartDate(event: EventItem) {
  const [year, month, day] = event.date.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  const startTime = event.time?.split(/[–-]/)[0]?.trim() ?? "";
  const match = startTime.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?/i);
  let hour = 20;
  let minute = 0;

  if (match) {
    hour = Number(match[1]);
    minute = Number(match[2] ?? 0);

    if (match[3]) {
      const period = match[3].toUpperCase();

      if (period === "PM" && hour < 12) {
        hour += 12;
      }

      if (period === "AM" && hour === 12) {
        hour = 0;
      }
    }
  }

  return new Date(year, month - 1, day, hour, minute);
}

function getNextEvent(events: EventItem[], now: Date) {
  return events
    .map((event) => ({
      event,
      startsAt: getEventStartDate(event),
    }))
    .filter(
      (entry): entry is { event: EventItem; startsAt: Date } => {
        if (!entry.startsAt) {
          return false;
        }

        return entry.startsAt.getTime() > now.getTime();
      },
    )
    .sort((first, second) => first.startsAt.getTime() - second.startsAt.getTime())[0];
}

function getCountdownParts(startsAt: Date, now: Date): CountdownParts {
  const totalMinutes = Math.max(
    0,
    Math.floor((startsAt.getTime() - now.getTime()) / 60000),
  );

  return {
    days: Math.floor(totalMinutes / 1440),
    hours: Math.floor((totalMinutes % 1440) / 60),
    minutes: totalMinutes % 60,
  };
}

function CountdownBlock({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-card border border-cream/10 bg-black/70 px-4 py-3 text-center shadow-[inset_0_1px_0_rgba(246,241,232,0.06)]">
      <p className="font-display text-[clamp(2rem,8vw,3.4rem)] font-black leading-none text-cream">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-cream/48">
        {label}
      </p>
    </div>
  );
}

export default function NextSignalCountdown({
  events,
}: NextSignalCountdownProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSignal = useMemo(() => {
    if (!now) {
      return null;
    }

    return getNextEvent(events, now);
  }, [events, now]);

  const countdown = useMemo(() => {
    if (!nextSignal || !now) {
      return null;
    }

    return getCountdownParts(nextSignal.startsAt, now);
  }, [nextSignal, now]);

  return (
    <section className="px-5 pb-4 pt-3 sm:px-8 md:px-[3.25rem] lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-card border border-cream/12 bg-black/74 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.46),0_0_42px_rgba(18,60,255,0.1)] backdrop-blur-xl sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(18,60,255,0.3),transparent_32%),radial-gradient(circle_at_86%_66%,rgba(217,20,43,0.24),transparent_30%),linear-gradient(120deg,rgba(246,241,232,0.06),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-haitian-blue/50 via-kompa-gold/45 to-haitian-red/50" />

          {now && nextSignal && countdown ? (
            <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.72fr)] lg:items-center">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-card border border-kompa-gold/35 bg-kompa-gold/10 text-kompa-gold">
                    <Radio aria-hidden className="h-5 w-5" />
                  </span>
                  <p className="section-kicker text-[0.68rem] font-black uppercase tracking-[0.18em] text-kompa-gold">
                    Next Signal
                  </p>
                </div>
                <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-[0.95] text-cream">
                  {nextSignal.event.title}
                </h2>
                <div className="mt-5 grid gap-3 text-sm font-bold text-cream/68 sm:grid-cols-3">
                  <p className="flex items-center gap-2">
                    <MapPin
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-haitian-blue"
                    />
                    <span>
                      {nextSignal.event.venue}
                      {nextSignal.event.city ? ` · ${nextSignal.event.city}` : ""}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-kompa-gold"
                    />
                    <span>{formatEventDate(nextSignal.event.date)}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock3
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-haitian-red"
                    />
                    <span>{nextSignal.event.time ?? "Time TBA"}</span>
                  </p>
                </div>
                {nextSignal.event.url ? (
                  <div className="mt-6">
                    <ButtonLink
                      href={nextSignal.event.url}
                      external
                      icon={<Ticket aria-hidden className="h-4 w-4" />}
                      className="min-h-11 px-5 text-xs tracking-[0.12em]"
                    >
                      Tickets / RSVP
                    </ButtonLink>
                  </div>
                ) : null}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <CountdownBlock label="Days" value={countdown.days} />
                <CountdownBlock label="Hours" value={countdown.hours} />
                <CountdownBlock label="Minutes" value={countdown.minutes} />
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="section-kicker text-[0.68rem] font-black uppercase tracking-[0.18em] text-kompa-gold">
                  Next Signal
                </p>
                <h2 className="mt-3 font-display text-[clamp(2rem,7vw,3.4rem)] font-black uppercase leading-none text-cream">
                  Next signal loading soon.
                </h2>
              </div>
              <ButtonLink href="/events" variant="secondary">
                View Events
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
