export const PORTFOLIO_SITE_URL = "https://www.madelineroseart.com";
export const DIGITAL_WORKS_URL = `${PORTFOLIO_SITE_URL}/digital-works`;

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
  portfolioUrl: string;
};

/** Digital works from [Madeline Rose Art](https://www.madelineroseart.com/digital-works). */
export const portfolioGallery: GalleryImage[] = [
  {
    src: "/gallery/digital-02.jpg",
    alt: "Digital artwork by Madeline Rose Kirschner",
    title: "Digital composition",
    category: "Digital",
    portfolioUrl: DIGITAL_WORKS_URL,
  },
  {
    src: "/gallery/digital-04.jpg",
    alt: "Digital artwork by Madeline Rose Kirschner",
    title: "Digital study",
    category: "Digital",
    portfolioUrl: DIGITAL_WORKS_URL,
  },
  {
    src: "/gallery/digital-03.jpg",
    alt: "Digital artwork by Madeline Rose Kirschner",
    title: "Digital piece",
    category: "Digital",
    portfolioUrl: DIGITAL_WORKS_URL,
  },
  {
    src: "/gallery/digital-05.jpg",
    alt: "Digital artwork by Madeline Rose Kirschner",
    title: "Digital work",
    category: "Digital",
    portfolioUrl: DIGITAL_WORKS_URL,
  },
  {
    src: "/gallery/digital-06.jpg",
    alt: "Digital artwork by Madeline Rose Kirschner",
    title: "Digital illustration",
    category: "Digital",
    portfolioUrl: DIGITAL_WORKS_URL,
  },
  {
    src: "/gallery/digital-01.jpg",
    alt: "Digital artwork by Madeline Rose Kirschner",
    title: "Digital media",
    category: "Digital",
    portfolioUrl: DIGITAL_WORKS_URL,
  },
];
