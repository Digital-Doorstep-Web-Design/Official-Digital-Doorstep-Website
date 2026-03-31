"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services",     href: "#services"      },
  { label: "How It Works", href: "#how-it-works"  },
  { label: "About",        href: "#about"         },
  { label: "Contact",      href: "#contact"       },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenu] = useState(false);

  // Go solid after 80px scroll — well before any hero content reaches the navbar
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenu(false);
    scrollTo(href);
  };

  return (
    // Fade-in on page load with 200ms delay — no other nav animation
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[108px]">

          {/* ── Logo ── */}
          <a
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Digital Doorstep — home"
          >
            {/*
              LOGO: Place your SVG logo at /public/logo.svg.
              For the transparent hero overlay, the monochromatic version
              should read clearly on a white canvas — it will.
              For the solid (scrolled) navbar, the dark/primary version is used.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Digital Doorstep"
              className="!h-14 !w-auto"
              fetchPriority="high"
            />
          </a>

          {/* ── Desktop links ── */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-base font-semibold text-ink-heading hover:text-brand transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-pill btn-primary text-sm"
            >
              Free Audit
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            onClick={() => setMenu(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-ink-heading transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-ink-heading transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-ink-heading transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-line overflow-hidden"
          >
            <nav className="px-5 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-3 px-3 text-sm font-medium text-ink-heading hover:bg-surface-light rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setMenu(false); scrollTo("#contact"); }}
                className="mt-2 btn-pill btn-primary text-sm w-full"
              >
                Free Audit
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
