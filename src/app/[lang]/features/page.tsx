import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AiAssistantMock } from "@/components/mockups/AiAssistantMock";
import { CalendarMock } from "@/components/mockups/CalendarMock";
import { ChannelSyncMock } from "@/components/mockups/ChannelSyncMock";
import { DirectBookingMock } from "@/components/mockups/DirectBookingMock";
import { HousekeepingMock } from "@/components/mockups/HousekeepingMock";
import { TeamPermissionsMock } from "@/components/mockups/TeamPermissionsMock";
import { PillarSection } from "@/components/sections/PillarSection";
import { CtaBand } from "@/components/sections/blocks";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata(
  props: PageProps<"/[lang]/features">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);

  return {
    title: t.meta.features.title,
    description: t.meta.features.description,
    openGraph: {
      title: t.meta.features.title,
      description: t.meta.features.description,
      url: `/${lang}/features`,
    },
    alternates: {
      canonical: `/${lang}/features`,
      languages: {
        vi: "/vi/features",
        en: "/en/features",
        "x-default": "/vi/features",
      },
    },
  };
}

export default async function FeaturesPage(props: PageProps<"/[lang]/features">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const p = t.featuresPage;
  const pricing = `/${locale}/pricing`;

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-canvas">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(204,190,180,0.5),transparent_72%)]"
        />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>{p.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[2.25rem] leading-[1.1] text-ink-900 sm:text-[3rem] lg:text-[3.5rem]">
              {p.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600">
              {p.hero.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Four value pillars */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={p.value.eyebrow}
              title={p.value.title}
              body={p.value.body}
              align="center"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.value.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 70} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-canvas p-6">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-clay-400 tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[17px] font-semibold leading-snug text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[16px] leading-relaxed text-ink-600">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Every pillar in detail */}
      <PillarSection
        pillar={t.pillars.calendar}
        mockup={<CalendarMock t={t} />}
        href={pricing}
        tone="canvas"
      />
      <PillarSection
        pillar={t.pillars.ai}
        mockup={<AiAssistantMock t={t} />}
        href={pricing}
        tone="surface"
        flip
      />
      <PillarSection
        pillar={t.pillars.channels}
        mockup={<ChannelSyncMock t={t} />}
        href={pricing}
        tone="canvas"
      />
      <PillarSection
        pillar={t.pillars.direct}
        mockup={<DirectBookingMock t={t} />}
        href={pricing}
        tone="surface"
        flip
      />
      <PillarSection
        pillar={t.pillars.housekeeping}
        mockup={<HousekeepingMock t={t} />}
        href={pricing}
        tone="canvas"
      />
      <PillarSection
        pillar={t.pillars.team}
        mockup={<TeamPermissionsMock t={t} />}
        href={pricing}
        tone="surface"
        flip
      />

      {/* Smaller extras */}
      <Section tone="alt">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-3">
            {p.extras.map((extra, i) => (
              <li key={extra.title}>
                <Reveal delay={i * 80} className="h-full">
                  <article className="h-full rounded-2xl border border-line bg-surface p-6">
                    <h3 className="text-[16px] font-semibold text-ink-900">{extra.title}</h3>
                    <p className="mt-2.5 text-[16px] leading-relaxed text-ink-600">
                      {extra.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        locale={locale}
        title={p.cta.title}
        body={p.cta.body}
        primary={t.cta.primary}
        secondary={t.cta.secondary}
      />
    </>
  );
}
