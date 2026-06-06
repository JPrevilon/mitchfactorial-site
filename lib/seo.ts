import type { Metadata } from "next";

export const siteName = "M!TCHFACTOR!AL";
export const siteUrl = "https://mitchfactorial.com";
export const siteTitle =
  "M!TCHFACTOR!AL | Brooklyn DJ, Global Club Sounds";
export const siteDescription =
  "M!TCHFACTOR!AL is a Brooklyn-based Haitian-Caribbean DJ bringing global club energy, Afrobeats, kompa, dancehall, raboday, and dancefloor storytelling to stages across the U.S.";

export const socialImage = {
  url: "/assets/branding/mf-logo-2.png",
  width: 1254,
  height: 1254,
  alt: "M!TCHFACTOR!AL M logo on black background",
};

export const seoKeywords = [
  "M!TCHFACTOR!AL",
  "MitchFactorial",
  "Brooklyn DJ",
  "Haitian-Caribbean DJ",
  "Afrobeats DJ",
  "kompa DJ",
  "dancehall DJ",
  "raboday",
  "global club sounds",
  "Sistars in Sound",
];

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: CreateMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
  };
}
