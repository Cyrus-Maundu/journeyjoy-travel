# Mobile booking and navigation update

## What will change
- Add a required “Your budget” selector to both booking forms, using clear USD ranges customers can choose from.
- Include the selected budget in the WhatsApp message prepared by the website.
- Redesign the small-screen menu so “Discover” and “Journeys” open their own submenu screens instead of displaying every link at once.
- Add a clear back-chevron control in each submenu to return to the main mobile menu.
- Keep desktop navigation, existing destinations, and booking behavior unchanged.

## Mobile interaction
```text
Main menu                 Discover submenu
Home                      < Back
Discover          ->      All destinations
Journeys           ->      Kenya
About                     Tanzania
Contact                   Zambia
                          Experiences
                          Blog
```

## Technical details
- Reuse the existing button and navigation components, including typed TanStack links.
- Keep the mobile menu within the viewport with independent scrolling for smaller phones.
- Reset submenu state whenever the menu closes or a destination is selected.
- Use existing semantic colors and responsive design tokens.

## Verification
- Check the contact form and WhatsApp form on mobile and desktop.
- Verify both nested mobile menus, back navigation, link selection, scrolling, and menu closing.
- Confirm the selected USD budget appears in the generated WhatsApp message.
- Confirm the latest preview build has no errors.
