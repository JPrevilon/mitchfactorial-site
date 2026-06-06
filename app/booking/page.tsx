import {
  Building2,
  CalendarDays,
  Clock,
  Headphones,
  Mail,
  Mic2,
  Radio,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import ButtonLink from "@/components/ButtonLink";
import SafeImage from "@/components/SafeImage";
import SectionHeader from "@/components/SectionHeader";
import { photos, siteConfig } from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Booking",
  description:
    "Book M!TCHFACTOR!AL for club sets, festivals, private events, brand activations, radio guest mixes, hosting, and curation.",
  path: "/booking",
});

const bookingCategories = [
  {
    icon: Building2,
    title: "Club Set",
    copy: "High-energy nightlife sets built for movement, room reading, and Haitian-Caribbean global club pressure.",
  },
  {
    icon: Sparkles,
    title: "Festival Set",
    copy: "Scalable stage energy for outdoor crowds, cultural festivals, music programs, and multi-DJ lineups.",
  },
  {
    icon: Users,
    title: "Private Event",
    copy: "Polished sound direction for celebrations, intimate rooms, milestone events, and curated social gatherings.",
  },
  {
    icon: CalendarDays,
    title: "Brand Activation",
    copy: "Stylish, culturally fluent music for launches, retail moments, media events, and experiential campaigns.",
  },
  {
    icon: Headphones,
    title: "Radio / Guest Mix",
    copy: "Recorded sets, guest mixes, station takeovers, and editorial audio moments with a clear sonic identity.",
  },
  {
    icon: Mic2,
    title: "Hosting / Curation",
    copy: "Programming, hosting, lineup support, and cultural curation for rooms that need a point of view.",
  },
];

const bookingDetails = [
  {
    icon: Mail,
    title: "Direct inbox",
    copy: siteConfig.bookingEmail,
  },
  {
    icon: Clock,
    title: "Send context",
    copy: "Include date, city, venue, audience, set length, budget range, and sound direction.",
  },
  {
    icon: Radio,
    title: "Best fit",
    copy: "Premium cultural rooms, nightlife, festivals, brand moments, and media with real dancefloor intention.",
  },
];

const directInquiryHref = `mailto:${siteConfig.bookingEmail}?subject=${encodeURIComponent(
  "M!TCHFACTOR!AL Booking Inquiry",
)}`;

export default function BookingPage() {
  const bookingPhoto =
    photos.find((photo) => photo.usage.includes("personality"))?.src ??
    "/assets/photos/party-peace-bandana.png";

  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="page-intro grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Bookings"
              title="Bring the frequency to your room"
              description="Professional booking inquiries for clubs, festivals, brands, private events, radio, guest mixes, hosting, and curated cultural rooms."
            />
            <p className="mt-6 max-w-2xl text-sm leading-7 text-cream/68">
              Use the form below to generate a complete email inquiry. For the
              fastest response, include date, city, venue, budget, audience, set
              length, and the kind of energy you want in the room.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={directInquiryHref}
                variant="primary"
                icon={<Send aria-hidden className="h-4 w-4" />}
              >
                Email Booking Inbox
              </ButtonLink>
              <ButtonLink href="/about" variant="ghost">
                View EPK
              </ButtonLink>
            </div>
          </div>
          <SafeImage
            src={bookingPhoto}
            alt="M!TCHFACTOR!AL booking portrait"
            aspectClass="aspect-[5/4]"
            className="border border-haitian-red/25 shadow-[0_0_70px_rgba(217,20,43,0.12)]"
          />
        </div>

        <section className="mt-14">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Booking Categories"
              title="What you can book"
              description="Promoters, venues, festivals, and brands can use these categories to frame the right inquiry."
            />
            <ButtonLink href={directInquiryHref} variant="secondary">
              Start With Email
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {bookingCategories.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="metal-panel p-5 hover:-translate-y-1">
                <Icon aria-hidden className="h-6 w-6 text-kompa-gold" />
                <h2 className="mt-5 text-xl font-black uppercase text-cream">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-cream/64">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="grid gap-4">
            {bookingDetails.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="metal-panel p-5">
                <Icon aria-hidden className="h-5 w-5 text-kompa-gold" />
                <h2 className="mt-4 text-xl font-black uppercase text-cream">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-cream/64">{copy}</p>
              </article>
            ))}
            <SafeImage
              src={bookingPhoto}
              alt="M!TCHFACTOR!AL booking portrait"
              aspectClass="aspect-[5/4]"
              className="mt-8 border border-haitian-red/25"
            />
          </div>
          <div>
            <div className="mb-5">
              <SectionHeader
                eyebrow="Inquiry Form"
                title="Send the booking context"
                description={`This form opens a pre-filled email to ${siteConfig.bookingEmail}.`}
              />
            </div>
            <BookingForm />
            <p className="mt-4 text-xs leading-5 text-cream/42">
              This v1 form opens a pre-filled email. Add Formspree or a similar
              backend later if direct form delivery is needed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
