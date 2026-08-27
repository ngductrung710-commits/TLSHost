import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container, Eyebrow } from "@/components/ui/primitives";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { WaitlistForm } from "./WaitlistForm";

export async function generateMetadata(
  props: PageProps<"/[lang]/signup">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const t = await getDictionary(lang);

  return {
    title: t.waitlist.title,
    description: t.waitlist.body,
    alternates: {
      canonical: `/${lang}/signup`,
      languages: {
        vi: "/vi/signup",
        en: "/en/signup",
        "x-default": "/vi/signup",
      },
    },
    // A signup form is not a page anyone should reach from search.
    robots: { index: false, follow: true },
  };
}

export default async function SignupPage(props: PageProps<"/[lang]/signup">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const t = await getDictionary(locale);
  const w = t.waitlist;

  return (
    <section className="relative overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(204,190,180,0.5),transparent_72%)]"
      />

      <Container className="relative py-14 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div className="min-w-0">
            <Eyebrow>{w.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[2rem] leading-[1.12] text-ink-900 sm:text-[2.5rem]">
              {w.title}
            </h1>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-600">{w.body}</p>

            <ul className="mt-8 space-y-3 border-t border-line pt-6">
              {t.pricingPage.plans[0].features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-400"
                  />
                  <span className="text-[15.5px] leading-relaxed text-ink-600">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <WaitlistForm locale={locale} t={t} />
          </div>
        </div>
      </Container>
    </section>
  );
}
