"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { ButtonLink, Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { signUpUrl } from "@/lib/links";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/* Icons for the picker tiles, keyed by the `id` on each entry of hero.jobs.
   Decorative throughout: every tile carries its label as live text. */
const jobIcons: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      <path d="M7.5 13.5h3M13.5 13.5h3M7.5 17h3" />
    </>
  ),
  channels: (
    <>
      <path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M17.5 2.8v3.8h-3.8M6.5 21.2v-3.8h3.8" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3.2 13.6 8 18.4 9.6 13.6 11.2 12 16l-1.6-4.8L5.6 9.6 10.4 8Z" />
      <path d="M18 16.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z" />
    </>
  ),
  housekeeping: (
    <>
      <path d="M8 4.5h8a2 2 0 0 1 2 2V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V6.5a2 2 0 0 1 2-2Z" />
      <path d="M9.5 4.5V3.8A1.3 1.3 0 0 1 10.8 2.5h2.4a1.3 1.3 0 0 1 1.3 1.3v.7Z" />
      <path d="M9.5 13.2l1.8 1.8 3.4-3.6" />
    </>
  ),
  direct: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.4 9.5h17.2M3.4 14.5h17.2" />
      <path d="M12 3a15 15 0 0 1 0 18A15 15 0 0 1 12 3Z" />
    </>
  ),
  team: (
    <>
      <circle cx="9.5" cy="8.5" r="3.2" />
      <path d="M3.5 20a6 6 0 0 1 12 0" />
      <path d="M16.2 6.1a3.2 3.2 0 0 1 0 6.1M17.4 15.2a6 6 0 0 1 3.1 4.8" />
    </>
  ),
};

function JobIcon({ id, className }: { id: string; className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {jobIcons[id]}
    </svg>
  );
}

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  const jobs = t.hero.jobs;
  const [active, setActive] = useState(0);

  /* The swap animation is held back until the first choice. On load the
     headline is already inside a Reveal, and playing both at once reads as a
     stutter. */
  const [touched, setTouched] = useState(false);
  const tiles = useRef<(HTMLButtonElement | null)[]>([]);

  const job = jobs[active];
  const swap = touched ? "hero-swap" : "";

  function choose(index: number) {
    setActive(index);
    setTouched(true);
  }

  /* Roving tabindex: the group is a single tab stop and the arrow keys move
     inside it, which is what a radio group is expected to do.
     ux: keyboard-navigation */
  function onTileKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const steps: Record<string, number> = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    };
    const step = steps[event.key];
    if (!step) return;

    event.preventDefault();
    const next = (index + step + jobs.length) % jobs.length;
    choose(next);
    tiles.current[next]?.focus();
  }

  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* Two decorative washes: sand pooled behind the headline, a paler one
          lifting the card off the canvas. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-[-10%] h-[560px] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(204,190,180,0.55),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-15%] h-[620px] w-[65%] rounded-full bg-[radial-gradient(closest-side,rgba(244,226,216,0.6),transparent)]"
      />

      <Container className="relative pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* --------------------------------------------------------------- */}
          {/* Left: the claim, rewritten by whatever the picker has selected.  */}
          {/* --------------------------------------------------------------- */}
          <div className="max-w-xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 py-1.5 pl-2.5 pr-4 text-[11px] font-semibold uppercase tracking-[0.09em] text-ink-600">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-clay-100 text-clay-600">
                  <JobIcon id="ai" className="h-3 w-3" />
                </span>
                {t.hero.eyebrow}
              </p>
            </Reveal>

            {/* Every headline is written to land on exactly two lines, and the
                min-height reserves them, so swapping one for another moves
                nothing below it. Two things keep that true and both are easy to
                break: the emphasis is a block, and the type steps down below
                360px where the longest lead would otherwise wrap. New copy here
                wants re-measuring at 320px. */}
            <Reveal delay={60}>
              <h1 className="mt-6 min-h-[2.2em] text-[1.85rem] leading-[1.1] text-ink-900 min-[360px]:text-[2rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.5rem]">
                <span key={job.id} className={swap}>
                  {job.titleLead}{" "}
                  <span className="display-em block text-clay-500">{job.titleEmphasis}</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-[17px] leading-relaxed text-ink-600">{t.hero.body}</p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={signUpUrl(locale)} className="w-full sm:w-auto">
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

          {/* --------------------------------------------------------------- */}
          {/* Right: the picker. Nothing here submits — it only decides what   */}
          {/* the page claims, which is the product's own promise in small.    */}
          {/* --------------------------------------------------------------- */}
          <Reveal delay={240} className="relative">
            <div className="rounded-[28px] bg-surface p-5 shadow-xl ring-1 ring-line sm:p-7">
              <h2
                id="hero-picker-title"
                className="text-[19px] leading-snug text-ink-900 sm:text-[21px]"
              >
                {t.hero.pickerTitle}
              </h2>

              <div
                role="radiogroup"
                aria-labelledby="hero-picker-title"
                className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3"
              >
                {jobs.map((entry, index) => {
                  const selected = index === active;
                  return (
                    <button
                      key={entry.id}
                      ref={(node) => {
                        tiles.current[index] = node;
                      }}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => choose(index)}
                      onKeyDown={(event) => onTileKeyDown(event, index)}
                      className={`group flex min-h-[104px] cursor-pointer flex-col items-start gap-2.5 rounded-2xl p-3.5 text-left transition-all duration-200 ease-[var(--ease-out-soft)] ${
                        selected
                          ? "bg-clay-50 ring-2 ring-inset ring-clay-400"
                          : "bg-canvas ring-1 ring-inset ring-transparent hover:bg-sand-200/60 hover:ring-line"
                      }`}
                    >
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200 ${
                          selected
                            ? "bg-clay-200 text-clay-700"
                            : "bg-sand-200 text-ink-500 group-hover:text-ink-700"
                        }`}
                      >
                        <JobIcon id={entry.id} className="h-[18px] w-[18px]" />
                      </span>
                      <span
                        className={`text-[13.5px] font-medium leading-snug ${
                          selected ? "text-ink-900" : "text-ink-600"
                        }`}
                      >
                        {entry.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* What the choice means. Announced, because the headline it also
                  rewrites sits in the opposite corner of the screen.
                  Kept to two lines at every width for the same reason as the
                  headline: these six swap in place, so one that wraps further
                  than the rest shunts the button under it. Roughly 62
                  characters is the ceiling at 320px. */}
              <p
                aria-live="polite"
                className="mt-5 min-h-[4.42em] border-t border-line pt-4 text-[14.5px] leading-relaxed text-ink-600"
              >
                <span key={job.id} className={swap}>
                  {job.line}
                </span>
              </p>

              <ButtonLink href={signUpUrl(locale)} className="mt-2 w-full">
                {t.hero.ctaPrimary}
              </ButtonLink>
            </div>

            {/* Status chip — the product answering back, in the product's voice.
                Hidden below sm, where it would sit on top of the tiles. */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-3 hidden items-center gap-2.5 rounded-full bg-surface py-2.5 pl-2.5 pr-5 shadow-lg ring-1 ring-line sm:flex lg:-left-8"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-positive-soft text-positive">
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 10.5l3.5 3.5 7.5-8" />
                </svg>
              </span>
              <span key={job.id} className={`block ${swap}`}>
                <span className="block text-[13.5px] font-semibold leading-tight text-ink-900">
                  {job.chipTitle}
                </span>
                <span className="mt-0.5 block text-[12px] leading-tight text-ink-500">
                  {job.chipNote}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
