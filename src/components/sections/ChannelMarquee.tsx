import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * Continuously scrolling strip of the sales channels TLSHost syncs with.
 *
 * Runs without stopping — no pause control, and it does not stop on hover, by
 * request. The only thing that halts it is prefers-reduced-motion, which drops
 * the animation and wraps the row instead; that is an operating-system setting
 * the visitor has already chosen, not a control on the page.
 *
 * No state and no handlers, so this stays a server component and ships no
 * JavaScript of its own.
 */
/**
 * Channels whose artwork is not a single-line wordmark.
 *
 * Sized by height, a wordmark six times wider than it is tall ends up with six
 * times the ink of a square mark beside it — Booking.com came out 138px wide
 * next to an Airbnb bélo at 20px, and the strip read as one big logo and a row
 * of specks. Marks therefore get more height, which is how logo walls have
 * always squared this: match the optical weight, not the measurement.
 *
 * Only Agoda qualifies now: its artwork is a stacked lockup, the wordmark
 * sitting over five coloured dots, 1.98:1. At a wordmark's height the word
 * itself gets about twelve pixels.
 *
 * Two channels have left this set, both because the artwork changed rather
 * than the rule:
 *
 *   Airbnb   — swapped for the horizontal lockup, 3.2:1.
 *   Trip.com — looked square at 1:1, but that was 600x600 of file around a
 *              540x130 wordmark. Cropped, it is 3.8:1. The lesson is that the
 *              file's aspect ratio is not the artwork's, and this set is about
 *              the artwork.
 *
 * A list rather than something derived from the file, because whether a piece
 * of artwork reads as a mark or a wordmark is a judgement about the artwork,
 * not a number in it. One line when a new logo arrives.
 */
const COMPACT_MARKS = new Set(["Agoda"]);

export function ChannelMarquee({
  t,
  logos = {},
}: {
  t: Dictionary;
  /** Channel name → public image path, for the files that exist. */
  logos?: Record<string, string>;
}) {
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
        className={`marquee__logo${COMPACT_MARKS.has(name) ? " marquee__logo--mark" : ""}`}
        loading="lazy"
        decoding="async"
      />
    ) : (
      name
    );

  return (
    <div className="marquee" role="group" aria-label={t.channels.eyebrow}>
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
  );
}
