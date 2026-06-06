import {
  Disc3,
  Globe,
  Headphones,
  Heart,
  Map,
  Music,
  Radio,
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import MixCard from "@/components/MixCard";
import SafeImage from "@/components/SafeImage";
import SectionHeader from "@/components/SectionHeader";
import { mixes, photos, siteConfig } from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Mixes",
  description:
    "Listen to M!TCHFACTOR!AL mixes, SoundCloud archives, Spotify selections, YouTube sets, and global club sounds rooted in Brooklyn and Haitian-Caribbean rhythm.",
  path: "/mixes",
});

const frequencyMap = [
  {
    title: "Smooth gouyad",
    description: "Warm, body-led movement with kompa at the center.",
    icon: Heart,
  },
  {
    title: "Dancehall pressure",
    description: "Brooklyn party language, bass, bounce, and release.",
    icon: Disc3,
  },
  {
    title: "Afrobeats and global club",
    description: "Rhythmic cross-currents built for mixed rooms.",
    icon: Globe,
  },
  {
    title: "R&B / soul glide",
    description: "Melody, intimacy, and late-night emotional texture.",
    icon: Music,
  },
  {
    title: "Open format instinct",
    description: "Flexible selection without losing cultural specificity.",
    icon: Radio,
  },
  {
    title: "Brooklyn nightlife",
    description: "Underground edge, polished transitions, and room reading.",
    icon: Headphones,
  },
];

const soundRoute = ["Brooklyn", "Haiti", "Caribbean", "Africa", "Global Club"];

const genreChips = [
  "Kompa",
  "Raboday",
  "Afrobeats",
  "Dancehall",
  "R&B",
  "Soul",
  "World Music",
  "House",
  "Global Club",
];

export default function MixesPage() {
  const performancePhoto =
    photos.find((photo) => photo.usage.includes("performance"))?.src ??
    "/assets/photos/dj-booth-bandana.png";

  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="page-intro grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Mixes"
            title="The sound in motion"
            description="SoundCloud, Spotify, YouTube, and a map of the frequency: kompa, dancehall, afrobeats, R&B/soul, global club, and Brooklyn nightlife."
          />
          <SafeImage
            src={performancePhoto}
            alt="M!TCHFACTOR!AL performance"
            aspectClass="aspect-[16/9]"
            className="border border-kompa-gold/25"
          />
        </div>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {mixes.map((mix) => (
            <MixCard key={mix.title} mix={mix} />
          ))}
        </section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Sound Map"
              title="Brooklyn to global club"
              description="M!TCHFACTOR!AL's sound moves as a cultural transmission: Brooklyn to Haiti to the Caribbean to Africa to global club."
            />
            <ButtonLink href={siteConfig.socials.soundcloud} external variant="ghost">
              SoundCloud
            </ButtonLink>
          </div>
          <div className="metal-panel mb-4 overflow-hidden border-haitian-blue/25 p-5 shadow-[0_0_60px_rgba(18,60,255,0.12),0_0_60px_rgba(217,20,43,0.08)] sm:p-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-kompa-gold">
              <Map aria-hidden className="h-4 w-4" />
              Cultural transmission
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {soundRoute.map((place, index) => (
                <div
                  key={place}
                  className="relative rounded-card border border-cream/10 bg-black/38 p-4"
                >
                  {index < soundRoute.length - 1 ? (
                    <span className="absolute left-1/2 top-full hidden h-3 w-px bg-gradient-to-b from-kompa-gold/40 to-transparent md:left-full md:top-1/2 md:h-px md:w-3 md:bg-gradient-to-r" />
                  ) : null}
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-cream/42">
                    Signal {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-2xl font-black uppercase leading-none text-cream">
                    {place}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {genreChips.map((genre) => (
                <span
                  key={genre}
                  className="rounded-card border border-haitian-blue/30 bg-haitian-blue/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-cream/78 shadow-[0_0_24px_rgba(18,60,255,0.08)]"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frequencyMap.map(({ title, description, icon: Icon }) => (
              <article key={title} className="metal-panel p-5">
                <Icon aria-hidden className="h-6 w-6 text-kompa-gold" />
                <h3 className="mt-5 text-xl font-black uppercase text-cream">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cream/64">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-card border border-haitian-blue/25 bg-black2 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              eyebrow="Future embeds"
              title="Individual mixes can drop here later"
              description="The v1 links out cleanly. The layout is ready for SoundCloud embeds, playlist modules, or curated one-off mix cards when the archive gets deeper."
            />
            <ButtonLink href="/booking" variant="primary">
              Book a set
            </ButtonLink>
          </div>
        </section>
      </div>
    </div>
  );
}
