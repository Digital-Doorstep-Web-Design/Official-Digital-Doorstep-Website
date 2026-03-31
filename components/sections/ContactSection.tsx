"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import EmailLink from "@/components/ui/EmailLink";

type FormState = {
  name: string;
  businessName: string;
  businessType: string;
  timewaster: string;
  contact: string;
  website: string; // honeypot — hidden from real users
};

const TRUST_SIGNALS = [
  "No commitment required",
  "Response within 1 business day",
  "Built specifically for Noblesville-area businesses",
];

export default function ContactSection() {
  const [form, setForm]         = useState<FormState>({
    name: "", businessName: "", businessType: "", timewaster: "", contact: "", website: "",
  });
  const [submitting, setSubmit] = useState(false);
  const [done, setDone]         = useState(false);
  const [error, setError]       = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    setError("");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "website_form", ...form }).toString(),
      });
      if (!res.ok) {
        setError("Something went wrong. Please try again or email us directly.");
        return;
      }
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmit(false);
    }
  };

  const inputCls = `
    w-full px-4 py-4 text-sm font-medium text-ink-heading
    border rounded-lg outline-none transition-colors duration-150
    placeholder:text-ink-muted/50
    focus:border-brand
  `;
  const inputStyle = { borderColor: "rgba(36,40,91,0.2)", background: "white" };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "#f6f6f6" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="eyebrow" variants={fadeUp}>Get Started</motion.p>
            <motion.h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-heading leading-tight mb-6"
              variants={fadeUp}
            >
              Let&apos;s make your Monday
              <br />
              mornings easier.
            </motion.h2>
            <motion.p className="text-lg text-ink-muted leading-relaxed mb-10" variants={fadeUp}>
              The audit is free. The conversation is straightforward.
              And if automation isn&apos;t the right fit for your business
              right now, we&apos;ll tell you that honestly &mdash; because a
              bad fit isn&apos;t good for either of us.
            </motion.p>

            {/* Trust micro-signals */}
            <motion.ul className="space-y-4" variants={fadeUp}>
              {TRUST_SIGNALS.map((sig) => (
                <li key={sig} className="flex items-center gap-3 text-sm font-medium text-ink-heading">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-shrink-0">
                    <circle cx="10" cy="10" r="10" fill="#1fcf42"/>
                    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {sig}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {done ? (
              <div className="bg-white rounded-card p-10 shadow-card text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "#edfaf1" }}
                >
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                    <path d="M7 15l5.5 5.5L23 9" stroke="#0d7a2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink-heading mb-2">Message received!</h3>
                {/* REPLACE: Update response time commitment */}
                <p className="text-ink-muted text-sm">
                  We&apos;ll be back to you within 1 business day. Talk soon.
                </p>
              </div>
            ) : (
              <form
                name="website_form"
                onSubmit={onSubmit}
                noValidate
                aria-label="Contact form"
                className="bg-white rounded-card p-8 md:p-10 shadow-card space-y-5"
                data-netlify="true"
                data-netlify-honeypot="website"
              >
                <input type="hidden" name="form-name" value="website_form" />

                {/* Honeypot — visually hidden, never filled by real users */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                  <label htmlFor="website">Website</label>
                  <input
                    id="website" name="website" type="text" tabIndex={-1}
                    autoComplete="off" value={form.website}
                    onChange={onChange}
                  />
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink-heading mb-1.5">
                    Your name <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required autoComplete="name"
                    value={form.name} onChange={onChange}
                    placeholder="Jane Smith"
                    className={inputCls} style={inputStyle}
                  />
                </div>

                {/* Business name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-ink-heading mb-1.5">
                    Business name
                  </label>
                  <input
                    id="businessName" name="businessName" type="text" autoComplete="organization"
                    value={form.businessName} onChange={onChange}
                    placeholder="Smith Plumbing LLC"
                    className={inputCls} style={inputStyle}
                  />
                </div>

                {/* Business type */}
                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-ink-heading mb-1.5">
                    Business type
                  </label>
                  <select
                    id="businessType" name="businessType"
                    value={form.businessType} onChange={onChange}
                    className={inputCls + " appearance-none"} style={inputStyle}
                  >
                    <option value="">Select your industry…</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="hvac">HVAC & Heating</option>
                    <option value="retail">Retail Stores</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="insurance">Insurance</option>
                    <option value="ecommerce">eCommerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Time-waster */}
                <div>
                  <label htmlFor="timewaster" className="block text-sm font-semibold text-ink-heading mb-1.5">
                    What&apos;s the most repetitive thing you or your team does every day that you wish just happened automatically?
                  </label>
                  <textarea
                    id="timewaster" name="timewaster"
                    rows={4} value={form.timewaster} onChange={onChange}
                    placeholder="Don't overthink it — just describe what's eating your time or costing you customers."
                    className={inputCls + " resize-none"} style={inputStyle}
                  />
                </div>

                {/* Contact */}
                <div>
                  <label htmlFor="contact-method" className="block text-sm font-semibold text-ink-heading mb-1.5">
                    Best way to reach you{" "}
                    <span className="font-normal text-ink-muted">(email or phone)</span>
                  </label>
                  <input
                    id="contact-method" name="contact" type="text" required
                    value={form.contact} onChange={onChange}
                    placeholder="you@email.com or (317) 000-0000"
                    className={inputCls} style={inputStyle}
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-red-600 text-center -mb-1">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-pill btn-primary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Book My Free Audit →"}
                </button>

                <p className="text-center text-xs text-ink-muted pt-1">
                  Or email us directly:{" "}
                  <EmailLink className="font-medium text-brand hover:underline" />
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
