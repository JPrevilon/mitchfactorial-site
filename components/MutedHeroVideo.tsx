import { VolumeX } from "lucide-react";
import { cn } from "@/lib/cn";

type MutedHeroVideoProps = {
  youtubeId?: string;
  localSrc?: string;
  title?: string;
  startSeconds?: number;
  className?: string;
};

export default function MutedHeroVideo({
  youtubeId,
  localSrc,
  title = "Muted live video",
  startSeconds = 0,
  className,
}: MutedHeroVideoProps) {
  const youtubeSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=1&playsinline=1&loop=1&playlist=${youtubeId}&rel=0&modestbranding=1&start=${startSeconds}`
    : undefined;

  return (
    <div
      className={cn(
        "metal-panel relative aspect-video overflow-hidden border-haitian-blue/55 p-1.5 shadow-[0_0_0_1px_rgba(217,20,43,0.45),0_0_46px_rgba(18,60,255,0.28),0_0_54px_rgba(217,20,43,0.18)] sm:p-2",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,60,255,0.28),transparent_32%,rgba(217,20,43,0.26))]" />
      {localSrc ? (
        <video
          className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-[6px] object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src={localSrc} type="video/webm" />
        </video>
      ) : null}
      {youtubeSrc ? (
        <iframe
          src={youtubeSrc}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="relative z-10 h-full w-full rounded-[6px] border-0 opacity-95 saturate-125"
        />
      ) : localSrc ? (
        <video
          className="relative z-10 h-full w-full rounded-[6px] object-cover opacity-82"
          autoPlay
          muted
          loop
          playsInline
          aria-label={title}
        >
          <source src={localSrc} type="video/webm" />
        </video>
      ) : (
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[6px] bg-[radial-gradient(circle_at_center,rgba(255,209,102,0.18),rgba(11,11,16,0.88))]">
          <VolumeX aria-hidden className="h-10 w-10 text-kompa-gold" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-2 z-20 rounded-[6px] border border-cream/10 bg-[linear-gradient(to_bottom,rgba(246,241,232,0.12),transparent_18%,transparent_78%,rgba(5,5,7,0.52))]" />
    </div>
  );
}
