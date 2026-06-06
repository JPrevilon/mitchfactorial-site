import { ExternalLink, Newspaper } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import type { PressItem } from "@/data/mitchfactorial-data";

function getPressEmbedSrc(item: PressItem) {
  if (!item.youtubeId) {
    return null;
  }

  return `https://www.youtube.com/embed/${item.youtubeId}?controls=1&playsinline=1&rel=0&modestbranding=1&start=${item.startSeconds ?? 0}`;
}

function formatStartTime(startSeconds?: number) {
  if (!startSeconds) {
    return null;
  }

  const minutes = Math.floor(startSeconds / 60);
  const seconds = String(startSeconds % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export default function PressCard({ item }: { item: PressItem }) {
  const embedSrc = getPressEmbedSrc(item);
  const startTime = formatStartTime(item.startSeconds);

  if (embedSrc) {
    return (
      <article className="metal-panel p-4 sm:p-5">
        <div className="mb-5 flex gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-haitian-red/40 bg-haitian-red/12 text-kompa-gold">
            <Newspaper aria-hidden className="h-5 w-5" />
          </div>
          <div>
            {item.type ? (
              <p className="text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
                {item.type}
              </p>
            ) : null}
            <h3 className="mt-2 text-xl font-black uppercase text-cream">
              {item.title}
            </h3>
            {startTime ? (
              <p className="mt-2 text-sm leading-6 text-cream/64">
                Embedded interview starts at {startTime}.
              </p>
            ) : null}
          </div>
        </div>
        <div className="overflow-hidden rounded-card border border-haitian-blue/35 bg-black shadow-[0_0_46px_rgba(18,60,255,0.16)]">
          <iframe
            src={embedSrc}
            title={item.title}
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="aspect-video w-full border-0"
          />
        </div>
      </article>
    );
  }

  return (
    <article className="metal-panel flex flex-col gap-5 p-5 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-haitian-red/40 bg-haitian-red/12 text-kompa-gold">
          <Newspaper aria-hidden className="h-5 w-5" />
        </div>
        <div>
          {item.type ? (
            <p className="text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
              {item.type}
            </p>
          ) : null}
          <h3 className="mt-2 text-xl font-black uppercase text-cream">
            {item.title}
          </h3>
          {item.description ? (
            <p className="mt-2 text-sm leading-6 text-cream/64">
              {item.description}
            </p>
          ) : null}
        </div>
      </div>
      <ButtonLink
        href={item.url}
        external
        variant="ghost"
        icon={<ExternalLink aria-hidden className="h-4 w-4" />}
        className="shrink-0"
      >
        Open
      </ButtonLink>
    </article>
  );
}
