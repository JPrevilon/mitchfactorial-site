import { CalendarDays, MapPin, Ticket } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SafeImage from "@/components/SafeImage";
import type { EventItem } from "@/data/mitchfactorial-data";
import { formatEventDate } from "@/data/mitchfactorial-data";
import { cn } from "@/lib/cn";

type EventCardProps = {
  event: EventItem;
  compact?: boolean;
  archive?: boolean;
};

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return { month: "TBA", day: "--", long: dateString };
  }

  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date),
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    long: formatEventDate(dateString),
  };
}

function getEventStatus(dateString: string, archive: boolean) {
  if (archive) {
    return "Archive";
  }

  const eventDate = new Date(`${dateString}T12:00:00`);
  const today = new Date();
  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    12,
  );

  if (Number.isNaN(eventDate.getTime())) {
    return "Upcoming";
  }

  if (eventDate.toDateString() === todayDate.toDateString()) {
    return "Today";
  }

  return eventDate > todayDate ? "Upcoming" : "Archive";
}

export default function EventCard({
  event,
  compact = false,
  archive = false,
}: EventCardProps) {
  const date = formatDate(event.date);
  const status = getEventStatus(event.date, archive);

  return (
    <article
      className={cn(
        "metal-panel group/card grid overflow-hidden border-haitian-blue/20 hover:-translate-y-1",
        compact ? "sm:grid-cols-[0.82fr_1fr]" : "md:grid-cols-[0.72fr_1fr]",
      )}
    >
      <SafeImage
        src={event.flyer}
        alt={`${event.title} flyer`}
        aspectClass={compact ? "aspect-[4/5] sm:h-full" : "aspect-[4/5] md:h-full"}
        className="rounded-none border-b border-cream/10 sm:border-b-0 sm:border-r"
        imgClassName="transition duration-500 group-hover/card:scale-105"
      />
      <div className={cn("flex flex-col p-5", compact ? "gap-3" : "gap-5")}>
        <div className="flex items-start justify-between gap-4">
          <div className="gold-readable min-w-16 rounded-card border border-kompa-gold/40 bg-kompa-gold px-3 py-2 text-center text-black">
            <p className="text-[0.65rem] font-black uppercase">{date.month}</p>
            <p className="font-display text-2xl font-black leading-none">
              {date.day}
            </p>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-xl font-black uppercase leading-tight text-cream">
                {event.title}
              </h3>
              <span
                className={cn(
                  "w-fit shrink-0 rounded-card border px-2 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em]",
                  status === "Today"
                    ? "gold-readable border-kompa-gold bg-kompa-gold text-black"
                    : status === "Upcoming"
                      ? "border-haitian-blue/50 bg-haitian-blue/15 text-cream"
                      : "border-cream/12 bg-cream/5 text-cream/62",
                )}
              >
                {status}
              </span>
            </div>
            <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-cream/62">
              <CalendarDays
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-haitian-red"
              />
              <span>
                {date.long}
                {event.time ? `, ${event.time}` : ""}
              </span>
            </p>
          </div>
        </div>
        <p className="flex items-start gap-2 text-sm leading-6 text-cream/72">
          <MapPin
            aria-hidden
            className="mt-0.5 h-4 w-4 shrink-0 text-haitian-blue"
          />
          <span>{[event.venue, event.city].filter(Boolean).join(" - ")}</span>
        </p>
        {event.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {event.tags.slice(0, compact ? 3 : 5).map((tag) => (
              <span
                key={tag}
                className="rounded-card border border-cream/10 bg-cream/5 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cream/68"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {event.note && !compact ? (
          <p className="text-xs leading-5 text-kompa-gold/80">{event.note}</p>
        ) : null}
        {event.url && !compact ? (
          <div className="mt-auto pt-2">
            <ButtonLink
              href={event.url}
              external
              variant="secondary"
              icon={<Ticket aria-hidden className="h-4 w-4" />}
            >
              Tickets / Details
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
