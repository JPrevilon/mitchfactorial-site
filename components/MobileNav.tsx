"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-card border border-cream/15 bg-black text-cream shadow-[0_0_26px_rgba(18,60,255,0.16)] transition hover:border-kompa-gold/60"
      >
        {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ y: -8, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -8, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-4 top-[5.95rem] z-50 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-card border border-cream/14 bg-black p-3 shadow-[0_18px_70px_rgba(0,0,0,0.72),0_0_34px_rgba(18,60,255,0.16)]"
          >
            <div className="grid gap-2">
              {links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-card border px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-cream transition hover:border-haitian-blue/60 hover:bg-black2",
                      active
                        ? "gold-readable border-kompa-gold bg-kompa-gold text-black"
                        : "border-cream/10 bg-black2",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
