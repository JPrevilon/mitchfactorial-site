"use client";

import { motion, useReducedMotion } from "framer-motion";
import SafeImage from "@/components/SafeImage";

export default function FloatingPortraits() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <motion.div
        initial={reduceMotion ? undefined : { x: -26, opacity: 0 }}
        animate={
          reduceMotion
            ? undefined
            : { x: 0, opacity: 0.58, y: [0, -14, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                opacity: { duration: 0.8 },
                x: { duration: 0.8, ease: "easeOut" },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="absolute left-3 top-[30%] hidden w-40 rotate-[-5deg] blur-[0.5px] lg:block xl:left-10 xl:w-48"
      >
        <SafeImage
          src="/assets/photos/portrait-sunglasses-white-wall.png"
          alt=""
          aspectClass="aspect-[3/4]"
          className="rounded-card border border-haitian-blue/30 shadow-[0_0_48px_rgba(18,60,255,0.26)]"
        />
      </motion.div>
      <motion.div
        initial={reduceMotion ? undefined : { x: 26, opacity: 0 }}
        animate={
          reduceMotion
            ? undefined
            : { x: 0, opacity: 0.64, y: [0, 16, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                opacity: { duration: 0.8, delay: 0.08 },
                x: { duration: 0.8, ease: "easeOut" },
                y: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="absolute right-3 top-[26%] hidden w-44 rotate-[4deg] blur-[0.5px] lg:block xl:right-10 xl:w-56"
      >
        <SafeImage
          src="/assets/photos/hero-red-yellow-circle.png"
          alt=""
          aspectClass="aspect-[3/4]"
          className="rounded-card border border-haitian-red/30 shadow-[0_0_48px_rgba(217,20,43,0.22)]"
        />
      </motion.div>
    </div>
  );
}
