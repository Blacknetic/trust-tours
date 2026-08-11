export interface Testimonial {
  name: string;
  /** trip taken or party type, shown under the name */
  context: string;
  title: string;
  quote: string;
  rating: number;
  source: string;
}

/**
 * Independent traveller reviews (TripAdvisor). Quotes are lightly trimmed for
 * length; wording and meaning are preserved.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Robin Van Rompaey",
    context: "Lemosho/Western Breach climb + 4-day safari · Sep 2023",
    title: "Ombeni was patient, and we found a solution",
    quote:
      "Last month (September 2023) me and a friend went to Tanzania and we contacted Ombeni (the owner of Trust Tours) to arrange everything. We hiked to the top of Kilimanjaro on the Lemosho route (through the Western Breach). We booked with Ombeni because most other companies wouldn't offer us the Western Breach route, even if we specifically asked for it. We had a bit of troubles to pay, but Ombeni was patient and we found a solution and after that everything went according to plan. We were so happy about how perfectly everything was arranged, that we decided to also use Trust Tours for a 4-day safari (Tarangire, Ngorongoro Crater and Serengeti). They also provided transport to and from the airport. 10/10 would recommend!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Irina D",
    context: "4-Day Mt Meru · Solo",
    title: "Such a well-organized Mt Meru trip!",
    quote:
      "A wonderful, well-organized 4-day Mt Meru trip from start to finish. The night before, Ombeni the owner and William my guide met me to check my gear and make sure I had everything I needed.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Sene Kar C",
    context: "Kilimanjaro · Group of 8",
    title: "A trip of a lifetime",
    quote:
      "Our team of 8 summitted Kilimanjaro over 8 days. The service was excellent from the airport pickup to the last day. The guides were courteous and knowledgeable, and our health was monitored every single day.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Exavery M",
    context: "Safari · Feb 2025",
    title: "My expectations were surpassed",
    quote:
      "There is no other I can recommend in the industry. I've had many tours in my life — all beautiful — but this one with Trust Tours was even more wonderful.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Explorer",
    context: "Parks & climbing · Dec 2024",
    title: "The best tourist services",
    quote:
      "A heartwarming journey that restored great hope — excellent transport, hospitality and outstanding food. I invite you, because you will truly be proud.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Benedicto J",
    context: "Tour · Feb 2025",
    title: "Memorable tour",
    quote:
      "A very wonderful moment. I can't wait to return and enjoy the beautiful experience again. Thanks again for your service.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Judith B",
    context: "Friends · Dec 2024",
    title: "I enjoyed a lot",
    quote:
      "The trip was awesome and I enjoyed it to the fullest. The unique services and hospitality make me want to visit frequently.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Tabitha W",
    context: "Safari · Dec 2024",
    title: "Amazing trips with Trust Tours",
    quote:
      "We enjoyed it so much — great locations and services from Trust Tours and Safaris. I welcome others to come and enjoy their safari trips too.",
    rating: 5,
    source: "TripAdvisor",
  },
  {
    name: "Frank D",
    context: "Adventure · Feb 2025",
    title: "Adventure tourism",
    quote:
      "The view was awesome and we had a great experience getting close to nature — a gorgeous adventure. It was nice.",
    rating: 5,
    source: "TripAdvisor",
  },
];
