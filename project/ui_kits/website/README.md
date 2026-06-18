# Letter Land — Website UI Kit

A high-fidelity recreation of Letter Land's **personal / portfolio marketing website** for an early-literacy educator. Audience: parents of preschool & kindergarten children.

## Run
Open `index.html`. It loads the design-system bundle (`_ds_bundle.js`), React, Babel, and Lucide icons, then composes the screens below.

## Screens / sections
| File | What it is |
|------|------------|
| `Nav.jsx` | Sticky translucent header with logo, anchor nav, mobile menu |
| `Hero.jsx` | Headline, intro, CTAs, stat strip, alphabet-block illustration |
| `Approach.jsx` | Three philosophy pillars in outlined cards |
| `Resources.jsx` | Filterable grid of printables / courses / guides |
| `Testimonials.jsx` | Dark section with parent/teacher quotes |
| `Footer.jsx` | Newsletter signup (interactive) + social + legal |

## Interactions
- Smooth-scroll anchor nav; mobile hamburger toggle.
- Resource grid filters by category (All / Courses / Printables / Guides).
- Newsletter form validates and shows a success Alert.

## Components used
`Button`, `Badge`, `Card`, `Avatar`, `Input`, `Alert` from the Letter Land bundle (namespace `LetterLandDesignSystem_3d51bd`). Icons via Lucide CDN.

## Notes
- Hero art is the brand `illustration-tiles.svg` (alphabet blocks) — no stock photography.
- All copy is sample content in Letter Land's voice; swap freely.
