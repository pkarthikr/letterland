# Letter Land — Design System

A warm, trustworthy brand and component system for **Letter Land**, the personal/professional brand of an early-childhood literacy educator. The work is aimed at **parents of preschool and kindergarten children (ages 3–6)** — so the system reads as *playful and friendly to children, calm and credible to parents*.

> **Sources:** This system was created from scratch (no prior codebase, Figma, or brand files were provided). All visual decisions, copy, and assets originate here. If you have existing brand materials, share them and we'll reconcile.

---

## Brand at a glance
- **Name:** Letter Land
- **Personality:** Academic & credible · playful but minimal
- **Audience:** Parents of children ages 3–6
- **Logo:** Wordmark + "alphabet tile" symbol (a rounded letter block)
- **Palette:** Clay (warm terracotta) · Sage (calm green-grey) · warm Ink neutrals on Cream
- **Type:** Nunito (display) + Mulish (body) + Caveat (handwritten accent)

---

## Content fundamentals (voice & tone)

**Who's speaking:** Priya, a real educator. Copy is written in **first person ("I", "my approach")** and addresses the reader as **"you"** — warm and personal, like a trusted teacher talking to a parent.

**Tone:** Reassuring, plain-spoken, encouraging. We reduce parental anxiety ("no flashcards-and-tears required", "calm for parents, joyful for kids"). We never lecture or use edu-jargon.

**Casing:** Sentence case everywhere — headlines, buttons, labels. No ALL-CAPS except tiny eyebrow labels with wide tracking. Headlines often end with a period for a calm, declarative feel ("Reading starts here.", "Calm for parents, joyful for kids.").

**Do / Don't:**
- ✅ "Let's sound out the word together — you've got this." (warm, plain, encouraging)
- ❌ "Leverage our phonics framework to optimize literacy outcomes." (jargon, cold, salesy)

**Numbers & claims:** Concrete and human ("ten minutes a day", "2,400+ enrolled", "ages 3–6"). Avoid vague hype.

**Emoji:** Not used in product UI or marketing copy. Warmth comes from words, color, and the handwritten Caveat accent — not emoji. (A single ★ is acceptable for ratings.)

**The handwritten accent (Caveat):** Used *sparingly* for short, human asides above headings ("loved by families", "let's begin") — never for body copy or anything functional.

---

## Visual foundations

**Color vibe:** Warm and earthy, never neon. Clay terracotta is the primary accent (buttons, links, key highlights); Sage is the calm secondary (soft panels, tags); warm Ink browns carry all text and borders; everything sits on a **cream (#FAF6F1) page**, not stark white — white is reserved for cards. Dark sections use the deepest ink (#2E2924), not black.

**Typography:** Display/headings = **Nunito** at 700–800, tight tracking (−0.02em), line-height ~1.1 — rounded letterforms feel friendly but the weight keeps it credible. Body/UI = **Mulish** 400–600 at 1.5–1.6 line-height for calm readability. Generous size jumps create clear hierarchy.

**Spacing & layout:** 4px base scale. Sections breathe with large vertical rhythm (`--section-y`, ~104px). Content is centered in a max-1200px container with 24px gutters. Layouts are simple grids that collapse to one column on mobile.

**Backgrounds:** Mostly flat warm fills (cream / white / sage tints / deep ink). **No photographic backgrounds, no busy patterns, no purple gradients.** Visual interest comes from the **alphabet-block illustration** (`assets/illustration-tiles.svg`) and soft color blocking. Occasional soft elliptical "blob" behind the hero art.

**Corner radii:** Friendly but restrained. Cards use `--radius-lg` (18px); buttons and badges are fully **pill**-shaped by default; the alphabet tiles use large 20–34px radii. Nothing is sharp-cornered.

**Cards:** Three flavors — `elevated` (white + soft shadow), `outlined` (hairline `--border-subtle`), `soft` (sage tint, no border). Radius 18px. Interactive cards lift 3px on hover.

**Shadows:** Soft and **warm-tinted** (rgba of the ink brown, not gray/black), low opacity, generous blur. Five steps xs→xl. Elevation is gentle — this is a calm brand.

**Borders:** 1–1.5px, warm neutral (`--border-subtle` / `--border-default`). Used for outlined cards, inputs, dividers.

**Motion:** Gentle and quick (120–360ms). Default easing is a smooth `--ease-out`; a single playful `--ease-soft` (slight overshoot) is reserved for delightful micro-moments (radio dot, switch knob). **No infinite/looping animation, no big bounces.** Respect reduced-motion.

**Hover states:** Buttons darken one step (clay-500 → clay-600) and raise shadow slightly. Ghost/soft controls gain a soft tint background. Links shift clay-600 → clay-700.

**Press states:** Buttons translate down 1px and scale to 0.99 — a small, tactile "press". No color flash.

**Focus:** Visible warm focus ring (`--shadow-focus`, a translucent clay halo) on all interactive elements.

**Transparency & blur:** Used only for the sticky nav (translucent cream + 10px backdrop-blur). Otherwise surfaces are solid.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — loaded from CDN (`unpkg.com/lucide`). Chosen for its **rounded, even, friendly stroke** (2–2.4px) that matches Nunito's roundedness while staying credible. Used in marketing sections, feature lists, and as button icons.
- **In components:** Small inline SVGs (checkmark, chevron, close, alert glyph) are hand-built into `Checkbox`, `Select`, `Accordion`, `Alert` so primitives have **no runtime icon dependency**. Everything else uses Lucide via `<i data-lucide="name">` + `lucide.createIcons()`.
- **No emoji** as icons. **No unicode** symbol icons (except ★ for ratings).
- **Brand marks:** `assets/logo-full.svg`, `assets/logo-full-dark.svg`, `assets/logo-mark.svg`, `assets/favicon.svg`, and the `assets/illustration-tiles.svg` alphabet-block illustration.

> **Substitution flag:** Lucide is a substitution chosen for this brand-new system (no icon set was provided). If you'd prefer a different icon family, let me know.

---

## Fonts

All three brand fonts load from **Google Fonts** (declared in `styles.css`):
- **Nunito** — display / headings
- **Mulish** — body / UI
- **Caveat** — handwritten accent

> **Flag:** These are served from the Google Fonts CDN rather than self-hosted binaries. If you want self-hosted woffs (for offline/production), say so and I'll add `@font-face` files.

---

## File index (manifest)

**Root**
- `styles.css` — global entry point (only `@import`s). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **auto-generated**, do not edit.

**`tokens/`** (each `@import`ed by `styles.css`)
- `fonts.css` — font-family tokens · `colors.css` — palette + semantic aliases · `typography.css` — scale/weights · `spacing.css` — spacing + layout · `effects.css` — radii/shadows/motion · `base.css` — element resets.

**`assets/`** — `logo-full.svg`, `logo-full-dark.svg`, `logo-mark.svg`, `favicon.svg`, `illustration-tiles.svg`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`components/`** — reusable React primitives (namespace `LetterLandDesignSystem_3d51bd`):
- `forms/` — `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- `display/` — `Card`, `Badge`, `Avatar`, `Alert`
- `navigation/` — `Tabs`, `Accordion`

**`ui_kits/`** — full-screen product recreations:
- `website/` — personal/portfolio marketing site
- `course/` — course / resource sales landing page

---

## Using components

Load the bundle, then read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Badge } = window.LetterLandDesignSystem_3d51bd;
</script>
```

Each component directory has a `.prompt.md` with usage and a `.d.ts` with the full props contract.
