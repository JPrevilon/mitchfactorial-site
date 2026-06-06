import {
  Camera,
  Music,
  Play,
  Radio,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { siteConfig } from "@/data/mitchfactorial-data";

const socials = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: Camera },
  { label: "SoundCloud", href: siteConfig.socials.soundcloud, icon: Radio },
  { label: "YouTube", href: siteConfig.socials.youtube, icon: Play },
  { label: "Spotify", href: siteConfig.socials.spotify, icon: Music },
];

export default function Footer() {
  return (
    <footer className="border-t border-kompa-gold/18 px-5 py-7 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 text-center lg:grid-cols-[auto_1fr_auto] lg:items-center lg:text-left">
        <div className="flex items-center justify-center gap-5 sm:gap-6 lg:justify-start">
          <BrandLogo />
        </div>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/72 transition hover:-translate-y-0.5 hover:text-kompa-gold"
            >
              <Icon aria-hidden className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-xs font-medium uppercase leading-6 tracking-[0.13em] text-cream/62 lg:text-right">
          © 2025 M!TCHFACTOR!AL.
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
