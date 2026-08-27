import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HousekeepingMock } from "@/components/mockups/HousekeepingMock";
import { HousekeepingBoardMock } from "@/components/mockups/SecondaryMocks";
import { FeaturePage } from "@/components/sections/FeaturePage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const PATH = "/features/housekeeping";

export async function generateMetadata(
  props: PageProps<"/[lang]/features/housekeeping">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const p = (await getDictionary(lang)).housekeepingPage;

  return {
    title: p.meta.title,
    description: p.meta.description,
    openGraph: {
      title: p.meta.title,
      description: p.meta.description,
      url: `/${lang}${PATH}`,
    },
    alternates: {
      canonical: `/${lang}${PATH}`,
      languages: {
        vi: `/vi${PATH}`,
        en: `/en${PATH}`,
        "x-default": `/vi${PATH}`,
      },
    },
  };
}

export default async function HousekeepingFeaturePage(
  props: PageProps<"/[lang]/features/housekeeping">,
) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <FeaturePage
      locale={locale}
      t={t}
      copy={t.housekeepingPage}
      first={{ icon: "housekeeping", mockup: <HousekeepingMock t={t} /> }}
      second={{ icon: "board", mockup: <HousekeepingBoardMock t={t} /> }}
    />
  );
}
