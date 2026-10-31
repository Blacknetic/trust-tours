// data/accommodations.ts — every lodge and camp named on a trip page, once.
// Trips list the ids they use in `TripPackage.stays`, so a correction or new
// photo here updates every trip.
//
// Descriptions are in our own words, from facts Ombeni should confirm. Add
// `photos` only once the lodge has given permission: never a stand-in picture
// of somewhere else. A stay with no photos shows as text.

import type { ContentImage } from "@/data/packages";

export interface Stay {
  id: string;
  name: string;
  area: string;
  type: string;
  about: string;
  activities: string[];
  photos?: ContentImage[];
}

export const STAYS: Record<string, Stay> = {
  "arusha-coffee-lodge": {
    id: "arusha-coffee-lodge",
    name: "Arusha Coffee Lodge",
    area: "Western edge of Arusha",
    type: "Elewana lodge on a working coffee estate",
    about:
      "Set among the coffee fields of a large estate on the western edge of Arusha, at the foot of Mount Meru. It is a peaceful first stop after a long flight, with gardens to relax in before your evening safari briefing.",
    activities: [
      "Coffee plantation tour, following the bean to the cup",
      "Swimming pool and spa",
      "Arusha city and cultural excursions, at extra cost",
    ],
    photos: [
      {
        src: "/images/safaris/lodges/arusha-coffee-lodge-exterior.jpg",
        alt: "The lit-up restaurant at Arusha Coffee Lodge reflected in a courtyard pool at dusk",
      },
      {
        src: "/images/safaris/lodges/arusha-coffee-lodge-bathroom.jpg",
        alt: "A spacious bathroom at Arusha Coffee Lodge with a freestanding bath and walk-in shower",
      },
      {
        src: "/images/safaris/lodges/arusha-coffee-lodge-coffee.jpg",
        alt: "Two glasses of coffee on a silver tray scattered with coffee beans at Arusha Coffee Lodge",
      },
    ],
  },
  "marera-valley-lodge": {
    id: "marera-valley-lodge",
    name: "Marera Valley Lodge",
    area: "Karatu, near the Ngorongoro Crater",
    type: "Cottage lodge",
    about:
      "A lodge of private cottages at the edge of Karatu, close to the village of Rhotia and about 30 minutes from the Ngorongoro gate. Each cottage has its own veranda, making it a restful stop between Tarangire and the crater.",
    activities: [
      "Swimming pool for hot afternoons",
      "Coffee estate tours, birding and hiking nearby",
      "Massages and an evening campfire",
    ],
    photos: [
      {
        src: "/images/safaris/lodges/marera-valley-lodge-main.jpg",
        alt: "The main building at Marera Valley Lodge reflected in the swimming pool at dusk",
      },
    ],
  },
  "ndutu-camp": {
    id: "ndutu-camp",
    name: "Your Ndutu camp or lodge",
    area: "Ndutu / Southern Serengeti",
    type: "Chosen to match your comfort level",
    about:
      "Your two most important nights. We place you inside or right next to the Ndutu area, as close to the calving grounds as possible, so that you wake up near the herds. Camps here fill early in the calving season, so we confirm the exact property in your written quote.",
    activities: [
      "Early-morning, afternoon and full-day game drives",
      "Wildlife photography around Lake Ndutu and Lake Masek",
      "Dinner in camp after your return at sunset",
    ],
  },
  "kudu-lodge": {
    id: "kudu-lodge",
    name: "Kudu Lodge",
    area: "Karatu, Ngorongoro Highlands",
    type: "Garden lodge",
    about:
      "A relaxed lodge set in about eleven acres of gardens in Karatu, the highland farming town between Lake Manyara and the Ngorongoro Crater. It suits this route well: you arrive after a day in Tarangire and leave early for the crater the next morning.",
    activities: [
      "Swimming pool and gardens to unwind in after the game drive",
      "Restaurant and bar for dinner after your first day on safari",
      "Games room with darts and pool",
    ],
  },
  "ndutu-serengeti-heritage": {
    id: "ndutu-serengeti-heritage",
    name: "Ndutu Serengeti Heritage",
    area: "Ndutu, Southern Serengeti ecosystem",
    type: "Mid-range seasonal tented camp",
    about:
      "A mid-range tented camp on the Ndutu plains, open through the calving season from around December to March. Staying here means you wake up close to the herds, instead of spending the best hours of the morning driving in from the highlands.",
    activities: [
      "Early-morning, afternoon and full-day game drives on the calving grounds",
      "Wildlife photography in the soft light around sunrise and sunset",
      "Quiet evenings in camp, with a campfire when conditions allow",
    ],
  },
  "serengeti-heritage-tented-camp": {
    id: "serengeti-heritage-tented-camp",
    name: "Serengeti Heritage Tented Camp",
    area: "Seronera, Central Serengeti",
    type: "Small tented camp",
    about:
      "A small tented camp in the Seronera area, in the heart of the Serengeti and close to the airstrip. That makes it a practical last night on this route, with time for a final game drive before you fly back to Arusha.",
    activities: [
      "Game drives through the kopjes and grasslands of Central Serengeti",
      "Sunrise hot-air balloon safari, as an optional extra",
      "Sundowners on the plains, by arrangement",
    ],
  },
};

export const staysFor = (ids: string[] = []): Stay[] =>
  ids.map((id) => STAYS[id]).filter(Boolean);
