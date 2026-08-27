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
        className="marquee__logo"
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
