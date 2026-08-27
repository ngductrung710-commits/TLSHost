import {
  ArrowLink,
  Badge,
  CheckIcon,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function ScaleSection({ locale, t }: { locale: Locale; t: Dictionary }) {
  const hrefs = [
    `/${locale}/features`,
    `/${locale}/features`,
    `/${locale}/features`,
  ];

  return (
    <Section tone="alt">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.scale.eyebrow}
            title={t.scale.title}
            body={t.scale.body}
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.scale.tiers.map((tier, i) => (
            <li key={tier.label}>
              <Reveal delay={i * 90} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <Badge tone={i === 1 ? "clay" : "sand"}>{tier.label}</Badge>

                  <h3 className="mt-5 text-xl leading-snug text-ink-900">{tier.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-600">{tier.body}</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {tier.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 text-clay-500" />
                        <span className="text-[15.5px] text-ink-700">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-line pt-4">
                    <ArrowLink href={hrefs[i]}>{tier.link}</ArrowLink>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
