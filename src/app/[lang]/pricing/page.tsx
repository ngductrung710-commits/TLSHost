import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBand, Faq } from "@/components/sections/blocks";
import {
  ButtonLink,
  CheckIcon,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { signUpUrl } from "@/lib/links";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata(
  props: PageProps<"/[lang]/pricing">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);

  return {
    title: t.meta.pricing.title,
    description: t.meta.pricing.description,
    openGraph: {
      title: t.meta.pricing.title,
      description: t.meta.pricing.description,
      url: `/${lang}/pricing`,
    },
    alternates: {
      canonical: `/${lang}/pricing`,
      languages: {
        vi: "/vi/pricing",
        en: "/en/pricing",
        "x-default": "/vi/pricing",
      },
    },
  };
}

export default async function PricingPage(props: PageProps<"/[lang]/pricing">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const p = t.pricingPage;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-canvas">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(204,190,180,0.5),transparent_72%)]"
        />
        <Container className="relative py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[2.25rem] leading-[1.1] text-ink-900 sm:text-[3rem]">
              {p.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-600">
              {p.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Plans */}
      <section className="bg-canvas pb-20 sm:pb-24">
        <Container>
          <ul className="grid items-start gap-5 lg:grid-cols-3">
            {p.plans.map((plan, i) => {
              const featured = plan.popular;
              return (
                <li key={plan.name}>
                  <Reveal delay={i * 90} className="h-full">
                    <article
                      className={`relative flex h-full flex-col rounded-2xl p-7 transition-shadow duration-300 ${
                        featured
                          ? "border-2 border-ink-900 bg-surface shadow-lg lg:-mt-3 lg:pb-9 lg:pt-9"
                          : "border border-line bg-surface shadow-sm hover:shadow-md"
                      }`}
                    >
                      {featured ? (
                        <span className="absolute -top-3 left-7 rounded-full bg-ink-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-sand-100">
                          {p.popular}
                        </span>
                      ) : null}

                      <h2 className="text-xl text-ink-900">{plan.name}</h2>
                      <p className="mt-2 min-h-10 text-[15px] leading-relaxed text-ink-600">
                        {plan.tagline}
                      </p>

                      <p className="mt-6 flex items-baseline gap-1.5">
                        <span className="font-[family-name:var(--font-display)] text-4xl leading-none text-ink-900 tnum">
                          {plan.price}
                        </span>
                        <span className="text-[13px] text-ink-500">
                          {plan.cadence === "forever" ? p.forever : p.perMonth}
                        </span>
                      </p>

                      <ButtonLink
                        href={signUpUrl(locale)}
                        tone={featured ? "primary" : "secondary"}
                        className="mt-6 w-full"
                      >
                        {plan.cta}
                      </ButtonLink>

                      <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <CheckIcon className="mt-0.5 h-4.5 w-4.5 text-clay-500" />
                            <span className="text-[15.5px] leading-relaxed text-ink-700">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={120}>
            <p className="mt-8 text-center text-[13px] text-ink-500">{p.note}</p>
          </Reveal>
        </Container>
      </section>

      {/* Included on every plan */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={p.included.eyebrow}
              title={p.included.title}
              align="center"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {p.included.items.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 80} className="h-full">
                  <article className="h-full rounded-2xl border border-line bg-canvas p-6">
                    <h3 className="text-[16px] font-semibold text-ink-900">{item.title}</h3>
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

      <Faq title={p.faq.title} items={p.faq.items} />

      <CtaBand
        locale={locale}
        title={p.cta.title}
        body={p.cta.body}
        primary={p.cta.primary}
      />
    </>
  );
}
