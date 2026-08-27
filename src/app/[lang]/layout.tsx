import type { Metadata } from "next";
import { Calistoga, Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { isLocale, locales, localeTags, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import "../globals.css";

/* Every family below ships a `vietnamese` subset — verified against the
   Google Fonts CSS API before it was chosen. */

const display = Calistoga({
  variable: "--font-display-family",
  subsets: ["latin", "vietnamese"],
  weight: "400",
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans-family",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-family",
  subsets: ["latin", "vietnamese"],
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
