"use client";

import { motion } from "framer-motion";
import { CalendarDays, Play, Send } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import MutedHeroVideo from "@/components/MutedHeroVideo";
import { getFeaturedVideo } from "@/data/mitchfactorial-data";

export default function Hero() {
  const featuredVideo = getFeaturedVideo();

  return (
    <section className="transmission-shell relative overflow-hidden px-5 pb-5 pt-[6.45rem] sm:px-8 sm:pb-6 md:px-[4.75rem] lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(246,241,232,0.12),transparent_28rem),linear-gradient(180deg,rgba(5,5,7,0.26),rgba(5,5,7,0)_28%,rgba(5,5,7,0.82))]" />
      <div className="absolute inset-x-0 top-[5.45rem] h-px bg-gradient-to-r from-transparent via-kompa-gold/24 to-transparent" />
      <div className="hero-scan" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full flex-col items-center"
        >
          <h1
            data-text="M!TCHFACTOR!AL"
            className="hero-glitch-wordmark mb-4 w-full max-w-[calc(100vw-2.5rem)] px-2 text-center font-display text-[clamp(2.95rem,11.8vw,8.55rem)] font-black uppercase leading-[0.86] text-cream md:max-w-[calc(100vw-1.5rem)] md:text-[clamp(3.25rem,12.65vw,8.55rem)] lg:max-w-[1120px]"
          >
            <span>M!TCHFACTOR!AL</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 24, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.75, ease: "easeOut" }}
          className="relative w-full max-w-[1020px]"
        >
          <div className="absolute -inset-5 rounded-[1.45rem] bg-[radial-gradient(circle_at_20%_10%,rgba(18,60,255,0.4),transparent_34%),radial-gradient(circle_at_85%_72%,rgba(217,20,43,0.34),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(255,209,102,0.16),transparent_24%)] blur-2xl" />
          <MutedHeroVideo
            youtubeId={featuredVideo?.youtubeId}
            title={featuredVideo?.title ?? "M!TCHFACTOR!AL live set"}
            startSeconds={featuredVideo?.startSeconds}
            className="relative mx-auto aspect-[2/1]"
          />
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/booking"
              icon={<Send aria-hidden className="h-4 w-4" />}
              className="min-h-12 whitespace-nowrap px-5 text-xs tracking-[0.1em] sm:w-[16.65rem]"
            >
              Book M!TCHFACTOR!AL
            </ButtonLink>
            <ButtonLink
              href="/watch"
              variant="secondary"
              icon={<Play aria-hidden className="h-4 w-4" />}
              className="min-h-12 whitespace-nowrap px-5 text-xs tracking-[0.1em] sm:w-[12.1rem]"
            >
              Watch Sets
            </ButtonLink>
            <ButtonLink
              href="/events"
              variant="ghost"
              icon={<CalendarDays aria-hidden className="h-4 w-4" />}
              className="min-h-12 whitespace-nowrap border-haitian-red/70 px-5 text-xs tracking-[0.1em] sm:w-[15.75rem]"
            >
              Upcoming Events
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
