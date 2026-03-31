"use client";

import EmailLink from "@/components/ui/EmailLink";

const COMPANY_LINKS = [
  { label: "Home",         href: "#"             },
  { label: "Services",     href: "#services"     },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About",        href: "#about"        },
];

const CONTACT_LINKS = [
  { label: "Free Audit",       href: "#contact", external: false },
  { label: "Noblesville, IN",  href: "#",        external: false },
];

function scrollTo(href: string) {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 px-5 sm:px-8 lg:px-10"
      style={{ background: "#151238" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top — two columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-10 lg:gap-20 mb-12">

          {/* Left — brand */}
          <div>
            {/*
              LOGO: Use white/light version of logo here.
              Replace the img src below with /public/logo-white.svg or /public/logo-white.png.
            */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="Digital Doorstep"
              className="!h-16 !w-auto mb-4 opacity-90"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              AI automation for local businesses.
              <br />
              Built in Noblesville, Indiana.
            </p>
            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              © {year} Digital Doorstep. All rights reserved.
            </p>
          </div>

          {/* Company links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Company
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Contact
            </p>
            <ul className="space-y-3">
              {CONTACT_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <EmailLink
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div />
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms"  },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
