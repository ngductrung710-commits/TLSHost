"use client";

import { useEffect, useState } from "react";

import type { Dictionary } from "@/i18n/dictionaries/vi";

const HOLD_MS = 2800;

/**
 * The headline shown before the visitor picks a job: one word cycling inside a
 * fixed frame.
 *
 * Every word sits in the same single-cell grid, so the frame is as wide as the
 * longest of them and "của bạn, tự chạy" never moves. An earlier version
 * measured the active word and animated the frame's width to match, which
 * closed the gap after the short words but set the rest of the line sliding
 * every few seconds — the fixed tail reads calmer and is what was asked for.
 * It also needs no measuring, so there is no layout pass to get wrong.
 *
 * Rotation stops under prefers-reduced-motion: the first word stays and the
 * sentence still reads.
 */
export function RotatingHeadline({ rotator }: { rotator: Dictionary["hero"]["rotator"] }) {
  const words = rotator.words;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), HOLD_MS);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <>
      <span className="rotator">
        {words.map((word, i) => (
          <span
            key={word}
            aria-hidden={i === index ? undefined : "true"}
            data-active={i === index ? "true" : "false"}
            className="rotator__word text-clay-500"
          >
            {word}
          </span>
        ))}
      </span>
      {/* "của bạn," steps back to the body weight so it reads as the joint of
          the sentence, not part of the claim. The h1 sets 700 for everything
          in it, so this has to opt out explicitly. */}
      {rotator.tail ? <span className="font-normal"> {rotator.tail}</span> : null}{" "}
      {/* Inline, not a block. The picker's headlines force the emphasis onto
          its own line because each is written to land on exactly two; this one
          has a frame as wide as its longest word in front of it, so forcing the
          break made three lines and pushed the page down past the reserved
          height. Left to flow, it wraps into the same two.

          font-semibold is a drawn weight here, not a synthesised one: 600 was
          added to the Newsreader load in layout.tsx for exactly this. Going
          heavier than 600 means loading another weight there first — a browser
          faking the bold smears the italic badly at this size. */}
      <span className="display-em font-semibold text-ink-900">{rotator.emphasis}</span>
    </>
  );
}
