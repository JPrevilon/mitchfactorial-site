import {
  Badge,
  CalendarDays,
  Camera,
  Download,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Music,
  Play,
  Radio,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SafeImage from "@/components/SafeImage";
import SectionHeader from "@/components/SectionHeader";
import {
  archiveEvents,
  formatEventDate,
  photos,
  siteConfig,
  type Photo,
} from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About + EPK",
  description:
    "M!TCHFACTOR!AL artist bio, EPK details, sound profile, press photos, booking email, socials, past highlights, and Sistars in Sound affiliation.",
  path: "/about",
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
];

const epkFacts = [
  ["Location", siteConfig.location],
  ["Booking", siteConfig.bookingEmail],
  ["Format", "DJ / curator / host"],
  ["Rooms", "Clubs, festivals, brands, private events"],
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

export default function AboutPage() {
  const heroPhoto =
    photos.find((photo) => photo.usage.includes("primary"))?.src ??
    "/assets/photos/hero-red-yellow-circle.png";
  const pressPhotos = [
    photos.find((photo) => photo.usage.includes("performance")),
    photos.find((photo) => photo.usage.includes("community")),
    photos.find((photo) => photo.usage.includes("personality")),
  ].filter(isPhoto);
  const highlights = archiveEvents.slice(0, 4);

  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="page-intro grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="About / EPK"
              title="DJ. Curator. Cultural frequency."
              description={shortBio}
            />
            <div className="mt-7 flex flex-wrap gap-2">
              {soundTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-card border border-kompa-gold/30 bg-kompa-gold/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-kompa-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/booking"
                variant="primary"
                icon={<Send aria-hidden className="h-4 w-4" />}
              >
                Book M!TCHFACTOR!AL
              </ButtonLink>
              <button
                type="button"
                disabled
                className="inline-flex min-h-11 max-w-full cursor-not-allowed items-center justify-center gap-3 rounded-card border border-cream/15 bg-cream/5 px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-cream/45"
              >
                EPK Download Coming Soon
                <Download aria-hidden className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </div>
          <SafeImage
            src={heroPhoto}
            alt="M!TCHFACTOR!AL press portrait"
            aspectClass="aspect-[4/5]"
            className="border border-kompa-gold/30 shadow-[0_0_70px_rgba(255,209,102,0.12)]"
          />
        </div>

        <section className="mt-14 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
          <article className="metal-panel p-5 sm:p-6">
            <Badge aria-hidden className="h-6 w-6 text-kompa-gold" />
            <h2 className="mt-5 text-2xl font-black uppercase text-cream">
              Short Bio
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/70">{shortBio}</p>
          </article>
          <article className="metal-panel p-5 sm:p-6">
            <Globe aria-hidden className="h-6 w-6 text-kompa-gold" />
            <h2 className="mt-5 text-2xl font-black uppercase text-cream">
              Long Bio
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/70">{longBio}</p>
          </article>
        </section>

        <section className="mt-14 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="metal-panel p-5 sm:p-6">
            <Mail aria-hidden className="h-6 w-6 text-kompa-gold" />
            <h2 className="mt-5 text-2xl font-black uppercase text-cream">
              Booking + Socials
            </h2>
            <a
              href={`mailto:${siteConfig.bookingEmail}`}
              className="mt-4 inline-flex break-all text-sm font-black text-kompa-gold transition hover:text-cream"
            >
              {siteConfig.bookingEmail}
            </a>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring stat-tile flex items-center justify-between gap-3 p-4 text-sm font-black uppercase tracking-[0.12em] text-cream transition hover:border-kompa-gold/40 hover:text-kompa-gold"
                >
                  <span className="flex items-center gap-3">
                    <Icon aria-hidden className="h-4 w-4 text-kompa-gold" />
                    {label}
                  </span>
                  <ExternalLink aria-hidden className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {epkFacts.map(([label, value]) => (
              <div key={label} className="stat-tile p-5">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-kompa-gold">
                  {label}
                </p>
                <p className="mt-3 text-lg font-black uppercase leading-tight text-cream">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Press Photos"
              title="Visuals for decks, flyers, and media"
              description="Existing image assets staged as a press photo area for promoters, venues, festivals, and brand teams."
            />
            <ButtonLink href="/press" variant="ghost">
              View Archive
            </ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {pressPhotos.map((photo) => (
              <SafeImage
                key={photo.src}
                src={photo.src}
                alt={`M!TCHFACTOR!AL press photo - ${photo.usage}`}
                aspectClass="aspect-[4/5]"
                className="border border-cream/10 shadow-[0_0_54px_rgba(18,60,255,0.12)]"
              />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="metal-panel p-5 sm:p-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-kompa-gold">
              <CalendarDays aria-hidden className="h-4 w-4" />
              Past Highlights
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((event) => (
                <div key={`${event.title}-${event.date}`} className="stat-tile p-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-kompa-gold">
                    {formatEventDate(event.date)}
                  </p>
                  <h3 className="mt-3 text-lg font-black uppercase leading-tight text-cream">
                    {event.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-cream/58">
                    <MapPin
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-haitian-blue"
                    />
                    {event.venue}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="metal-panel p-5 sm:p-6">
            <Users aria-hidden className="h-6 w-6 text-kompa-gold" />
            <h2 className="mt-5 text-2xl font-black uppercase text-cream">
              Sistars in Sound Affiliation
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/70">
              Sistars in Sound is part of the creative and community context
              around M!TCHFACTOR!AL: a wider network of selectors, cultural
              builders, and live-set moments that reinforces her place in
              Brooklyn nightlife and beyond.
            </p>
            <div className="mt-6">
              <ButtonLink href="/watch" variant="secondary">
                Watch Sets
              </ButtonLink>
            </div>
          </article>
        </section>

        <section className="mt-16 rounded-card border border-kompa-gold/30 bg-black2 p-6 shadow-[0_0_70px_rgba(255,209,102,0.1)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              eyebrow="Booking CTA"
              title="Need a room moved with culture and precision?"
              description="For clubs, festivals, brand events, cultural rooms, private parties, media, and EPK requests."
            />
            <ButtonLink
              href="/booking"
              variant="primary"
              icon={<Sparkles aria-hidden className="h-4 w-4" />}
            >
              Start Booking
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
