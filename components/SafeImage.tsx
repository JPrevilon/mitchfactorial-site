"use client";

/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes, SyntheticEvent } from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type SafeImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src?: string | null;
  fallbackSrc?: string;
  aspectClass?: string;
  imgClassName?: string;
  fallbackLabel?: string;
};

export default function SafeImage({
  src,
  fallbackSrc,
  alt,
  className,
  imgClassName,
  aspectClass = "aspect-[4/5]",
  fallbackLabel = "M!F",
  loading,
  onError,
  ...imgProps
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src ?? fallbackSrc ?? "");
  const [failed, setFailed] = useState(!src && !fallbackSrc);

  function handleError(event: SyntheticEvent<HTMLImageElement, Event>) {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }

    onError?.(event);
  }

  return (
    <div
      className={cn(
        "image-frame relative overflow-hidden rounded-card bg-black2",
        aspectClass,
        className,
      )}
    >
      {!failed && currentSrc ? (
        <img
          {...imgProps}
          src={currentSrc}
          alt={alt}
          loading={loading ?? "lazy"}
          decoding="async"
          onError={handleError}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(18,60,255,0.34),transparent_34%),radial-gradient(circle_at_75%_65%,rgba(217,20,43,0.28),transparent_32%),linear-gradient(135deg,rgba(255,209,102,0.16),rgba(5,5,7,0.92))]">
          <span className="font-display text-2xl font-black text-cream/70">
            {fallbackLabel}
          </span>
        </div>
      )}
    </div>
  );
}
