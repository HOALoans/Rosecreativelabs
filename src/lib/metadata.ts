import type { Metadata } from "next";
import { siteConfig, siteUrl } from "./site";

type BuildMetadataOptions = {
  /** Page title without site name (uses layout template) or pass `absolute` for full control. */
  title: string | { absolute: string };
  description: string;
  /** Path starting with /, e.g. `/programs` */
  path?: string;
  keywords?: string[];
  /** Set true for thank-you pages or drafts */
  noIndex?: boolean;
  /** og:type — defaults to website */
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const canonical = `${siteUrl}${path}`;
  const titleValue =
    typeof title === "string"
      ? title
      : title.absolute;

  const allKeywords = [...new Set([...keywords, ...siteConfig.defaultKeywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: typeof title === "string" ? `${title} | ${siteConfig.name}` : titleValue,
      description,
      images: [
        {
          url: "/about-art.jpg",
          width: 800,
          height: 1000,
          alt: "Paintbrush and palette — Rose Creative Labs art programs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? `${title} | ${siteConfig.name}` : titleValue,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Art Enrichment & Education in St. Louis`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.defaultKeywords],
  authors: [{ name: "Madeline Rose Kirschner", url: siteConfig.social.portfolio }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Art Enrichment Programs in St. Louis`,
    description: siteConfig.description,
    images: [
      {
        url: "/about-art.jpg",
        width: 800,
        height: 1000,
        alt: "Paintbrush and palette — Rose Creative Labs art programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Art Enrichment in St. Louis`,
    description: siteConfig.description,
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};
