"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const STEPS = [
  {
    n: "1",
    title: "Free Audit",
    body: "We spend 30 minutes learning how your business actually runs \u2014 where time gets lost, where leads fall off, where things get done manually that shouldn\u2019t be. No pitch, no pressure. Just an honest look, and a clear picture of what we\u2019d fix first.",
  },
  {
    n: "2",
    title: "We Build It",
    body: "We design and build your automation around your existing tools \u2014 no new software for you to learn, no IT setup required on your end. Everything is tested until it\u2019s solid before it touches your real business.",
  },
  {
    n: "3",
    title: "It Just Runs",
    body: "Once we flip it on, you don\u2019t have to think about it. We monitor everything every month, fix anything that hiccups, and let you know if something needs attention \u2014 before you ever notice it yourself.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-white"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>The Process</motion.p>
          <motion.h2
            id="how-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-heading leading-tight"
            variants={fadeUp}
          >
            Simple by design.
            <br />
            Powerful under the hood.
          </motion.h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical stack on mobile */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {STEPS.map((step) => (
            <motion.div key={step.n} variants={fadeUp} className="relative">
              {/* Large background number — design element */}
              <span
                className="absolute -top-2 -left-1 font-bold select-none pointer-events-none"
                style={{
                  fontSize: "6rem",
                  lineHeight: 1,
                  color: "rgba(36,40,91,0.06)",
                  fontVariantNumeric: "tabular-nums",
                }}
                aria-hidden="true"
              >
                {step.n}
              </span>

              {/* Step badge */}
              <div
                className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-white mb-5"
                style={{ background: "#24285b" }}
              >
                {step.n}
              </div>

              <h3 className="relative z-10 text-xl font-bold text-ink-heading mb-3">
                {step.title}
              </h3>
              <p className="relative z-10 text-base text-ink-muted leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
