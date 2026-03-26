# Digital Doorstep — Content & Launch Guide

Every item below has a matching comment in the source code. Work through this list before going live. Items marked ⚠️ will cause visible issues (broken images, placeholder text) if not resolved before launch.

---

## ⚠️ 1. Logo Files

**What's needed:** Two logo files placed in `/public/`:
- `/public/logo.svg` — dark/primary version (used in navbar on white background)
- `/public/logo-white.svg` — white/reversed version (used in footer on dark background)

SVG is strongly preferred over PNG. Transparent background required.

The navbar shows `logo.svg`. The footer shows `logo-white.svg`. Both will appear as broken images until these files exist.

**Files:** `components/ui/Navbar.tsx` and `components/ui/Footer.tsx`

---

## ⚠️ 2. Founder Photo

**What's needed:** A single professional photo placed at `/public/founder-photo.jpg`.

Style guidance:
- Candid, not studio — outdoors or inside a real work environment
- Square or portrait crop (the component uses `aspect-square`)
- Sharp focus, good natural lighting
- Should feel approachable, not posed

**To activate:** Replace the placeholder `<div>` in `AboutSection.tsx` with:
```jsx
<img
  src="/founder-photo.jpg"
  alt="[Your name] — founder of Digital Doorstep"
  className="w-full max-w-sm rounded-card object-cover aspect-square shadow-card"
  style={{ border: "2px solid #24285b" }}
/>
```
Remove the `[FOUNDER PHOTO]` label text when you do this.

**File:** `components/sections/AboutSection.tsx`

---

## ⚠️ 3. Contact Form Backend

**What's needed:** The contact form currently simulates submission (fake 900ms delay). Before launch, wire it to a real backend.

**Recommended options:**

**Formspree** (simplest):
1. Create a free account at formspree.io
2. Create a form and get your form ID
3. Replace the `onSubmit` function body in `ContactSection.tsx` with:
```js
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Netlify Forms** (if deploying to Netlify):
Add `data-netlify="true"` and `name="contact"` to the `<form>` element.

**File:** `components/sections/ContactSection.tsx` — the `onSubmit` function

---

## 4. Response Time in Form Success Message

**What's needed:** Update the confirmation message after form submission.

Currently says: "We'll be back to you within 1 business day."

Change this to match your actual response commitment.

**File:** `components/sections/ContactSection.tsx` — the success state paragraph

---

## 5. Open Graph Image

**What's needed:** A 1200×630px image at `/public/og-image.jpg`.

Used when the site URL is shared on social media (shows as the preview image).

Can be a simple branded card: company name + tagline on a white or navy background. No need to be elaborate.

**File:** `app/layout.tsx` — the `openGraph.images` array

---

## 6. Site Metadata (Title & Description)

**Current state:** The title and description are already set to accurate, real content. Review them before launch to confirm they're exactly how you want them to appear in Google.

**File:** `app/layout.tsx` — the `metadata` export

Current title: `Digital Doorstep — AI Automation for Local Businesses`

---

## 7. Privacy Policy & Terms of Service Pages

The footer links to `/privacy` and `/terms`. These pages don't exist yet.

**Options:**
- Create `app/privacy/page.tsx` and `app/terms/page.tsx` with real policy content
- Use a third-party generator (many free options online) and host the content there — then update the footer links to the external URLs
- Remove the links from the footer until you have the pages ready

**File:** `components/ui/Footer.tsx`

---

## 8. Service Pricing

The service prices are currently set to:
- Doorstep Starter: $500 setup + $150/mo
- Doorstep Pro: $1,200 setup + $300/mo

If you want to change these, update them in:

**File:** `components/sections/ServicesSection.tsx`

---

## 9. Confirm Your Email Address

The About section and contact section reference `info@digitaldoorstep.net`. Verify this is your correct email before launch.

**Files:** `components/sections/AboutSection.tsx`, `components/sections/ContactSection.tsx`

---

## 10. Favicon

**What's needed:** A `favicon.ico` and/or `icon.png` in the `/app/` or `/public/` directory.

Next.js 14 uses `/app/favicon.ico` automatically. Replace it with your own.

Current file exists but is the Next.js placeholder.

---

## Launch Checklist

Before going live:

- [✓] `/public/logo.svg` added
- [✓] `/public/logo-white.svg` added
- [ ] `/public/founder-photo.jpg` added and `AboutSection.tsx` updated
- [ ] Contact form wired to real backend
- [ ] `/public/og-image.jpg` created
- [✓] Favicon replaced
- [ ] Privacy Policy and Terms pages created (or links removed)
- [ ] Pricing reviewed and confirmed
- [✓] Email address `info@digitaldoorstep.net` confirmed
- [ ] Tested on mobile (375px, 390px, 768px)
- [ ] Tested keyboard navigation (Tab through all interactive elements)
- [ ] Confirmed `npm run build` completes without errors
- [ ] Deployed to hosting platform (Vercel recommended for Next.js)
