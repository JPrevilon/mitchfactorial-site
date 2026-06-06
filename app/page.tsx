import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Hero from "@/components/Hero";
import HomeIntroOverlay from "@/components/HomeIntroOverlay";
import HomeEventCard from "@/components/HomeEventCard";
import InlineYouTubeEmbed from "@/components/InlineYouTubeEmbed";
import JoinSignalSignup from "@/components/JoinSignalSignup";
import NextSignalCountdown from "@/components/NextSignalCountdown";
import NowPlayingSignal from "@/components/NowPlayingSignal";
import {
  getArchiveEvents,
  getUpcomingEvents,
} from "@/data/mitchfactorial-data";

export default function Home() {
  const eventPreview = [
    ...getUpcomingEvents(),
    ...getArchiveEvents(),
  ].slice(0, 4);

  return (
    <>
      <HomeIntroOverlay />
      <Hero />

      <section className="px-5 pb-3 pt-6 sm:px-8 md:px-[3.25rem] lg:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[minmax(21rem,0.42fr)_minmax(0,1fr)] md:items-center md:gap-8">
          <div className="min-w-0 max-w-[22rem]">
            <p className="section-kicker text-[0.72rem] font-black uppercase tracking-[0.18em] text-kompa-gold">
              Watch
            </p>
            <h2 className="home-condensed-title mt-9 text-[clamp(2.65rem,4.65vw,3.55rem)] font-black uppercase leading-[1.02] tracking-[0.01em] text-cream">
              <span className="block whitespace-nowrap">Featured Set</span>
              <span className="block whitespace-nowrap">Transmission</span>
            </h2>
            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-cream/64">
              Recorded booth energy with Haitian-Caribbean pulse, Brooklyn grit,
              and global club range.
            </p>
            <div className="mt-7">
              <ButtonLink
                href="/watch"
                variant="secondary"
                className="min-h-11 border-haitian-blue/80 bg-haitian-blue/15 px-5 text-xs tracking-[0.12em]"
              >
                Watch More Sets
              </ButtonLink>
            </div>
          </div>
          <InlineYouTubeEmbed
            videoId="XnLWbMiFBys"
            title="M!TCHFACTORIAL | 2 Blocks Down Radio | World Music, Afrobeats, Raboday"
            startSeconds={3138}
            className="w-full md:-mt-3"
          />
        </div>
      </section>

      <section className="px-5 pb-10 pt-0 sm:px-8 md:px-[3.25rem] lg:px-10 lg:pb-10">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-center gap-3">
              <p className="section-kicker text-[0.72rem] font-black uppercase tracking-[0.18em] text-kompa-gold">
                Upcoming Events
              </p>
              <span className="hidden h-px flex-1 bg-gradient-to-r from-kompa-gold/28 to-transparent md:block" />
            </div>
            <Link
              href="/events"
              className="focus-ring inline-flex items-center gap-3 justify-self-start text-[0.72rem] font-black uppercase tracking-[0.18em] text-cream/70 transition hover:text-kompa-gold md:justify-self-end"
            >
              View All Events
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {eventPreview.map((event) => (
              <HomeEventCard key={`${event.title}-${event.date}`} event={event} />
            ))}
          </div>
        </div>
      </section>

      <NextSignalCountdown events={getUpcomingEvents()} />

      <section className="px-5 pb-32 pt-0 sm:px-8 md:px-[3.25rem] lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-[1180px]">
          <JoinSignalSignup />
        </div>
      </section>

      <NowPlayingSignal />
    </>
  );
}
