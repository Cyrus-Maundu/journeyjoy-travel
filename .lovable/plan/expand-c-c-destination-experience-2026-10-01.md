# Expand C&C destination experience

## Build
- Replace the homepage’s static lead image with a three-slide, full-width carousel. Each slide will have its own destination image, headline, supporting copy, and relevant action; it will advance automatically every few seconds and retain accessible previous, next, and slide controls.
- Add a persistent WhatsApp booking button across the website that opens a prefilled enquiry in WhatsApp. Use the current sample phone number until the real booking number is supplied, and label it as sample content where appropriate.
- Rework the main navigation around a **Discover** dropdown containing Destinations, Kenya, Tanzania, Zambia, Experiences, and Blog, while preserving clear links to tours, gallery, reviews, about, and contact on desktop and mobile.

## Destination pages
- Expand Destinations into a country-led directory for Kenya, Tanzania, and Zambia.
- Create a dedicated page for each country, showing its main safari and coastal areas as image-led links:
  - Kenya: Maasai Mara, Samburu, Amboseli, and Mombasa Coast.
  - Tanzania: Serengeti, Ngorongoro, Zanzibar, and Tarangire.
  - Zambia: South Luangwa, Lower Zambezi, Kafue, and Victoria Falls.
- Create a dedicated detail page for every listed area. Opening an area will show an immersive image, informative sample copy, suggested trip details, and a related-photo gallery/lightbox.
- Keep all destination descriptions, itineraries, durations, and prices clearly editable sample content.

## Additional pages
- Add an Experiences page grouping safari, family, conservation, and bush-and-beach travel styles.
- Add a Blog page with polished sample travel stories that can later be replaced with real articles.
- Give the Contact page a travel photograph background while keeping the form clear and readable.

## Quality, SEO, and safety
- Generate and store locally a cohesive set of destination photographs where the existing image set is insufficient.
- Give every new country, area, Experiences, and Blog page unique titles, descriptions, Open Graph fields, Twitter card metadata, and canonical paths.
- Keep navigation keyboard-accessible, pause the carousel on interaction or hover, respect reduced-motion preferences, and use safe external-link handling for WhatsApp.
- Verify carousel timing and controls, dropdown/mobile navigation, every destination link and gallery, the contact background, and desktop/mobile layouts in the live preview.

## Technical details
- Keep React 19, TypeScript, TanStack Start routing, and Tailwind CSS v4.
- Store reusable country and area data in the shared travel content module, and use route parameters for country/area detail pages.
- Continue using the project’s semantic visual tokens and existing design-system buttons.
