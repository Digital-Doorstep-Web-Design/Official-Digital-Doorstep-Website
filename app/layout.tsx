import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// DM Sans — the only font on this site. Geometric, clean, tech-forward.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Doorstep — AI Automation for Local Businesses in Noblesville, Indiana",
  description:
    "Digital Doorstep builds done-for-you AI automation for local businesses in Noblesville and Hamilton County, Indiana. Missed-call text-back, appointment reminders, follow-up automation, and more. Free 30-minute audit. No contracts.",
  keywords: [
    "AI automation Noblesville Indiana",
    "business automation Hamilton County",
    "HVAC automation Noblesville",
    "small business automation Indiana",
    "workflow automation Noblesville",
    "missed call text back Noblesville",
    "appointment reminder automation Indiana",
    "local automation consultant Noblesville",
    "Digital Doorstep",
  ],
  authors: [{ name: "Digital Doorstep" }],
  metadataBase: new URL("https://digitaldoorstep.net"),
  alternates: {
    canonical: "https://digitaldoorstep.net",
  },
  openGraph: {
    title: "Digital Doorstep — AI Automation for Noblesville Businesses",
    description:
      "We build and maintain AI automation systems for local businesses in Noblesville, Indiana. Free audit, no contracts, real results.",
    url: "https://digitaldoorstep.net",
    siteName: "Digital Doorstep",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Digital Doorstep" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Doorstep — AI Automation for Noblesville Businesses",
    description: "We build and maintain AI automation systems for local businesses in Noblesville, Indiana. Free audit, no contracts.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Digital Doorstep",
  "description": "AI automation and workflow automation for local businesses in Noblesville, Indiana and Hamilton County.",
  "url": "https://digitaldoorstep.net",
  "email": "jhepworth@digitaldoorstep.net",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Noblesville",
    "addressRegion": "IN",
    "addressCountry": "US"
  },
  "areaServed": [
    "Noblesville, IN",
    "Hamilton County, IN",
    "Fishers, IN",
    "Carmel, IN",
    "Westfield, IN",
    "Indianapolis, IN"
  ],
  "serviceType": [
    "AI Automation",
    "Workflow Automation",
    "Business Automation",
    "Missed Call Text Back",
    "Appointment Reminder Automation",
    "Small Business Automation"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink-body">
        {children}
      </body>
    </html>
  );
}
