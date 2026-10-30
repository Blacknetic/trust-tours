import Link from "next/link";
import Photo from "@/components/Photo";
import type { ContentImage, ContentSection, ContentTable } from "@/data/packages";

// Building blocks for long-form trip pages: Ombeni's itineraries run to many
// sections, so they are written as data and rendered by these.

export function ContentFigure({ image, className = "" }: { image: ContentImage; className?: string }) {
  return (
    <figure className={className}>
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden" style={{ background: "var(--snow)" }}>
        <Photo src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" />
      </div>
      {image.caption && (
        <figcaption className="text-sm mt-2" style={{ color: "var(--ink)", opacity: 0.75 }}>
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

// "Label: detail" → bold label. Only splits on a colon in the first 60
// characters so ordinary sentences containing a colon later stay intact.
function splitLabel(text: string): [string | null, string] {
  const i = text.indexOf(": ");
  if (i > 0 && i < 60) return [text.slice(0, i), text.slice(i + 2)];
  return [null, text];
}

export function RichList({
  items,
  mark = "›",
  color = "var(--gold)",
  size = "base",
}: {
  items: string[];
  mark?: string;
  color?: string;
  size?: "sm" | "base";
}) {
  const text = size === "sm" ? "text-sm" : "text-base md:text-lg";
  return (
    <ul className={size === "sm" ? "space-y-1.5" : "space-y-3"}>
      {items.map((item, i) => {
        const [label, rest] = splitLabel(item);
        return (
          <li key={i} className={`flex items-start gap-3 leading-relaxed ${text}`} style={{ color: "var(--ink)" }}>
            <span className="flex-shrink-0 font-bold" style={{ color }} aria-hidden="true">
              {mark}
            </span>
            <span>
              {label && <strong className="font-semibold">{label}: </strong>}
              {rest}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function DataTable({ table }: { table: ContentTable }) {
  return (
    <figure className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-base min-w-[30rem]">
        <thead>
          <tr>
            {table.headers.map((h) => (
              <th
                key={h}
                className="text-left font-bold px-3 py-2.5"
                style={{ color: "var(--ink)", borderBottom: "2px solid rgba(26,26,22,0.15)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className="px-3 py-2.5 align-top leading-relaxed"
                  style={{
                    color: "var(--ink)",
                    fontWeight: c === 0 ? 600 : 400,
                    borderBottom: "1px solid rgba(26,26,22,0.08)",
                  }}
                >
                  {c === 0 && table.rowLinks?.[r] ? (
                    <Link
                      href={table.rowLinks[r]!}
                      className="underline underline-offset-2 hover:opacity-80"
                      style={{ color: "var(--forest)" }}
                    >
                      {cell}
                    </Link>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <figcaption className="text-sm mt-2" style={{ color: "var(--ink)", opacity: 0.75 }}>
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
          {p}
        </p>
      ))}
    </>
  );
}

export function SectionBlock({ section, border }: { section: ContentSection; border: string }) {
  const images = section.images ?? [];
  return (
    <section className="py-10 border-b" style={{ borderColor: border }}>
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-5"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        {section.heading}
      </h2>
      {images.length === 1 && <ContentFigure image={images[0]} className="mb-6" />}
      {section.paragraphs && <Prose paragraphs={section.paragraphs} />}
      {section.bullets && <RichList items={section.bullets} />}
      {section.table && <DataTable table={section.table} />}
      {images.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {images.map((img) => (
            <ContentFigure key={img.src} image={img} />
          ))}
        </div>
      )}
      {section.note && (
        <div
          className="rounded-xl px-4 py-3 mt-5 text-base leading-relaxed"
          style={{ background: "var(--snow)", borderLeft: "4px solid var(--gold)", color: "var(--ink)" }}
        >
          {section.note}
        </div>
      )}
    </section>
  );
}

export function AtAGlance({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 rounded-2xl p-5 md:p-6 my-6"
      style={{ background: "var(--snow)" }}
    >
      {items.map((it) => (
        <div key={it.label}>
          <dt className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--gold)" }}>
            {it.label}
          </dt>
          <dd className="text-base leading-snug" style={{ color: "var(--ink)" }}>
            {it.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
