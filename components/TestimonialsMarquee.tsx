import { testimonials, type Testimonial } from "@/data/testimonials";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure
      className="flex flex-col w-[300px] sm:w-[360px] shrink-0 rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(138,90,50,0.18)",
      }}
    >
      <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
        {[...Array(t.rating)].map((_, i) => (
          <span key={i} style={{ color: "var(--gold)" }} aria-hidden="true">
            ★
          </span>
        ))}
      </div>
      <p
        className="text-sm font-semibold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
      >
        {t.title}
      </p>
      <blockquote
        className="text-sm leading-relaxed flex-1 mb-5"
        style={{ color: "rgba(255,255,255,0.74)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold shrink-0"
          style={{ background: "var(--gold)", color: "var(--ink)", fontFamily: "var(--font-display)" }}
          aria-hidden="true"
        >
          {t.name.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold truncate" style={{ color: "var(--paper)" }}>
            {t.name}
          </span>
          <span className="block text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {t.context} · {t.source}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask">
      <div className={`marquee-track${reverse ? " is-reverse" : ""}`}>
        {/* rendered twice so the -50% loop is seamless */}
        {[...items, ...items].map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <div className="flex flex-col gap-5">
      <Row items={row1} />
      <Row items={row2} reverse />
    </div>
  );
}
