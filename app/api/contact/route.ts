import { NextRequest, NextResponse } from "next/server";

// ─── In-memory rate limit store ────────────────────────────────────────────────
// Tracks submission timestamps per IP. Resets on server restart.
// For multi-instance deployments, replace with Redis.
const WINDOW_MS  = 15 * 60 * 1000; // 15 minutes
const MAX_HITS   = 3;               // max submissions per window per IP

const rateStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now   = Date.now();
  const hits  = (rateStore.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (hits.length >= MAX_HITS) return true;
  rateStore.set(ip, [...hits, now]);
  return false;
}

// ─── POST /api/contact ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Resolve IP from forwarded header (proxies/Vercel) or fallback
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  // Rate limit check
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  const body = await req.json();

  // Honeypot check — bots fill this field, humans never see it
  if (body.website) {
    // Silently succeed so bots don't know they were caught
    return NextResponse.json({ ok: true });
  }

  const { name, businessName, businessType, timewaster, contact } = body;

  // Basic presence validation
  if (!name?.trim() || !contact?.trim()) {
    return NextResponse.json(
      { error: "Name and contact are required." },
      { status: 400 }
    );
  }

  /*
    REPLACE: Wire up your email/CRM provider here.
    Examples:
      - Resend:    await resend.emails.send({ from, to, subject, html })
      - Formspree: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(body) })
      - Nodemailer: transporter.sendMail({ ... })
  */
  console.log("Contact form submission:", { name, businessName, businessType, timewaster, contact });

  return NextResponse.json({ ok: true });
}
