import type { ReactNode } from "react";

/**
 * Shared chrome for the product mockups.
 *
 * The whole frame is aria-hidden: these are illustrations of the product, not
 * the product. Every claim they depict is stated in the prose beside them, so
 * exposing simulated UI to assistive tech would only add noise and imply
 * controls that do not exist.
 */
export function MockFrame({
  title,
  subtitle,
  action,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-2xl border border-line bg-surface shadow-xl ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-sand-50 px-4 py-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink-900">
          <svg viewBox="0 0 32 32" className="h-4 w-4" fill="none">
            <path
              d="M8 15.2 16 9l8 6.2"
              stroke="var(--color-sand-100)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6 16.8v6.4h10.8v-6.4"
              stroke="var(--color-sand-100)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-ink-900">{title}</p>
          {subtitle ? (
            <p className="truncate text-[11px] text-ink-500">{subtitle}</p>
          ) : null}
        </div>

        {action}
      </div>

      {children}
    </div>
  );
}

/** Small status dot used across the mockups. */
export function Dot({ tone = "positive" }: { tone?: "positive" | "warning" | "muted" }) {
  const tones = {
    positive: "bg-positive",
    warning: "bg-warning",
    muted: "bg-ink-300",
  } as const;
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${tones[tone]}`} />;
}
