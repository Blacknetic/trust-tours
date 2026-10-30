import { byCategory, packagePath } from "@/data/packages";
import { DataTable } from "@/components/LongForm";
import { priceForGroup } from "@/lib/pricing";

/** Every Kilimanjaro climb by group size, built from the trip rate cards. */
export default function ClimbPriceTable() {
  const climbs = byCategory("kilimanjaro");
  return (
    <DataTable
      table={{
        headers: ["Climb", "Days", "1 person", "2 people", "4 people", "6 people", "Largest group"],
        rows: climbs.map((c) => {
          const gp = c.groupPricing!;
          const at = (n: number) => `$${priceForGroup(gp, n).toLocaleString()}`;
          const top = gp.tiers[gp.tiers.length - 1];
          const total = c.days + (c.hotelNights ?? 0);
          return [
            c.shortName,
            c.hotelNights ? `${c.days} + ${c.hotelNights} hotel nights (${total})` : `${c.days} on the mountain`,
            at(1),
            at(2),
            at(4),
            at(6),
            `$${top.usd.toLocaleString()} (${top.pax}+)`,
          ];
        }),
        rowLinks: climbs.map(packagePath),
        caption:
          "Where a group size isn't listed on a climb's rate card, the table shows the rate for the next smaller group; your quote confirms the exact price.",
      }}
    />
  );
}
