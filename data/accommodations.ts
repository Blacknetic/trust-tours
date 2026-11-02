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

// One stop on a route. `options` lists the stay ids offered at each comfort
// level, taken from Ombeni's level lists where he names them.
export interface StayChoice {
  id: string;
  nights: string;
  place: string;
  options: Record<string, string[]>;
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
  "parrot-hotel": {
    id: "parrot-hotel",
    name: "Parrot Hotel",
    area: "Central Arusha",
    type: "City hotel",
    about:
      "A modern hotel in the centre of Arusha, an easy first stop after your flight. Air-conditioned rooms and an outdoor pool make it a comfortable place to rest before your safari briefing.",
    activities: [
      "Outdoor swimming pool",
      "Restaurant on site for your first dinner in Tanzania",
      "Short walks to the shops and landmarks of central Arusha",
    ],
  },
  "ngorongoro-farm-house": {
    id: "ngorongoro-farm-house",
    name: "Ngorongoro Farm House",
    area: "Karatu, Ngorongoro Highlands",
    type: "Lodge on a working coffee farm",
    about:
      "A lodge on a coffee farm in the Karatu highlands, close to the Ngorongoro Crater. The farm also grows vegetables and keeps livestock, which gives the place a warm, rural feel after a day in the park.",
    activities: [
      "Walks around the coffee farm",
      "Outdoor swimming pool",
      "Massages and dinner on the terrace",
    ],
  },
  "ngorongoro-serena": {
    id: "ngorongoro-serena",
    name: "Ngorongoro Serena Safari Lodge",
    area: "Ngorongoro Crater rim",
    type: "Lodge on the crater rim",
    about:
      "Built into the rim of the crater, with traditional decor and sweeping views over the crater floor. Sleeping on the rim puts you close to the descent road for your morning game drive.",
    activities: [
      "Views across the crater from the lodge",
      "An early start for your crater game drive",
      "Relaxed evenings in the lodge after a day in the park",
    ],
  },
  "the-manor-ngorongoro": {
    id: "the-manor-ngorongoro",
    name: "The Manor at Ngorongoro",
    area: "Karatu Highlands",
    type: "Colonial-style manor on a coffee estate",
    about:
      "An elegant manor house on a large Arabica coffee estate in the Karatu highlands, just outside the Ngorongoro Conservation Area. Guests stay in private suites set in cottages around the grounds.",
    activities: [
      "Walks through the coffee estate",
      "Fine dining in the manor house",
      "Quiet time in the gardens before the crater",
    ],
  },
  "neptune-ngorongoro": {
    id: "neptune-ngorongoro",
    name: "Neptune Ngorongoro Luxury Lodge",
    area: "Ngorongoro Highlands",
    type: "All-inclusive luxury lodge",
    about:
      "An all-inclusive lodge of spacious cottages set in lush gardens, a calm base in the highlands for your crater day.",
    activities: [
      "Time in the gardens after your game drive",
      "All-inclusive dining at the lodge",
    ],
  },
  "ngorongoro-crater-lodge": {
    id: "ngorongoro-crater-lodge",
    name: "&Beyond Ngorongoro Crater Lodge",
    area: "Ngorongoro Crater rim",
    type: "Ultra-luxury lodge on the crater rim",
    about:
      "One of Africa's most celebrated lodges, with opulent suites on the crater rim and breathtaking views over the crater floor. It is closed for a major rebuild and due to reopen in 2027, so we confirm availability for your dates.",
    activities: [
      "Crater views from your suite",
      "An early start for your crater game drive",
      "Personal service and fine dining",
    ],
  },
  "ndutu-safari-lodge": {
    id: "ndutu-safari-lodge",
    name: "Ndutu Safari Lodge",
    area: "Lake Ndutu, Ngorongoro Conservation Area",
    type: "Long-established lodge",
    about:
      "A much-loved lodge of stone-and-thatch cottages overlooking Lake Ndutu, on the edge of the calving plains. Unlike the seasonal camps, it is here all year, with en-suite bathrooms and a private veranda at each cottage.",
    activities: [
      "Game drives on the Ndutu plains",
      "Guided walks in the woodland near the lake, with a ranger",
      "Birdwatching around Lake Ndutu",
    ],
  },
  "lake-masek": {
    id: "lake-masek",
    name: "Lake Masek Tented Lodge",
    area: "Lake Masek, Ndutu area",
    type: "Luxury tented lodge",
    about:
      "Comfortable tented suites overlooking Lake Masek, close to Lake Ndutu and well placed for the calving grounds. It feels more solid than a mobile camp, which is a real comfort in the wet months.",
    activities: [
      "Game drives on the calving plains",
      "Bush breakfasts and sundowners",
      "Birdwatching and lake views from camp",
    ],
  },
  "lemala-ndutu": {
    id: "lemala-ndutu",
    name: "Lemala Ndutu",
    area: "Ndutu, near the Southern Serengeti border",
    type: "Seasonal luxury tented camp",
    about:
      "A seasonal luxury camp, open for the migration months from about December to March. It gives you the feeling of a true bush camp, close to the herds, with the comforts of a well-run tented suite.",
    activities: [
      "Early-morning and full-day game drives among the herds",
      "Wildlife photography at sunrise and sunset",
      "Dinner in camp under the stars",
    ],
  },
  "serengeti-under-canvas": {
    id: "serengeti-under-canvas",
    name: "&Beyond Serengeti Under Canvas",
    area: "Moves with the migration",
    type: "High-end mobile tented camp",
    about:
      "A high-end mobile camp that moves through the year to follow the Great Migration. We confirm its position for your dates, so that it suits your route.",
    activities: [
      "Game drives wherever the herds are that week",
      "An intimate camp in the middle of the wilderness",
      "Personal service in a small camp",
    ],
  },
  "rivertrees-country-inn": {
    id: "rivertrees-country-inn",
    name: "Rivertrees Country Inn",
    area: "Usa River, between Arusha and Kilimanjaro Airport",
    type: "Riverside country inn",
    about:
      "A small country inn set in mature tropical gardens on the Usa River, about 35 minutes from Kilimanjaro Airport. Shaded paths lead down to the river, which makes it a quiet place to rest after a long flight.",
    activities: [
      "Birdwatching in the gardens and along the river",
      "Large swimming pool",
      "Massages and dinner at the inn",
    ],
  },
  "gran-melia-arusha": {
    id: "gran-melia-arusha",
    name: "Gran Meliá Arusha",
    area: "Kijenge, Arusha",
    type: "Luxury city hotel",
    about:
      "A large luxury hotel in Arusha, with private balconies, several restaurants and landscaped gardens. It suits travellers who like the facilities of a full-service hotel before heading into the bush.",
    activities: [
      "Outdoor swimming pool and gardens",
      "A choice of restaurants on site",
      "Gym open around the clock",
    ],
  },
  "legendary-lodge": {
    id: "legendary-lodge",
    name: "Legendary Lodge",
    area: "Burka Coffee Estate, outside Arusha",
    type: "Boutique lodge on a coffee estate",
    about:
      "An intimate lodge of garden cottages on a working coffee estate, with the former farmhouse at its heart. Winding paths link the cottages to the main house, giving it the feel of a private country home.",
    activities: [
      "Coffee estate tour, at extra cost",
      "Spa treatments, at extra cost",
      "Peaceful walks through the gardens",
    ],
  },
  "ngorongoro-sopa": {
    id: "ngorongoro-sopa",
    name: "Ngorongoro Sopa Lodge",
    area: "Eastern rim of the Ngorongoro Crater",
    type: "Large lodge on the crater rim",
    about:
      "A large lodge on the quieter eastern rim of the crater, with its rooms set around a central swimming pool. Your Ngorongoro stay here comes with views over the crater floor.",
    activities: [
      "Swimming pool at the centre of the lodge",
      "Crater views from the rim",
      "An early start for your crater game drive",
    ],
  },
  "rhino-lodge": {
    id: "rhino-lodge",
    name: "Rhino Lodge",
    area: "Ngorongoro Crater rim",
    type: "Simple lodge near the crater rim",
    about:
      "A simple, good-value lodge in the forest close to the crater rim, with 24 en-suite rooms. It puts you close to the crater for much less than the bigger rim lodges.",
    activities: [
      "Forest views from the lodge",
      "An early start for your crater game drive",
      "Quiet evenings by the fire",
    ],
  },
  "gibbs-farm": {
    id: "gibbs-farm",
    name: "Gibb's Farm",
    area: "Near Karatu, on the slopes of the Ngorongoro highlands",
    type: "Historic working coffee farm",
    about:
      "A working farm with roots going back to 1929, set among gardens and coffee on the forested slopes below the Ngorongoro Conservation Area. Guests stay in private cottages, and much of the food comes from the farm.",
    activities: [
      "Farm walk, including milking and coffee roasting",
      "Guided forest walks and a waterfall hike",
      "Spa treatments inspired by Maasai healing",
    ],
  },
  "the-highlands": {
    id: "the-highlands",
    name: "The Highlands",
    area: "Slopes of Olmoti volcano, north of the crater",
    type: "Boutique camp of dome tents",
    about:
      "A small Asilia camp of eight dome-shaped tents, inspired by Maasai homes, on the slopes of Olmoti volcano. Each has a wood-burning stove against the cool highland nights.",
    activities: [
      "Guided climb of Olmoti volcano",
      "Half-day visit to Empakaai Crater",
      "Crater game drives and Maasai community visits",
    ],
  },
  "ndutu-wilderness-camp": {
    id: "ndutu-wilderness-camp",
    name: "Ndutu Wilderness Camp",
    area: "Ndutu, Ngorongoro Conservation Area",
    type: "Seasonal tented bush camp",
    about:
      "A seasonal mid-range camp that opens for the calving months, with en-suite tents and solar lighting. It is a straightforward bush camp, right where the herds gather.",
    activities: [
      "Game drives on the calving plains",
      "Birdwatching around camp",
      "Hot-air balloon safari, at extra cost",
    ],
  },
  "ndutu-kati-kati": {
    id: "ndutu-kati-kati",
    name: "Ndutu Kati Kati Tented Camp",
    area: "Ndutu, Southern Serengeti ecosystem",
    type: "Seasonal mobile tented camp",
    about:
      "A small mobile camp of about ten en-suite safari tents, set up in the south for the migration months and taken down after each season. It keeps the true feel of a bush camp.",
    activities: [
      "Game drives on the Ndutu plains",
      "Meals together in the lounge tent",
      "Evenings in camp, close to the wilderness",
    ],
  },
  "lake-ndutu-luxury": {
    id: "lake-ndutu-luxury",
    name: "Lake Ndutu Luxury Tented Lodge",
    area: "Ndutu, Ngorongoro Conservation Area",
    type: "Luxury tented lodge",
    about:
      "A lodge of about twenty spacious tents, each raised on a wooden platform under a thatched roof, in the Ndutu area on the migration's path. Unlike the mobile camps, it has a swimming pool and permanent lodge facilities.",
    activities: [
      "Game drives on the plains",
      "Guided walks of about two hours",
      "Sundowners, birdwatching and an outdoor pool",
    ],
  },
  "olakira-camp": {
    id: "olakira-camp",
    name: "Olakira Migration Camp",
    area: "Ndutu from December to March, the Mara River from June to November",
    type: "High-end mobile camp by Asilia",
    about:
      "An intimate camp of nine tents that moves between the far north and Ndutu to follow the herds. Stargazing tents give wide views from your bed, so the plains stay with you through the night.",
    activities: [
      "Game drives among the migrating herds",
      "Stargazing from your tent",
      "Wildlife photography at first and last light",
    ],
  },
  "nomad-serengeti-camp": {
    id: "nomad-serengeti-camp",
    name: "Nomad Serengeti Safari Camp",
    area: "Ndutu from December to March, Kogatende from July to October",
    type: "Small high-end mobile camp",
    about:
      "A small mobile camp of just a few canvas tents that moves through the year with the migration, settling at Ndutu for the calving season and at Kogatende for the river crossings.",
    activities: [
      "Game drives wherever the herds are",
      "A quiet, intimate camp in the wilderness",
      "Wildlife photography on the plains",
    ],
  },
  "kubu-kubu": {
    id: "kubu-kubu",
    name: "Kubu Kubu Tented Lodge",
    area: "Central Serengeti",
    type: "Hillside tented lodge",
    about:
      "Spacious tents raised on wooden platforms on a ridge overlooking the central plains, about half an hour from Seronera. It is a comfortable base for the Seronera Valley, with big views from the camp.",
    activities: [
      "Game drives in the Seronera Valley and central plains",
      "Infinity pool with views over the plains",
      "Sundowners at camp",
    ],
  },
  "serengeti-kati-kati": {
    id: "serengeti-kati-kati",
    name: "Serengeti Kati Kati Tented Camp",
    area: "Central Serengeti",
    type: "Mid-range tented camp",
    about:
      "A comfortable tented camp in the heart of the Serengeti, well placed for game drives in the central park.",
    activities: [
      "Game drives through the central plains",
      "Meals together in the camp",
      "Evenings close to the wilderness",
    ],
  },
  "serengeti-serena": {
    id: "serengeti-serena",
    name: "Serengeti Serena Safari Lodge",
    area: "Central Serengeti",
    type: "Hilltop lodge",
    about:
      "A lodge perched on a hill above the plains, blending African architecture with modern comfort, with a swimming pool and wide views.",
    activities: [
      "Game drives from the heart of the park",
      "Swimming pool with views over the plains",
      "Restaurant dining after a day out",
    ],
  },
  "lemala-ewanjan": {
    id: "lemala-ewanjan",
    name: "Lemala Ewanjan",
    area: "Seronera Valley, Central Serengeti",
    type: "Tented camp",
    about:
      "A tented camp in a secluded part of the Seronera Valley, one of the Serengeti's best areas for big cats.",
    activities: [
      "Game drives in the Seronera Valley",
      "Searching for lions and leopards",
      "Quiet evenings in camp",
    ],
  },
  "lemala-nanyukie": {
    id: "lemala-nanyukie",
    name: "Lemala Nanyukie",
    area: "Eastern Serengeti",
    type: "Luxury tented suites",
    about:
      "A boutique camp of canvas suites in the eastern Serengeti, each with a private deck and plunge pool. The area is known for excellent predator viewing, particularly cheetah.",
    activities: [
      "Game drives in a quieter part of the park",
      "Your own plunge pool on the deck",
      "Searching for cheetahs on the eastern plains",
    ],
  },
  "four-seasons-serengeti": {
    id: "four-seasons-serengeti",
    name: "Four Seasons Safari Lodge Serengeti",
    area: "Central Serengeti",
    type: "High-end safari lodge",
    about:
      "A high-end lodge in the central Serengeti with luxurious suites, an infinity pool, a spa and excellent service, close to prime wildlife areas.",
    activities: [
      "Game drives in the central Serengeti",
      "Infinity pool and spa",
      "Fine dining at the lodge",
    ],
  },
  "kibo-palace": {
    id: "kibo-palace",
    name: "Kibo Palace Hotel",
    area: "About 2 km from central Arusha",
    type: "Four-star city hotel",
    about:
      "A comfortable hotel close to the centre of Arusha, with a large outdoor pool beside a landscaped garden.",
    activities: [
      "Outdoor swimming pool",
      "Sauna and steam room",
      "Easy access to central Arusha",
    ],
  },
  "four-points-arusha": {
    id: "four-points-arusha",
    name: "Four Points by Sheraton Arusha",
    area: "Near the Clock Tower, central Arusha",
    type: "City hotel in gardens",
    about:
      "A historic hotel in the middle of Arusha, close to the Clock Tower, with a swimming pool surrounded by gardens.",
    activities: [
      "Swimming pool in the gardens",
      "Gym and restaurant",
      "Walks around central Arusha",
    ],
  },
  "mount-meru-hotel": {
    id: "mount-meru-hotel",
    name: "Mount Meru Hotel",
    area: "Foot of Mount Meru, Arusha",
    type: "Large garden hotel",
    about:
      "A large hotel set in about 15 acres of landscaped gardens at the foot of Mount Meru, a comfortable base before or after your safari.",
    activities: [
      "Outdoor swimming pool",
      "Landscaped gardens",
      "Restaurant on site",
    ],
  },
  "kia-lodge": {
    id: "kia-lodge",
    name: "KIA Lodge",
    area: "Next to Kilimanjaro International Airport",
    type: "Airport lodge",
    about:
      "A simple, country-club-style lodge of thatched cottages right by the airport, ideal for a late arrival or an early flight.",
    activities: [
      "Rest close to the airport",
      "Dinner at the lodge",
      "Activities available at extra cost",
    ],
  },
  "airport-planet-lodge": {
    id: "airport-planet-lodge",
    name: "Airport Planet Lodge",
    area: "Near Kilimanjaro International Airport",
    type: "Airport lodge",
    about:
      "A newer lodge of cosy bungalows among banana and palm trees, well suited to a short stay around an international flight.",
    activities: [
      "Rest close to the airport",
      "Bungalows set in green grounds",
      "Easy start to your safari",
    ],
  },
  "arumeru-river-lodge": {
    id: "arumeru-river-lodge",
    name: "Arumeru River Lodge",
    area: "Usa River, near Arusha",
    type: "Garden lodge",
    about:
      "A peaceful lodge of rooms, suites and a family cottage spread through gardens at Usa River, between Arusha and the airport.",
    activities: [
      "Outdoor swimming pool",
      "Poolside dining",
      "Time in the gardens",
    ],
  },
  "moivaro-coffee-lodge": {
    id: "moivaro-coffee-lodge",
    name: "Moivaro Coffee Lodge",
    area: "Coffee estate about 7 km from Arusha",
    type: "Lodge on a coffee estate",
    about:
      "Thatched cottages in tropical gardens on a coffee estate outside Arusha, each with a fireplace and private veranda, with views of Mount Meru.",
    activities: [
      "Nature walks on the estate",
      "Swimming pool",
      "Birdwatching in the gardens",
    ],
  },
  "ngare-sero-mountain-lodge": {
    id: "ngare-sero-mountain-lodge",
    name: "Ngare Sero Mountain Lodge",
    area: "Near Arusha",
    type: "Quiet country lodge",
    about:
      "A highly rated country lodge near Arusha, with plenty to do for travellers who like to stay active before their safari.",
    activities: [
      "Yoga classes",
      "Mountain biking",
      "Croquet",
    ],
  },
  "african-tulip": {
    id: "african-tulip",
    name: "The African Tulip",
    area: "Serengeti Road, Arusha",
    type: "Boutique hotel",
    about:
      "An elegant boutique hotel of 29 rooms and suites, about 2 km from central Arusha, with a garden and an outdoor pool.",
    activities: [
      "Outdoor swimming pool",
      "Garden to relax in",
      "Restaurant on site",
    ],
  },
  "arusha-serena": {
    id: "arusha-serena",
    name: "Arusha Serena Hotel",
    area: "Lake Duluti, about 20 km from Arusha",
    type: "Lakeside hotel and spa",
    about:
      "Formerly the Lake Duluti Serena, this hotel stands among coffee plantations on the shore of Lake Duluti, with stone-built cottages grouped around a flowery village square.",
    activities: [
      "Canoeing on Lake Duluti",
      "Coffee plantation tour",
      "Bike rides to local villages",
    ],
  },
  "kili-villas": {
    id: "kili-villas",
    name: "Kili Villas",
    area: "Private wildlife estate outside Arusha",
    type: "Villas and lodge",
    about:
      "A mix of private villas and a small lodge on a private wildlife estate just outside Arusha, a quiet start to your safari.",
    activities: [
      "Time on a private wildlife estate",
      "Full-board dining",
      "Private villa stays",
    ],
  },
  "siringit-villa": {
    id: "siringit-villa",
    name: "Siringit Villa by Mantis",
    area: "Golf estate, about 25 minutes from Kilimanjaro Airport",
    type: "Private six-bedroom villa",
    about:
      "A luxury six-bedroom villa on a championship golf estate. You can book the whole villa or single rooms, which makes it ideal for families and friends.",
    activities: [
      "Golf on the championship course",
      "Private villa living",
      "Quiet time before your safari",
    ],
  },
  "ngorongoro-kuhama": {
    id: "ngorongoro-kuhama",
    name: "Ngorongoro Kuhama Camp",
    area: "Ngorongoro Highlands",
    type: "Mid-range tented camp",
    about:
      "A mid-range tented camp in the highlands, close to the descent road into the crater, which suits an early start.",
    activities: [
      "An early start for your crater game drive",
      "Evenings in a highland camp",
      "Meals in camp",
    ],
  },
  "farm-house-valley": {
    id: "farm-house-valley",
    name: "Farm House Valley Lodge",
    area: "About 20 minutes from Karatu",
    type: "Lodge on a coffee farm",
    about:
      "A lodge on a large coffee farm, about 15 minutes from the Lodoare gate of the conservation area, with a pool and evening campfires.",
    activities: [
      "Walks around the coffee farm",
      "Swimming pool",
      "Evening campfire",
    ],
  },
  "acacia-farm-lodge": {
    id: "acacia-farm-lodge",
    name: "Acacia Farm Lodge",
    area: "Edge of Karatu town",
    type: "Lodge on a working coffee farm",
    about:
      "A lodge on an active coffee farm at the edge of Karatu, with rooms in private cabins, a pool and a spa.",
    activities: [
      "Nature walks and farm tours",
      "Outdoor swimming pool",
      "Spa and fitness centre",
    ],
  },
  "bougainvillea-lodge": {
    id: "bougainvillea-lodge",
    name: "Bougainvillea Safari Lodge",
    area: "Karatu",
    type: "Mid-range lodge",
    about:
      "A mid-range lodge of cottages and spacious tents in landscaped gardens, with a pool, a bar and a restaurant.",
    activities: [
      "Swimming pool",
      "Landscaped gardens",
      "Restaurant and bar",
    ],
  },
  "karatu-simba-lodge": {
    id: "karatu-simba-lodge",
    name: "Karatu Simba Lodge",
    area: "Hilltop near Karatu",
    type: "Mid-range hilltop lodge",
    about:
      "A comfortable mid-range lodge on a scenic hilltop near Karatu, with a pool, a lounge and a restaurant.",
    activities: [
      "Swimming pool",
      "Hilltop views",
      "Local and international dining",
    ],
  },
  "country-lodge-karatu": {
    id: "country-lodge-karatu",
    name: "Country Lodge Karatu",
    area: "Eastern edge of Karatu town",
    type: "Good-value cottage lodge",
    about:
      "Affordable cottage-style rooms at the edge of Karatu, about 30 minutes from both the crater and Lake Manyara.",
    activities: [
      "Coffee plantation tours",
      "Village visits",
      "Forest hikes",
    ],
  },
  "tloma-lodge": {
    id: "tloma-lodge",
    name: "Tloma Lodge",
    area: "Karatu",
    type: "Good-value lodge",
    about:
      "A comfortable and affordable lodge in Karatu, offering a good base for exploring the crater.",
    activities: [
      "An easy base for the crater",
      "Dinner at the lodge",
      "Quiet evenings in the highlands",
    ],
  },
  "the-retreat-ngorongoro": {
    id: "the-retreat-ngorongoro",
    name: "The Retreat at Ngorongoro",
    area: "About 15 minutes from Karatu town",
    type: "Luxury forest lodge",
    about:
      "A luxury lodge on forested land near Karatu, with secluded cottages that have fireplaces and private decks overlooking the trees.",
    activities: [
      "Infinity pool",
      "Spa and gym",
      "Fine dining",
    ],
  },
  "plantation-lodge": {
    id: "plantation-lodge",
    name: "The Plantation Lodge",
    area: "Karatu",
    type: "Lodge on a working coffee plantation",
    about:
      "A stylish lodge on a working farm and coffee plantation, with rooms and suites spread through park-like gardens around a large pool.",
    activities: [
      "Guided walks through the coffee plantation",
      "Large swimming pool",
      "Sundowners on the pool patio",
    ],
  },
  "oldeani-mountain-lodge": {
    id: "oldeani-mountain-lodge",
    name: "Oldeani Ngorongoro Mountain Lodge",
    area: "Karatu, about 15 minutes from the Lodoare gate",
    type: "Farmhouse-style lodge",
    about:
      "A farmhouse-style lodge of suites on about 40 acres, with views of the Oldeani Mountains and a pool.",
    activities: [
      "Swimming pool",
      "Mountain views",
      "Dinner in the ravine",
    ],
  },
  "ngorongoro-coffee-lodge": {
    id: "ngorongoro-coffee-lodge",
    name: "Ngorongoro Coffee Lodge",
    area: "Between Rhotia and Karatu",
    type: "Cottage lodge among coffee plantations",
    about:
      "A lodge of cottages surrounded by coffee plantations and forest, each with a private veranda and a fireplace.",
    activities: [
      "Views over coffee plantations and forest",
      "A fire in your cottage",
      "Relaxing after a day in the park",
    ],
  },
  "kitela-lodge": {
    id: "kitela-lodge",
    name: "Kitela Lodge",
    area: "Karatu highlands",
    type: "Colonial-style lodge on a coffee plantation",
    about:
      "An upper mid-range lodge on a working coffee plantation above Karatu, built in the style of old colonial farms, about 30 minutes from the Lodoare gate.",
    activities: [
      "Coffee plantation walk",
      "Guided walks",
      "Cultural visits to local communities",
    ],
  },
  "melia-ngorongoro": {
    id: "melia-ngorongoro",
    name: "Ngorongoro Lodge Meliá Collection",
    area: "Ngorongoro Crater rim",
    type: "Luxury lodge on the crater rim",
    about:
      "A rebuilt lodge on the rim of the crater, reopened in 2023 on the site of one of the first lodges at Ngorongoro.",
    activities: [
      "Crater views from the rim",
      "An early start for your crater game drive",
      "Dining at the lodge",
    ],
  },
  "sanctuary-kusini": {
    id: "sanctuary-kusini",
    name: "Sanctuary Kusini",
    area: "Kopjes of the southern Serengeti",
    type: "Permanent luxury tented camp",
    about:
      "A camp of 12 en-suite tents with raised wooden decks, set among rocky kopjes on the southern plains near the migration route. It is well placed for cheetahs.",
    activities: [
      "Game drives on the southern plains",
      "Searching for cheetahs",
      "Views from the kopjes",
    ],
  },
  "seronera-wildlife-lodge": {
    id: "seronera-wildlife-lodge",
    name: "Seronera Wildlife Lodge",
    area: "Heart of the Serengeti",
    type: "Classic park lodge",
    about:
      "A classic lodge in the heart of the park, built around a rocky outcrop.",
    activities: [
      "Game drives in the Seronera Valley",
      "Views from the kopje",
      "Dinner at the lodge",
    ],
  },
  "kimarishe-serengeti": {
    id: "kimarishe-serengeti",
    name: "Kimarishe Serengeti Lodge",
    area: "Central Serengeti, about 24 km from Seronera Airstrip",
    type: "Tented lodge",
    about:
      "A safari-tented lodge in Central Serengeti, a comfortable base for game drives around Seronera.",
    activities: [
      "Game drives in the central park",
      "Evenings at the lodge",
      "Early starts for big cats",
    ],
  },
  "serengeti-kuhama": {
    id: "serengeti-kuhama",
    name: "Serengeti Kuhama Camp",
    area: "Makoma Hill, Central Serengeti",
    type: "Tented camp",
    about:
      "A tented camp at the foot of Makoma Hill, south-west of Seronera, about 45 minutes from the airstrip.",
    activities: [
      "Game drives in the central park",
      "Searching for big cats",
      "Meals in camp",
    ],
  },
  "serengeti-explorer": {
    id: "serengeti-explorer",
    name: "Serengeti Explorer by Elewana",
    area: "Nyaburo Hills, Serengeti",
    type: "Upscale safari lodge",
    about:
      "A large new lodge on the Nyaburo Hills, built on the site of the former Serengeti Sopa Lodge, with rooms and suites overlooking the plains.",
    activities: [
      "Game drives from the hills",
      "Wide views over the plains",
      "Relaxing at the lodge",
    ],
  },
  "melia-serengeti": {
    id: "melia-serengeti",
    name: "Meliá Serengeti Lodge",
    area: "Nyamuma Hills, above the Mbalageti valley",
    type: "Luxury lodge",
    about:
      "A luxury lodge of 50 rooms overlooking the Mbalageti River valley, with a pool facing the park, under an hour from Seronera Airstrip.",
    activities: [
      "Swimming pool with park views",
      "Game drives in the valley",
      "Restaurant and bar",
    ],
  },
  "dunia-camp": {
    id: "dunia-camp",
    name: "Dunia Camp",
    area: "Just north of the Moru Kopjes",
    type: "Small semi-permanent camp by Asilia",
    about:
      "A small camp of eight luxury en-suite tents in a lesser-visited part of the Serengeti, with easy access to Seronera and the southern plains.",
    activities: [
      "Game drives around the Moru Kopjes",
      "Quiet areas with fewer vehicles",
      "Evenings in a small camp",
    ],
  },
  "serengeti-pioneer-camp": {
    id: "serengeti-pioneer-camp",
    name: "Serengeti Pioneer Camp by Elewana",
    area: "Moru Kopjes, south-central Serengeti",
    type: "Classic 1930s-style camp",
    about:
      "A camp of 12 tents on a kopje overlooking the Moru Kopjes and Lake Magadi, inspired by the mobile safari camps of the 1930s.",
    activities: [
      "Game drives around Moru and Lake Magadi",
      "Views from the kopje",
      "A classic safari camp atmosphere",
    ],
  },
  "mara-kati-kati": {
    id: "mara-kati-kati",
    name: "Mara Kati Kati Tented Camp",
    area: "Northern Serengeti, near Kogatende",
    type: "Seasonal mobile tented camp",
    about:
      "A simple, wild mobile camp of about 11 tents, around 20 minutes from Kogatende airstrip. It is set up in the north for the migration months, and wildlife can pass through the camp itself.",
    activities: [
      "Game drives along the Mara River",
      "Searching for river crossings",
      "Evenings in a true bush camp",
    ],
  },
  "nyikani-migration-camp": {
    id: "nyikani-migration-camp",
    name: "Nyikani Migration Camp",
    area: "Northern Serengeti, about 25 minutes from Kogatende airstrip",
    type: "Seasonal mobile tented camp",
    about:
      "A mobile camp of comfortable en-suite safari tents, which spends the crossing months near the Mara River and moves south to Ndutu for the calving season.",
    activities: [
      "Game drives around the Mara River",
      "Searching for river crossings",
      "Meals together in camp",
    ],
  },
  "lemala-kuria-hills": {
    id: "lemala-kuria-hills",
    name: "Lemala Kuria Hills Lodge",
    area: "Wogakuria Hills, Northern Serengeti",
    type: "Luxury tented suites",
    about:
      "A lodge of 15 glass-fronted tented suites set among boulders in the Wogakuria Hills, each with a plunge pool. It is about 45 minutes from Kogatende airstrip and closes in April and May.",
    activities: [
      "Game drives to the Mara River",
      "Your own plunge pool",
      "Views across the northern hills",
    ],
  },
  "serengeti-bushtops": {
    id: "serengeti-bushtops",
    name: "Serengeti Bushtops",
    area: "Wogakuria, Northern Serengeti",
    type: "Permanent luxury tented camp",
    about:
      "A permanent camp on a hillside overlooking plains and acacia woodland, not far from the Mara River. Every tent has a deck with sunken seating and its own hot tub.",
    activities: [
      "Game drives in the northern Serengeti",
      "A private hot tub on your deck",
      "Views over the plains from the hillside",
    ],
  },
  "singita-mara-river": {
    id: "singita-mara-river",
    name: "Singita Mara River Tented Camp",
    area: "Lamai Wedge, on the Mara River",
    type: "Ultra-luxury tented camp",
    about:
      "A small camp of six tented suites on the northern bank of the Mara River, in the Lamai Wedge at the northern tip of the Serengeti. It is close to the crossing points and closes for part of the rainy season.",
    activities: [
      "Game drives along the Mara River",
      "Searching for crossings near camp",
      "Personal service in a very small camp",
    ],
  },
  "kudu-lodge": {
    id: "kudu-lodge",
    name: "Kudu Lodge",
    area: "Karatu, Ngorongoro Highlands",
    type: "Garden lodge",
    about:
      "A relaxed lodge set in about eleven acres of gardens in Karatu, the highland farming town between Lake Manyara and the Ngorongoro Crater. It is a short drive from the Ngorongoro gate, so it works well before or after a day in the crater.",
    activities: [
      "Swimming pool and gardens to unwind in after the game drive",
      "Restaurant and bar for dinner after a day on safari",
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
      "A small tented camp in the Seronera area, in the heart of the Serengeti and close to the airstrip. That makes it a practical base for a final game drive before you fly back to Arusha.",
    activities: [
      "Game drives through the kopjes and grasslands of Central Serengeti",
      "Sunrise hot-air balloon safari, as an optional extra",
      "Sundowners on the plains, by arrangement",
    ],
  },
  "tarangire-simba-lodge": {
    id: "tarangire-simba-lodge",
    name: "Tarangire Simba Lodge",
    area: "Just outside Tarangire's western boundary, near Sangaiwe Gate",
    type: "Tented lodge",
    about:
      "A tented lodge in a wildlife management area on Tarangire's western edge, about ten minutes from Sangaiwe Gate. A waterhole near the lodge draws passing animals, and there are views towards Lake Burunge.",
    activities: [
      "Game drives in Tarangire National Park",
      "Watching the waterhole from the viewing platform",
      "Swimming pool to cool off in after a day on safari",
    ],
  },
  "maramboi-tented-lodge": {
    id: "maramboi-tented-lodge",
    name: "Maramboi Tented Lodge",
    area: "Between Tarangire and Lake Manyara",
    type: "Tented lodge",
    about:
      "A tented lodge on open grassland between Tarangire and Lake Manyara, around 20 minutes from the Tarangire gate. Raised tents look out towards the lake and the Rift Valley escarpment.",
    activities: [
      "Game drives in Tarangire or Lake Manyara",
      "Swimming pool overlooking the plains",
      "Evening views of the Rift Valley escarpment",
    ],
  },
  "tarangire-treetops": {
    id: "tarangire-treetops",
    name: "Elewana Tarangire Treetops",
    area: "Randilen Wildlife Management Area, next to Tarangire",
    type: "Treehouse lodge",
    about:
      "Twenty treehouse rooms set among marula and baobab trees, in a wildlife management area outside the national park. That location allows night drives and bush walks, which aren't possible inside Tarangire.",
    activities: [
      "Day game drives in Tarangire National Park",
      "Night drives and guided walks, by arrangement",
      "Maasai cultural visits, by arrangement",
    ],
  },
  "sanctuary-swala": {
    id: "sanctuary-swala",
    name: "Sanctuary Swala",
    area: "South-western Tarangire National Park",
    type: "Luxury tented camp",
    about:
      "A small camp of canvas tents inside the national park, in Tarangire's south-west at the edge of the Gurusi wetlands. The tents overlook a waterhole, so wildlife can come to you between game drives.",
    activities: [
      "Game drives in southern Tarangire",
      "Watching wildlife at the waterhole from your tent",
      "Drives towards the Silale swamp",
    ],
  },
  "chem-chem-lodge": {
    id: "chem-chem-lodge",
    name: "Chem Chem Lodge",
    area: "Burunge Wildlife Management Area, between Tarangire and Lake Manyara",
    type: "Luxury tented lodge",
    about:
      "An intimate lodge of eight tented suites on a private concession between Tarangire and Lake Manyara, including a two-bedroom family suite. Being outside the national parks means you can walk and drive at night as well as take game drives.",
    activities: [
      "Guided walking safaris",
      "Night drives",
      "Game drives in Tarangire or Lake Manyara",
    ],
  },
  "lake-manyara-serena": {
    id: "lake-manyara-serena",
    name: "Lake Manyara Serena Safari Lodge",
    area: "Rift Valley escarpment, above Lake Manyara",
    type: "Escarpment lodge",
    about:
      "Circular two-storey thatched rondavels on the edge of the escarpment at Mto wa Mbu, with wide views over Lake Manyara and the Great Rift Valley. The pool and bar sit close to the cliff edge.",
    activities: [
      "Game drives in Lake Manyara National Park",
      "Swimming pool with views over the lake",
      "Sunset views across the Rift Valley",
    ],
  },
  "manyaras-secret": {
    id: "manyaras-secret",
    name: "Manyara's Secret",
    area: "Mto wa Mbu, near Lake Manyara National Park",
    type: "Boutique villa lodge",
    about:
      "A small lodge of private villas near Mto wa Mbu, a short drive from the Lake Manyara park gate. Villas have their own terraces and pools, with views towards the lake.",
    activities: [
      "Game drives in Lake Manyara National Park",
      "Your own pool and terrace at the villa",
      "Quiet evenings looking out over the lake",
    ],
  },
  "lake-manyara-kilimamoja": {
    id: "lake-manyara-kilimamoja",
    name: "Lake Manyara Kilimamoja Lodge",
    area: "Rift Valley rim, near Mto wa Mbu",
    type: "Luxury lodge",
    about:
      "A lodge on the rim of the Great Rift Valley, about 5 km from Mto wa Mbu and 25 minutes from the park gate. Suites have private verandas, and on clear days the views can reach Mount Meru and Kilimanjaro.",
    activities: [
      "Game drives in Lake Manyara National Park",
      "Infinity pool",
      "Spa treatments, by arrangement",
    ],
  },
  "singita-sasakwa": {
    id: "singita-sasakwa",
    name: "Singita Sasakwa Lodge",
    area: "Grumeti Reserve, western Serengeti",
    type: "Luxury hilltop lodge",
    about:
      "A hilltop lodge of private cottages in the Grumeti Reserve, a private concession bordering the national park in the western Serengeti. Each cottage has its own pool, and the reserve funds conservation and local education.",
    activities: [
      "Game drives in the private Grumeti Reserve",
      "Your own pool at the cottage",
      "Views across the plains from the hilltop",
    ],
  },
};

/** The choices with every stay they offer looked up, for the browser. */
export const resolveStayChoices = (choices: StayChoice[] = []) =>
  choices.map((choice) => ({
    ...choice,
    stays: [...new Set(Object.values(choice.options).flat())].map((id) => STAYS[id]).filter(Boolean),
  }));
