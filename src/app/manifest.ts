import type { MetadataRoute } from "next";
import { siteConfig, siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "RCL",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#7d3550",
    lang: "en",
    scope: "/",
    id: siteUrl,
  };
}
