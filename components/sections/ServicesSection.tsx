"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const ESSENTIALS_FEATURES = [
  "Single-system build \u2014 we identify your biggest leak and engineer the fix around it",
  "Done-for-you setup \u2014 we handle every detail, you don\u2019t touch a thing",
  "Tested before it goes live \u2014 nothing runs until we\u2019ve confirmed it works end-to-end",
  "Monthly maintenance \u2014 we watch it, update it, and fix anything before you notice",
];

const COMPLETE_FEATURES = [
  "Full operations audit \u2014 we map how your business runs before we build anything",
  "Multi-system build \u2014 multiple automations built to work together as one",
  "Cross-platform integration \u2014 your tools connected and talking to each other",
  "Done-for-you setup and testing \u2014 everything verified before it touches a real customer",
  "Monthly maintenance and reporting \u2014 plain-English summary of what ran, what worked, and what\u2019s next",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "#f6f6f6" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>What We Do</motion.p>
          <motion.h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-heading leading-tight mb-5"
            variants={fadeUp}
          >
            We build it. It delivers results.
            <br />
            You just run your business.
          </motion.h2>
          <motion.p
            className="text-lg text-ink-muted max-w-[600px] mx-auto leading-relaxed"
            variants={fadeUp}
          >
            Every system Digital Doorstep builds is configured around your
            specific business &mdash; your tools, your workflow, your customers.
            Not a template. Not a plugin you have to manage yourself.
            We build it, test it, and keep it running every month.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-7"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Card 1 — Essentials */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[24px] p-10 flex flex-col shadow-card"
            style={{ borderLeft: "4px solid #24285b" }}
          >
            <span
              className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-pill mb-6"
              style={{ background: "#0d7a2a", color: "white" }}
            >
              Most Popular
            </span>

            <h3 className="text-2xl font-bold text-ink-heading mb-1">Doorstep Essentials</h3>
            <p className="text-sm font-medium text-ink-muted mb-5">
              Starting at <span className="text-ink-heading font-semibold">$299 setup</span> +{" "}
              <span className="text-ink-heading font-semibold">$99/mo</span>
            </p>

            <p className="text-base text-ink-muted leading-relaxed mb-7">
              Built for owner-operated businesses that want to fix one specific
              problem first. We identify your single biggest leak &mdash; leads
              falling through, reminders not going out, follow-ups never
              happening &mdash; build the system that fixes it, and keep it
              running every month.
            </p>

            <ul className="check-list mb-8 flex-grow">
              {ESSENTIALS_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-pill btn-primary self-start mt-auto"
            >
              Get Started →
            </button>
          </motion.div>

          {/* Card 2 — Complete */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[24px] p-10 flex flex-col shadow-card"
            style={{ borderLeft: "4px solid #24285b" }}
          >
            <h3 className="text-2xl font-bold text-ink-heading mb-1 mt-[52px]">Doorstep Complete</h3>
            <p className="text-sm font-medium text-ink-muted mb-5">
              Starting at <span className="text-ink-heading font-semibold">$699 setup</span> +{" "}
              <span className="text-ink-heading font-semibold">$199/mo</span>
            </p>

            <p className="text-base text-ink-muted leading-relaxed mb-7">
              Built for businesses ready to connect the dots across their entire
              operation. We audit how your business runs, build multiple
              automations that work together, and maintain everything monthly
              &mdash; so the whole system runs whether you&apos;re in the office
              or not.
            </p>

            <ul className="check-list mb-8 flex-grow">
              {COMPLETE_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-pill btn-primary self-start mt-auto"
            >
              Get Started →
            </button>
          </motion.div>
        </motion.div>

        {/* Unsure nudge */}
        <motion.p
          className="text-center text-sm text-ink-muted mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Not sure which fits your business?{" "}
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-semibold text-brand underline underline-offset-2 hover:text-brand-dark transition-colors"
          >
            Let&apos;s figure it out together →
          </button>
        </motion.p>
      </div>
    </section>
  );
}
