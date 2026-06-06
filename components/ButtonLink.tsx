import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

const variants = {
  primary:
    "border-kompa-gold bg-kompa-gold text-black shadow-[0_0_32px_rgba(255,209,102,0.26)] hover:bg-cream hover:shadow-[0_0_42px_rgba(255,209,102,0.34)]",
  secondary:
    "border-haitian-blue/70 bg-haitian-blue/15 text-cream hover:border-kompa-gold hover:bg-haitian-blue/30 hover:shadow-[0_0_34px_rgba(18,60,255,0.18)]",
  ghost:
    "border-cream/15 bg-cream/5 text-cream hover:border-haitian-red/70 hover:bg-haitian-red/15 hover:shadow-[0_0_30px_rgba(217,20,43,0.14)]",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
  external,
}: ButtonLinkProps) {
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  const content = (
    <>
      <span className="min-w-0 text-center">{children}</span>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-current/10">
        {icon ?? <ArrowRight aria-hidden className="h-4 w-4" />}
      </span>
    </>
  );
  const classes = cn(
    "focus-ring inline-flex min-h-11 max-w-full items-center justify-center gap-3 rounded-card border px-4 py-2 text-sm font-black uppercase tracking-[0.08em] transition duration-200 hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
