"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { y: 14, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="section-kicker mb-4 text-xs font-black uppercase tracking-[0.18em] text-kompa-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-4xl font-black uppercase leading-[0.95] text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-cream/68 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
