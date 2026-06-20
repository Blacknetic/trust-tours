import Link from "next/link";
import type { Guide } from "@/data/guides";

/**
 * A travel-guide tile for the /guides listing. Title + a short subtitle (the
 * guide excerpt); no image (guides have no individual photos). Hover lifts the
 * card slightly and adds a soft shadow only (.card-hover-soft), with the lift
 * disabled under prefers-reduced-motion. Server component, no client JS.
 */
export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="card-hover-soft flex flex-col h-full min-h-[7rem] rounded-2xl p-6"
      style={{ border: "1px solid rgb(26 26 22 / 0.08)", background: "#fff" }}
    >
      <h3
        className="text-lg md:text-xl font-extrabold leading-snug mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        {guide.title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{
          color: "var(--ink)",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {guide.excerpt}
      </p>
    </Link>
  );
}
