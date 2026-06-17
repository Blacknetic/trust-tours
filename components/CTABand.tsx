const WA = "255785938860";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  waMessage: string;
}

export default function CTABand({ eyebrow, title, subtitle, ctaLabel, waMessage }: Props) {
  const url = `https://wa.me/${WA}?text=${encodeURIComponent(waMessage)}`;

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
          style={{ color: "rgba(251,248,241,0.65)", maxWidth: "44ch" }}
        >
          {subtitle}
        </p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-ink font-semibold text-base transition-opacity hover:opacity-90"
        style={{ background: "var(--gold)" }}
      >
        {ctaLabel}
      </a>
    </section>
  );
}
