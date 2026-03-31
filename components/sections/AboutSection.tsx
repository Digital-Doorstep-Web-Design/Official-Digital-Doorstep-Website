"use client";

import Image from "next/image";
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
            <div
              className="relative w-full max-w-sm aspect-square rounded-card overflow-hidden shadow-card"
              style={{ border: "2px solid #24285b" }}
            >
              <Image
                src="/founder-photo.webp"
                alt="John Hepworth - founder of Digital Doorstep"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
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
              Built from scratch.
              <br />
              Priced for real businesses.
            </motion.h2>

            <motion.div className="space-y-5 text-base text-ink-muted leading-relaxed mb-8" variants={fadeUp}>
              <p>
                My name is John, and I&apos;m the founder of Digital Doorstep.
                I began learning to code before junior high and built my first
                website at fourteen. In 2021, I dove into learning AI and spent
                months studying and experimenting until I could build systems
                that solve real problems.
              </p>
              <p>
                What I found was that most small business owners can&apos;t
                afford automation solutions they don&apos;t understand. And if
                they hire someone, they often get burned &mdash; paying a
                fortune for something that doesn&apos;t work or takes forever.
                They&apos;re stuck either way.
              </p>
              <p>
                So I built Digital Doorstep to handle automation and workflow
                setup. Instead of huge upfront costs, we charge a setup fee and
                monthly retainer that makes sense for a small team. You&apos;re
                not taking a huge risk, and I&apos;m focused on delivering
                results. That&apos;s the whole idea &mdash; straightforward,
                honest, and built for real businesses.
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
