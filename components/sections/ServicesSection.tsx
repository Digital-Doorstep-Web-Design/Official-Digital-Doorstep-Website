"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const STARTER_FEATURES = [
  "Missed-call reply \u2014 every unanswered call gets a personal text back within 60 seconds",
  "Appointment confirmation and reminder \u2014 sent automatically the day before and the morning of",
  "Post-job review request \u2014 we ask your happy customers for a Google review so you don\u2019t have to",
  "New contact logging \u2014 every new customer is saved automatically, nothing gets lost",
  "Monthly monitoring \u2014 we watch it so you don\u2019t have to, and fix anything before you notice",
];

const PRO_FEATURES = [
  "Win-back messages \u2014 customers who haven\u2019t been back in 30, 60, or 90 days get a personal outreach automatically",
  "Customer loyalty flows \u2014 post-purchase follow-ups that keep people coming back without any effort from you",
  "Review building \u2014 a consistent, automated ask after every purchase that grows your Google rating over time",
  "Low-stock alerts \u2014 get notified automatically before you run out of what\u2019s selling",
  "Monthly check-in and report \u2014 a plain-English summary of what ran, what worked, and what\u2019s next",
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
          {/* Card 1 — Trades */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[24px] p-10 flex flex-col shadow-card"
            style={{ borderLeft: "4px solid #24285b" }}
          >
            {/* Badge */}
            <span
              className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-pill mb-6"
              style={{ background: "#0d7a2a", color: "white" }}
            >
              Most Popular
            </span>

            <h3 className="text-2xl font-bold text-ink-heading mb-1">Doorstep Starter</h3>
            <p className="text-sm font-medium text-ink-muted mb-5">
              Starting at <span className="text-ink-heading font-semibold">$299 setup</span> +{" "}
              <span className="text-ink-heading font-semibold">$99/mo</span>
            </p>

            <p className="text-base text-ink-muted leading-relaxed mb-7">
              Built for trades and home service businesses that are tired of
              losing jobs to voicemail. We connect your phone, your calendar,
              and your customers &mdash; so every lead gets a response, every
              appointment gets a reminder, and every happy customer gets
              asked for a review. You don&apos;t touch a thing.
            </p>

            <ul className="check-list mb-8 flex-grow">
              {STARTER_FEATURES.map((f) => (
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

          {/* Card 2 — Retail */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[24px] p-10 flex flex-col shadow-card"
            style={{ borderLeft: "4px solid #24285b" }}
          >
            <h3 className="text-2xl font-bold text-ink-heading mb-1 mt-[52px]">Doorstep Pro</h3>
            <p className="text-sm font-medium text-ink-muted mb-5">
              Starting at <span className="text-ink-heading font-semibold">$699 setup</span> +{" "}
              <span className="text-ink-heading font-semibold">$199/mo</span>
            </p>

            <p className="text-base text-ink-muted leading-relaxed mb-7">
              Built for retail shops and businesses that need more than a
              website &mdash; they need their tools actually talking to each
              other. We connect your platforms, build the follow-up flows
              your customers never see but always feel, and keep the whole
              system running every month.
            </p>

            <ul className="check-list mb-8 flex-grow">
              {PRO_FEATURES.map((f) => (
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
