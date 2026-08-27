"use client";

import { useState } from "react";

import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * Continuously scrolling strip of the sales channels TLSHost syncs with.
 *
 * Moving content that starts on its own and runs longer than five seconds needs
 * a way to stop it (WCAG 2.2.2), so this pauses on hover, pauses whenever
 * anything inside it takes keyboard focus, and carries an explicit toggle. Under
 * prefers-reduced-motion the CSS drops the animation and wraps the row instead,
 * which is why the duplicate track is hidden from assistive tech either way.
 */
export function ChannelMarquee({
  t,
  logos = {},
}: {
  t: Dictionary;
  /** Channel name → public image path, for the files that exist. */
  logos?: Record<string, string>;
}) {
  const [paused, setPaused] = useState(false);
  const names = t.channels.names;

  const item = (name: string) =>
    logos[name] ? (
      // First-party SVGs served straight from /public. The image optimiser has
      // nothing to add to a vector, and routing them through next/image would
      // mean turning on dangerouslyAllowSVG for no gain.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logos[name]}
        alt={name}
        className="marquee__logo"
        loading="lazy"
        decoding="async"
      />
    ) : (
      name
    );

  return (
    <div className="marquee-wrap relative">
      <div
        className="marquee"
        data-paused={paused ? "true" : "false"}
        role="group"
        aria-label={t.channels.eyebrow}
      >
        <ul className="marquee__track">
          {names.map((name) => (
            <li key={name} className="marquee__item">
              {item(name)}
            </li>
          ))}
        </ul>

        {/* Second copy exists only to make the loop seamless. */}
        <ul className="marquee__track" aria-hidden="true">
          {names.map((name) => (
            <li key={name} className="marquee__item">
              {item(name)}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-pressed={paused}
          className="marquee__toggle inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-[13px] font-medium text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="currentColor"
          >
            {paused ? (
              <path d="M5 3.5v9l8-4.5z" />
            ) : (
              <>
                <rect x="4.5" y="3.5" width="2.5" height="9" rx="1" />
                <rect x="9" y="3.5" width="2.5" height="9" rx="1" />
              </>
            )}
          </svg>
          {paused ? t.channels.play : t.channels.pause}
        </button>
      </div>
    </div>
  );
}
