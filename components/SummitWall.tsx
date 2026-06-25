import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import WaypointEyebrow from "@/components/WaypointEyebrow";

/**
 * Wall of Summits — the authenticity-forward proof beat. A slightly irregular
 * masonry of *real* expedition and guest photos (never stock), each clip-revealing
 * on scroll with a hover photo-zoom. Sits between the trust stats and the trip picks.
 *
 * Tiles live in /public/images/wall (curated, web-safe copies of the loose originals).
 * `span` widens a tile to two columns; `tall` makes it a portrait feature.
 */
type Tile = {
  src: string;
  alt: string;
  caption: string;
  ratio: string; // tailwind aspect-* class
  span?: boolean;
};

const TILES: Tile[] = [
  {
    src: "/images/wall/team-with-clients.jpg",
    alt: "The Trust Tours team and a group of climbers together on the trail up Kilimanjaro",
    caption: "Our crew with a summit group",
    ratio: "aspect-[4/3]",
    span: true,
  },
  {
    src: "/images/wall/mountain-sunrise.jpg",
    alt: "A guest resting on the trail with the snow-capped peak of Kilimanjaro behind",
    caption: "High on the mountain",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/wall/uhuru-banner.jpg",
    alt: "A climber and guide with the Trust Tours banner at a Kilimanjaro summit sign",
    caption: "On the roof of Africa",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/wall/game-drive.jpg",
    alt: "A guest watching lions from a Trust Tours safari vehicle",
    caption: "Eye to eye on a game drive",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/wall/maasai-welcome.jpg",
    alt: "A guest in traditional dress during a Tanzanian cultural visit",
    caption: "A local welcome",
    ratio: "aspect-[16/10]",
    span: true,
  },
  {
    src: "/images/wall/lion-spotting.jpg",
    alt: "A Trust Tours guide pointing out a male lion in the Ngorongoro Crater",
    caption: "Spotting a lion in Ngorongoro",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/wall/zanzibar-group.jpg",
    alt: "A group of guests on the white sand of a Zanzibar beach",
    caption: "Beach days in Zanzibar",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/images/wall/lodge-sundowners.jpg",
    alt: "Guests and their guide at a safari lodge at sunset",
    caption: "Sundowners at the lodge",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/wall/summit-certified.jpg",
    alt: "A large group holding a Kilimanjaro summit completion banner",
    caption: "Another summit, certified",
    ratio: "aspect-[4/3]",
  },
];

export default function SummitWall() {
  return (
    <section style={{ background: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Heading + credibility */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
          <Reveal className="max-w-2xl">
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Real trips, real people
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-5xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.08 }}
            >
              These are our climbers. These are our summits.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              Not stock photos — our own guests, guides and crew, on the mountain and in
              the bush. Every season we take people to the roof of Africa and back, and
              we keep the pictures to prove it.
            </p>
          </Reveal>

          {/* World Travel Awards nominee badge */}
          <Reveal delay={120} className="shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                <Photo
                  src="/images/wall/wta-nominee-2023.jpeg"
                  alt="World Travel Awards 2023 nominee — Tanzania's Leading Safari Company"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="max-w-[16rem]">
                <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  World Travel Awards 2023 Nominee
                </p>
                <p className="text-xs" style={{ color: "var(--ink)" }}>
                  Tanzania&rsquo;s Leading Safari Company · TALA Licensed Agent No. 014216
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Irregular masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {TILES.map((tile, i) => (
            <Reveal
              key={tile.src}
              delay={(i % 4) * 90}
              className={tile.span ? "col-span-2" : ""}
            >
              <figure
                className={`card-lift photo-zoom group relative overflow-hidden rounded-xl md:rounded-2xl ${tile.ratio}`}
              >
                <div className="wipe absolute inset-0">
                  <Photo
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Caption gradient — always legible, intensifies on hover */}
                <figcaption
                  className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-white text-xs md:text-sm font-medium translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(26,26,22,0.82) 0%, rgba(26,26,22,0) 100%)",
                  }}
                >
                  {tile.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
