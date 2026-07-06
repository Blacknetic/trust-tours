// data/reviews-meta.ts — the aggregate review rating shown on /reviews and
// emitted as AggregateRating structured data. Sourced from an independent
// platform (TripAdvisor); refresh the numbers here when the profile updates and
// both the on-page badge and the JSON-LD follow automatically.

export interface AggregateRatingData {
  /** Platform the rating comes from — shown to travellers for credibility. */
  source: string;
  /** Current star rating (0–bestRating). */
  ratingValue: number;
  /** Number of reviews behind the rating. */
  reviewCount: number;
  /** Top of the scale (5 stars). */
  bestRating: number;
  /** Public listing the rating can be verified against. */
  url: string;
}

export const AGGREGATE_RATING: AggregateRatingData = {
  source: "TripAdvisor",
  ratingValue: 5.0,
  reviewCount: 97,
  bestRating: 5,
  url: "https://www.tripadvisor.com/Attraction_Review-g297913-d13170128-Reviews-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html",
};
