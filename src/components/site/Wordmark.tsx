/**
 * TLSHost wordmark: an SVG mark plus live text.
 * The text stays HTML so it renders in the display face and stays selectable
 * and readable to screen readers without a separate label.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-full w-auto shrink-0"
        fill="none"
      >
        <rect width="32" height="32" rx="9" fill="currentColor" />
        {/* Roofline over an open door — a stay, not a building */}
        <path
          d="M8 15.2 16 9l8 6.2"
          stroke="var(--color-sand-100)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6 16.8v6.4h10.8v-6.4"
          stroke="var(--color-sand-100)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.4 23.2v-3.6h3.2v3.6"
          stroke="var(--color-clay-300)"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-[family-name:var(--font-display)] text-[19px] leading-none tracking-tight">
        TLSHost
      </span>
    </span>
  );
}
