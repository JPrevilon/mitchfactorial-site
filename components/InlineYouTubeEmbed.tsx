import { cn } from "@/lib/cn";

type InlineYouTubeEmbedProps = {
  videoId: string;
  title: string;
  startSeconds?: number;
  className?: string;
};

export default function InlineYouTubeEmbed({
  videoId,
  title,
  startSeconds = 0,
  className,
}: InlineYouTubeEmbedProps) {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0&modestbranding=1&start=${startSeconds}`;

  return (
    <div
      className={cn(
        "metal-panel relative aspect-video overflow-hidden border-haitian-blue/50 p-1.5 shadow-[0_0_0_1px_rgba(217,20,43,0.38),0_0_48px_rgba(18,60,255,0.2)] sm:p-2",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,60,255,0.2),transparent_34%,rgba(217,20,43,0.18))]" />
      <iframe
        src={src}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="relative z-10 h-full w-full rounded-[6px] border-0"
      />
      <div className="pointer-events-none absolute inset-2 z-20 rounded-[6px] border border-cream/10 bg-[linear-gradient(to_bottom,rgba(246,241,232,0.1),transparent_20%,transparent_78%,rgba(5,5,7,0.42))]" />
    </div>
  );
}
