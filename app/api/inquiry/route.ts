import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit, clientIp } from "@/lib/rate-limit";

// Sends the inquiry email through the customer's own cPanel mailbox over SMTP.
// Requires env vars (set in Vercel → Project → Settings → Environment Variables):
//   SMTP_HOST   e.g. mail.trusttourstz.com
//   SMTP_PORT   465 (SSL) or 587 (STARTTLS)        — defaults to 465
//   SMTP_USER   the cPanel mailbox, e.g. inquiry@trusttourstz.com
//   SMTP_PASS   that mailbox's password
//   INQUIRY_TO_EMAIL   where inquiries land (defaults to SMTP_USER)
//   INQUIRY_FROM_EMAIL the From address — must be a mailbox on this domain
//                      to pass SPF/DKIM (defaults to SMTP_USER)
// nodemailer needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

interface InquiryBody {
  firstName?: string;
  lastName?: string;
  name?: string; // legacy single-field fallback
  email?: string;
  phone?: string;
  nationality?: string;
  tripType?: string;
  tripName?: string;
  priority?: string;
  planningPhase?: string;
  source?: string;
  sourceOther?: string;
  preferred?: string;
  travelMonth?: string;
  groupSize?: string;
  message?: string;
  website?: string; // honeypot
  ts?: string | number; // form-render timestamp (submit-speed trap)
}

// A human takes at least a few seconds to fill this form; bots submit instantly.
const MIN_FILL_MS = 3000;

// Counts URL-ish tokens. Contact-form spam is almost always link-stuffed, so
// links in the name (never legitimate) or several links in the message are a
// strong bot signal.
function countLinks(s: string): number {
  return (s.match(/https?:\/\/|www\.|\[url|<a\s|\bmailto:/gi) ?? []).length;
}

const TRIP_LABEL: Record<string, string> = {
  kilimanjaro: "Hiking Kilimanjaro / Meru",
  safari: "Safari",
  zanzibar: "Zanzibar",
};

// Per-IP throttle: 5 inquiries / 10 min. Stops form-spam, email-bombing and the
// serverless-saturation that an unthrottled outbound-email endpoint invites.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

// Reject oversized input before it reaches the email body / outbound request.
const MAX = { name: 200, email: 200, message: 5000, meta: 100 };

export async function POST(req: Request) {
  const limit = rateLimit(clientIp(req), RATE_LIMIT, RATE_WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } },
    );
  }

  let body: InquiryBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot filled, or submitted too fast to be human → bot. Pretend success
  // so the bot doesn't learn it was caught and retry with a workaround.
  const ts = Number(body.ts);
  const tooFast = Number.isFinite(ts) && Date.now() - ts < MIN_FILL_MS;
  if (body.website || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const name = [body.firstName, body.lastName].map((p) => p?.trim()).filter(Boolean).join(" ")
    || body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  // Link-spam filter: no links belong in a name; a real enquiry rarely needs
  // more than one in the message. Silently accept so bots don't adapt.
  if (countLinks(name) > 0 || countLinks(message) >= 2) {
    return NextResponse.json({ ok: true });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  // Reject oversized input on every free-text field before it hits the email body.
  const overMeta = [
    body.nationality, body.tripType, body.tripName, body.priority, body.planningPhase,
    body.source, body.sourceOther, body.preferred, body.travelMonth, body.groupSize, phone,
  ].some((v) => (v?.length ?? 0) > MAX.meta);
  if (name.length > MAX.name || email.length > MAX.email || message.length > MAX.message || overMeta) {
    return NextResponse.json({ error: "Input too long" }, { status: 413 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.INQUIRY_TO_EMAIL ?? user;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL ?? user;

  if (!host || !user || !pass || !toEmail) {
    // Not configured yet — fail honestly; the form UI falls back to WhatsApp.
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const source =
    body.source === "Other" && body.sourceOther?.trim()
      ? `Other — ${body.sourceOther.trim()}`
      : body.source;
  const tripType = body.tripType ? (TRIP_LABEL[body.tripType] ?? body.tripType) : undefined;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred contact: ${body.preferred ?? "—"}`,
    `Nationality: ${body.nationality ?? "—"}`,
    ``,
    `Booking for: ${tripType ?? "—"}${body.tripName ? ` (${body.tripName})` : ""}`,
    `Travel priorities: ${body.priority ?? "—"}`,
    `Travel month: ${body.travelMonth ?? "—"}`,
    `Group size: ${body.groupSize ?? "—"}`,
    `Planning phase: ${body.planningPhase ?? "—"}`,
    `Found us via: ${source ?? "—"}`,
    ``,
    message || "(no message)",
  ].join("\n");

  const port = Number(process.env.SMTP_PORT) || 465;
  // SMTP_TLS_INSECURE=true skips certificate-name validation — needed when
  // connecting by IP (or to a host whose cert doesn't match) while DNS is being
  // sorted out. The connection is still encrypted; it just isn't authenticated.
  // Drop this once a proper hostname with a valid cert points at the mail server.
  const insecureTLS = /^true$/i.test(process.env.SMTP_TLS_INSECURE ?? "");
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user, pass },
    ...(insecureTLS ? { tls: { rejectUnauthorized: false } } : {}),
  });

  try {
    await transporter.sendMail({
      from: `"Trust Tours Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: email, // replies go straight to the traveller
      subject: `New trip inquiry from ${name}`,
      text,
    });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
