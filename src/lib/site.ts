/** Canonical site URL — set NEXT_PUBLIC_SITE_URL in Vercel for production. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://rosecreativelabs.com";

export const siteConfig = {
  name: "Rose Creative Labs",
  tagline: "Art enrichment programs in St. Louis, Missouri",
  description:
    "Rose Creative Labs delivers curriculum-aligned art enrichment for K–12 schools, corporate team building workshops, and adult continuing education in St. Louis — led by a licensed educator and working artist.",
  email: "hello@rosecreativelabs.com",
  locale: "en_US",
  location: {
    city: "St. Louis",
    state: "Missouri",
    stateCode: "MO",
    country: "United States",
  },
  social: {
    instagram: "https://www.instagram.com/madelinerose.arts/",
    portfolio: "https://www.madelineroseart.com",
  },
  defaultKeywords: [
    "art enrichment St. Louis",
    "school art programs Missouri",
    "K-12 art education St. Louis",
    "corporate team building art workshop",
    "adult art classes St. Louis",
    "after school art programs",
    "nonprofit art enrichment",
    "Rose Creative Labs",
  ],
} as const;
