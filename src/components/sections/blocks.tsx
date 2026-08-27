import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { signUpUrl } from "@/lib/links";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/* -------------------------------------------------------------------------- */
/* Channel strip                                                               */
/* -------------------------------------------------------------------------- */

export function ChannelStrip({ t }: { t: Dictionary }) {
  return (
    <Section tone="surface" className="!py-14 sm:!py-16">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>{t.channels.eyebrow}</Eyebrow>
        </Reveal>

        {/* A static row, not a carousel — nothing to pause, nothing to announce */}
        <Reveal delay={80}>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {t.channels.names.map((name) => (
              <li
                key={name}
                className="font-[family-name:var(--font-display)] text-lg text-ink-400 transition-colors duration-300 hover:text-ink-700 sm:text-xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Stats band                                                                  */
/* -------------------------------------------------------------------------- */

export function StatsBand({
  t,
  items = t.stats.items,
}: {
  t: Dictionary;
  /** Defaults to the sitewide figures. */
  items?: readonly { value: string; caption: string; label: string }[];
}) {
  return (
    <Section tone="ink">
      <Container>
        <dl className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {items.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 90} className="text-center sm:text-left">
              <dt>
                <Eyebrow tone="inverse">{stat.caption}</Eyebrow>
              </dt>
              <dd>
                <p className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none text-sand-100 tnum sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-sand-400">
                  {stat.label}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Testimonials                                                                */
/* -------------------------------------------------------------------------- */

export function Testimonials({ t }: { t: Dictionary }) {
  return (
    <Section tone="canvas">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            align="center"
          />
        </Reveal>

        {/* A plain grid rather than a rotating carousel: no auto-motion to pause,
            no slide position to announce — ux: auto-rotation-controls avoided by design */}
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={i * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm">
                  <span
                    aria-hidden="true"
                    className="font-[family-name:var(--font-display)] text-4xl leading-none text-clay-300"
                  >
                    &ldquo;
                  </span>

                  <blockquote className="mt-2 flex-1 text-[16px] leading-relaxed text-ink-700">
                    {item.quote}
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand-200 text-[11px] font-bold text-ink-700">
                      {item.name.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[13.5px] font-semibold text-ink-900">
                        {item.name}
                      </span>
                      <span className="block truncate text-[12px] text-ink-500">
                        {item.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Built on <details>/<summary>: keyboard operable, screen-reader correct and
 * expandable with JavaScript disabled — no ARIA of our own required.
 */
export function Faq({
  title,
  items,
}: {
  title: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl leading-tight text-ink-900 sm:text-4xl">{title}</h2>
          </Reveal>

          <div className="divide-y divide-line border-y border-line">
            {items.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[16px] font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-ink-600 transition-transform duration-200 ease-[var(--ease-out-soft)] group-open:rotate-45"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                      >
                        <path d="M8 3.5v9M3.5 8h9" />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 text-[16px] leading-relaxed text-ink-600">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Closing CTA                                                                 */
/* -------------------------------------------------------------------------- */

export function CtaBand({
  locale,
  title,
  body,
  primary,
  secondary,
}: {
  locale: Locale;
  title: string;
  body: string;
  primary: string;
  secondary?: string;
}) {
  return (
    <Section tone="ink">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl leading-[1.15] text-sand-100 sm:text-[2.75rem]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-relaxed text-sand-400">
            {body}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={signUpUrl(locale)} tone="inverse" className="w-full sm:w-auto">
              {primary}
            </ButtonLink>
            {secondary ? (
              <ButtonLink
                href={`/${locale}/pricing`}
                tone="ghost"
                className="w-full !text-sand-300 hover:!bg-ink-800 hover:!text-sand-100 sm:w-auto"
              >
                {secondary}
              </ButtonLink>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
