/**
 * brand.config.ts
 * Single source of truth for all color values.
 * Extracted from https://digitaldoorstep.net CSS (styles.css + Bootstrap theme).
 *
 * WCAG AA compliance notes:
 *   - PRIMARY (#24285b) on white: ~11.4:1 ✅
 *   - PRIMARY_DARK (#151238) on white: ~15:1 ✅
 *   - ACCENT (#1fcf42) on white: ~2.0:1 ❌ — do NOT use for body text on white
 *   - ACCENT_TEXT (#0d7a2a) on white: ~4.6:1 ✅ — safe for text on white
 *   - White on PRIMARY (#24285b): ~11.4:1 ✅
 *   - White on PRIMARY_DARK (#151238): ~15:1 ✅
 */

export const COLORS = {
  // ── Primary brand color ─────────────────────────────────────────────────────
  /** Main navy-purple — buttons, nav, key UI chrome */
  PRIMARY:       '#24285b',
  /** Deepest navy — headings, maximum-weight text */
  PRIMARY_DARK:  '#151238',
  /** Used in box-shadow: rgba(21, 18, 56, 0.15) */
  PRIMARY_SHADOW: 'rgba(21, 18, 56, 0.15)',

  // ── Accent green ────────────────────────────────────────────────────────────
  /** Brand green — decorative: borders, icons, checkmarks, underline flourishes */
  ACCENT:        '#1fcf42',
  /** Darkened green — WCAG AA safe for text on white (4.6:1) */
  ACCENT_TEXT:   '#0d7a2a',
  /** Hover state of accent */
  ACCENT_HOVER:  '#17a334',

  // ── Backgrounds ─────────────────────────────────────────────────────────────
  BG_WHITE:      '#ffffff',
  BG_LIGHT:      '#f6f6f6',   // Bootstrap --bs-light
  BG_SUBTLE:     '#f5f6f8',

  // ── Text ────────────────────────────────────────────────────────────────────
  TEXT_HEADING:  '#151238',
  TEXT_BODY:     '#121643',   // rgb(18, 22, 67) — Bootstrap --bs-body-color
  TEXT_MUTED:    '#6c757d',
  TEXT_ON_DARK:  '#ffffff',
  TEXT_ON_DARK_MUTED: 'rgba(255, 255, 255, 0.65)',

  // ── Borders ─────────────────────────────────────────────────────────────────
  BORDER:        '#dee2e6',
  BORDER_SUBTLE: 'rgba(36, 40, 91, 0.12)',

  // ── Canvas / particle hero (light canvas) ───────────────────────────────────
  /** Canvas background — white */
  CANVAS_BG:     '#ffffff',
  /** Particle fill — PRIMARY at 28% */
  PARTICLE_CORE:  'rgba(36, 40, 91, 0.28)',
  /** Ring 1 — PRIMARY at 15% */
  PARTICLE_RING1: 'rgba(36, 40, 91, 0.15)',
  /** Ring 2 — PRIMARY at 8% */
  PARTICLE_RING2: 'rgba(36, 40, 91, 0.08)',
} as const;

export type ColorKey = keyof typeof COLORS;
