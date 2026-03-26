"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardWidget from "@/components/ui/DashboardWidget";

// Shared custom ease-out curve — smooth deceleration, premium feel
const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  // Scroll indicator state — fade chevron out after 80px scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-white min-h-screen flex flex-col justify-center pt-[132px] pb-[100px] lg:pt-[156px] lg:pb-[120px] overflow-hidden"
      aria-label="Hero"
    >
      <div className="max-w-[1320px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] lg:items-center gap-16 sm:gap-20 lg:gap-14 xl:gap-20 2xl:gap-28">

          {/* ── Left column — text content ──────────────────────────────── */}
          <div>

            {/* Eyebrow — navy at 60% so it reads as left-column label, not a widget label */}
            <motion.p
              className="eyebrow"
              style={{ color: "rgba(26,58,92,0.6)", marginBottom: "20px" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.0 }}
            >
              AI Automation for Local Businesses
            </motion.p>

            {/* Headline — two lines staggered independently, nowrap on lg prevents 4-line wrap */}
            <h1
              className="font-bold leading-[1.1] mb-5 max-w-[580px]"
              style={{ fontSize: "clamp(2.75rem, 7vw, 4.75rem)", color: "#1A3A5C" }}
            >
              <motion.span
                className="block lg:whitespace-nowrap"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
              >
                Your business,
              </motion.span>
              <motion.span
                className="block lg:whitespace-nowrap"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.22 }}
              >
                running smarter.
              </motion.span>
            </h1>

            {/* Subheadline — hyphens off prevents "follow-" / "ups" split */}
            <motion.p
              className="text-[18px] text-ink-muted leading-[1.65] max-w-[440px]"
              style={{ hyphens: "none", overflowWrap: "normal", wordBreak: "normal" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.38 }}
            >
              Digital Doorstep builds done-for-you AI systems that capture leads,
              automate follow-ups, and save you hours every week &mdash; built by a local
              expert who actually lives here.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mt-9"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.52 }}
            >
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-pill btn-primary"
              >
                Get Your Free Audit &rarr;
              </button>
              <button
                onClick={() =>
                  document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-pill btn-ghost"
              >
                See How It Works
              </button>
            </motion.div>
          </div>

          {/* ── Right column — dashboard widget ─────────────────────────── */}
          <div className="flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
            <DashboardWidget />
          </div>
        </div>
      </div>

      {/* Scroll indicator — fades out after 80px scroll */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            <motion.svg
              width="20" height="12" viewBox="0 0 20 12" fill="none"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <path
                d="M1 1l9 9 9-9"
                stroke="#121643"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
