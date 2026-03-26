"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

// ─── Icons — CSS-drawn SVGs, no external dependencies ────────────────────────
function PhoneMissedIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#eeeef6"/>
      <path d="M23 10l4 4M27 10l-4 4" stroke="#24285b" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M12 14a2 2 0 012-2h1.3a1 1 0 011 .76l1.1 4.4a1 1 0 01-.27.96l-1.4 1.4a10 10 0 004.71 4.71l1.4-1.4a1 1 0 01.96-.27l4.4 1.1a1 1 0 01.76 1V26a2 2 0 01-2 2C14.7 28 12 21.73 12 14z" stroke="#24285b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#eeeef6"/>
      <circle cx="20" cy="20" r="9" stroke="#24285b" strokeWidth="1.5"/>
      <path d="M20 14v6l4 2.5" stroke="#24285b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#eeeef6"/>
      <rect x="11" y="13" width="8" height="15" rx="1" stroke="#24285b" strokeWidth="1.5"/>
      <rect x="21" y="9"  width="8" height="19" rx="1" stroke="#24285b" strokeWidth="1.5"/>
      <path d="M11 28h18" stroke="#1fcf42" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const painPoints = [
  {
    icon: <PhoneMissedIcon />,
    headline: "Every missed call is a missed job",
    body: "When you\u2019re on a job and can\u2019t answer the phone, that caller doesn\u2019t wait. Studies show 60\u201370% of callers who reach voicemail never leave a message \u2014 they call your competitor instead. That\u2019s real revenue walking out the door, silently, every single day.",
  },
  {
    icon: <ClockIcon />,
    headline: "Manual work steals hours you don\u2019t have",
    body: "Texting appointment reminders by hand, chasing down reviews one by one, re-entering the same customer info into three different places \u2014 this is hours every week that should be running your business for you, not taking you away from it.",
  },
  {
    icon: <BuildingIcon />,
    headline: "Your competitors are pulling ahead",
    body: "Larger businesses have full teams handling follow-up, scheduling, and customer communication automatically. Most local owner-operators don\u2019t \u2014 and they\u2019re quietly losing customers to businesses that respond faster, follow up smarter, and never miss a lead.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-pad bg-white" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Part A — Centered intro */}
        <motion.div
          className="max-w-[700px] mx-auto text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>The Problem</motion.p>
          <motion.h2
            id="problem-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-heading leading-tight mb-6"
            variants={fadeUp}
          >
            You built a great business.
            <br />
            But it&apos;s running you.
          </motion.h2>
          <motion.p
            className="text-lg text-ink-muted leading-relaxed"
            variants={fadeUp}
          >
            Most local businesses in Noblesville and Hamilton County are losing
            time and money every single week &mdash; not because they&apos;re not working
            hard, but because they&apos;re doing manually what should happen automatically.
            Calls go unanswered. Follow-ups never get sent. Appointments get
            forgotten. The tools to fix this used to cost enterprise budgets.
            They don&apos;t anymore.
          </motion.p>
        </motion.div>

        {/* Part B — Pain point cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {painPoints.map((card) => (
            <motion.div
              key={card.headline}
              variants={fadeUp}
              className="group bg-white rounded-card p-8 border transition-shadow duration-300 hover:shadow-card-hover cursor-default"
              style={{ borderColor: "rgba(36,40,91,0.1)" }}
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-base font-semibold text-ink-heading mb-2">{card.headline}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
