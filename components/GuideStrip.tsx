import Link from "next/link";
import type { Guide } from "@/data/guides";

/**
 * A band of guide cards for surfacing the travel-guide library on package,
 * category and home pages. Server component — pass in the guides to show.
 */
export default function GuideStrip({
  guides,
  title = "Read before you go",
  subtitle,
  className = "",
}: {
  guides: Guide[];
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  if (!guides || guides.length === 0) return null;

  return (
    <section className={`max-w-7xl mx-auto px-4 md:px-6 ${className}`}>
      <div className="flex items-end justify-between gap-4 mb-7">
        <div>
          <h2
            className="text-2xl font-extrabold"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm mt-1.5" style={{ color: "var(--ink)", opacity: 0.6 }}>
              {subtitle}
            </p>
          )}
        </div>
        <Link
          href="/guides"
          className="text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-80"
          style={{ color: "var(--forest)" }}
        >
          All guides →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="card-lift group flex flex-col h-full rounded-2xl p-6 transition-colors"
            style={{ border: "1px solid rgb(26 26 22 / 0.08)", background: "#fff" }}
          >
            <span className="text-xs font-semibold mb-3" style={{ color: "var(--ink)", opacity: 0.45 }}>
              {g.topic} · {g.readMinutes} min read
            </span>
            <h3
              className="text-lg font-extrabold mb-2 leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              {g.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--ink)", opacity: 0.65 }}>
              {g.excerpt}
            </p>
            <span
              className="text-sm font-semibold whitespace-nowrap transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "var(--forest)" }}
            >
              Read guide →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
