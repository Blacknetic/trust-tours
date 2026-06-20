// data/images.ts — resolves a relevant, varied photo for any package.
// If a package sets its own heroImage we use it; otherwise we pick from a
// library keyed by the trip's destinations (then category), varying by a hash
// of the slug so cards alternate instead of all showing the same picture.
import type { TripPackage, Destination, SafariCategoryId } from "@/data/packages";
import { safariCategoryOf } from "@/data/packages";

const I = (n: string) => `/images/${n}`;

const BY_DESTINATION: Partial<Record<Destination, string[]>> = {
  Kilimanjaro: [
    I("kilimanjaro-hero.jpg"),
    I("kilimanjaro-plains.jpg"),
    I("kilimanjaro-summit-snow.jpg"),
    I("kilimanjaro-trekkers.jpg"),
    I("kilimanjaro-kibo-from-trail.jpg"),
  ],
  "Mount Meru": [I("meru-hero.jpg"), I("meru-jungle.jpg"), I("meru-side-view.jpg"), I("meru-montane-forest.jpg")],
  "Ol Doinyo Lengai": [I("lengai-cone.jpg"), I("lengai-sunrise.jpg")],
  "Lake Natron": [I("lake-natron-flamingos.jpg"), I("ngare-sero-waterfall.jpg")],
  Serengeti: [
    I("serengeti-plains.jpg"),
    I("migration-herds.jpg"),
    I("migration-river-crossing.jpg"),
    I("serengeti-cheetah.jpg"),
    I("ndutu-calving.jpg"),
  ],
  Ngorongoro: [I("ngorongoro-rhino.jpg"), I("safari-lion-pride.jpg"), I("serengeti-cheetah.jpg")],
  Tarangire: [I("tarangire-giraffes.jpg"), I("safari-acacia-sunset.jpg"), I("safari-giraffes.jpg")],
  "Lake Manyara": [I("manyara-flamingos.jpg"), I("safari-hippo.jpg")],
  Zanzibar: [I("zanzibar-beach.jpg"), I("zanzibar-2.jpg")],
  Kenya: [I("migration-herds.jpg"), I("zebra-wildebeest.jpg")],
  Arusha: [I("safari-giraffes.jpg"), I("meru-side-view.jpg")],
};

const BY_CATEGORY: Record<TripPackage["category"], string[]> = {
  kilimanjaro: [I("kilimanjaro-hero.jpg"), I("kilimanjaro-plains.jpg"), I("kilimanjaro-summit-snow.jpg")],
  safari: [
    I("migration-herds.jpg"),
    I("serengeti-plains.jpg"),
    I("serengeti-cheetah.jpg"),
    I("safari-lion-pride.jpg"),
    I("safari-leopard.jpg"),
    I("zebra-wildebeest.jpg"),
  ],
  trekking: [I("meru-hero.jpg"), I("lengai-cone.jpg"), I("meru-jungle.jpg")],
  zanzibar: [I("zanzibar-beach.jpg"), I("zanzibar-2.jpg")],
  cultural: [I("maasai-dance.jpg"), I("maasai-dance-2.jpg")],
  paramotoring: [I("aerial-balloon.jpg"), I("balloon-safari.jpg")],
};

const HONEYMOON = [I("honeymoon.jpg"), I("honeymoon-2.jpg"), I("honeymoon-3.jpg"), I("honeymoon-4.jpg")];

// Tightly curated, on-theme pools for the five Safaris-umbrella categories.
// These take precedence over the destination match so a Big Five trip never
// shows a wildebeest crossing and a Migration trip never shows a lone lion.
const BY_SAFARI_CATEGORY: Record<SafariCategoryId, string[]> = {
  "big-five": [
    I("safari-lion-pride.jpg"),
    I("safari-leopard.jpg"),
    I("ngorongoro-rhino.jpg"),
    I("safari-hippo.jpg"),
    I("tarangire-giraffes.jpg"),
    I("safari-giraffes.jpg"),
    I("serengeti-cheetah.jpg"),
  ],
  migration: [
    I("migration-river-crossing.jpg"),
    I("migration-herds.jpg"),
    I("zebra-wildebeest.jpg"),
    I("ndutu-calving.jpg"),
    I("serengeti-plains.jpg"),
  ],
  honeymoon: HONEYMOON,
  cultural: [I("maasai-dance.jpg"), I("maasai-dance-2.jpg"), I("wall/client-with-hadzabe.jpg")],
  // No real paramotor photo in the library yet — balloon/aerial shots are the
  // closest on-theme stand-ins. TODO: swap in paramotor imagery when available.
  paramotoring: [I("aerial-balloon.jpg"), I("balloon-safari.jpg")],
};

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** A relevant hero/card image for a package — the trip's own, or a smart match. */
export function packageImage(pkg: TripPackage): string {
  if (pkg.heroImage) return pkg.heroImage;

  // Safari-umbrella trips draw from their category's curated pool first, so the
  // photo always matches the category the trip is filed under.
  const safariCat = safariCategoryOf(pkg);
  if (safariCat) {
    const catPool = BY_SAFARI_CATEGORY[safariCat];
    return catPool[hash(pkg.slug) % catPool.length];
  }

  const pool: string[] = [];
  if (pkg.tags?.includes("honeymoon")) pool.push(...HONEYMOON);
  for (const d of pkg.destinations) {
    const imgs = BY_DESTINATION[d];
    if (imgs) pool.push(...imgs);
  }
  if (pool.length === 0) pool.push(...(BY_CATEGORY[pkg.category] ?? []));
  if (pool.length === 0) return "";

  return pool[hash(pkg.slug) % pool.length];
}
