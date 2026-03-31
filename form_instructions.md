# Netlify Forms — Setup Instructions

## How it works

Netlify Forms operates at the CDN layer — it intercepts POST requests to **static HTML files** before they reach any server function. Because the contact form is inside a client-rendered React component, Netlify's build bot can't detect it directly. The solution has two parts:

1. **`public/netlify-forms-detector.html`** — a static HTML file that Netlify scans at build time to register the form (`contact_form`) and its fields.
2. **`ContactSection.tsx`** — on submit, posts form data to `/netlify-forms-detector.html` (the static file) instead of `/`. Netlify intercepts that POST at the CDN level and records the submission before returning the file content. The React component handles the response and shows the success state.

All field `name` attributes in the React form exactly match the field names in the detector HTML. This is required — Netlify silently drops fields it doesn't recognise from the registered definition.

---

## Steps to complete on the Netlify side

### 1. Deploy the site
Push these changes and trigger a Netlify build. The form is registered during the build phase by scanning `netlify-forms-detector.html`. **Submissions will not be recorded until after a successful deploy.**

### 2. Confirm form detection
After deploying:

> Netlify dashboard → your site → **Forms** tab

You should see `contact_form` listed. If it doesn't appear, verify the deploy succeeded and that `https://yoursite.com/netlify-forms-detector.html` loads in a browser.

### 3. Set up email notifications
Netlify stores submissions in the dashboard but does not email you by default:

1. In the Forms tab, click **contact_form**
2. Click **Form notifications** (or go to **Site settings → Forms → Form notifications**)
3. Click **Add notification → Email notification**
4. Enter the address where you want leads delivered
5. Save

### 4. (Optional) Configure spam filtering
Netlify runs Akismet spam filtering automatically. The honeypot field (`form_website`) provides an additional layer — real users never see it, bots fill it in, and Netlify silently discards those submissions. No further action required.

### 5. (Optional) Clean up the unused API route
`app/api/contact/route.ts` is no longer called. You can safely delete the entire directory:

```
app/api/contact/
```

---

## Viewing submissions

> Netlify dashboard → your site → **Forms** → **contact_form**

Submissions can be exported as CSV from that page.

---

## Field name reference

| Label | `name` attribute |
|---|---|
| Your name | `full_name` |
| Business name | `business_name` |
| Business type | `business_type` |
| Repetitive task | `time_waster` |
| Best way to reach you | `form_contact` |
| Honeypot (hidden) | `form_website` |
