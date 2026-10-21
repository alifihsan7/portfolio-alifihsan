---
version: "1.1"
name: Alif Ihsan Portfolio Design System
description: Formal token specification, design rationale, and anti-slop frontend architecture for the Alif Ihsan personal portfolio (portfolio.alifihsan.my.id).
colors:
  primary: "#0b1426"
  background: "#0b1426"
  surface: "#111d36"
  surface-soft: "#0e1a31"
  outline: "#22314f"
  foreground: "#e8edf7"
  muted: "#93a2bf"
  accent: "#e3b976"
  accent-ink: "#1a1405"
  timeline-org: "#4d6599"
  focus-ring: "#9db8ff"
  light-primary: "#e8edf8"
  light-surface: "#f4f7fd"
  light-foreground: "#0e1a33"
  light-muted: "#4a5878"
  light-outline: "#c5d0e8"
  light-accent: "#8a5c14"
  light-accent-ink: "#ffffff"
  light-timeline-org: "#6b82b0"
  light-focus-ring: "#1f4fd8"
typography:
  headline-display:
    fontFamily: "Bricolage Grotesque"
    fontSize: "54px"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.012em"
  headline-section:
    fontFamily: "Bricolage Grotesque"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline-sub:
    fontFamily: "Bricolage Grotesque"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body-lede:
    fontFamily: "Figtree"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  body-md:
    fontFamily: "Figtree"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Figtree"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label-eyebrow:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "0.12em"
  label-meta:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.03em"
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  xxl: "18px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  measure: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
    padding: "12px"
    typography: "{typography.body-md}"
  button-primary-light:
    backgroundColor: "{colors.light-accent}"
    textColor: "{colors.light-accent-ink}"
    rounded: "{rounded.full}"
    padding: "12px"
    typography: "{typography.body-md}"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "12px"
    typography: "{typography.body-md}"
  chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "6px"
    typography: "{typography.label-meta}"
  chip-light:
    backgroundColor: "{colors.light-primary}"
    textColor: "{colors.light-muted}"
    rounded: "{rounded.full}"
    padding: "6px"
    typography: "{typography.label-meta}"
  card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "24px"
    typography: "{typography.body-md}"
  card-light:
    backgroundColor: "{colors.light-surface}"
    textColor: "{colors.light-foreground}"
    rounded: "{rounded.xl}"
    padding: "24px"
    typography: "{typography.body-md}"
  timeline-bar:
    backgroundColor: "{colors.timeline-org}"
    rounded: "{rounded.sm}"
    height: "16px"
  timeline-bar-light:
    backgroundColor: "{colors.light-timeline-org}"
    rounded: "{rounded.sm}"
    height: "16px"
  focus-indicator:
    backgroundColor: "{colors.focus-ring}"
    rounded: "{rounded.xs}"
    size: "44px"
  focus-indicator-light:
    backgroundColor: "{colors.light-focus-ring}"
    rounded: "{rounded.xs}"
    size: "44px"
  theme-toggle:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    size: "44px"
  nav-link:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "6px"
    typography: "{typography.label-meta}"
  divider:
    backgroundColor: "{colors.outline}"
    height: "1px"
  divider-light:
    backgroundColor: "{colors.light-outline}"
    height: "1px"
---

# Alif Ihsan Portfolio Design System

Formal design token specification and UI/UX implementation guide conforming to the Google DESIGN.md v1.1 specification (Apache-2.0).

## Overview

The visual identity of Alif Ihsan's personal portfolio (`portfolio.alifihsan.my.id`) embodies an editorial, high-density engineering aesthetic. It replaces generic AI slop (overused purple/cyan neon blobs, washed-out low-contrast gray-on-gray copy, and bloated cards) with an intentional dark obsidian-navy architecture, crisp architectural borders, and deliberate golden accents.

### Core Tenets

1. **Dark Navy First, Light Variant Second**: The canonical sensory experience is anchored in midnight obsidian navy (`#0b1426`), presenting an immersive atmosphere for engineering artifacts. The light mode variant (`#e8edf8`) preserves high editorial contrast without losing structural discipline.
2. **Editorial Typographic Tension**: Contrast between the expressive, punchy display typography (**Bricolage Grotesque**), the clear readability of geometric humanist sans-serif (**Figtree**), and the high-precision telemetry of monospace (**JetBrains Mono**).
3. **Tactile Interaction & Restrained Polish**: Ambient layers such as the cursor spotlight, 12-column architectural alignment guides, floating peek overlays, and 3D card deck showcase provide tactile depth. Transitions are swift, snappy, and tuned with customized cubic bezier easing (`cubic-bezier(0.2, 0.7, 0.2, 1)`).
4. **Militant Ergonomics & Accessibility**: Zero cumulative layout shift (CLS), strict keyboard navigable focus rings (`outline: 2px solid #9db8ff; outline-offset: 3px`), WCAG AA/AAA compliance across text contrasts, and mandatory minimum 44px touch targets on mobile viewports.

---

## Colors

The color palette is built around an obsidian navy background hierarchy punctuated by a single molten gold interaction accent.

### Dark Mode (Canonical Default)

- **Primary Canvas (`#0b1426` / `--bg`):** Deep obsidian navy serving as the foundational floor for all pages. Provides optimal dark-room contrast while avoiding harsh pitch-black fatigue.
- **Surface Raised (`#111d36` / `--bg-raised`):** Elevated container layer used for image thumbnails, interactive preview cards (`.peek`), and 3D showcase slides (`.deck .s`).
- **Surface Soft (`#0e1a31` / `--bg-soft`):** Recessed tonal container used for stat blocks, contact container background, and interactive hover planes.
- **Foreground Text (`#e8edf7` / `--fg`):** High-contrast cool porcelain white for primary headings, hero text, and critical prose (contrast ratio > 14:1 against `--bg`).
- **Muted Text (`#93a2bf` / `--muted`):** Cool slate gray for secondary captions, metadata, dates, and unselected navigation links (contrast ratio 6.5:1 against `--bg`, exceeding WCAG AA minimum).
- **Border / Outline (`#22314f` / `--line`):** Precision 1px hairline border separating sections, rows, and interactive boundaries.
- **Accent Gold (`#e3b976` / `--accent`):** Molten golden amber used with strict restraint for primary call-to-actions, active highlights, hover shifts, and timeline milestones.
- **Accent Ink (`#1a1405` / `--accent-ink`):** Deep near-black ink color applied directly over the gold accent surface, guaranteeing extreme legibility (> 10:1 contrast).
- **Accent Soft (`rgba(227, 185, 118, 0.14)` / `--accent-soft`):** Subtle ambient golden tint for interactive row highlights, active lane backgrounds, and glowing radial gradients.
- **Timeline Bar Org (`#4d6599` / `--bar-org`):** Tuned institutional blue-slate specifically calibrated and tested to meet WCAG 1.4.11 non-text contrast (3.18:1 against `--bg`).
- **Focus Ring (`#9db8ff` / `--focus`):** High-visibility electric periwinkle ring for accessible keyboard navigation (`:focus-visible`).
- **Spotlight Ambient (`rgba(120, 150, 230, 0.16)` / `--spot`):** Subtle radial cursor illumination giving physical depth to mouse movement across desktop viewports.

### Light Mode Variant (`data-theme="light"` / `@media (prefers-color-scheme: light)`)

- **Primary Canvas (`#e8edf8`):** Clean, crisp paper blue-gray foundation.
- **Surface Raised (`#f4f7fd`):** Elevated clean card background.
- **Surface Soft (`#dde5f4`):** Recessed container surface.
- **Foreground Text (`#0e1a33`):** Deep midnight blue ink for high-contrast reading.
- **Muted Text (`#4a5878`):** Refined slate steel for secondary labels.
- **Border / Outline (`#c5d0e8`):** Soft perimeter hairline.
- **Accent Amber (`#8a5c14`):** Deep rich bronze-gold passing 4.5:1 text contrast on light surfaces.
- **Accent Ink (`#ffffff`):** Pure white text on accent surfaces.
- **Timeline Bar Org (`#6b82b0`):** Slate-blue marker for light background contrast.
- **Focus Ring (`#1f4fd8`):** Deep cobalt focus ring for distinct visibility.

---

## Typography

Typography establishes an editorial cadence. Three distinct typefaces are loaded with clear semantic separation:

- **Display (`--font-display`):** `"Bricolage Grotesque"`, `"Segoe UI"`, system-ui, sans-serif. Used for the prominent reactive hero name, section headings (`h2`), and modal titles. Characterized by tight letter-spacing and structural personality.
- **Body (`--font-body`):** `"Figtree"`, `"Segoe UI"`, system-ui, sans-serif. Clean, humanist geometric sans-serif engineered for effortless long-form reading and clear legibility at 14px–19px sizes.
- **Monospace (`--font-mono`):** `"JetBrains Mono"`, ui-monospace, Menlo, monospace. Used for technical metadata, career dates, eyebrow chips, telemetry readouts, and section tags. Features tabular figures for precise numeric alignment.

### Type Hierarchy Scale

| Token Key | Font Family | Size | Weight | Line Height | Letter Spacing | CSS Equivalent |
|---|---|---|---|---|---|---|
| `headline-display` | Bricolage Grotesque | 54px | 800 | 0.88 | -0.012em | `h1` (`clamp(3.4rem, 15vw, 9rem)`) |
| `headline-section` | Bricolage Grotesque | 36px | 800 | 1.05 | -0.03em | `h2` (`clamp(2rem, 5vw, 3.25rem)`) |
| `headline-sub` | Bricolage Grotesque | 18px | 700 | 1.25 | -0.01em | `h3` (`1.15rem`) |
| `body-lede` | Figtree | 19px | 400 | 1.50 | 0em | `.lede` (`clamp(1.1rem, 2.4vw, 1.4rem)`) |
| `body-md` | Figtree | 16px | 400 | 1.60 | 0em | `body` default (`1rem`) |
| `body-sm` | Figtree | 14px | 400 | 1.50 | 0em | `.r-meta`, captions (`0.85rem–0.9rem`) |
| `label-eyebrow` | JetBrains Mono | 12px | 500 | 1.00 | 0.12em | `.eyebrow` (`uppercase`) |
| `label-meta` | JetBrains Mono | 12px | 400 | 1.40 | 0.03em | `.meta`, `.r-year` (`0.75rem–0.8rem`) |
| `label-mono` | JetBrains Mono | 14px | 500 | 1.40 | 0.06em | `.hero-role`, `.projlink` |

---

## Layout

The layout uses a single-column editorial stream bounded by a maximum measure of **72rem (1152px)** centered horizontally with fluid gutter cushions.

### Spacing Scale & Rhythm

- **Scale Base**: 4px strict half-step, 8px standard step.
- `xs` (4px): Micro gaps, inline badge offsets, indicator dots.
- `sm` (8px): Button icon gaps, tag padding vertical, small list spacing.
- `md` (16px): Standard element rhythm, body paragraph margins, compact card padding.
- `lg` (24px): Standard card internal padding, grid column gaps.
- `xl` (32px): Major component separations, hero content spacing.
- `xxl` (48px): Section padding blocks, macro layout gaps.
- `measure` (72rem / 1152px): Maximum content wrapper (`.wrap`).

### Viewport Adaptation & Tap Targets (Mobile Ergonomics)

- **Desktop (>= 64rem / 1024px)**:
  - Multi-column editorial grid for hero (`minmax(0, 1fr) minmax(0, 32rem)`).
  - Ambient cursor spotlight (`.spot`) and fixed corner coordinates readout (`.readout`) activated.
  - Interactive hover row expansion reveals floating thumbnail cards (`.r-mini` / `.peek`).
- **Tablet (40rem to 63.99rem)**:
  - Fluid two-column masonry galleries and multi-column facts.
- **Mobile (< 40rem / 640px)**:
  - Single column stack with full-width thumbs (`.r-thumb`).
  - **Mandatory 44px Touch Targets (Patch R-03)**:
    - `.theme` toggle: `min-width: 44px; min-height: 44px; width: 44px; height: 44px;`.
    - `.top nav a.lang`: `min-width: 44px; min-height: 44px; height: 44px;`.
    - Navigation links, filter chips, and interactive buttons must maintain >= 44px accessible thumb zone hit targets.

---

## Elevation & Depth

Rather than relying on heavy, muddy blur shadows, depth is achieved primarily through **Tonal Layering** and **Hairline Geometry**, complemented by purposeful cinematic lighting:

1. **Recessed Plane (`--bg-soft` / `#0e1a31`)**: Subordinate containers such as stats cards and contact modules carved into the page floor.
2. **Base Plane (`--bg` / `#0b1426`)**: The global page canvas.
3. **Elevated Surfaces (`--bg-raised` / `#111d36`)**: Floating image zoom previews, peek modals, and 3D showcase cards.
4. **Cinematic Shadows**:
   - Floating work preview (`.peek`): `box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6)`.
   - 3D hero showcase deck (`.deck .s`): `box-shadow: 0 24px 50px -28px rgba(0, 0, 0, 0.7)`.
   - Primary button hover state (`.btn.primary:hover`): `box-shadow: 0 8px 26px -8px #e3b976`.
5. **Hairline Precision**: All borders are strictly `1px solid var(--line)` (`#22314f`), maintaining surgical architectural crispness without visual clutter.

---

## Shapes

Shapes balance strict geometric precision with organic pill curves for interactive controls.

### Corner Radius Tokens

- `none` (`0px`): Raw images, full bleed layout containers, and text navigation anchors.
- `xs` (`2px`): Focus-visible bounding rings (`border-radius: 2px`) and timeline legend color swatches.
- `sm` (`4px`): Timeline track bars (`border-radius: 4px`).
- `md` (`6px`): Telemetry coordinates readout badge (`.readout`) and career timeline hover lanes (`.lane`).
- `lg` (`8px`): In-row image miniatures (`.r-mini`), zoom figure containers, and lightbox stages.
- `xl` (`12px`): Floating hover peek cards (`.peek`), 3D showcase deck slides (`.deck .s`), stats metric containers, and mobile phone showcases.
- `xxl` (`18px`): Contact module callout card (`.contact-box`).
- `full` (`9999px`): Primary action buttons (`.btn`), work filter chips (`.chip`), language switcher pill (`a.lang`), and theme toggle circular button (`.theme`).

---

## Components

Design specifications for standard interactive elements in the system:

### 1. Primary Action Button (`button-primary`)
- **Background**: `{colors.accent}` (`#e3b976`)
- **Text Color**: `{colors.accent-ink}` (`#1a1405`)
- **Typography**: `{typography.body-md}`, weight 600
- **Padding**: `12px 21px` (`0.75rem 1.3rem`)
- **Rounding**: `{rounded.full}` (`9999px`)
- **States**: On hover, translates up by `2px` (`transform: translateY(-2px)`) and emits subtle golden drop shadow `box-shadow: 0 8px 26px -8px var(--accent)`. Arrow icon translates `translate(3px, -3px)`.

### 2. Secondary Button (`button-secondary`)
- **Background**: `transparent` (resting on `{colors.primary}`)
- **Border**: `1px solid {colors.outline}` (`#22314f`)
- **Text Color**: `{colors.foreground}` (`#e8edf7`)
- **Rounding**: `{rounded.full}`
- **States**: On hover, border transitions to `{colors.muted}` with slight upward translation.

### 3. Filter Chip (`chip`)
- **Background**: `transparent`
- **Border**: `1px solid {colors.outline}`
- **Text Color**: `{colors.muted}` (`#93a2bf`)
- **Rounding**: `{rounded.full}`
- **Padding**: `6px 15px` (`0.35rem 0.95rem`)
- **Active State (`aria-pressed="true"`)**: Inverts to `{colors.foreground}` background with `{colors.primary}` text.

### 4. Interactive Work Row (`.row`)
- **Border**: Bottom border `1px solid {colors.outline}`.
- **Typography**: Title in `{typography.headline-section}` with font weight 800.
- **Hover State (Desktop)**: Indents left padding by `1rem`, shifts title horizontally by `0.4rem` turning gold (`var(--accent)`), and dims sibling rows to `opacity: 0.35`.

### 5. Career Timeline Bar (`timeline-bar`)
- **Background**: `{colors.timeline-org}` (`#4d6599`)
- **Work Category Background**: `{colors.accent}` (`#e3b976`)
- **Height**: `16px` (`1rem`)
- **Rounding**: `{rounded.sm}` (`4px`)
- **Contrast**: Guaranteed >= 3.18:1 against `#0b1426` canvas.

### 6. Mobile Touch Controls (`theme-toggle` & `lang-toggle`)
- **Target Size**: Minimum `44px` width and height (`44x44px`) adhering to mobile accessibility standards.
- **Border**: `1px solid {colors.outline}`
- **Rounding**: `{rounded.full}`

---

## Do's and Don'ts

### Do's
- **Do** respect the obsidian navy palette (`#0b1426` canvas) and keep text contrast strictly above WCAG AA (>= 4.5:1 for body copy, >= 3:1 for large display titles and non-text UI elements).
- **Do** enforce a minimum 44x44px touch target on every clickable control in mobile views (`<= 40rem`).
- **Do** use `font-variant-numeric: tabular-nums` or monospace for dates, numeric counts, coordinates, and telemetry metadata.
- **Do** reserve the molten gold accent (`#e3b976`) exclusively for the single primary action, key status highlights, and active micro-interactions.
- **Do** respect `prefers-reduced-motion` by zeroing transition durations and preserving instant static visibility.

### Don'ts
- **Don't** introduce generic AI design slop: no multi-color fluorescent violet/purple gradients, no glassy frosted blobs without structure, and no washed-out light gray text on white/dark surfaces.
- **Don't** use unstyled native select or form inputs.
- **Don't** hardcode random pixel border radiuses outside the systematic scale (`2px`, `4px`, `6px`, `8px`, `12px`, `18px`, `full`).
- **Don't** break keyboard navigation: never suppress `:focus-visible` without providing an accessible 2px focus ring (`#9db8ff`).
- **Don't** cause layout shifts (CLS): define explicit aspect ratios (`16 / 10`) on thumbnails and card slots before assets load.
