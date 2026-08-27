import { CalendarMock } from "@/components/mockups/CalendarMock";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* Warm ambient wash — decorative, sits behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(204,190,180,0.55),transparent_70%)]"
      />

      <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 text-[2.5rem] leading-[1.08] text-ink-900 sm:text-[3.5rem] lg:text-[4rem]">
              {t.hero.titleLead} <span className="highlight">{t.hero.titleEmphasis}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600 sm:text-lg">
              {t.hero.body}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/app/login" className="w-full sm:w-auto">
                {t.hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}/features`}
                tone="secondary"
                className="w-full sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </ButtonLink>
            </div>
            <p className="mt-4 text-[13.5px] text-ink-500">{t.hero.note}</p>
          </Reveal>
        </div>

        {/* Capability chips */}
        <Reveal delay={240}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {t.hero.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-ink-600"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Hero mockup */}
        <Reveal delay={300} className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-4xl">
            <CalendarMock t={t} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
