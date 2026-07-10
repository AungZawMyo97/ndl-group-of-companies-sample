---
name: Stalwart Corporate System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to project a sense of institutional stability, executive authority, and operational clarity. It targets a high-level corporate audience where precision and reliability are paramount. 

The aesthetic is **Corporate Modern**, blending the structure of traditional enterprise design with the clean, airy efficiency of contemporary SaaS. It prioritizes information density without clutter, utilizing generous whitespace to denote premium positioning. The emotional response is one of total confidence: the UI feels grounded, intentional, and impeccably organized.

## Colors

The palette is built on a foundation of "Deep Navy," providing a weightier alternative to pure black for text and primary surfaces. "Trust Blue" is used sparingly as a functional accent to guide the eye toward primary actions and status indicators.

- **Primary (Deep Navy):** Used for typography, brand-heavy components, and dark-mode headers.
- **Secondary (Slate Gray):** Used for supporting text, borders, and icon states to reduce visual noise.
- **Accent (Trust Blue):** Reserved for interactivity (buttons, links, active states) and meaningful highlights.
- **Surface:** A range of ultra-light slates (Neutral) creates a clean, multi-layered background that prevents the "stark white" fatigue while maintaining high contrast.

## Typography

This design system utilizes a dual-font pairing to balance character with utility. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge that feels modern yet established. **Inter** is the workhorse for all body and UI elements, chosen for its exceptional legibility and systematic performance in data-heavy environments.

Headline weights should remain semi-bold or bold to maintain authority against the generous whitespace. Body text favors a slightly increased line-height (1.5x) to ensure professional readability across long-form reports and dashboards.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid with a maximum width of 1280px for desktop to maintain optimal line lengths. 

- **Desktop:** 12 columns, 24px gutters, 40px external margins.
- **Tablet:** 8 columns, 16px gutters, 24px external margins.
- **Mobile:** 4 columns, 16px gutters, 16px external margins.

Vertical rhythm is strictly adhered to using a 4px baseline unit. Component spacing (padding and margins) should always be multiples of 8px (e.g., 8, 16, 24, 32, 48, 64) to create a predictable and harmonious structural flow.

## Elevation & Depth

To maintain a "Clean & Stable" aesthetic, this design system avoids heavy shadows. Depth is primarily achieved through **Tonal Layering** and **Low-Contrast Outlines**.

1.  **Level 0 (Base):** Neutral background (#F8FAFC).
2.  **Level 1 (Cards/Containers):** Pure white background (#FFFFFF) with a 1px border (#E2E8F0). No shadow.
3.  **Level 2 (Popovers/Modals):** Pure white background with a subtle, ultra-diffused shadow (0px 10px 15px -3px rgba(15, 23, 42, 0.08)) to indicate temporary interaction.
4.  **Level 3 (Active Focus):** 2px Trust Blue outline for keyboard navigation and selected input fields.

This approach creates a flat, "printed" feel that emphasizes the content over the container.

## Shapes

The shape language is **Soft-Geometric**. A standard radius of 4px (`0.25rem`) is applied to buttons, input fields, and small UI components. This subtle rounding softens the clinical nature of the corporate style without losing the professional "sharpness" required by an authoritative brand.

Large containers like cards may use the `rounded-lg` (8px) setting to create a more distinct visual separation from the background. Geometric precision is favored over organic or overly rounded "bubbly" shapes.

## Components

- **Buttons:** Primary buttons use a Deep Navy background with white text. Secondary buttons use a Slate Gray outline. The "Trust Blue" accent is used only for high-priority CTA (Call to Action) buttons.
- **Cards:** Cards should be border-only with 0.5rem (8px) padding for mobile and 1.5rem (24px) for desktop. No drop shadows.
- **Input Fields:** Use a 1px border in Slate Gray. On focus, the border transitions to Trust Blue with a 2px stroke. Label text is always H6/Label-MD weight in Deep Navy.
- **Lists:** Data tables and lists use 1px horizontal dividers in a very light slate (#F1F5F9). Alternate row striping is discouraged; use hover states instead.
- **Chips/Badges:** Small, 4px rounded labels with low-saturation backgrounds (e.g., light blue background with dark blue text) to indicate status without overpowering the content.
- **Progress Indicators:** Use the Trust Blue accent for all active progress bars and loading states to signify system movement and reliability.