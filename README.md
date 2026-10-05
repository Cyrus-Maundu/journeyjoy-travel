# C&C Tour Company — Website

A premium tours-and-travel website for C&C Tour Company, showcasing private East African journeys (Kenya, Tanzania and Zambia) with destinations, safari styles, experiences, a photo gallery, guest reviews, a blog, and built-in booking via WhatsApp and an enquiry form.

Built with **React 19 + TypeScript** on **TanStack Start v1** (file-based routing, SSR), styled with **Tailwind CSS v4** and shadcn/ui components.

---

## Pages & routes

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `src/routes/index.tsx` | Homepage with timed 3-image hero carousel |
| `/tours` | `src/routes/tours.tsx` | All tour packages |
| `/destinations` | `src/routes/destinations.index.tsx` | Destination directory |
| `/destinations/kenya` (etc.) | `src/routes/destinations.$country.index.tsx` | Country pages with tour areas |
| `/destinations/kenya/maasai-mara` (etc.) | `src/routes/destinations.$country.$area.tsx` | Area detail pages with galleries |
| `/safari-styles` | `src/routes/safari-styles.tsx` | Safari style collection |
| `/experiences` | `src/routes/experiences.tsx` | Experience highlights |
| `/gallery` | `src/routes/gallery.tsx` | Full gallery with grouped lightbox |
| `/reviews` | `src/routes/reviews.tsx` | Guest reviews + platform links |
| `/blog` | `src/routes/blog.tsx` | Blog listing |
| `/about` | `src/routes/about.tsx` | Company story |
| `/contact` | `src/routes/contact.tsx` | Enquiry form (dates, days, travelers, USD budget) with photo background |

## Key features

- **Interconnected navigation** — desktop dropdowns and a mobile menu with back-navigable submenus (Discover → Destinations, Experiences, Blog; Journeys → Tours, Safari Styles, Gallery, Reviews).
- **WhatsApp booking** — floating green button with a prefilled booking form (topic, name, travel date, travelers, USD budget, message) that opens WhatsApp at **+254 704 683 152**.
- **Photo galleries** — horizontally scrollable destination photo rows plus a full-screen lightbox where clicking one photo opens all related photos in the same group.
- **SEO** — per-page unique titles, descriptions, Open Graph and Twitter metadata, canonical URLs, and TravelAgency JSON-LD.
- **Design system** — all colors, gradients and shadows are semantic tokens in `src/styles.css` (Savannah luxury heritage palette: Cormorant Garamond display + Montserrat body); components never hardcode colors.

## Project structure

```
src/
├── components/
│   ├── site-shell.tsx          # Header, dropdown/mobile nav, footer
│   ├── whatsapp-booking.tsx    # Floating WhatsApp booking widget
│   ├── home-hero-carousel.tsx  # Timed 3-image carousel
│   ├── gallery-lightbox.tsx    # Grouped photo lightbox
│   ├── area-photo-gallery.tsx  # Scrollable destination photo rows
│   ├── page-hero.tsx           # Shared hero section
│   ├── inspect-guard.tsx       # Right-click / shortcut protection
│   └── ui/                     # shadcn/ui components
├── lib/
│   └── travel-content.ts       # All tours, countries, areas, gallery & review content (edit here)
├── routes/                     # One file per URL (see table above)
├── styles.css                  # Tailwind v4 + semantic design tokens
└── router.tsx                  # Router bootstrap
```

## Editing content

All tours, destinations, areas, gallery images, reviews and contact details live in **`src/lib/travel-content.ts`** — update that single file to change what appears across every page. Navigation labels and footer contact info live in **`src/components/site-shell.tsx`**; the WhatsApp number in **`src/components/whatsapp-booking.tsx`**.

## Development

```sh
npm install
npm run dev       # local dev server
npm run build     # production build
```

## Current status & pending items

- [x] All pages, navigation, galleries, carousel, WhatsApp booking, budget ranges, mobile submenus
- [x] Right-click / inspection protection on the published site
- [ ] **Email delivery** — enquiries currently confirm on-screen only. Sending bookings to **devsben345@gmail.com** requires a sending domain (e.g. `bookings@yourdomain.com`); Gmail cannot send on behalf of the site directly.
- [ ] **Admin booking dashboard** — deferred by design; will be added later.
- [ ] Replace remaining sample content (phone `+254 700 123 456`, `hello@cctours.example`, review links, tour prices) with real business details.

## Notes

- The WhatsApp widget opens WhatsApp with a pre-filled message; embedding a full chat *inside* the site requires the paid WhatsApp Business Platform (Cloud API).
- Inspection protection blocks casual copying only — no website can fully hide its code.
