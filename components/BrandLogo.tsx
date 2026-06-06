import Link from "next/link";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  compact?: boolean;
  href?: string;
  className?: string;
};

const logoSrc = "/assets/branding/mf-logo.png?v=transparent-m-logo";

export default function BrandLogo({
  compact = false,
  href = "/",
  className,
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label="M!TCHFACTOR!AL home"
      className={cn(
        "brand-logo-image focus-ring group inline-flex items-center justify-center transition duration-200 hover:-translate-y-0.5",
        compact ? "h-10 w-10 sm:h-11 sm:w-11" : "h-14 w-14 sm:h-16 sm:w-16",
        className,
      )}
    >
      <img
        src={logoSrc}
        alt="M!TCHFACTOR!AL logo"
        width="1254"
        height="1254"
        decoding="async"
        className="h-full w-full bg-transparent object-contain drop-shadow-[0_0_16px_rgba(246,241,232,0.2)] transition duration-200 group-hover:drop-shadow-[0_0_24px_rgba(255,209,102,0.28)]"
      />
    </Link>
  );
}
