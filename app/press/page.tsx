import { Archive, Camera, Mail, Newspaper } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import PressCard from "@/components/PressCard";
import SafeImage from "@/components/SafeImage";
import SectionHeader from "@/components/SectionHeader";
import {
  archiveEvents,
  photos,
  press,
  siteConfig,
} from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Press / Archive",
  description:
    "Press, interviews, media embeds, flyers, and community highlights from the M!TCHFACTOR!AL archive.",
  path: "/press",
});

const futureFeatures = [
  "Long-form DJ interview",
  "Community spotlight",
  "Festival recap",
];

export default function PressPage() {
  const communityPhoto =
    photos.find((photo) => photo.usage.includes("community"))?.src ??
    "/assets/photos/group-dj-booth.png";
  const personalityPhoto =
    photos.find((photo) => photo.usage.includes("personality"))?.src ??
    "/assets/photos/party-peace-bandana.png";

  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="page-intro grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeader
            eyebrow="Press / Archive"
            title="Interviews, features, and cultural context"
            description="A press-ready surface for interviews, media links, flyers, and community highlights from the M!TCHFACTOR!AL universe."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <SafeImage
              src={communityPhoto}
              alt="M!TCHFACTOR!AL community highlight"
              aspectClass="aspect-[5/4]"
              className="border border-haitian-blue/25"
            />
            <SafeImage
              src={personalityPhoto}
              alt="M!TCHFACTOR!AL archive moment"
              aspectClass="aspect-[5/4]"
              className="border border-haitian-red/25"
            />
          </div>
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-cream/58">
            <Newspaper aria-hidden className="h-4 w-4 text-kompa-gold" />
            Current press
          </div>
          <div className="grid gap-4">
            {press.map((item) => (
              <PressCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {futureFeatures.map((title) => (
            <article key={title} className="metal-panel p-5">
              <span className="rounded-card border border-kompa-gold/30 bg-kompa-gold/10 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-kompa-gold">
                Coming soon
              </span>
              <h3 className="mt-5 text-xl font-black uppercase text-cream">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/64">
                Reserved for future interviews, features, and cultural writing
                without pretending coverage exists before it does.
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Archive highlights"
              title="Flyers and community receipts"
              description="A compact look at the rooms, nights, and visual language around the brand."
            />
            <ButtonLink href="/events" variant="ghost">
              Full event archive
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {archiveEvents.slice(0, 4).map((event) => (
              <article
                key={`${event.title}-${event.date}`}
                className="group overflow-hidden rounded-card border border-cream/10 bg-black2"
              >
                <SafeImage
                  src={event.flyer}
                  alt={`${event.title} flyer`}
                  aspectClass="aspect-[4/5]"
                  className="rounded-none"
                  imgClassName="transition duration-500 group-hover:scale-105"
                />
                <div className="p-3">
                  <p className="text-xs font-black uppercase text-kompa-gold">
                    {event.date}
                  </p>
                  <h3 className="mt-1 text-sm font-black uppercase leading-tight text-cream">
                    {event.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-card border border-haitian-blue/25 bg-black2 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeader
              eyebrow="For media"
              title="Need bio, photos, video, or interview access?"
              description="Use the booking inbox for press inquiries, community features, cultural context, and EPK requests."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink
                href={`mailto:${siteConfig.bookingEmail}`}
                variant="primary"
                icon={<Mail aria-hidden className="h-4 w-4" />}
              >
                Contact media
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="ghost"
                icon={<Archive aria-hidden className="h-4 w-4" />}
              >
                View EPK
              </ButtonLink>
            </div>
          </div>
        </section>

        <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-cream/42">
          <Camera aria-hidden className="h-4 w-4" />
          Built as a living archive for future coverage.
        </div>
      </div>
    </div>
  );
}
