/**
 * Local SMTP smoke-test for the inquiry form.
 *
 * It logs into the cPanel mailbox EXACTLY the way the live API route does, then
 * sends one real test email so you can confirm it lands in the inbox before
 * trusting the website form. Credentials are read from your machine only — they
 * are never committed and never leave your computer.
 *
 * ── How to run ────────────────────────────────────────────────────────────
 * Option 1 — put the values in a .env.local file at the project root (Next.js
 * already git-ignores it), then:
 *
 *     node scripts/test-smtp.mjs
 *
 * Option 2 — pass them inline for a one-off (PowerShell):
 *
 *     $env:SMTP_HOST="..."; $env:SMTP_USER="info@trusttourstz.com"; `
 *     $env:SMTP_PASS="..."; node scripts/test-smtp.mjs
 *
 * Required: SMTP_HOST, SMTP_USER, SMTP_PASS
 * Optional: SMTP_PORT (default 465), INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import nodemailer from "nodemailer";

// Minimal .env.local loader (no extra dependency). Only sets vars that aren't
// already present in the environment, so inline overrides still win.
function loadEnvLocal() {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  let raw;
  try {
    raw = readFileSync(join(root, ".env.local"), "utf8");
  } catch {
    return; // no file — rely on process.env
  }
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvLocal();

const host = process.env.SMTP_HOST;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const port = Number(process.env.SMTP_PORT) || 465;
const toEmail = process.env.INQUIRY_TO_EMAIL ?? user;
const fromEmail = process.env.INQUIRY_FROM_EMAIL ?? user;

const missing = [
  !host && "SMTP_HOST",
  !user && "SMTP_USER",
  !pass && "SMTP_PASS",
].filter(Boolean);

if (missing.length) {
  console.error(`\n❌ Missing required env var(s): ${missing.join(", ")}`);
  console.error("   Set them in .env.local or inline (see the header of this file).\n");
  process.exit(1);
}

console.log("\n── SMTP test ─────────────────────────────────────────");
console.log(`Host : ${host}:${port} (secure=${port === 465})`);
console.log(`User : ${user}`);
console.log(`From : ${fromEmail}`);
console.log(`To   : ${toEmail}`);
console.log("──────────────────────────────────────────────────────\n");

// Diagnostic-only escape hatch: SMTP_TLS_INSECURE=true skips certificate-name
// validation. Use it ONLY to confirm a server works when the host you're
// connecting to doesn't match its SSL cert — then fix DNS so it matches.
const insecure = /^true$/i.test(process.env.SMTP_TLS_INSECURE ?? "");

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
  ...(insecure ? { tls: { rejectUnauthorized: false } } : {}),
});

try {
  process.stdout.write("1/2  Verifying login + connection… ");
  await transporter.verify();
  console.log("✅ ok");

  process.stdout.write("2/2  Sending test email…           ");
  const info = await transporter.sendMail({
    from: `"Trust Tours Website (TEST)" <${fromEmail}>`,
    to: toEmail,
    replyTo: "traveller@example.com",
    subject: "✅ SMTP test — inquiry form",
    text: [
      "This is a test message from scripts/test-smtp.mjs.",
      "",
      "If you're reading this in the inbox, the inquiry form's email path works.",
      `Sent: ${new Date().toISOString()}`,
    ].join("\n"),
  });
  console.log("✅ sent");
  console.log(`\nMessage ID: ${info.messageId}`);
  console.log(`Now check the ${toEmail} inbox (and the Spam folder, just in case).\n`);
} catch (err) {
  console.log("❌ failed");
  console.error(`\nError: ${err?.message ?? err}\n`);
  console.error("Common causes:");
  console.error("  • Wrong host — use the value from cPanel → Email Accounts → Connect Devices,");
  console.error("    NOT mail.trusttourstz.com (that points at Vercel).");
  console.error("  • Wrong port — try 587 (set SMTP_PORT=587) if 465 times out.");
  console.error("  • Wrong username/password (username is the FULL email address).");
  console.error("  • From address must be on @trusttourstz.com and match SMTP_USER.\n");
  process.exit(1);
}
