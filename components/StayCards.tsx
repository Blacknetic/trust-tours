import StayGallery from "@/components/StayGallery";
import type { Stay } from "@/data/accommodations";

/** "Where you'll stay": one card per lodge, linked from each day's overnight. */
export default function StayCards({ stays, border }: { stays: Stay[]; border: string }) {
  return (
    <section id="stays" className="py-10 border-b scroll-mt-24" style={{ borderColor: border }}>
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-3"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        Where you&apos;ll stay
      </h2>
      <p className="text-base leading-relaxed mb-7" style={{ color: "var(--ink)" }}>
        Your stays depend on the comfort level you choose. Seasonal camps fill early, so your
        written quote confirms each property, or a similar one if a stay is full.
      </p>

      <div className="space-y-5">
        {stays.map((stay) => {
          const photos = stay.photos ?? [];
          return (
            <article
              key={stay.id}
              id={`stay-${stay.id}`}
              className="rounded-2xl overflow-hidden scroll-mt-28"
              style={{ border: "1px solid rgba(74,41,18,0.15)", background: "#fff" }}
            >
              {photos.length > 0 && <StayGallery name={stay.name} photos={photos} />}
              <div className="p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--gold)" }}>
                  {stay.type}
                </p>
                <h3
                  className="text-xl md:text-2xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  {stay.name}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--forest)" }}>
                  {stay.area}
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                  {stay.about}
                </p>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--ink)" }}>
                  What you can do here
                </p>
                <ul className="list-disc pl-5 space-y-1 text-base" style={{ color: "var(--ink)" }}>
                  {stay.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
