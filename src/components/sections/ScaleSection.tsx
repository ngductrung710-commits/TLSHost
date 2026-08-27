import { ActivityMock, AiApprovalMock, SavingsMock } from "@/components/mockups/SecondaryMocks";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * The three tiers, as a stack of cards that pile up on scroll.
 *
 * They used to be three equal columns, which is the wrong shape for this
 * content: the tiers are a sequence — solo, then a team, then a portfolio —
 * and three side-by-side cards read as alternatives to pick between, like a
 * pricing table. Stacked full-width rows read as a progression, and they leave
 * room for a mockup, so each tier can show the thing it is claiming rather than
 * only asserting it.
 *
 * Each card is `position: sticky` at a slightly lower offset than the one
 * before it (see `.stack` in globals.css), so as the reader scrolls the cards
 * gather into a deck with a sliver of each earlier one still showing. The
 * heading is the only thing here wrapped in Reveal — a transform on an ancestor
 * would trap the sticky children in it.
 */
export function ScaleSection({ locale, t }: { locale: Locale; t: Dictionary }) {
  /* Each tier links to the feature page its own mockup comes from, so the
     illustration a reader just looked at is the first thing on the page they
     land on. None of these three mockups appears anywhere else on the home
     page. */
  const tiers = [
    {
      href: `/${locale}/features/direct-booking`,
      mockup: <SavingsMock t={t} />,
      dark: false,
      card: "border-line bg-surface",
    },
    {
      href: `/${locale}/features/ai-agent`,
      mockup: <AiApprovalMock t={t} />,
      dark: false,
      card: "border-clay-200 bg-clay-50",
    },
    {
      href: `/${locale}/features/team`,
      mockup: <ActivityMock t={t} />,
      dark: true,
      card: "border-ink-800 bg-ink-900",
    },
  ] as const;

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

        <ul className="stack mt-14 grid gap-6">
          {t.scale.tiers.map((tier, i) => {
            const { href, mockup, dark, card } = tiers[i];

            return (
              <li
                key={tier.label}
                className={`overflow-hidden rounded-3xl border p-7 shadow-lg sm:p-10 lg:p-12 ${card}`}
              >
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <div className="min-w-0">
                    {/* Plain label, not the bordered Eyebrow pill: that pill
                        marks a page section, and these sit one level down
                        inside one. */}
                    <p
                      className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${
                        dark ? "text-sand-400" : "text-ink-500"
                      }`}
                    >
                      {tier.label}
                    </p>

                    <h3
                      className={`mt-3 text-[1.75rem] leading-[1.15] sm:text-[2rem] lg:text-[2.125rem] ${
                        dark ? "text-sand-100" : "text-ink-900"
                      }`}
                    >
                      {tier.title}
                    </h3>

                    <p
                      className={`mt-4 text-[17px] leading-relaxed ${
                        dark ? "text-sand-400" : "text-ink-600"
                      }`}
                    >
                      {tier.body}
                    </p>

                    {/* Dots rather than the check marks FeatureList uses. A
                        check reads as "included", which is a pricing-table
                        claim; these three are attributes of the tier, not
                        entitlements. */}
                    <ul className="mt-6 space-y-3">
                      {tier.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span
                            className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${
                              dark ? "bg-sand-400" : "bg-clay-500"
                            }`}
                          />
                          <span
                            className={`text-[16px] leading-relaxed ${
                              dark ? "text-sand-200" : "text-ink-700"
                            }`}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ButtonLink
                      href={href}
                      tone={dark ? "inverse" : "primary"}
                      className="group mt-8"
                    >
                      {tier.link}
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 10h12M11 5l5 5-5 5" />
                      </svg>
                    </ButtonLink>
                  </div>

                  {/* Below lg the card is one column and the mockup would be a
                      wide illustration above a wall of text — the copy already
                      makes every claim it depicts, so it is dropped rather
                      than shrunk. */}
                  <div className="hidden min-w-0 lg:block">{mockup}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
