export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE } from "./seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
