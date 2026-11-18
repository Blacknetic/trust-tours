import Link from "next/link";
import type { TripPackage } from "@/data/packages";
import { bookingTerms } from "@/data/booking-terms";
import { DataTable, Prose, RichList } from "@/components/LongForm";

// Booking and cancellation summary on every trip page (data/booking-terms.ts).
export default function BookingTerms({ pkg, border }: { pkg: TripPackage; border: string }) {
  const blocks = bookingTerms(pkg);
  return (
    <section id="terms" className="py-10 border-b scroll-mt-24" style={{ borderColor: border }}>
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        Booking &amp; cancellation terms
      </h2>
      <p className="text-base leading-relaxed mb-6" style={{ color: "var(--ink)" }}>
        Know where you stand before you book. Your written quotation confirms the exact terms for your trip.
      </p>
      <div className="space-y-5">
        {blocks.map((b) => (
          <div key={b.heading} className="rounded-2xl p-6 md:p-7" style={{ background: "var(--snow)" }}>
            <h3
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              {b.heading}
            </h3>
            {b.paragraphs && <Prose paragraphs={b.paragraphs} />}
            {b.bullets && <RichList items={b.bullets} />}
            {b.table && <DataTable table={b.table} />}
            {b.note && (
              <p
                className="rounded-xl px-4 py-3 mt-4 text-sm leading-relaxed"
                style={{ background: "var(--paper)", borderLeft: "4px solid var(--gold)", color: "var(--ink)" }}
              >
                {b.note}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-base">
        <Link href="/cancellation-policy" className="font-semibold underline underline-offset-4" style={{ color: "var(--gold)" }}>
          Read our full cancellation &amp; refund policy
        </Link>
      </p>
    </section>
  );
}
