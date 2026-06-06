"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import MobileNav from "@/components/MobileNav";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/mitchfactorial-data";

export default function NavBar() {
  const pathname = usePathname();
  const primaryLinks = siteConfig.nav.filter((link) =>
    ["Events", "Watch", "Mixes", "About", "Press", "Merch"].includes(link.label),
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-cream/10 bg-black/82 shadow-[0_10px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl">
      <div className="mx-auto grid h-[5.45rem] max-w-[1180px] grid-cols-[auto_auto] items-center justify-between px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <BrandLogo className="-ml-1" />
        <nav aria-label="Primary" className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-8">
          {primaryLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring relative rounded-card px-1 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-cream/86 transition",
                  active
                    ? "text-kompa-gold"
                    : "hover:text-kompa-gold",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-1 -bottom-0.5 h-px rounded-full bg-kompa-gold"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center justify-end md:flex">
          <Link
            href="/booking"
            className="focus-ring inline-flex h-10 items-center gap-3 rounded-card border border-haitian-red/75 bg-haitian-red/10 px-5 text-xs font-black uppercase tracking-[0.18em] text-cream shadow-[0_0_34px_rgba(217,20,43,0.2)] transition hover:-translate-y-0.5 hover:border-kompa-gold hover:bg-kompa-gold hover:text-black hover:shadow-[0_0_42px_rgba(255,209,102,0.24)]"
          >
            <Radio aria-hidden className="h-4 w-4" />
            Book
          </Link>
        </div>
        <MobileNav links={siteConfig.nav} />
      </div>
    </header>
  );
}
