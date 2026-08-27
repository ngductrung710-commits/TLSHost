import type { ReactNode } from "react";

/**
 * The label above a feature pillar: a dark chip carrying an icon and the
 * section name.
 *
 * Icons are drawn here rather than pulled from a set so the six read as one
 * family — same 24px box, same 1.7 stroke, same round caps and joins. They are
 * decorative: every one sits beside its own visible label, so the accessibility
 * tree gets the words once and not twice.
 */

export type PillarIcon =
  | "calendar"
  | "ai"
  | "channels"
  | "housekeeping"
  | "direct"
  | "team"
  | "board"
  | "edit";

const icons: Record<PillarIcon, ReactNode> = {
  /* A month grid: the board the whole product is built around. */
  calendar: (
    <>
      <rect x="3.2" y="5" width="17.6" height="16" rx="3" />
      <path d="M8 2.8v4M16 2.8v4M3.2 10h17.6" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    </>
  ),

  /* Two sparkles, the larger one off-centre: a draft appearing, not magic dust. */
  ai: (
    <>
      <path d="M10 3.2l1.7 4.6 4.6 1.7-4.6 1.7L10 15.8l-1.7-4.6L3.7 9.5l4.6-1.7z" />
      <path d="M17.6 14.2l.85 2.3 2.3.85-2.3.85-.85 2.3-.85-2.3-2.3-.85 2.3-.85z" />
    </>
  ),

  /* Two arrows closing a loop — availability flowing both ways, hourly. */
  channels: (
    <>
      <path d="M3.6 12a8.4 8.4 0 0 1 14.2-6.1l2.6 2.4" />
      <path d="M20.4 12a8.4 8.4 0 0 1-14.2 6.1l-2.6-2.4" />
      <path d="M20.4 3.4v5h-5M3.6 20.6v-5h5" />
    </>
  ),

  /* A checked-off task on a clipboard: one tap, room marked clean. */
  housekeeping: (
    <>
      <path d="M9 4.2H6.6a2.4 2.4 0 0 0-2.4 2.4v12.2a2.4 2.4 0 0 0 2.4 2.4h10.8a2.4 2.4 0 0 0 2.4-2.4V6.6a2.4 2.4 0 0 0-2.4-2.4H15" />
      <rect x="9" y="2.4" width="6" height="3.6" rx="1.4" />
      <path d="M9.2 13.4l2 2 3.8-4.2" />
    </>
  ),

  /* A globe: the guest-facing page out on its own public link. */
  direct: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2" />
      <path d="M12 3.4a13 13 0 0 1 0 17.2a13 13 0 0 1 0-17.2z" />
    </>
  ),

  /* Drawn for this section rather than borrowed: a person and a key, because
     what this feature actually does is decide who holds which one. */
  team: (
    <>
      <circle cx="8.2" cy="7.6" r="3.4" />
      <path d="M2.6 20.2v-1.1a5.6 5.6 0 0 1 11.2 0v1.1" />
      <circle cx="17.6" cy="10.4" r="2.7" />
      <path d="M19.5 12.3l2.4 2.4M20.6 13.4l-1.1 1.1" />
    </>
  ),

  /* Stays as bars of different lengths on one board — the calendar seen
     sideways, so it does not repeat the month-grid glyph on the same page. */
  board: (
    <>
      <rect x="3" y="4.6" width="18" height="14.8" rx="2.6" />
      <path d="M6.6 9.2h7.2M6.6 12.6h10.2M6.6 16h4.8" />
    </>
  ),

  /* A pencil resting on the board: changes made in place, not on another screen. */
  edit: (
    <>
      <path d="M15.4 4.7a2.2 2.2 0 0 1 3.1 3.1L9.4 16.9l-4 1.1 1.1-4z" />
      <path d="M4 20.8h9.4" />
    </>
  ),
};

export function PillarLabel({ icon, children }: { icon: PillarIcon; children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-ink-900 py-1.5 pl-2.5 pr-3.5">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 text-clay-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[icon]}
      </svg>
      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-sand-200">
        {children}
      </span>
    </p>
  );
}
