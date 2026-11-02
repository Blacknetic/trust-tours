"use client";

import { useMemo } from "react";
import QuoteWizard from "@/components/QuoteWizard";
import type { QuoteContext } from "@/components/QuoteModal";

/** The quote journey for a dated group climb: the trip and date are already set. */
export default function GroupDepartureBooking({
  tripName,
  routeName,
  days,
  dateLabel,
  priceUSD,
  note,
  submitLabel,
}: {
  tripName: string;
  routeName: string;
  days: number;
  dateLabel: string;
  priceUSD: number;
  note: string;
  submitLabel: string;
}) {
  const ctx = useMemo<QuoteContext>(
    () => ({
      tripType: "kilimanjaro",
      tripName,
      trip: { shortName: routeName, noun: "climb", days },
      known: {
        date: dateLabel,
        describe: (people) => ({ lines: [note], total: priceUSD * people }),
      },
      submitLabel,
    }),
    [tripName, routeName, days, dateLabel, priceUSD, note, submitLabel],
  );

  return (
    <div className="rounded-2xl" style={{ border: "1px solid rgba(74,41,18,0.15)", background: "#fff" }}>
      <QuoteWizard ctx={ctx} />
    </div>
  );
}
