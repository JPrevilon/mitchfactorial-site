import Link from "next/link";
import { BookOpen, Disc3, Play, Radio } from "lucide-react";

const links = [
  { label: "Watch", href: "/watch", icon: Play },
  { label: "Mixes", href: "/mixes", icon: Disc3 },
  { label: "Book", href: "/booking", icon: BookOpen },
];

export default function NowPlayingSignal() {
  return (
    <aside
      aria-label="Now playing signal"
      className="fixed inset-x-4 bottom-4 z-30 rounded-card border border-cream/12 bg-black/72 p-3 shadow-[0_0_40px_rgba(18,60,255,0.12),0_0_34px_rgba(217,20,43,0.1)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:w-[min(34rem,calc(100vw-2.5rem))]"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card border border-kompa-gold/30 bg-kompa-gold/10 text-kompa-gold">
            <Radio aria-hidden className="h-4 w-4" />
          </span>
          <p className="min-w-0 text-[0.68rem] font-black uppercase leading-5 tracking-[0.12em] text-cream/78">
            <span className="text-kompa-gold">Now Playing:</span>{" "}
            <span>2 Blocks Down Radio · M!TCHFACTOR!AL</span>
          </p>
        </div>
        <nav aria-label="Now playing links" className="flex gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="focus-ring inline-flex min-h-9 flex-1 items-center justify-center gap-2 rounded-card border border-cream/10 bg-cream/5 px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.1em] text-cream/78 transition hover:border-kompa-gold/50 hover:bg-kompa-gold hover:text-black sm:flex-none"
            >
              <Icon aria-hidden className="h-3.5 w-3.5" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
