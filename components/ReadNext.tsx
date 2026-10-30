import Link from "next/link";
import type { LinkItem } from "@/data/kilimanjaro/links";

/** A short row of related reading at the end of a page section. */
export default function ReadNext({ links, title = "Read next" }: { links: LinkItem[]; title?: string }) {
  if (links.length === 0) return null;
  return (
    <nav
      aria-label={title}
      className="mt-8 rounded-2xl px-5 py-4"
      style={{ border: "1px solid rgba(74,41,18,0.15)", background: "#fff" }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
        {title}
      </p>
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors hover:bg-[rgba(74,41,18,0.08)]"
              style={{ background: "var(--snow)", color: "var(--forest)" }}
            >
              {l.label}
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
