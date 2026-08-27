import Link from "next/link";
import type { ReactNode } from "react";

import { PillarSection } from "@/components/sections/PillarSection";
import { CtaBand, Faq, StatsBand } from "@/components/sections/blocks";
import type { PillarIcon } from "@/components/ui/PillarLabel";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * Shape every feature detail page shares. Typing the six pages against one
 * shape means a key missing from any of them is a compile error rather than a
 * blank section discovered in the browser.
 */
export type FeaturePageCopy = Dictionary["calendarPage"];

type Panel = { icon: PillarIcon; mockup: ReactNode };

/**
 * The six feature pages differ only in their copy and their two mockups, so
 * they share this body: hero with a way back, two panels, an ordered set of
 * steps with one thing that runs alongside them, figures, questions, CTA.
 */
export function FeaturePage({
  locale,
  t,
  copy,
  first,
  second,
}: {
  locale: Locale;
  t: Dictionary;
  copy: FeaturePageCopy;
  first: Panel;
  second: Panel;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-canvas">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(204,190,180,0.5),transparent_72%)]"
        />
        <Container className="relative py-14 sm:py-18 lg:py-24">
          <Reveal>
            <Link
              href={`/${locale}/features`}
              className="group inline-flex min-h-11 items-center gap-1.5 text-[14px] font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 10H4M9 5 4 10l5 5" />
              </svg>
              {copy.back}
            </Link>
          </Reveal>

          <Reveal delay={60} className="mt-4 max-w-3xl">
            <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.25rem] leading-[1.1] text-ink-900 sm:text-[3rem] lg:text-[3.5rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600">
              {copy.hero.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* No trailing links on these two: this page is already where the home
          page's "learn more" was pointing, so there is nowhere further to go. */}
      <PillarSection
        pillar={copy.overview}
        icon={first.icon}
        mockup={first.mockup}
        tone="surface"
      />

      <PillarSection
        pillar={copy.control}
        icon={second.icon}
        mockup={second.mockup}
        tone="canvas"
        flip
      />

      {/* The steps are numbered because they are a real sequence. The thing
          below them is not a further step — it runs alongside all of them, so
          it is set apart rather than given a number it would not earn. */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={copy.journey.eyebrow}
              title={copy.journey.title}
              body={copy.journey.body}
              align="center"
            />
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-3">
            {copy.journey.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 70} className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-canvas p-6">
                    <span
                      aria-hidden="true"
                      className="font-[family-name:var(--font-display)] text-2xl text-clay-400 tnum"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[17px] font-semibold leading-snug text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[16px] leading-relaxed text-ink-600">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={230}>
            <article className="mt-5 rounded-2xl border border-clay-200 bg-clay-50 p-6 sm:flex sm:items-start sm:gap-6">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.09em] text-clay-600 sm:w-32 sm:pt-1">
                {copy.journey.always.label}
              </p>
              <div className="mt-3 sm:mt-0">
                <h3 className="text-[17px] font-semibold leading-snug text-ink-900">
                  {copy.journey.always.title}
                </h3>
                <p className="mt-2.5 max-w-2xl text-[16px] leading-relaxed text-ink-600">
                  {copy.journey.always.body}
                </p>
              </div>
            </article>
          </Reveal>
        </Container>
      </Section>

      <StatsBand t={t} items={copy.stats} />

      <Faq title={copy.faq.title} items={copy.faq.items} />

      <CtaBand
        locale={locale}
        title={copy.cta.title}
        body={copy.cta.body}
        primary={t.cta.primary}
        secondary={t.cta.secondary}
      />
    </>
  );
}
