import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CalendarMock } from "@/components/mockups/CalendarMock";
import { CalendarMonthMock } from "@/components/mockups/CalendarMonthMock";
import { PillarSection } from "@/components/sections/PillarSection";
import { CtaBand, Faq, StatsBand } from "@/components/sections/blocks";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata(
  props: PageProps<"/[lang]/features/calendar">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);

  return {
    title: t.calendarPage.meta.title,
    description: t.calendarPage.meta.description,
    openGraph: {
      title: t.calendarPage.meta.title,
      description: t.calendarPage.meta.description,
      url: `/${lang}/features/calendar`,
    },
    alternates: {
      canonical: `/${lang}/features/calendar`,
      languages: {
        vi: "/vi/features/calendar",
        en: "/en/features/calendar",
        "x-default": "/vi/features/calendar",
      },
    },
  };
}

export default async function CalendarFeaturePage(
  props: PageProps<"/[lang]/features/calendar">,
) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const p = t.calendarPage;

  return (
    <>
      {/* Page hero */}
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
              {p.back}
            </Link>
          </Reveal>

          <Reveal delay={60} className="mt-4 max-w-3xl">
            <Eyebrow>{p.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2.25rem] leading-[1.1] text-ink-900 sm:text-[3rem] lg:text-[3.5rem]">
              {p.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600">
              {p.hero.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The board itself, then editing it. No trailing links: this page is
          where "learn about the calendar" was already pointing. */}
      <PillarSection
        pillar={p.overview}
        icon="board"
        mockup={<CalendarMock t={t} />}
        tone="surface"
      />

      <PillarSection
        pillar={p.control}
        icon="edit"
        mockup={<CalendarMonthMock t={t} />}
        tone="canvas"
        flip
      />

      {/* The stay, in order. The three steps are a real sequence — a guest is
          booked, then staying, then checked out — so they are numbered. The
          assistant is not a fourth step: it runs alongside all three, and is
          set apart rather than given a number it would not earn. */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={p.journey.eyebrow}
              title={p.journey.title}
              body={p.journey.body}
              align="center"
            />
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-3">
            {p.journey.steps.map((step, i) => (
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
                {p.journey.always.label}
              </p>
              <div className="mt-3 sm:mt-0">
                <h3 className="text-[17px] font-semibold leading-snug text-ink-900">
                  {p.journey.always.title}
                </h3>
                <p className="mt-2.5 max-w-2xl text-[16px] leading-relaxed text-ink-600">
                  {p.journey.always.body}
                </p>
              </div>
            </article>
          </Reveal>
        </Container>
      </Section>

      <StatsBand t={t} items={p.stats} />

      <Faq title={p.faq.title} items={p.faq.items} />

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
