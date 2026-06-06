import { Play, Radio, Star } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SectionHeader from "@/components/SectionHeader";
import VideoCard from "@/components/VideoCard";
import { getFeaturedVideo, videos } from "@/data/mitchfactorial-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Watch",
  description:
    "Watch M!TCHFACTOR!AL live sets, radio sessions, interviews, and visual proof of her Brooklyn-to-global DJ universe.",
  path: "/watch",
});

function getEmbedSrc(youtubeId: string, startSeconds = 0) {
  return `https://www.youtube.com/embed/${youtubeId}?controls=1&playsinline=1&rel=0&modestbranding=1&start=${startSeconds}`;
}

export default function WatchPage() {
  const featuredVideo = getFeaturedVideo();

  return (
    <div className="px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {featuredVideo ? (
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="metal-panel overflow-hidden p-2">
              <iframe
                src={getEmbedSrc(
                  featuredVideo.youtubeId,
                  featuredVideo.startSeconds,
                )}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full rounded-[6px] border-0"
              />
            </div>
            <div className="metal-panel p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
                Featured transmission
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-cream">
                {featuredVideo.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-cream/68">
                A top-level proof point for the M!TCHFACTOR!AL live universe:
                cultural pulse, booth command, and a camera-ready view of the
                sound in motion.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={featuredVideo.url}
                  external
                  variant="primary"
                  icon={<Play aria-hidden className="h-4 w-4" />}
                >
                  Open on YouTube
                </ButtonLink>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Video archive"
              title="Sets, sessions, interviews"
              description="Thumbnail cards keep the page fast while making every source video easy to open."
            />
            <ButtonLink href="/booking" variant="ghost">
              Request EPK
            </ButtonLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.youtubeId}
                video={video}
                featured={video.featured}
              />
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Star,
              title: "Featured live proof",
              copy: "Hero-ready video evidence for booking decks and promoter outreach.",
            },
            {
              icon: Radio,
              title: "Radio and interview clips",
              copy: "Context for the selector, curator, and cultural connector behind the sound.",
            },
            {
              icon: Play,
              title: "Embeds ready",
              copy: "The page can expand into modal or inline players as the archive grows.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <article key={title} className="metal-panel p-5">
              <Icon aria-hidden className="h-6 w-6 text-kompa-gold" />
              <h3 className="mt-5 text-xl font-black uppercase text-cream">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/64">{copy}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
