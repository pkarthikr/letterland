# Letter Land — Course Landing UI Kit

A high-fidelity recreation of a **course / resource sales landing page** — the page a parent lands on to enroll in "Phonics, step by step".

## Run
Open `index.html`. Loads `_ds_bundle.js`, React, Babel, Lucide, then composes the sections.

## Sections
| File | What it is |
|------|------------|
| `CourseHero.jsx` | Logo bar, headline, social proof, sticky price card with feature list |
| `Included.jsx` | Six-up "what's included" feature grid |
| `Curriculum.jsx` | Week-by-week breakdown using the `Accordion` |
| `Enroll.jsx` | Interactive enrollment form — plan toggle + success state |
| `FAQ.jsx` | Frequently-asked questions accordion + footer |

## Interactions
- Smooth-scroll "Enroll" buttons jump to the form.
- Enrollment form: choose a plan, fill name + email, submit → celebratory success state.

## Components used
`Button`, `Badge`, `Card`, `Avatar`, `Input`, `Accordion` from namespace `LetterLandDesignSystem_3d51bd`. Icons via Lucide CDN.

## Notes
- Single-product landing page; pricing/figures are sample content.
- Imagery is the brand `illustration-tiles.svg`, no stock photography.
