/**
 * lib/animations.ts
 * Shared Framer Motion variants used across all sections.
 * All reveals: 500ms, easeOut — never longer than 600ms per spec.
 */

import type { Variants } from "framer-motion";

/** Standard fade-up for any section element */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Container that staggers its direct children */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/** Shared viewport options — trigger 80px before element enters */
export const viewport = { once: true, margin: "-80px" } as const;
