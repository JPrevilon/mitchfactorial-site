import Image from "next/image";
import {
  CalendarDays,
  Camera,
  ExternalLink,
  Mail,
  MapPin,
  Music,
  Play,
  Radio,
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import PrintEpkButton from "@/components/PrintEpkButton";
import SafeImage from "@/components/SafeImage";
import {
  archiveEvents,
  formatEventDate,
  mixes,
  photos,
  siteConfig,
  upcomingEvents,
  videos,
  type EventItem,
  type Photo,
} from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Printable EPK",
  description:
    "Printable M!TCHFACTOR!AL EPK with artist bio, booking contact, sound tags, videos, mixes, highlights, socials, and press photos.",
  path: "/epk",
});

const shortBio =
  "M!TCHFACTOR!AL is a Brooklyn-based Haitian-Caribbean DJ building high-energy dancefloors across kompa, dancehall, afrobeats, raboday, global club, R&B, and open-format nightlife.";

const longBio =
  "Rooted in Brooklyn and shaped by Haitian-Caribbean rhythm, M!TCHFACTOR!AL brings a warm, precise, and camera-ready booth presence to clubs, festivals, brand rooms, private events, and cultural spaces. Her sets move with dancefloor instinct: kompa and smooth gouyad for body-led warmth, dancehall and afrobeats for release, raboday and global club for velocity, and R&B/soul for texture. She reads rooms with polish while keeping the culture audible, making her a strong fit for events that need style, movement, and a clear point of view.";

const soundTags = [
  "Afro-Caribbean",
  "Kompa",
  "Dancehall",
  "Afrobeats",
  "Raboday",
  "Global Club",
  "Brooklyn",
  "R&B",
  "Soul",
];

const socials = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: Camera },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: Play },
  { label: "SoundCloud", href: siteConfig.socials.soundcloud, icon: Radio },
  { label: "Spotify", href: siteConfig.socials.spotify, icon: Music },
];

function isPhoto(photo: Photo | undefined): photo is Photo {
  return Boolean(photo);
}

function isFutureEvent(dateString: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return new Date(`${dateString}T12:00:00`).getTime() >= today.getTime();
}

export default function EpkPage() {
  const selectedVideos = videos.slice(0, 4);
  const selectedMixes = mixes.slice(0, 3);
  const currentUpcoming: EventItem[] = upcomingEvents.filter((event) =>
    isFutureEvent(event.date),
  );
  const recentPast: EventItem[] = [
    ...upcomingEvents.filter((event) => !isFutureEvent(event.date)),
    ...archiveEvents,
  ].slice(0, 6);
  const pressPhotos = [
    photos.find((photo) => photo.usage.includes("primary")),
    photos.find((photo) => photo.usage.includes("performance")),
    photos.find((photo) => photo.usage.includes("community")),
    photos.find((photo) => photo.usage.includes("personality")),
  ].filter(isPhoto);

  return (
    <div className="epk-page px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="epk-screen-actions mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ButtonLink href="/about" variant="ghost">
            Back to About
          </ButtonLink>
          <PrintEpkButton />
        </div>

        <article className="epk-sheet overflow-hidden rounded-card border border-cream/14 bg-black/86 shadow-[0_24px_90px_rgba(0,0,0,0.52)]">
          <header className="epk-header relative overflow-hidden border-b border-cream/12 p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(18,60,255,0.28),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(217,20,43,0.22),transparent_34%),linear-gradient(135deg,rgba(246,241,232,0.06),transparent_42%)]" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/branding/mf-logo.png"
                    alt="M!TCHFACTOR!AL logo"
                    width="1254"
                    height="1254"
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-kompa-gold">
                      Electronic Press Kit
                    </p>
                    <h1 className="mt-2 font-display text-[clamp(2.3rem,8vw,5.6rem)] font-black uppercase leading-none text-cream">
                      M!TCHFACTOR!AL
                    </h1>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-base leading-7 text-cream/72">
                  {shortBio}
                </p>
              </div>
              <div className="rounded-card border border-kompa-gold/25 bg-black/60 p-4 text-sm font-bold leading-6 text-cream/78">
                <p className="text-[0.66rem] font-black uppercase tracking-[0.16em] text-kompa-gold">
                  Booking
                </p>
                <a
                  href={`mailto:${siteConfig.bookingEmail}`}
                  className="mt-2 inline-flex break-all text-lg font-black text-cream transition hover:text-kompa-gold"
                >
                  {siteConfig.bookingEmail}
                </a>
                <p className="mt-3 flex items-center gap-2 text-cream/60">
                  <MapPin aria-hidden className="h-4 w-4 text-haitian-blue" />
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-6 p-6 sm:p-8">
            <section className="epk-section grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="epk-kicker">Artist Bio</p>
                <h2 className="mt-3 text-2xl font-black uppercase text-cream">
                  Short + Long Bio
                </h2>
              </div>
              <div className="grid gap-4">
                <div className="rounded-card border border-cream/10 bg-black2/80 p-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-kompa-gold">
                    Short Bio
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-cream/72">{shortBio}</p>
                </div>
                <div className="rounded-card border border-cream/10 bg-black2/80 p-4">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-kompa-gold">
                    Long Bio
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-cream/72">{longBio}</p>
                </div>
              </div>
            </section>

            <section className="epk-section">
              <p className="epk-kicker">Sound Profile</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {soundTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-card border border-kompa-gold/28 bg-kompa-gold/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-kompa-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="epk-section grid gap-4 lg:grid-cols-2">
              <div>
                <p className="epk-kicker">Selected Videos</p>
                <div className="mt-4 grid gap-3">
                  {selectedVideos.map((video) => (
                    <a
                      key={video.youtubeId}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="epk-link-card group"
                    >
                      <span>
                        <span className="block text-sm font-black uppercase text-cream">
                          {video.title}
                        </span>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-cream/46">
                          {video.type ?? "Video"}
                          {video.startSeconds
                            ? ` - starts at ${Math.floor(video.startSeconds / 60)}:${String(
                                video.startSeconds % 60,
                              ).padStart(2, "0")}`
                            : ""}
                        </span>
                      </span>
                      <ExternalLink
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-kompa-gold transition group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="epk-kicker">Selected Mixes</p>
                <div className="mt-4 grid gap-3">
                  {selectedMixes.map((mix) => (
                    <a
                      key={mix.platform}
                      href={mix.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="epk-link-card group"
                    >
                      <span>
                        <span className="block text-sm font-black uppercase text-cream">
                          {mix.title}
                        </span>
                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-cream/46">
                          {mix.tags.join(" / ")}
                        </span>
                      </span>
                      <ExternalLink
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-kompa-gold transition group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="epk-section grid gap-4 lg:grid-cols-2">
              <div>
                <p className="epk-kicker">Upcoming Signals</p>
                <div className="mt-4 grid gap-3">
                  {currentUpcoming.length > 0 ? (
                    currentUpcoming.map((event) => (
                      <div key={`${event.title}-${event.date}`} className="epk-event-card">
                        <CalendarDays
                          aria-hidden
                          className="h-4 w-4 shrink-0 text-kompa-gold"
                        />
                        <div>
                          <h3 className="text-sm font-black uppercase text-cream">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-cream/52">
                            {formatEventDate(event.date)}
                            {event.time ? ` - ${event.time}` : ""} / {event.venue}
                            {event.city ? ` / ${event.city}` : ""}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="rounded-card border border-cream/10 bg-black2/70 p-4 text-sm font-bold text-cream/60">
                      Next booking calendar is being finalized.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <p className="epk-kicker">Past Highlights</p>
                <div className="mt-4 grid gap-3">
                  {recentPast.map((event) => (
                    <div key={`${event.title}-${event.date}`} className="epk-event-card">
                      <CalendarDays
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-haitian-blue"
                      />
                      <div>
                        <h3 className="text-sm font-black uppercase text-cream">
                          {event.title}
                        </h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-cream/52">
                          {formatEventDate(event.date)} / {event.venue}
                          {event.city ? ` / ${event.city}` : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="epk-section">
              <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="epk-kicker">Press + Photos</p>
                  <h2 className="mt-3 text-2xl font-black uppercase text-cream">
                    Promoter-ready visuals
                  </h2>
                </div>
                <div className="grid gap-2 text-sm font-bold text-cream/64">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-kompa-gold"
                    >
                      <Icon aria-hidden className="h-4 w-4 text-kompa-gold" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {pressPhotos.map((photo) => (
                  <SafeImage
                    key={photo.src}
                    src={photo.src}
                    alt={`M!TCHFACTOR!AL press photo - ${photo.usage}`}
                    aspectClass="aspect-[4/5]"
                    className="epk-photo border border-cream/10"
                  />
                ))}
              </div>
            </section>

            <section className="epk-section grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="epk-kicker">Booking Contact</p>
                <h2 className="mt-3 text-2xl font-black uppercase text-cream">
                  Info@MitchFactorial.com
                </h2>
                <p className="mt-3 text-sm leading-6 text-cream/62">
                  Include city, date, venue, set length, budget, event concept,
                  expected audience, and any tech or cultural direction.
                </p>
              </div>
              <ButtonLink
                href={`mailto:${siteConfig.bookingEmail}?subject=${encodeURIComponent(
                  "M!TCHFACTOR!AL Booking Inquiry",
                )}`}
                variant="primary"
                icon={<Mail aria-hidden className="h-4 w-4" />}
                className="epk-screen-actions"
              >
                Email Booking
              </ButtonLink>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
