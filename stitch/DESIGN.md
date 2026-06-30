---
name: Deterministic Utility
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#4d4732'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00696f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00f1ff'
  on-tertiary-container: '#006a70'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#79f5ff'
  tertiary-fixed-dim: '#00dbe8'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1200px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-density, utility-first applications where state clarity is the primary objective. It targets technical professionals who require immediate data recognition and efficient task execution. 

The aesthetic is **Minimalist-Industrial**: a blend of clean functionalism and workflow-oriented precision. By removing decorative chrome and non-essential ornamentation, the interface prioritizes content and status. The emotional response is one of reliability, speed, and deterministic control. Every element exists to serve a functional purpose within a high-density layout.

## Colors
The palette is anchored by "Canary Yellow" (#FFD700), used sparingly as a high-visibility accent for primary actions and critical focus states. 

The foundational layers utilize a "Professional Neutral" scale. The light mode uses a cool-toned background (#F8FAFC) to reduce eye strain during prolonged use. Deep Navy (#0F172A) is reserved for high-contrast text and structural elements, providing a grounded, professional feel. Status indicators use industry-standard semantic colors to ensure immediate cognitive processing of system states.

## Typography
The system employs **Inter** for its exceptional legibility in UI contexts and neutral character. For technical metadata, timestamps, and ID strings, **JetBrains Mono** is utilized to provide a clear distinction between narrative content and system data.

The typographic hierarchy is intentionally compact. We prioritize "Body-MD" and "Label-Mono" for the majority of the interface to maintain high information density without sacrificing readability. Large display type is minimized, used only for primary view headers.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop to maintain a compact, "dashboard" feel, transitioning to a fluid model for mobile.

The layout is built on a 4px baseline grid. Standard component padding is set to `sm` (8px) for high-density cards and `md` (16px) for larger sections. The layout emphasizes vertical stack efficiency. In desktop views, a 12-column system is used with tight 16px gutters to maximize horizontal real estate for side-by-side status comparisons.

## Elevation & Depth
Depth is conveyed through **Low-Contrast Outlines** and subtle tonal shifts rather than heavy shadows. This maintains the minimalist, "flat" utility aesthetic.

- **Level 0 (Background):** #F8FAFC.
- **Level 1 (Cards/Surface):** White (#FFFFFF) with a 1px solid border (#E2E8F0).
- **Level 2 (Hover/Active):** Subtle ambient shadow (0px 2px 4px rgba(0,0,0,0.05)) to indicate interactivity.
- **Focus State:** 2px solid Canary Yellow (#FFD700) ring with 2px offset.

## Shapes
The shape language is "Soft" (0.25rem), providing a professional, modern feel that remains efficient and structured. 

- **Standard Elements:** 4px radius (inputs, small buttons, cards).
- **Large Containers:** 8px radius.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from actionable buttons.

## Components
### Buttons
- **Primary:** Canary Yellow background, Navy text, bold weight. No gradient.
- **Secondary:** White background, 1px border (#CBD5E1), Navy text.
- **Ghost:** No background or border, Navy text, turns #F1F5F9 on hover.

### Status Cards
Compact containers with a 1px border. The top border should be 3px thick and color-coded based on status (e.g., Green for active, Gray for idle). Use `label-mono` for all metadata within cards.

### Input Fields
Low-profile height (32px or 36px). Background is white, border is #E2E8F0. On focus, the border becomes the secondary navy color with a yellow outer glow.

### Status Toggles
Small, tactile switches. When "On," the track is Canary Yellow; when "Off," the track is #E2E8F0.

### Chips/Tags
Small-scale labels using `label-caps`. Backgrounds should be highly desaturated versions of their semantic meaning (e.g., very pale red for "Error" tags) to keep the focus on the text and the Canary Yellow primary accents.