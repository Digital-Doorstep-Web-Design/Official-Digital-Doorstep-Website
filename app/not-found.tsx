"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";

const ease = [0.22, 1, 0.36, 1] as const;

const item = {
  hidden:   { opacity: 0, y: 18 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function Door() {
  return (
    <motion.div
      style={{ filter: "drop-shadow(0 16px 48px rgba(36,40,91,0.18))" }}
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <svg
        width="152"
        height="214"
        viewBox="0 0 152 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer frame */}
        <rect width="152" height="198" rx="6" fill="#dee2e6" />

        {/* Door face */}
        <rect x="6" y="6" width="140" height="186" rx="4" fill="#24285b" />

        {/* Door — subtle inner gradient overlay */}
        <rect x="6" y="6" width="140" height="186" rx="4"
          fill="url(#doorSheen)" />

        {/* Top raised panel */}
        <rect x="20" y="20" width="112" height="68" rx="3"
          fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />

        {/* Number plate */}
        <rect x="44" y="33" width="64" height="42" rx="4"
          fill="rgba(255,255,255,0.09)" />
        <text
          x="76" y="62"
          textAnchor="middle"
          fill="white"
          fontSize="26"
          fontWeight="700"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          letterSpacing="-1"
          opacity="0.95"
        >
          404
        </text>

        {/* Bottom raised panel */}
        <rect x="20" y="100" width="112" height="82" rx="3"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />

        {/* Mail slot */}
        <rect x="46" y="118" width="60" height="11" rx="2.5"
          fill="rgba(255,255,255,0.0)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

        {/* Doorknob — accent green */}
        <circle cx="120" cy="148" r="8" fill="#1fcf42" />
        <circle cx="120" cy="148" r="4"  fill="#0d7a2a" />

        {/* Step */}
        <rect x="-8"  y="198" width="168" height="12" rx="4" fill="#efefef" />
        <rect x="-14" y="206" width="180" height="8"  rx="3" fill="#dee2e6" />

        {/* Doormat */}
        <rect x="12"  y="214" width="128" height="0"  rx="2" fill="none" />

        <defs>
          <linearGradient id="doorSheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0"    />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-5 pt-32 pb-24 text-center">

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <Door />
        </motion.div>

        {/* Text block */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
        >
          <motion.p className="eyebrow" variants={item}>
            Error 404
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-ink-heading leading-[1.1] mb-5 max-w-[480px]"
            variants={item}
          >
            You knocked on<br />the wrong door.
          </motion.h1>

          <motion.p
            className="text-lg text-ink-muted leading-relaxed max-w-[420px] mb-10"
            variants={item}
          >
            This page doesn&apos;t exist &mdash; but if your business has missed
            calls, broken follow-ups, or tasks eating hours every week, those are
            doors we can actually open.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            variants={item}
          >
            <Link href="/" className="btn-pill btn-primary">
              Back to Home &rarr;
            </Link>
            <Link href="/#contact" className="btn-pill btn-ghost">
              Get Free Audit
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
