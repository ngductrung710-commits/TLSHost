export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
};

/** BCP-47 tags for <html lang> and hreflang alternates. */
export const localeTags: Record<Locale, string> = {
  vi: "vi-VN",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Rewrites a path from one locale to another, preserving the sub-path.
 * `/vi/pricing` + `en` → `/en/pricing`
 */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = next;
    return `/${segments.join("/")}`;
  }
  return `/${next}${pathname === "/" ? "" : pathname}`;
}
