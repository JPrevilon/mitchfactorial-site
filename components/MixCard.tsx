import type { SVGProps } from "react";
import { ExternalLink } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import type { Mix } from "@/data/mitchfactorial-data";

function SoundCloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden {...props}>
      <path d="M12.3 20.8h17.1a3.7 3.7 0 0 0 0-7.4 4.8 4.8 0 0 0-1.1.1 7.4 7.4 0 0 0-14.2-2.4v9.7h-1.8Zm-2.8 0h1.3V10.2a6.9 6.9 0 0 0-1.3.7v9.9Zm-3 0h1.2v-8.7a6.9 6.9 0 0 0-1.2 1.7v7Zm-3 0h1.1v-5.3a6.7 6.7 0 0 0-1.1 3.7v1.6Zm-2.6 0h1v-2.2a4.2 4.2 0 0 0-1 2.2Z" />
    </svg>
  );
}

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden {...props}>
      <path d="M16 2.7a13.3 13.3 0 1 0 0 26.6 13.3 13.3 0 0 0 0-26.6Zm6.1 19.2a1.1 1.1 0 0 1-1.5.4c-4.1-2.5-9.2-3.1-15.2-1.7a1.1 1.1 0 0 1-.5-2.1c6.6-1.5 12.3-.9 16.8 1.9.6.3.8 1 .4 1.5Zm1.6-4a1.3 1.3 0 0 1-1.8.4c-4.7-2.9-11.9-3.7-17.5-2a1.3 1.3 0 1 1-.8-2.5c6.4-1.9 13.9-1 19.2 2.3.7.4.9 1.2.5 1.9Zm.1-4.2c-5.7-3.4-15-3.7-20.4-2a1.5 1.5 0 1 1-.9-2.8c6.2-1.9 16-1.6 22.4 2.2a1.5 1.5 0 0 1-1.1 2.6Z" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden {...props}>
      <path d="M29.1 9.2a3.7 3.7 0 0 0-2.6-2.6C24.2 6 16 6 16 6s-8.2 0-10.5.6a3.7 3.7 0 0 0-2.6 2.6A38.6 38.6 0 0 0 2.3 16c0 2.3.2 4.6.6 6.8a3.7 3.7 0 0 0 2.6 2.6c2.3.6 10.5.6 10.5.6s8.2 0 10.5-.6a3.7 3.7 0 0 0 2.6-2.6c.4-2.2.6-4.5.6-6.8 0-2.3-.2-4.6-.6-6.8ZM13.2 20.3v-8.6l7.2 4.3-7.2 4.3Z" />
    </svg>
  );
}

function getPlatformIcon(platform: string) {
  const normalized = platform.toLowerCase();

  if (normalized.includes("soundcloud")) {
    return SoundCloudIcon;
  }

  if (normalized.includes("spotify")) {
    return SpotifyIcon;
  }

  if (normalized.includes("youtube")) {
    return YouTubeIcon;
  }

  return SoundCloudIcon;
}

export default function MixCard({ mix }: { mix: Mix }) {
  const PlatformIcon = getPlatformIcon(mix.platform);

  return (
    <article className="metal-panel group/card flex h-full flex-col p-5 hover:-translate-y-1">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-card border border-kompa-gold/55 bg-kompa-gold text-black shadow-[0_0_30px_rgba(255,209,102,0.16)]">
        <PlatformIcon className="h-6 w-6" />
      </div>
      {mix.platform ? (
        <p className="text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
          {mix.platform}
        </p>
      ) : null}
      <h3 className="mt-3 text-xl font-black uppercase text-cream">
        {mix.title}
      </h3>
      {mix.description ? (
        <p className="mt-3 text-sm leading-6 text-cream/64">
          {mix.description}
        </p>
      ) : null}
      {mix.tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {mix.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-card border border-cream/10 bg-cream/5 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-cream/68 transition group-hover/card:border-haitian-blue/35"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-auto pt-6">
        <ButtonLink
          href={mix.url}
          external
          variant="secondary"
          icon={<ExternalLink aria-hidden className="h-4 w-4" />}
        >
          Listen
        </ButtonLink>
      </div>
    </article>
  );
}
