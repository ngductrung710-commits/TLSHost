import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AiAssistantMock } from "@/components/mockups/AiAssistantMock";
import { AiApprovalMock } from "@/components/mockups/SecondaryMocks";
import { FeaturePage } from "@/components/sections/FeaturePage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const PATH = "/features/ai-agent";

export async function generateMetadata(
  props: PageProps<"/[lang]/features/ai-agent">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const p = (await getDictionary(lang)).aiPage;

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

export default async function AiFeaturePage(
  props: PageProps<"/[lang]/features/ai-agent">,
) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);

  return (
    <FeaturePage
      locale={locale}
      t={t}
      copy={t.aiPage}
      first={{ icon: "ai", mockup: <AiAssistantMock t={t} /> }}
      second={{ icon: "team", mockup: <AiApprovalMock t={t} /> }}
    />
  );
}
