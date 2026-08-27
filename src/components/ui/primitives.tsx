import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Layout                                                                      */
/* -------------------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "canvas",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "canvas" | "surface" | "alt" | "ink";
}) {
  const tones = {
    canvas: "bg-canvas text-ink-900",
    surface: "bg-surface text-ink-900",
    alt: "bg-canvas-alt text-ink-900",
    ink: "bg-ink-900 text-sand-100",
  } as const;

  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-24 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Type                                                                        */
/* -------------------------------------------------------------------------- */

/** Small mono label above a heading. Decorative sibling text, never the heading itself. */
export function Eyebrow({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "inverse";
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.09em] ${
        tone === "inverse" ? "text-sand-400" : "text-ink-500"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "default",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  tone?: "default" | "inverse";
  align?: "left" | "center";
  className?: string;
}) {
  const inverse = tone === "inverse";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          inverse ? "text-sand-100" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-[17px] leading-relaxed ${
            inverse ? "text-sand-400" : "text-ink-600"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Actions                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonTone = "primary" | "secondary" | "ghost" | "inverse";

const buttonTones: Record<ButtonTone, string> = {
  primary:
    "bg-ink-900 text-sand-100 hover:bg-ink-800 active:bg-ink-950 shadow-sm hover:shadow-md",
  secondary:
    "bg-surface text-ink-900 ring-1 ring-inset ring-line hover:bg-sand-50 hover:ring-ink-300",
  ghost: "text-ink-900 hover:bg-ink-100",
  inverse: "bg-sand-100 text-ink-900 hover:bg-surface shadow-sm hover:shadow-md",
};

/**
 * Min height 44px throughout — ux: touch-target-size / touch-friendly-input.
 */
const buttonBase =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-200 ease-[var(--ease-out-soft)] active:scale-[0.98]";

export function ButtonLink({
  href,
  children,
  tone = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonTones[tone]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** Text link with an arrow that nudges on hover. */
export function ArrowLink({
  href,
  children,
  tone = "default",
}: {
  href: string;
  children: ReactNode;
  tone?: "default" | "inverse";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold transition-colors ${
        tone === "inverse"
          ? "text-sand-100 hover:text-surface"
          : "text-ink-900 hover:text-clay-500"
      }`}
    >
      {children}
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
  );
}

/* -------------------------------------------------------------------------- */
/* Content                                                                     */
/* -------------------------------------------------------------------------- */

export function Badge({
  children,
  tone = "sand",
}: {
  children: ReactNode;
  tone?: "sand" | "clay" | "positive" | "inverse";
}) {
  const tones = {
    sand: "bg-sand-200 text-ink-700",
    clay: "bg-clay-100 text-clay-700",
    positive: "bg-positive-soft text-positive",
    inverse: "bg-ink-800 text-sand-300",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Check mark used in feature lists. Decorative — the text beside it carries the meaning. */
export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-5 w-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function FeatureList({
  items,
  tone = "default",
}: {
  items: readonly string[];
  tone?: "default" | "inverse";
}) {
  return (
    <ul className="mt-7 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon
            className={`mt-0.5 ${tone === "inverse" ? "text-sand-400" : "text-clay-500"}`}
          />
          <span
            className={`text-[16px] leading-relaxed ${
              tone === "inverse" ? "text-sand-300" : "text-ink-600"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
