import { AiAssistantMock } from "@/components/mockups/AiAssistantMock";
import { CalendarMock } from "@/components/mockups/CalendarMock";
import { ChannelSyncMock } from "@/components/mockups/ChannelSyncMock";
import { DirectBookingMock } from "@/components/mockups/DirectBookingMock";
import { HousekeepingMock } from "@/components/mockups/HousekeepingMock";
import { TeamPermissionsMock } from "@/components/mockups/TeamPermissionsMock";
import { Hero } from "@/components/sections/Hero";
import { PillarSection } from "@/components/sections/PillarSection";
import { ScaleSection } from "@/components/sections/ScaleSection";
import { CtaBand, ChannelStrip, Faq, StatsBand, Testimonials } from "@/components/sections/blocks";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const features = `/${locale}/features`;

  return (
    <>
      <Hero locale={locale} t={t} />

      <ChannelStrip t={t} />

      <Section tone="canvas" className="!pb-8">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t.platform.eyebrow}
              title={
                <>
                  {/* The one serif moment on this page outside the hero. It
                      sits on the opening phrase, which is the half that does
                      the work: the scale, not the conclusion. */}
                  <span className="display-em text-clay-500">
                    {t.platform.titleEmphasis}
                  </span>{" "}
                  {t.platform.titleRest}
                </>
              }
              body={t.platform.body}
              align="center"
            />
          </Reveal>
        </Container>
      </Section>

      {/* The calendar leads, because it is what the other five feed into.
          It sends readers to its own deep-dive rather than the features index. */}
      <PillarSection
        pillar={t.pillars.calendar}
        icon="calendar"
        mockup={<CalendarMock t={t} />}
        href={`${features}/calendar`}
        tone="canvas"
      />

      <PillarSection
        pillar={t.pillars.ai}
        icon="ai"
        mockup={<AiAssistantMock t={t} />}
        href={features}
        tone="surface"
        flip
      />

      <PillarSection
        pillar={t.pillars.channels}
        icon="channels"
        mockup={<ChannelSyncMock t={t} />}
        href={features}
        tone="canvas"
      />

      <PillarSection
        pillar={t.pillars.direct}
        icon="direct"
        mockup={<DirectBookingMock t={t} />}
        href={features}
        tone="surface"
        flip
      />

      <PillarSection
        pillar={t.pillars.housekeeping}
        icon="housekeeping"
        mockup={<HousekeepingMock t={t} />}
        href={features}
        tone="canvas"
      />

      {/* Sixth and last: permissions is the answer to the question the five
          above raise once a host stops working alone. */}
      <PillarSection
        pillar={t.pillars.team}
        icon="team"
        mockup={<TeamPermissionsMock t={t} />}
        href={features}
        tone="surface"
        flip
      />

      <ScaleSection locale={locale} t={t} />

      <StatsBand t={t} />

      <Testimonials t={t} />

      <Faq title={t.faq.title} items={t.faq.items} />

      <CtaBand
        locale={locale}
        title={t.cta.title}
        body={t.cta.body}
        primary={t.cta.primary}
        secondary={t.cta.secondary}
      />
    </>
  );
}
