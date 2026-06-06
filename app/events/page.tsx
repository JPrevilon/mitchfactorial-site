import { CalendarDays, MapPin, Ticket } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import EventCard from "@/components/EventCard";
import SafeImage from "@/components/SafeImage";
import SectionHeader from "@/components/SectionHeader";
import {
  formatEventDate,
  getArchiveEvents,
  getUpcomingEvents,
  type EventItem,
} from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Events",
  description:
    "Upcoming M!TCHFACTOR!AL dates, ticket links, Brooklyn event rooms, and a flyer archive for past Haitian-Caribbean and global club nights.",
  path: "/events",
});

function getEventTimestamp(event: EventItem) {
  const timestamp = new Date(`${event.date}T12:00:00`).getTime();

  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function sortEventsLatestFirst(events: EventItem[]) {
  return [...events].sort(
    (first, second) => getEventTimestamp(second) - getEventTimestamp(first),
  );
}

export default function EventsPage() {
  const upcomingEvents = sortEventsLatestFirst(getUpcomingEvents());
  const archiveEvents = sortEventsLatestFirst(getArchiveEvents());
  const eventJsonLd = upcomingEvents.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: event.city,
    },
    url: event.url,
    image: event.flyer,
    description: [event.time, event.note].filter(Boolean).join(" | "),
    performer: {
      "@type": "Person",
      name: "M!TCHFACTOR!AL",
    },
  }));

  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl">
        <section>
          <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-cream/58">
            <CalendarDays aria-hidden className="h-4 w-4 text-kompa-gold" />
            Upcoming
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={`${event.title}-${event.date}`} event={event} />
            ))}
          </div>
        </section>

        <section className="mt-18">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Past signal archive"
              title="Flyer wall"
              description="Past rooms, cultural parties, and visual proof. Flyers stay object-cover and responsive from mobile grids to desktop walls."
            />
            <ButtonLink href="/booking" variant="ghost">
              Book a room
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {archiveEvents.map((event) => (
              <article
                key={`${event.title}-${event.date}`}
                className="group relative overflow-hidden rounded-card border border-cream/10 bg-black2 transition duration-300 hover:-translate-y-1 hover:rotate-[0.6deg] hover:border-kompa-gold/45"
              >
                <SafeImage
                  src={event.flyer}
                  alt={`${event.title} flyer`}
                  aspectClass="aspect-[4/5]"
                  className="rounded-none"
                  imgClassName="transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-kompa-gold">
                    {formatEventDate(event.date)}
                  </p>
                  <h3 className="mt-1 text-xs font-black uppercase leading-tight text-cream sm:text-sm">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-[0.68rem] font-bold text-cream/62">
                    <MapPin aria-hidden className="h-3 w-3 text-haitian-blue" />
                    {event.venue}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-18 rounded-card border border-kompa-gold/30 bg-black2 p-6 shadow-[0_0_70px_rgba(255,209,102,0.1)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              eyebrow="Booking CTA"
              title="Booking a room, festival, brand event, or private party?"
              description="Bring M!TCHFACTOR!AL to the booth for Haitian-Caribbean heat, Brooklyn nightlife language, and global dancefloor pressure."
            />
            <ButtonLink
              href="/booking"
              variant="primary"
              icon={<Ticket aria-hidden className="h-4 w-4" />}
            >
              Start booking
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
