"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { PillarGlyph, type PillarIcon } from "@/components/ui/PillarLabel";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { signUpUrl } from "@/lib/links";

/** Route slug → glyph. Kept here rather than in the dictionary, which holds words. */
const GLYPHS: Record<string, PillarIcon> = {
  calendar: "calendar",
  "ai-agent": "ai",
  "channel-manager": "channels",
  "direct-booking": "direct",
  housekeeping: "housekeeping",
  team: "team",
};

/**
 * The features dropdown in the desktop header.
 *
 * Opens on click and on hover, because both are ways people reach for a menu.
 * The trigger is a real button carrying aria-expanded, so it also opens from
 * the keyboard; Escape closes it and returns focus to the trigger, and a click
 * outside or a route change closes it too.
 */
export function FeaturesMenu({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const panelId = useId();

  // Escape closes and hands focus back, so a keyboard user is never stranded
  // inside a panel they cannot see the edge of.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // A small delay on leaving forgives the diagonal trip from trigger to panel.
  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-4 text-[15px] font-medium transition-colors ${
          open ? "bg-ink-100 text-ink-900" : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
        }`}
      >
        {t.nav.features}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className={`h-3.5 w-3.5 transition-transform duration-200 ease-[var(--ease-out-soft)] ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6.5 8 10.5l4-4" />
        </svg>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-50 w-[min(38rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl">
          <div className="p-3">
            <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-500">
              {t.nav.menuLabel}
            </p>

            <ul className="grid gap-0.5 sm:grid-cols-2">
              {t.nav.menu.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    href={`/${locale}/features/${entry.slug}`}
                    onClick={() => setOpen(false)}
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-sand-50"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sand-100 text-ink-700 transition-colors group-hover:bg-ink-900 group-hover:text-clay-300">
                      <PillarGlyph icon={GLYPHS[entry.slug] ?? "board"} className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14.5px] font-semibold leading-snug text-ink-900">
                        {entry.title}
                      </span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-500">
                        {entry.blurb}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line bg-sand-50 px-5 py-3.5">
            <Link
              href={`/${locale}/features`}
              onClick={() => setOpen(false)}
              className="group inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-ink-900"
            >
              {t.nav.allFeatures}
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
            </Link>

            <Link
              href={signUpUrl(locale)}
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 items-center rounded-full bg-ink-900 px-5 text-[14px] font-semibold text-sand-100 transition-colors hover:bg-ink-800"
            >
              {t.nav.start}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
