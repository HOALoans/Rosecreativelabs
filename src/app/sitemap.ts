import type { MetadataRoute } from "next";
import { getAllProgramSlugs } from "@/data/programs";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/programs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/for-schools`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/corporate-teambuilding`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/adult-continuing-education`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const programRoutes: MetadataRoute.Sitemap = getAllProgramSlugs().map(
    (slug) => ({
      url: `${siteUrl}/programs/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...programRoutes];
}
