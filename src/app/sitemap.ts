import type { MetadataRoute } from "next";
import { portfolio } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = portfolio.seo.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
}
