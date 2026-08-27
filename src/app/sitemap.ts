import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tlshost.vn";

const paths = [
  "",
  "/features",
  "/features/calendar",
  "/features/ai-agent",
  "/features/channel-manager",
  "/features/direct-booking",
  "/features/housekeeping",
  "/features/team",
  "/pricing",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [other, `${SITE_URL}/${other}${path}`]),
        ),
      },
    })),
  );
}
