import { ExternalLink, Play } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SafeImage from "@/components/SafeImage";
import type { Video } from "@/data/mitchfactorial-data";
import { cn } from "@/lib/cn";

export default function VideoCard({
  video,
  featured = false,
}: {
  video: Video;
  featured?: boolean;
}) {
  const url =
    video.url ??
    `https://www.youtube.com/watch?v=${video.youtubeId}${
      video.startSeconds ? `&t=${video.startSeconds}s` : ""
    }`;

  return (
    <article
      className={cn(
        "metal-panel group/card overflow-hidden hover:-translate-y-1",
        featured && "border-kompa-gold/35 shadow-[0_0_70px_rgba(255,209,102,0.12)]",
      )}
    >
      <div className="relative">
        <SafeImage
          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          fallbackSrc={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={`${video.title} thumbnail`}
          aspectClass="aspect-video"
          className="rounded-none"
          imgClassName="transition duration-500 group-hover/card:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/24 transition duration-300 group-hover/card:bg-black/10">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-kompa-gold/60 bg-black/72 text-kompa-gold shadow-[0_0_30px_rgba(255,209,102,0.22)] transition duration-300 group-hover/card:scale-110 group-hover/card:bg-kompa-gold group-hover/card:text-black">
            <Play aria-hidden className="h-6 w-6 fill-current" />
          </span>
        </div>
      </div>
      <div className="p-5">
        {video.type ? (
          <p className="text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
            {video.type}
          </p>
        ) : null}
        <h3 className="mt-3 text-xl font-black uppercase leading-tight text-cream">
          {video.title}
        </h3>
        {video.note ? (
          <p className="mt-3 text-sm leading-6 text-cream/64">{video.note}</p>
        ) : null}
        <div className="mt-5">
          <ButtonLink
            href={url}
            external
            variant="ghost"
            icon={<ExternalLink aria-hidden className="h-4 w-4" />}
          >
            Watch
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
