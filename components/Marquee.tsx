"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const content = `${items.join(" • ")} •`;

  return (
    <div
      className={cn(
        "marquee-mask overflow-hidden border-y border-cream/10 bg-black2/80 py-3",
        className,
      )}
    >
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] text-cream/74"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      >
        <span>{content}</span>
        <span aria-hidden>{content}</span>
        <span aria-hidden>{content}</span>
        <span aria-hidden>{content}</span>
      </motion.div>
    </div>
  );
}
