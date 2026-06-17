import Link from "next/link";

// High-end outlined "ghost" pill used for section-level navigation
// (e.g. "All Kilimanjaro routes"). Thin espresso-brown outline + uppercase
// tracked label; fills brown with paper text on hover while the arrow slides.
// Visibility/spacing is controlled by the caller via a wrapper element.
export default function PillLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest transition-colors duration-300 hover:bg-forest hover:text-paper"
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
