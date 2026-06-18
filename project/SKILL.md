---
name: letter-land-design
description: Use this skill to generate well-branded interfaces and assets for Letter Land, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Letter Land — an early-childhood literacy educator's personal brand. Audience: parents of children ages 3–6. Voice: warm to children, credible to parents; first-person "I", addresses reader as "you"; sentence case; no emoji.
- **Global CSS:** `styles.css` (link this one file — it `@import`s everything in `tokens/`).
- **Colors:** Clay (terracotta, primary accent) · Sage (green-grey, secondary) · warm Ink neutrals on a cream page. Tokens like `--accent`, `--surface-page`, `--text-body`, `--clay-500`, `--sage-200`.
- **Type:** Nunito (display/headings, 700–800), Mulish (body), Caveat (handwritten accent, sparingly). Loaded from Google Fonts.
- **Components:** React primitives bundled at `_ds_bundle.js`, read via `window.LetterLandDesignSystem_3d51bd` — `Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Avatar, Alert, Tabs, Accordion`. Each has a `.prompt.md` (usage) and `.d.ts` (props).
- **Icons:** Lucide via CDN (`<i data-lucide="name">` + `lucide.createIcons()`).
- **Assets:** `assets/` — logos, favicon, and the alphabet-block illustration. Reuse these; don't invent new logo art.
- **UI kits:** `ui_kits/website` (portfolio site) and `ui_kits/course` (course landing) show full screens composed from the primitives — good starting points.

## Rules of thumb
- Cream page, white cards, sage soft-panels, deep-ink dark sections — never stark black or purple gradients.
- Pill buttons, 18px card radius, soft warm-tinted shadows, gentle 120–360ms motion.
- Keep copy plain, warm, and concrete. No jargon, no hype, no emoji.
