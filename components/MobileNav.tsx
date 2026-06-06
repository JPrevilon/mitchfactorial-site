"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/lib/cn";

type NavLink = {
  label: string;
  href: string;
};

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-card border border-cream/15 bg-black2/80 text-cream shadow-[0_0_26px_rgba(18,60,255,0.16)] transition hover:border-kompa-gold/60"
      >
        {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/94 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(18,60,255,0.24),transparent_22rem),radial-gradient(circle_at_80%_26%,rgba(217,20,43,0.2),transparent_22rem),linear-gradient(180deg,rgba(255,209,102,0.08),transparent_40%)]" />
            <div className="relative flex items-center justify-between px-4 py-5">
              <BrandLogo />
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-card border border-cream/15 bg-black2 text-cream"
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative grid gap-2 px-4 pt-8"
            >
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-card border px-5 py-4 text-2xl font-black uppercase text-cream transition hover:translate-x-1",
                      active
                        ? "border-kompa-gold bg-kompa-gold text-black"
                        : "border-cream/10 bg-cream/5 hover:border-haitian-blue/60",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
