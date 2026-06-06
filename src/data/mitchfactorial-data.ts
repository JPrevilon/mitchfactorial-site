export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  displayName: string;
  canonicalName: string;
  tagline: string;
  location: string;
  bookingEmail: string;
  nav: NavItem[];
  socials: {
    instagram: string;
    youtube: string;
    soundcloud: string;
    spotify: string;
    linktree: string;
  };
};

export type Brand = {
  colors: {
    black: string;
    black2: string;
    cream: string;
    haitianBlue: string;
    haitianRed: string;
    kompaGold: string;
    neonPink: string;
    violet: string;
  };
};

export type Photo = {
  src: string;
  usage: string;
};

export type Video = {
  title: string;
  youtubeId: string;
  featured?: boolean;
  startSeconds?: number;
  note?: string;
  url: string;
  type?: string;
};

export type Mix = {
  title: string;
  platform: string;
  description: string;
  url: string;
  tags: string[];
};

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  venue: string;
  city?: string;
  url?: string;
  flyer?: string;
  note?: string;
  tags?: string[];
};

export type PressItem = {
  title: string;
  url: string;
  youtubeId?: string;
  startSeconds?: number;
  type?: string;
  description?: string;
};

export type MerchProduct = {
  name: string;
  price: string;
  image: string;
  description: string;
  status: string;
  tags: string[];
};

export const siteConfig = {
  displayName: "M!TCHFACTOR!AL",
  canonicalName: "MitchFactorial",
  tagline: "Brooklyn Frequencies. Global Dancefloors.",
  location: "Brooklyn, New York",
  bookingEmail: "Info@MitchFactorial.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Watch", href: "/watch" },
    { label: "Mixes", href: "/mixes" },
    { label: "About", href: "/about" },
    { label: "Press", href: "/press" },
    { label: "Merch", href: "/merch" },
    { label: "Book", href: "/booking" },
  ],
  socials: {
    instagram: "https://www.instagram.com/mitchfactorial/",
    youtube: "https://www.youtube.com/@mitchfactorial",
    soundcloud: "https://soundcloud.com/mitchfactorial",
    spotify: "https://open.spotify.com/user/mitchelle.previlon",
    linktree: "https://linktr.ee/mitchfactorial",
  },
} satisfies SiteConfig;

export const brand = {
  colors: {
    black: "#050507",
    black2: "#0B0B10",
    cream: "#F6F1E8",
    haitianBlue: "#123CFF",
    haitianRed: "#D9142B",
    kompaGold: "#FFD166",
    neonPink: "#FF2D6D",
    violet: "#8F5CFF",
  },
} satisfies Brand;

export const photos = [
  {
    src: "/assets/photos/hero-red-yellow-circle.png",
    usage: "primary hero/about",
  },
  {
    src: "/assets/photos/portrait-sunglasses-white-wall.png",
    usage: "floating portrait/cutout candidate",
  },
  {
    src: "/assets/photos/dj-booth-bandana.png",
    usage: "mixes/watch/performance",
  },
  {
    src: "/assets/photos/group-dj-booth.png",
    usage: "community/Sistars",
  },
  {
    src: "/assets/photos/urban-bench-portrait.png",
    usage: "about/merch",
  },
  {
    src: "/assets/photos/party-peace-bandana.png",
    usage: "personality/archive",
  },
] satisfies Photo[];

export const videos = [
  {
    title: "M!tchFactor!al | Sistars In Sound @ Roark Studio",
    youtubeId: "WHUk7K8cFmU",
    featured: true,
    startSeconds: 1900,
    url: "https://www.youtube.com/watch?v=WHUk7K8cFmU",
    type: "Live Set",
  },
  {
    title: "M!tchFactor!al - 2 Blocks Down Radio",
    youtubeId: "XnLWbMiFBys",
    url: "https://www.youtube.com/watch?v=XnLWbMiFBys",
    type: "Radio Set",
  },
  {
    title: "SESSIONS: DJ MITCH FACTORIAL",
    youtubeId: "jpCI0jJ5CsE",
    startSeconds: 414,
    url: "https://www.youtube.com/watch?v=jpCI0jJ5CsE&t=414s",
    type: "Session",
  },
  {
    title: "Sistars In Sound @ AfroCarnival 2024",
    youtubeId: "9fumBNjO50E",
    url: "https://www.youtube.com/watch?v=9fumBNjO50E",
    type: "Collective Set",
  },
  {
    title: "Konsa with Boston Chery and M!tchfactorial @ The Lot Radio",
    youtubeId: "VFcXzs3zY78",
    note: "Mitch starts around 23:00",
    startSeconds: 1380,
    url: "https://www.youtube.com/watch?v=VFcXzs3zY78",
    type: "Radio / Live",
  },
] satisfies Video[];

export const mixes = [
  {
    title: "SoundCloud Mixes",
    platform: "SoundCloud",
    description: "A living archive of M!TCHFACTOR!AL mixes and club sounds.",
    url: siteConfig.socials.soundcloud,
    tags: ["Global Club", "Kompa", "Dancehall", "Afro-Caribbean"],
  },
  {
    title: "Spotify Profile",
    platform: "Spotify",
    description:
      "Playlists, saves, and sonic references from the M!TCHFACTOR!AL universe.",
    url: siteConfig.socials.spotify,
    tags: ["Selections", "Mood", "Curated"],
  },
  {
    title: "YouTube Sets",
    platform: "YouTube",
    description: "Video sets, radio sessions, and live transmissions.",
    url: siteConfig.socials.youtube,
    tags: ["Live", "Video", "Radio"],
  },
] satisfies Mix[];

export const merchProducts = [
  {
    name: "M!F Black Tee",
    price: "$49.99",
    image: "/assets/merch/mf-black-tee.png",
    description: "Black premium tee with the M!F chest mark and oversized back logo.",
    status: "Coming Soon",
    tags: ["Front + Back Print", "Premium Cotton", "Concept Drop"],
  },
  {
    name: "Mitch Portrait Tee",
    price: "$49.99",
    image: "/assets/merch/mf-portrait-tee.png",
    description:
      "White premium tee featuring an illustrated Mitch portrait with the black M logo on back.",
    status: "Coming Soon",
    tags: ["Front + Back Print", "Premium Cotton", "Concept Drop"],
  },
] satisfies MerchProduct[];

export const upcomingEvents = [
  {
    title: "Belle Fanm Chokola Brooklyn",
    date: "2026-06-05",
    time: "6:00 PM – 12:00 AM",
    venue: "PiCH Restaurant and Lounge",
    city: "New York, NY",
    url: "https://eventribe.app/event/belle-fanm-chokola-brooklyn",
    flyer: "/assets/flyers/belle-fanm-chokola-2026-03-28.png",
    tags: ["Brooklyn", "Culture", "Nightlife"],
  },
  {
    title: "Konsa NYC",
    date: "2026-06-12",
    time: "10:00 PM – 4:00 AM",
    venue: "The Bush",
    city: "Brooklyn, NY",
    url: "https://posh.vip/e/konsa-nyc",
    flyer: "/assets/flyers/6a0f53c7f7f1870b37cf3d2d.avif",
    note: "Year inferred from rollout notes; verify before final public launch.",
    tags: ["Konsa", "Afro-Caribbean", "Late night"],
  },
] satisfies EventItem[];

export const archiveEvents = [
  {
    title: "Girls Love Outside",
    date: "2025-08-30",
    venue: "Café Erzulie",
    flyer: "/assets/flyers/girls-love-outside-2025-08-30.png",
    tags: ["Community", "Brooklyn", "Summer"],
  },
  {
    title: "MitchFactorial Labor Day Line Up 2025",
    date: "2025-09-01",
    venue: "Multiple Venues",
    flyer: "/assets/flyers/labor-day-lineup-2025.png",
    tags: ["Carnival", "Labor Day", "NYC"],
  },
  {
    title: "Sak Pasé Afro-Konpa Party",
    date: "2025-09-25",
    venue: "SOB's",
    flyer: "/assets/flyers/sak-pase-2025-09-25-full.png",
    tags: ["Afro-Konpa", "Haitian", "Party"],
  },
  {
    title: "Furnace",
    date: "2025-09-27",
    venue: "The House",
    flyer: "/assets/flyers/furnace-2025-09-27.png",
    tags: ["Afro-Caribbean", "Club", "Brooklyn"],
  },
  {
    title: "Flava Party",
    date: "2025-09-28",
    venue: "Bunton's World Famous",
    flyer: "/assets/flyers/flava-party-2025-09-28.png",
    tags: ["Dancehall", "Afrobeats", "R&B/Soul"],
  },
  {
    title: "Sonic Libations",
    date: "2025-11-22",
    venue: "The Se7en",
    flyer: "/assets/flyers/sonic-libations-2025-11-22.png",
    tags: ["Global Sounds", "Brooklyn", "Libations"],
  },
  {
    title: "The Return of Low Key Fire",
    date: "2026-01-30",
    venue: "The Se7en",
    flyer: "/assets/flyers/low-key-fire-2026-01-30.png",
    tags: ["Low Key Fire", "Kompa", "Dancehall"],
  },
  {
    title: "Love + Kompa",
    date: "2026-02-12",
    venue: "Hatch BK",
    flyer: "/assets/flyers/love-kompa-2026-02-12.png",
    tags: ["Kompa", "Gouyad", "Brooklyn"],
  },
  {
    title: "Black Music",
    date: "2026-03-20",
    venue: "SE7EN Bar + Lounge",
    flyer: "/assets/flyers/black-music-2026-03-20.png",
    tags: ["Black Music", "Open Format", "Culture"],
  },
  {
    title: "Belle Fanm Chokola",
    date: "2026-03-28",
    venue: "Brooklyn",
    flyer: "/assets/flyers/belle-fanm-chokola-2026-03-28.png",
    tags: ["Chokola", "Brooklyn", "Culture"],
  },
  {
    title: "Sucré — The Kompa Social",
    date: "2026-04-02",
    venue: "Lovejoys",
    flyer: "/assets/flyers/sucre-kompa-social-2026-04-02.png",
    tags: ["Kompa", "Kreyol", "Social"],
  },
] satisfies EventItem[];

export const press = [
  {
    title: "Art World News: NFTs",
    url: "https://www.youtube.com/watch?v=YLDqmAcp2jc&t=149s",
    youtubeId: "YLDqmAcp2jc",
    startSeconds: 149,
    type: "Interview",
  },
] satisfies PressItem[];

export function getFeaturedVideo() {
  return videos.find((video) => video.featured) ?? videos[0];
}

export function getUpcomingEvents() {
  return upcomingEvents;
}

export function getArchiveEvents() {
  return archiveEvents;
}

export function formatEventDate(dateString: string) {
  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
