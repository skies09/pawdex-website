# PawDex Landing — Design System

**Source:** PawDex mobile app theme (`app/src/theme/*`, UI primitives, Home / Onboarding screens)  
**Capture context:** Extracted from app source tokens (Firecrawl not used; no public marketing URL).  
**Target stack:** Vite + React + Tailwind + Framer Motion  
**Date:** 2026-11-21

---

## Brand personality

Calm, trustworthy, medical-grade but friendly. Veterinary healthcare teal + soft sand surfaces — approachable pet care, not clinical coldness.

## Design direction (UI Design Brain)

**Apple-level Minimal** applied on PawDex brand tokens:
- Restraint over decoration; generous white space
- Large display type (Poppins) with tight tracking; Source Sans 3 body (avoids Inter default)
- One strong color moment: primary teal features band + CTAs
- Micro-interactions ~200 ms ease-out
- Cards: border *or* shadow, never both
- Buttons: verb-first; explained coming-soon state (never silent disabled)
- Body text ≥ 14 px (prefer 16); captions ≥ 12 px
- Navigation ≤ 7 items; one primary CTA in the header

---

## Design tokens

### Color (exact app values)

| Role | Token | Value | Evidence |
|------|--------|--------|----------|
| Primary | `primary` | `#1F6F78` | `colors.primary` |
| Primary dark / press | `primaryDark` | `#195C63` | `colors.primaryDark` |
| Primary soft | `primarySoft` | `#D4EBE8` | `colors.primarySoft` |
| Secondary / success | `secondary` | `#9BC4B5` | `colors.secondary` |
| Secondary soft | `secondarySoft` | `#E8F3EF` | `colors.secondarySoft` |
| Sand / tertiary | `sand` | `#E7D8C9` | `colors.tertiary` |
| Accent / alert | `accent` | `#E97B6C` | `colors.accent` |
| Accent soft | `accentSoft` | `#FCE8E5` | `colors.accentSoft` |
| Text primary | `ink` | `#2E3A4B` | `colors.textPrimary` |
| Text secondary | `ink-muted` | `#5A6573` | `colors.textSecondary` |
| Text on primary | — | `#FFFFFF` | `colors.textOnPrimary` |
| Page background | `surface` | `#F7F3EF` | `colors.background` |
| Card surface | `surface-card` | `#FFFFFF` | `colors.cardBackground` |
| Border | `surface-border` | `#D4E4DE` | `colors.border` |

**Usage rules**
- One strong color moment per viewport: primary teal for CTAs and the features band.
- Body text always `ink` / `ink-muted` on `surface` or white — never light text on sand alone.
- Accent coral is reserved for urgency (med reminders, alerts), not decoration.

### Typography

| Role | Family | Weight | Size (app / web) |
|------|--------|--------|------------------|
| Brand / display | Poppins | 700 | App brand 22 · Landing hero 48–72 |
| Section titles | Poppins | 600–700 | App 18–24 · Landing 32–40 |
| Body | Source Sans 3 | 400 | 16 |
| Labels | Source Sans 3 | 500–600 | 14 |
| Captions | Source Sans 3 | 400 | 12–13 |

**Hierarchy rule:** Brand name outranks the headline. One `h1` per page (the value proposition). Section titles are `h2`.

### Spacing (8px grid)

| Token | px |
|-------|-----|
| `xs` | 4 |
| `sm` | 8 |
| `md` | 16 |
| `lg` | 24 |
| `xl` | 32 |
| section Y | 64–96 |

Content max width: **1152px** (`max-w-6xl`). Horizontal page padding: 16 → 24.

### Radius

| Token | px | Use |
|-------|-----|-----|
| `sm` | 8 | chips, small controls |
| `md` | 12 | inputs, compact tiles |
| `lg` | 16 | cards, QR frame, icon wells |
| `pill` | 999 | primary CTAs, nav button |

### Shadow

| Token | Spec | Use |
|-------|------|-----|
| `soft` | `0 2px 8px rgba(46,58,75,0.08)` | App card shadow |
| `lift` | `0 16px 40px rgba(46,58,75,0.12)` | Phone mock / hero product only |

Avoid multi-layer glow stacks.

---

## Layout principles (landing)

1. **One composition** — First viewport reads as a single brand + product scene, not a dashboard.
2. **Brand first** — “PawDex” is the hero-level signal; the headline supports it and never overpowers it.
3. **Hero budget** — Brand, one headline, one supporting sentence, one CTA group, one dominant product visual. No stats, FAQ, or secondary promos in the first viewport.
4. **Full-bleed atmosphere** — Hero background is edge-to-edge (gradient + soft teal/sand wash). Product phone sits as the real visual anchor — not an inset media card collage.
5. **No hero cards** — Cards belong inside the phone mock (product UI) only. Marketing sections prefer rules, columns, and open space over boxed grids.
6. **One job per section** — How it works / What it does / Download each have one purpose, one headline, one short support line.
7. **Cards only for interaction** — Store buttons and QR are interactive containers; decorative card chrome elsewhere is removed.
8. **Motion** — 2–3 intentional reveals (hero enter, how-it-works stagger, download enter). No continuous noise.

---

## Components

### Primary button
- Fill `primary`, hover `primaryDark`, text white
- Height ≥ 44px, `radius.pill`, Poppins/Inter semibold 16
- Used for “Get the app”

### Store buttons
- App Store: `ink` fill (platform convention)
- Google Play: `primary` fill
- Label structure: small caption + bold store name
- Coming-soon state: same visuals, `preventDefault`, `aria-disabled`

### Navbar
- Sticky, translucent `surface` + blur
- Hairline `surface-border`
- Logo mark 36px + Poppins brand
- One primary CTA only (no store-button cluster in the bar)

### Download visual
- Portrait dog photo (`/assets/dog.png`) in a soft `primarySoft` frame, `rounded-[2rem]`
- Light teal gradient wash; logo + caption under the image (no QR)

### Section heading
- Eyebrow: uppercase, tracking wide, `primary` (or `secondary` on teal bands)
- Title: Poppins bold
- Description: Inter, `ink-muted`, max ~36ch–50ch

### Phone product mock
- Represents Home screen language: brand teal banner, white tiles, soft borders, branded icons
- Dominant right-column visual on desktop; centered below copy on mobile

---

## Section order

1. `#top` — Hero
2. `#how-it-works` — Three steps
3. `#features` — What PawDex does (full-bleed primary band)
4. `#download` — Store CTAs + dog photo visual
5. Footer — legal + anchors

---

## Imagery

| Asset | Path | Use |
|-------|------|-----|
| App icon | `/assets/app-icon.png` | Favicon, nav, footer |
| Logo | `/assets/logo.png` | Brand mark alternate |
| Dog photo | `/assets/dog.png` | Download section visual |
| Condition / feature icons | `/assets/*.png` | How it works, features, phone mock |

Icons are teal-palette illustrated PNGs from the app branded set — do not replace with generic emoji or Lucide unless matching the brand set.

---

## Implementation guidance (Tailwind)

- Map tokens in `tailwind.config.js` 1:1 with the table above.
- Prefer utility classes that reference semantic tokens (`bg-primary`, `text-ink-muted`) over raw hex.
- Section padding: `py-16 md:py-24` (≈ 64 / 96).
- Do not introduce purple gradients, glow orbs as the main idea, or extra pill clusters.
- Preserve light theme only (matches app).

---

## Accessibility

- WCAG AA contrast: `ink` on `surface`, white on `primary`.
- Focus ring: 2px `primary`, 3px offset (matches app web focus styles).
- Skip link to main content.
- Store buttons announce coming-soon via `aria-label` until live.
- Minimum 44px touch targets on CTAs.

---

## Unresolved / launch checklist

- [ ] Real App Store / Play URLs in `src/config.ts`
- [ ] Flip `StoreButtons` `comingSoon` to `false`
- [ ] Host privacy/support alongside landing (already copied into `public/`)

---

## Gaps

- No live public marketing URL scraped; tokens come from app source of truth.
- Mobile screenshot of production app not embedded here — phone mock approximates Home UI patterns.
- Hover / pressed states for RN buttons mapped to CSS `:hover` / `primaryDark` as an implementation choice.
