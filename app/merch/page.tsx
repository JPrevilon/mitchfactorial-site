import { Mail, Radio, Shirt } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import JoinSignalSignup from "@/components/JoinSignalSignup";
import SafeImage from "@/components/SafeImage";
import {
  merchProducts,
  siteConfig,
  type MerchProduct,
} from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Merch",
  description:
    "Limited M!TCHFACTOR!AL merch featuring two premium tee designs.",
  path: "/merch",
});

const dropDetails = [
  ["Price", "$49.99"],
  ["Status", "Coming Soon"],
  ["Fit", "Unisex"],
  ["Colorways", "Black / White"],
  ["Drop", "Concept Preview"],
];

const dropAccessHref = `mailto:${siteConfig.bookingEmail}?subject=${encodeURIComponent(
  "M!F Drop Access",
)}`;

function getInquiryHref(productName: string) {
  const subject = encodeURIComponent(`M!TCHFACTOR!AL Merch: ${productName}`);
  const body = encodeURIComponent(
    `Hi M!TCHFACTOR!AL team,\n\nI'm interested in the ${productName}. Please send drop details when it becomes available.`,
  );

  return `mailto:${siteConfig.bookingEmail}?subject=${subject}&body=${body}`;
}

function ProductCard({ product }: { product: MerchProduct }) {
  return (
    <article className="metal-panel group/card flex h-full flex-col overflow-hidden border-kompa-gold/20 p-4 transition duration-300 hover:-translate-y-1 hover:border-kompa-gold/45 hover:shadow-[0_30px_90px_rgba(0,0,0,0.5),0_0_42px_rgba(18,60,255,0.12)] sm:p-5">
      <SafeImage
        src={product.image}
        alt={`${product.name} product mockup`}
        aspectClass="aspect-[4/3]"
        className="border border-cream/10 bg-[radial-gradient(circle_at_18%_14%,rgba(18,60,255,0.28),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(217,20,43,0.22),transparent_32%),linear-gradient(180deg,rgba(246,241,232,0.09),rgba(5,5,7,0.86))] p-3 shadow-[0_0_54px_rgba(18,60,255,0.12)] sm:p-5"
        imgClassName="object-contain drop-shadow-[0_22px_42px_rgba(0,0,0,0.45)] transition duration-500 group-hover/card:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="inline-flex rounded-card border border-kompa-gold/30 bg-kompa-gold/10 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-kompa-gold">
              {product.status}
            </span>
            <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-cream sm:text-3xl">
              {product.name}
            </h2>
          </div>
          <p className="font-display text-2xl font-black uppercase text-kompa-gold sm:text-3xl">
            {product.price}
          </p>
        </div>
        <p className="mt-4 text-sm leading-6 text-cream/68">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-card border border-cream/10 bg-cream/5 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-cream/64 transition group-hover/card:border-haitian-blue/40"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-7">
          <div className="grid gap-3 sm:grid-cols-2">
            <ButtonLink
              href={getInquiryHref(product.name)}
              variant="primary"
              icon={<Radio aria-hidden className="h-4 w-4" />}
              className="w-full"
            >
              Notify Me
            </ButtonLink>
            <ButtonLink
              href="/booking"
              variant="secondary"
              icon={<Mail aria-hidden className="h-4 w-4" />}
              className="w-full border-haitian-blue/80 bg-haitian-blue/15"
            >
              Booking / Merch Inquiry
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MerchPage() {
  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-5 lg:grid-cols-2">
          {merchProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="metal-panel p-5 sm:p-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-kompa-gold">
              <Shirt aria-hidden className="h-4 w-4" />
              Drop Details
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {dropDetails.map(([label, value]) => (
                <div key={label} className="stat-tile p-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-cream/48">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-black uppercase text-cream">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-card border border-kompa-gold/30 bg-black2/82 p-5 shadow-[0_0_70px_rgba(255,209,102,0.08)] sm:p-6">
            <p className="section-kicker text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
              First Access
            </p>
            <h2 className="mt-5 font-display text-4xl font-black uppercase leading-none text-cream sm:text-5xl">
              Want first access?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/68">
              Join the signal before the drop goes live.
            </p>
            <div className="mt-7">
              <ButtonLink
                href={dropAccessHref}
                variant="primary"
                icon={<Mail aria-hidden className="h-4 w-4" />}
              >
                Request Drop Access
              </ButtonLink>
            </div>
          </div>
        </section>

        <JoinSignalSignup className="mt-12" />
      </div>
    </div>
  );
}
