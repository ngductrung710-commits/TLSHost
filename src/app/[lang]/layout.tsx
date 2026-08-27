import type { Metadata } from "next";
import { Be_Vietnam_Pro, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { isLocale, locales, localeTags, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import "../globals.css";

/* Every family below ships a `vietnamese` subset — verified against the
   Google Fonts CSS API before it was chosen. */

/* Newsreader carries the voice rather than the reading: the wordmark, the
   figures in the stat and price blocks, and the one emphasised phrase in the
   hero headline. Loaded with its true italic — that italic is the whole point
   of choosing it, and a browser-synthesised slant is not the same letterform. */
const display = Newsreader({
  variable: "--font-display-family",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Be Vietnam Pro sets everything meant to be read — body, headings, labels,
   controls. It was drawn around stacked Vietnamese diacritics, which is what
   most of this site's copy is made of. */
const sans = Be_Vietnam_Pro({
  variable: "--font-sans-family",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Mono is now reserved for machine data inside the product mockups — ids,
   dates, room numbers. Labels no longer use it: set in a monospace, uppercase
   and letterspaced, Vietnamese diacritics fall apart. */
const mono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tlshost.vn";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: LayoutProps<"/[lang]">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.home.title,
      template: `%s — ${t.meta.siteName}`,
    },
    description: t.meta.home.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        vi: "/vi",
        en: "/en",
        "x-default": "/vi",
      },
    },
    openGraph: {
      type: "website",
      siteName: t.meta.siteName,
      title: t.meta.home.title,
      description: t.meta.home.description,
      locale: localeTags[lang].replace("-", "_"),
      url: `/${lang}`,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.home.title,
      description: t.meta.home.description,
    },
    robots: { index: true, follow: true },
  };
}


export default async function LocaleLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <html
      lang={localeTags[locale]}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a className="skip-link rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-sand-100" href="#main">
          {t.nav.skipToContent}
        </a>
        <Header locale={locale} t={t} />
        <main id="main" className="flex-1">
          {props.children}
        </main>
        <Footer locale={locale} t={t} />
      </body>
    </html>
  );
}
