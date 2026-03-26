"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

// ─── Industry tile icons — CSS-drawn SVGs ─────────────────────────────────────
function HVACIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}
function PlumbingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M8 4v10a6 6 0 006 6h6M20 16l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="22" r="2" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}
function RealEstateIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 24V12.5L14 4l10 8.5V24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="10" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}
function InsuranceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3L5 7v8c0 5.5 4 9.5 9 11 5-1.5 9-5.5 9-11V7L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function RetailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M5 10h18l-2 13H7L5 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M10 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function EcommerceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M4 11h20" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9 16h4M9 19h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

const industries = [
  { Icon: RealEstateIcon, label: "Real Estate"      },
  { Icon: HVACIcon,       label: "HVAC & Heating"   },
  { Icon: RetailIcon,     label: "Retail Stores"    },
  { Icon: PlumbingIcon,   label: "Plumbing"         },
  { Icon: InsuranceIcon,  label: "Insurance"        },
  { Icon: EcommerceIcon,  label: "eCommerce"        },
];

export default function SocialProofSection() {
  return (
    <section
      id="industries"
      className="section-pad"
      style={{ background: "#151238" }}
      aria-labelledby="industries-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            className="eyebrow"
            style={{ color: "#1fcf42" }}
            variants={fadeUp}
          >
            Who We Work With
          </motion.p>
          <motion.h2
            id="industries-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            variants={fadeUp}
          >
            Built for the businesses
            <br />
            that keep Noblesville running.
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed max-w-[600px] mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
            variants={fadeUp}
          >
            Digital Doorstep is built specifically for owner-operated
            businesses in Noblesville and Hamilton County, Indiana. If
            you&apos;re the one answering the phone, doing the work, and
            running everything in between &mdash; this was built for you.
          </motion.p>
        </motion.div>

        {/* Industry tiles — 3×2 desktop, 2×3 tablet, scrollable on mobile */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {industries.map(({ Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-3 rounded-[16px] py-7 px-4 text-center"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div style={{ color: "rgba(255,255,255,0.75)" }}>
                <Icon />
              </div>
              <span className="text-sm font-semibold text-white">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Location line */}
        <motion.p
          className="text-center text-sm mt-10 font-medium"
          style={{ color: "rgba(255,255,255,0.4)" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Based in Noblesville, Indiana. Serving Hamilton County and the greater Indianapolis area.
        </motion.p>
      </div>
    </section>
  );
}
