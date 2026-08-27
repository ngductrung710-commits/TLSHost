import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChannelSyncMock } from "@/components/mockups/ChannelSyncMock";
import { ChannelConflictMock } from "@/components/mockups/SecondaryMocks";
import { FeaturePage } from "@/components/sections/FeaturePage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const PATH = "/features/channel-manager";

export async function generateMetadata(
  props: PageProps<"/[lang]/features/channel-manager">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const p = (await getDictionary(lang)).channelsPage;

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

export default async function ChannelsFeaturePage(
  props: PageProps<"/[lang]/features/channel-manager">,
) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <FeaturePage
      locale={locale}
      t={t}
      copy={t.channelsPage}
      first={{ icon: "channels", mockup: <ChannelSyncMock t={t} /> }}
      second={{ icon: "board", mockup: <ChannelConflictMock t={t} /> }}
    />
  );
}
