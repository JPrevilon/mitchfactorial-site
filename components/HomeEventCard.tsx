import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import type { EventItem } from "@/data/mitchfactorial-data";

type HomeEventCardProps = {
  event: EventItem;
};

function formatShortDate(dateString: string) {
  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString.toUpperCase();
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  })
    .format(date)
    .toUpperCase();
}

function CardInner({ event }: HomeEventCardProps) {
  const location = event.city ?? event.venue;

  return (
    <>
      <SafeImage
        src={event.flyer}
        alt={`${event.title} flyer`}
        aspectClass="aspect-[7/8]"
        className="rounded-b-none rounded-t-card border-0"
        imgClassName="transition duration-500 group-hover/card:scale-105"
      />
      <div className="relative min-h-[6.5rem] border-t border-cream/10 bg-black/92 p-3">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-kompa-gold">
          {formatShortDate(event.date)}
        </p>
        <h3 className="mt-2 pr-7 text-[0.86rem] font-black uppercase leading-4 tracking-[0.04em] text-cream">
          {event.title}
        </h3>
        <p className="mt-2 pr-7 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-cream/54">
          {location}
        </p>
        <span className="absolute bottom-3 right-3 inline-flex h-7 w-7 items-center justify-center text-cream transition group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-kompa-gold">
          <ArrowUpRight aria-hidden className="h-5 w-5" />
        </span>
      </div>
    </>
  );
}

export default function HomeEventCard({ event }: HomeEventCardProps) {
  const classes =
    "group/card overflow-hidden rounded-card border border-kompa-gold/24 bg-black2 shadow-[0_22px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-kompa-gold/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.46),0_0_30px_rgba(18,60,255,0.12)]";

  if (event.url) {
    return (
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        <CardInner event={event} />
      </a>
    );
  }

  return (
    <Link href="/events" className={classes}>
      <CardInner event={event} />
    </Link>
  );
}
