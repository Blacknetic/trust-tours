import { NextResponse } from "next/server";

// Sends inquiry email via Resend (https://resend.com — free tier covers this volume).
// Requires env vars: RESEND_API_KEY, INQUIRY_TO_EMAIL.
// TODO: confirm email service + destination address with Ombeni, set vars in Vercel.

interface InquiryBody {
  name?: string;
  email?: string;
  travelMonth?: string;
  groupSize?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(req: Request) {
  let body: InquiryBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot filled → bot. Pretend success so they don't retry.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL;

  if (!apiKey || !toEmail) {
    // Not configured yet — fail honestly; the form UI falls back to WhatsApp.
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Travel month: ${body.travelMonth ?? "—"}`,
    `Group size: ${body.groupSize ?? "—"}`,
    ``,
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Trust Tours Website <inquiry@trusttourstz.com>",
      to: [toEmail],
      reply_to: email,
      subject: `New trip inquiry from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
