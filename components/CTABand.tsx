import RequestQuoteButton from "@/components/RequestQuoteButton";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Visible button label. Defaults to "Request a quote". */
  quoteLabel?: string;
  /** Pre-selects the trip type in the quote form when known. */
  tripType?: "kilimanjaro" | "safari" | "zanzibar";
  /** Pre-fills the specific trip name (e.g. on a package page). */
  tripName?: string;
  /** @deprecated legacy props — kept so existing call sites still compile. */
  ctaLabel?: string;
  waMessage?: string;
}

export default function CTABand({ eyebrow, title, subtitle, quoteLabel, tripType, tripName }: Props) {
  return (
    <section className="py-16 text-center px-4" style={{ background: "var(--forest)" }}>
      <p
        className="text-sm font-semibold tracking-widest uppercase mb-4"
        style={{ color: "var(--gold)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-3xl md:text-4xl font-extrabold mb-4"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--paper)",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "rgba(255,255,255,0.95)", maxWidth: "44ch" }}
        >
          {subtitle}
        </p>
      )}
      <RequestQuoteButton
        label={quoteLabel ?? "Request a quote"}
        context={{ tripType, tripName, heading: title }}
      />
    </section>
  );
}
