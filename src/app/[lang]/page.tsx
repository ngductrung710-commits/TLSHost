import { AiAssistantMock } from "@/components/mockups/AiAssistantMock";
import { ChannelSyncMock } from "@/components/mockups/ChannelSyncMock";
import { DirectBookingMock } from "@/components/mockups/DirectBookingMock";
import { HousekeepingMock } from "@/components/mockups/HousekeepingMock";
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
              title={t.platform.title}
              body={t.platform.body}
              align="center"
            />
          </Reveal>
        </Container>
      </Section>

      <PillarSection
        pillar={t.pillars.ai}
        mockup={<AiAssistantMock t={t} />}
        href={features}
        tone="canvas"
      />

      <PillarSection
        pillar={t.pillars.channels}
        mockup={<ChannelSyncMock t={t} />}
        href={features}
        tone="surface"
        flip
      />

      <PillarSection
        pillar={t.pillars.direct}
        mockup={<DirectBookingMock t={t} />}
        href={features}
        tone="canvas"
      />

      <PillarSection
        pillar={t.pillars.housekeeping}
        mockup={<HousekeepingMock t={t} />}
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
