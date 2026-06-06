# M!TCHFACTOR!AL Codex Prompt Series

Use these prompts in order. Each prompt assumes the previous one has been completed.

---

## Prompt 1 — Bootstrap the Next.js site and brand foundation

You are building a premium artist/DJ website for M!TCHFACTOR!AL, a Brooklyn-based DJ with Haitian-Caribbean cultural influence, global club sound, and solo brand direction. Build this as a polished, futuristic, dark-mode DJ EPK and live cultural portal that can deploy to Vercel tonight.

Tech requirements:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- No CMS or database for v1; use static data files.
- Site must build cleanly with `pnpm build` or `npm run build`.
- Keep components reusable and clean.
- Make the design mobile-first, responsive, and performant.
- Do not require image files to exist for the build to succeed. Use normal `<img>` elements or safe fallback components so missing assets render as gradient placeholders instead of breaking the build.

Create this structure:

```txt
app/
  layout.tsx
  page.tsx
  events/page.tsx
  watch/page.tsx
  mixes/page.tsx
  press/page.tsx
  merch/page.tsx
  booking/page.tsx
components/
  BrandLogo.tsx
  NavBar.tsx
  MobileNav.tsx
  Footer.tsx
  Hero.tsx
  MutedHeroVideo.tsx
  FloatingPortraits.tsx
  ReactiveBackdrop.tsx
  SectionHeader.tsx
  EventCard.tsx
  VideoCard.tsx
  MixCard.tsx
  PressCard.tsx
  BookingForm.tsx
  SafeImage.tsx
  Marquee.tsx
  ButtonLink.tsx
src/data/
  mitchfactorial-data.ts
lib/
  cn.ts
```

Brand direction:
- Logo text: `M!TCHFACTOR!AL`
- Dark black website
- Subtle Haitian red and blue accents
- Gold/warm Caribbean accent
- Cultural + futuristic, not generic EDM
- Premium nightlife, chrome/neon, Brooklyn underground, Caribbean rhythm

Color tokens:
- black: `#050507`
- black2: `#0B0B10`
- cream: `#F6F1E8`
- Haitian blue: `#123CFF`
- Haitian red: `#D9142B`
- Kompa gold: `#FFD166`
- neon pink: `#FF2D6D`
- violet: `#8F5CFF`

Use CSS variables in `globals.css` and Tailwind utility classes. Add animated background styles: radial gradients, subtle grid, noise overlay using CSS only, and slow glowing blur circles. Add `prefers-reduced-motion` handling.

BrandLogo component:
- Text-based logo for v1.
- Futuristic wordmark style.
- Slight glitch/scanline effect on hover.
- Optional compact mark `M!F`.
- Used in nav and footer.

Create metadata in `app/layout.tsx`:
- title: `M!TCHFACTOR!AL | Brooklyn DJ + Global Sounds`
- description: `Brooklyn DJ, curator, and cultural frequency moving Haitian-Caribbean heat, global club sounds, dancehall, kompa, afrobeat, house, R&B, and soul.`

After implementing, run lint/build and fix errors.
```

---

## Prompt 2 — Add the source data exactly

Create or replace `src/data/mitchfactorial-data.ts` with static data for the whole site.

Use this data model:

- `siteConfig`
- `brand`
- `photos`
- `videos`
- `mixes`
- `upcomingEvents`
- `archiveEvents`
- `press`

Use these exact facts:

Artist/brand:
- Display name: `M!TCHFACTOR!AL`
- Canonical name: `MitchFactorial`
- Tagline: `Brooklyn Frequencies. Global Dancefloors.`
- Location: `Brooklyn, New York`
- Booking email: `Info@MitchFactorial.com`
- Instagram: `https://www.instagram.com/mitchfactorial/`
- YouTube: `https://www.youtube.com/@mitchfactorial`
- SoundCloud: `https://soundcloud.com/mitchfactorial`
- Spotify: `https://open.spotify.com/user/mitchelle.previlon`
- Linktree: `https://linktr.ee/mitchfactorial`

Videos:
1. `M!tchFactor!al | Sistars In Sound @ Roark Studio`, YouTube ID `WHUk7K8cFmU`, featured true.
2. `M!tchFactor!al - 2 Blocks Down Radio`, YouTube ID `XnLWbMiFBys`.
3. `SESSIONS: DJ MITCH FACTORIAL`, YouTube ID `jpCI0jJ5CsE`, start around 414s if used.
4. `Sistars In Sound @ AfroCarnival 2024`, YouTube ID `9fumBNjO50E`.
5. `Konsa with Boston Chery and M!tchfactorial @ The Lot Radio`, YouTube ID `VFcXzs3zY78`, note: `Mitch starts around 23:00`, startSeconds 1380.

Upcoming events:
1. `Belle Fanm Chokola Brooklyn`
   - date `2026-06-05`
   - time `6:00 PM – 12:00 AM`
   - venue `PiCH Restaurant and Lounge`
   - city `New York, NY`
   - URL `https://eventribe.app/event/belle-fanm-chokola-brooklyn`
   - flyer `/assets/flyers/belle-fanm-chokola-2026-03-28.png`
2. `Konsa NYC`
   - date `2026-06-12`
   - time `10:00 PM – 4:00 AM`
   - venue `The Bush`
   - city `Brooklyn, NY`
   - URL `https://posh.vip/e/konsa-nyc`
   - note: `Year inferred from rollout notes; verify before final public launch.`

Archive events/flyers:
- Girls Love Outside — 2025-08-30 — Café Erzulie — `/assets/flyers/girls-love-outside-2025-08-30.png`
- MitchFactorial Labor Day Line Up 2025 — 2025-09-01 — Multiple Venues — `/assets/flyers/labor-day-lineup-2025.png`
- Sak Pasé Afro-Konpa Party — 2025-09-25 — SOB's — `/assets/flyers/sak-pase-2025-09-25-full.png`
- Furnace — 2025-09-27 — The House — `/assets/flyers/furnace-2025-09-27.png`
- Flava Party — 2025-09-28 — Bunton's World Famous — `/assets/flyers/flava-party-2025-09-28.png`
- Sonic Libations — 2025-11-22 — The Se7en — `/assets/flyers/sonic-libations-2025-11-22.png`
- The Return of Low Key Fire — 2026-01-30 — The Se7en — `/assets/flyers/low-key-fire-2026-01-30.png`
- Love + Kompa — 2026-02-12 — Hatch BK — `/assets/flyers/love-kompa-2026-02-12.png`
- Black Music — 2026-03-20 — SE7EN Bar + Lounge — `/assets/flyers/black-music-2026-03-20.png`
- Belle Fanm Chokola — 2026-03-28 — Brooklyn — `/assets/flyers/belle-fanm-chokola-2026-03-28.png`
- Sucré — The Kompa Social — 2026-04-02 — Lovejoys — `/assets/flyers/sucre-kompa-social-2026-04-02.png`

Photos:
- `/assets/photos/hero-red-yellow-circle.png` — primary hero/about.
- `/assets/photos/portrait-sunglasses-white-wall.png` — floating portrait/cutout candidate.
- `/assets/photos/dj-booth-bandana.png` — mixes/watch/performance.
- `/assets/photos/group-dj-booth.png` — community/Sistars.
- `/assets/photos/urban-bench-portrait.png` — about/merch.
- `/assets/photos/party-peace-bandana.png` — personality/archive.

Press:
- Art World News: NFTs — URL `https://www.youtube.com/watch?v=XnLWbMiFBys`

Also include helper functions:
- `getFeaturedVideo()`
- `getUpcomingEvents()`
- `getArchiveEvents()`
- `formatEventDate(dateString)`

After implementing, build and fix TypeScript errors.
```

---

## Prompt 3 — Build the cinematic homepage

Build `app/page.tsx` and the homepage components.

Homepage sections in order:

1. Hero / Transmission
2. Marquee ticker
3. Upcoming events preview
4. Watch featured set
5. Mixes / listen section
6. Visual archive teaser
7. About / cultural statement
8. Booking CTA

Hero requirements:
- Full viewport-ish height, but not awkward on mobile.
- Top nav already visible.
- Centered custom `M!TCHFACTOR!AL` wordmark.
- Label: `NOW TRANSMITTING FROM BROOKLYN`
- Headline: `Brooklyn Frequencies. Global Dancefloors.`
- Subline: `Haitian-Caribbean heat, global club energy, and dancefloor storytelling from Brooklyn to everywhere.`
- CTA buttons: `Book MitchFactorial`, `Watch Sets`, `Upcoming Events`.
- Use `MutedHeroVideo` in the center as a glowing video console.
- Use the featured YouTube video ID `WHUk7K8cFmU` for muted autoplay background style.
- YouTube iframe params should include autoplay, mute, loop, controls off, playsinline, and playlist equal to the same ID for looping.
- Also support a local fallback video at `/assets/video/hero-loop.webm` if it exists, but do not require it.
- Add overlay gradients so text remains readable.
- No audio on hero.

FloatingPortraits requirements:
- Left and right animated portrait cards/possible cutouts.
- Use `/assets/photos/portrait-sunglasses-white-wall.png` and `/assets/photos/hero-red-yellow-circle.png` as initial assets.
- On desktop, portraits float in from left/right with slow y-axis animation.
- On mobile, simplify to one portrait below the hero copy.
- Build support for future transparent PNG cutouts at `/assets/cutouts/mitch-cutout-left.png` and `/assets/cutouts/mitch-cutout-right.png`.

ReactiveBackdrop requirements:
- Client component.
- Mouse-following radial glow that changes position with pointer movement.
- CSS fallback on touch devices.
- Respect reduced motion.

Marquee text:
`BROOKLYN • HAITI • KOMPA • DANCEHALL • AFROBEATS • R&B/SOUL • GLOBAL CLUB • SISTARS IN SOUND • LOW KEY FIRE • KONSÁ •`

Make the home page feel expensive, animated, cultural, and futuristic. Keep it readable and not cluttered. Build and fix issues.
```

---

## Prompt 4 — Events page + archive wall

Build `app/events/page.tsx` and reusable event components.

Page purpose:
- Give promoters and fans one place to see upcoming events and past highlights.

Requirements:
- Hero header: `Events / Where the frequency lands next.`
- Show upcoming events first using `upcomingEvents`.
- Cards should show date, time, venue, city, tags, flyer, ticket/details button.
- Show a status pill: `Upcoming`, `Today`, or `Archive`, based on date.
- After upcoming events, show `Past signal archive` using `archiveEvents`.
- The archive should be a responsive flyer grid with hover tilt/scale, but keep performance reasonable.
- Use `SafeImage` fallback for missing flyers.
- Include a final CTA: `Booking a room, festival, brand event, or private party? Bring M!TCHFACTOR!AL to the booth.`

Design:
- Dark cards with faint red/blue borders.
- Gold date blocks.
- Flyer images should be object-cover, not distorted.
- Mobile view must look clean.

Add JSON-LD Event schema where possible for upcoming events. Do not crash if event URLs are missing. Build and fix errors.
```

---

## Prompt 5 — Watch, Mixes, and Press pages

Build three pages: `/watch`, `/mixes`, `/press`.

Watch page:
- Header: `Watch / Live transmissions, radio sets, and visual proof.`
- Featured video at top using `WHUk7K8cFmU`.
- Grid of all videos from `videos` data.
- Each card has title, type, note if present, watch button, and YouTube embed thumbnail or iframe.
- For performance, use thumbnail cards by default and a modal or expanded iframe on click if easy; otherwise iframe cards are acceptable.

Mixes page:
- Header: `Mixes / The sound in motion.`
- Cards for SoundCloud, Spotify, and YouTube.
- Add tags like `Kompa`, `Dancehall`, `Afro-Caribbean`, `R&B/Soul`, `Global Club`, `Open Format`.
- Include a section called `Frequency Map` with text describing the sound: smooth gouyad, kompa, dancehall, afrobeats, R&B/soul, global club, and Brooklyn nightlife.
- Build component support for future individual embeds. For now, link out cleanly.

Press page:
- Header: `Press / Interviews, features, and cultural context.`
- Show Art World News: NFTs as a press card.
- Add a `For media` CTA linking to booking email.
- Add placeholder cards for future interviews/features with a `Coming soon` label, but keep it tasteful.

Build and fix issues.
```

---

## Prompt 6 — About / EPK and booking flow

Add `/about` if not already present, or include the EPK content as a major section on `/booking`. Update nav if adding `/about`.

About/EPK requirements:
- Header: `M!TCHFACTOR!AL / DJ. Curator. Cultural frequency.`
- Use the red/yellow hero portrait prominently.
- Copy direction:
  "M!TCHFACTOR!AL moves between Brooklyn nightlife, Haitian-Caribbean rhythm, global club energy, and intimate dancefloor storytelling. Her sets fold kompa, dancehall, afrobeats, R&B/soul, house, and open-format instincts into nights that feel warm, stylish, and alive."
- Mention Sistars in Sound as part of her community/story, but make the page solo-brand-first.
- Add quick facts: Brooklyn, Haitian-Caribbean influence, DJ/curator/host, open-format/global sounds, bookings/events/brand activations.
- Add an EPK panel with buttons: `Download EPK Coming Soon`, `Book Now`, `Watch Sets`.
- Add photo grid using available photos.

Booking page:
- Header: `Bookings / Bring the frequency to your room.`
- Booking form fields:
  - Name
  - Email
  - Phone
  - City
  - Event date
  - Venue/event name
  - Booking type dropdown: Club night, Festival, Private event, Brand event, Media/interview, Other
  - Budget range
  - Message
- For v1, make form submit via `mailto:Info@MitchFactorial.com` or provide clear instructions to add Formspree later.
- After submit click, create a pre-filled mailto body.
- Include direct email fallback.

Build and fix issues.
```

---

## Prompt 7 — Merch teaser and final polish

Build `/merch` as a high-end teaser page.

Merch page requirements:
- Header: `Merch / Wear the frequency.`
- Do not build checkout yet.
- Show three concept cards:
  1. `M!F Chrome Tee`
  2. `Brooklyn Frequencies Hoodie`
  3. `Kompa After Dark Tote`
- Each card should say `Coming soon`.
- Add email capture UI visually, but do not require backend. It can open mailto with subject `M!TCHFACTOR!AL Merch Notify Me`.
- Use the urban bench photo and/or portrait assets.

Final polish:
- Make nav sticky and glassy.
- Add active link states.
- Add footer with logo, social links, booking email, and a mini-marquee.
- Add `not-found.tsx`.
- Add accessible labels for external links and iframe titles.
- Add hover/focus states.
- Ensure no hydration errors.
- Ensure `pnpm build` or `npm run build` passes.
```

---

## Prompt 8 — Vercel readiness and production cleanup

Make the project deployment-ready for Vercel.

Tasks:
- Run `pnpm lint` and `pnpm build` or npm equivalents.
- Fix all TypeScript, lint, and build errors.
- Add `README.md` with:
  - project overview
  - how to run locally
  - how to add/update events in `src/data/mitchfactorial-data.ts`
  - how to replace screenshots with hi-res assets
  - how to add a real hero video at `/public/assets/video/hero-loop.webm`
  - how to configure Formspree later
  - deployment steps for Vercel
- Add `public/robots.txt` and `app/sitemap.ts`.
- Add meaningful Open Graph metadata.
- Make sure no private notes or broken URLs are visible.
- Verify all external links open in a new tab with `rel="noopener noreferrer"`.
- Make sure homepage looks good at 390px, 768px, 1440px.

Do not overbuild. The goal is a polished V1 birthday surprise site that can go live tonight.
```

---

## Emergency Fix Prompt — Use this if Codex breaks the build

The build is failing. Inspect the errors, then fix the smallest number of files necessary. Do not redesign the site. Do not add new libraries unless absolutely necessary. Preserve the M!TCHFACTOR!AL visual direction, data, pages, and components. After each fix, run the build again until it passes. Summarize what changed and what command now passes.
```

---

## Final Enhancement Prompt — only after the site works

The site builds and deploys. Now improve the visual polish without changing the architecture.

Focus only on:
- Better spacing
- Better typography scale
- Smoother motion
- More premium hover states
- Stronger homepage hero composition
- Better flyer grid responsiveness
- Better mobile nav
- Better contrast/accessibility

Do not add new pages, data models, backend, CMS, auth, database, or checkout. Run the build after changes.
```
