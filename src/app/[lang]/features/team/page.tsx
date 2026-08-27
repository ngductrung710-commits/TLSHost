import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TeamPermissionsMock } from "@/components/mockups/TeamPermissionsMock";
import { ActivityMock } from "@/components/mockups/SecondaryMocks";
import { FeaturePage } from "@/components/sections/FeaturePage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const PATH = "/features/team";

export async function generateMetadata(
  props: PageProps<"/[lang]/features/team">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const p = (await getDictionary(lang)).teamPage;

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

export default async function TeamFeaturePage(
  props: PageProps<"/[lang]/features/team">,
) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <FeaturePage
      locale={locale}
      t={t}
      copy={t.teamPage}
      first={{ icon: "team", mockup: <TeamPermissionsMock t={t} /> }}
      second={{ icon: "edit", mockup: <ActivityMock t={t} /> }}
    />
  );
}
