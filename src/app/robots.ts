import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tlshost.vn";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The product application is behind auth and has nothing to index.
      disallow: "/app/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
