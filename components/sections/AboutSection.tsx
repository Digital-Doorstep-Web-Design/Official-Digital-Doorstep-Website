"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import EmailLink from "@/components/ui/EmailLink";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Photo ── */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/*
              PHOTO: Place a candid, professional photo here.
              Ideally taken outdoors or in a real environment — not a studio backdrop.
              Recommended: slightly informal but sharp. A square or portrait crop works well.

              Replace the placeholder below with:
              <img
                src="/founder-photo.jpg"
                alt="[Owner name] — founder of Digital Doorstep"
                className="w-full max-w-sm rounded-card object-cover aspect-square shadow-card"
                style={{ border: "2px solid #24285b" }}
              />
            */}
            <div
              className="w-full max-w-sm aspect-square rounded-card flex items-center justify-center"
              style={{
                background: "rgba(36,40,91,0.06)",
                border: "2px solid rgba(36,40,91,0.12)",
              }}
            >
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#24285b", opacity: 0.35 }}
                >
                  DD
                </div>
                {/* REPLACE: Remove this label once real photo is added */}
                <p className="text-xs font-medium" style={{ color: "#b1b1bc" }}>
                  [FOUNDER PHOTO]
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            className="order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="eyebrow" variants={fadeUp}>About Us</motion.p>
            <motion.h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-heading leading-tight mb-8"
              variants={fadeUp}
            >
              Local roots.
              <br />
              Serious technology.
            </motion.h2>

            <motion.div className="space-y-5 text-base text-ink-muted leading-relaxed mb-8" variants={fadeUp}>
              <p>
                Digital Doorstep was started in Noblesville, Indiana with
                one idea: the same automation tools that help big businesses
                run lean and never miss a lead should be available to the
                HVAC contractor, the plumber, and the shop owner on your
                street &mdash; at a price that actually makes sense.
              </p>
              <p>
                Our founder built Digital Doorstep from scratch &mdash;
                self-teaching server infrastructure, automation engineering,
                and AI integration long before most people were talking about
                it. We don&apos;t sell software licenses or hand you a login
                and wish you luck. We build real systems, configured around
                your specific business, and we stay accountable for whether
                they actually work.
              </p>
              <p>
                We&apos;re not an agency with fifty clients and an outsourced
                team. When you work with Digital Doorstep, you work directly
                with us. We know Noblesville, we know the businesses here,
                and we&apos;re invested in your success &mdash; because this is our
                community too.
              </p>
            </motion.div>

            {/* Trust signals */}
            <motion.div className="flex flex-col gap-3 mb-8" variants={fadeUp}>
              <div className="flex items-center gap-2.5 text-sm font-medium text-ink-heading">
                <span aria-hidden="true">📍</span>
                <span>Noblesville, Indiana</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-ink-heading">
                <span aria-hidden="true">✉</span>
                <EmailLink className="hover:text-brand transition-colors" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-pill btn-ghost"
              >
                Work With Us →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
