import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DirectBookingMock } from "@/components/mockups/DirectBookingMock";
import { SavingsMock } from "@/components/mockups/SecondaryMocks";
import { FeaturePage } from "@/components/sections/FeaturePage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const PATH = "/features/direct-booking";

export async function generateMetadata(
  props: PageProps<"/[lang]/features/direct-booking">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const p = (await getDictionary(lang)).directPage;

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

export default async function DirectFeaturePage(
  props: PageProps<"/[lang]/features/direct-booking">,
) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <FeaturePage
      locale={locale}
      t={t}
      copy={t.directPage}
      first={{ icon: "direct", mockup: <DirectBookingMock t={t} /> }}
      second={{ icon: "edit", mockup: <SavingsMock t={t} /> }}
    />
  );
}
