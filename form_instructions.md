# Netlify Forms — Setup Instructions

## What was changed

- `ContactSection.tsx` now submits form data to Netlify's CDN layer via `POST /` with `application/x-www-form-urlencoded` encoding instead of the custom `/api/contact` API route.
- The form element has `data-netlify="true"`, `data-netlify-honeypot="website"`, and a hidden `form-name` input — all required for Netlify Forms to process AJAX submissions.
- `public/netlify-forms-detector.html` was added so Netlify's build bot can detect the form definition at build time (necessary because the form lives inside a client-rendered React component, which the bot cannot see).

---

## Steps to complete on the Netlify side

### 1. Deploy the site
Push these changes and trigger a Netlify build. Netlify registers forms during the build phase by scanning static HTML — `netlify-forms-detector.html` is what makes this work. **No form submissions will be received until after a successful deploy.**

### 2. Confirm form detection
After deploying, go to:

> Netlify dashboard → your site → **Forms** tab

You should see `website_form` listed. If it doesn't appear, check that the deploy succeeded and that `netlify-forms-detector.html` is accessible at `https://yoursite.com/netlify-forms-detector.html`.

### 3. Set up email notifications
By default, Netlify stores submissions in the dashboard but does not email you. To get notified:

1. In the Forms tab, click **website_form**
2. Click **Form notifications** (or go to **Site settings → Forms → Form notifications**)
3. Click **Add notification → Email notification**
4. Enter the email address where you want leads delivered
5. Save

### 4. (Optional) Configure spam filtering
Netlify runs Akismet spam filtering automatically. The honeypot field (`website`) provides an additional layer. No action required unless you want to adjust sensitivity in **Site settings → Forms → Spam filters**.

### 5. (Optional) Clean up the unused API route
`app/api/contact/route.ts` is no longer called by the form. You can safely delete it:

```
app/api/contact/route.ts
```

The directory `app/api/contact/` can be removed entirely.

---

## Viewing submissions
All form submissions are stored at:

> Netlify dashboard → your site → **Forms** → **website_form**

You can also export them as CSV from that page.
