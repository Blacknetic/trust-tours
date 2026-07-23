/* Single source of truth for Trust Tours' social profiles and review platforms.
   Update a URL here and it changes everywhere (footer, contact, reviews). */

export type SocialKey = "instagram" | "facebook" | "x" | "tiktok" | "linkedin";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
};

/* Follow-us profiles (rendered as icons by components/SocialLinks.tsx). */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/trust.tours.safaristanzania/",
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/Trust.Tours.Safaris.Tanzania",
  },
  {
    key: "x",
    label: "X (Twitter)",
    href: "https://x.com/TrustSafaris",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@trusttourstanzania",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trust-tours-safaris-company-tanzania",
  },
];

/* Platforms where travellers can read & leave a review. */
export const REVIEW_LINKS: { label: string; href: string }[] = [
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.com/UserReviewEdit-g297913-d13170128-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html",
  },
  {
    label: "Google",
    href: "https://g.page/r/Cep6ldGSRjD_EB0/review",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Trust.Tours.Safaris.Tanzania/reviews",
  },
  {
    label: "SafariBookings",
    href: "https://www.safaribookings.com/p3691",
  },
];
