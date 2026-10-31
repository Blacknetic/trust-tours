// Shown above any list of itineraries: what's listed is a starting point, not a
// fixed product.
export default function SampleItineraryNotice({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      className={`px-5 py-4 md:px-7 md:py-5 rounded-2xl text-base leading-relaxed ${className}`}
      style={{ background: "var(--forest)", color: "var(--paper)" }}
    >
      <strong>These are sample itineraries.</strong> All our trips are tailor-made and
      fully customizable. We&apos;ll adjust every detail to suit your wishes, interests
      and travel style.
    </div>
  );
}
