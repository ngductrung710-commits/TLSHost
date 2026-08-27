import { MockFrame } from "@/components/mockups/MockFrame";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * The second panel on each feature detail page.
 *
 * Every feature already has one mockup used on the home page; showing it twice
 * on its own page would read as filler, so each of these depicts a different
 * moment in the same feature. They are lighter than the primary mockups on
 * purpose — the primary one carries the picture, these carry one idea.
 *
 * All of them inherit aria-hidden from MockFrame, or set it themselves: they
 * illustrate the product rather than being it, and the prose beside each makes
 * the same claims in words.
 */

/* -------------------------------------------------------------------------- */
/* AI — a proposal that stopped and waited                                     */
/* -------------------------------------------------------------------------- */

export function AiApprovalMock({ t }: { t: Dictionary }) {
  const m = t.mock.approval;

  return (
    <MockFrame
      title={m.title}
      action={
        <span className="shrink-0 rounded-full bg-warning-soft px-2.5 py-1 text-[10px] font-semibold text-warning">
          {m.kind}
        </span>
      }
    >
      <div className="p-4">
        <p className="text-[14px] font-semibold text-ink-900">{m.headline}</p>
        <p className="mt-1 text-[11.5px] text-ink-500">{m.meta}</p>

        <p className="mt-3 flex items-start gap-2 rounded-xl border border-warning/25 bg-warning-soft px-3 py-2.5 text-[11.5px] leading-relaxed text-warning">
          <svg
            viewBox="0 0 16 16"
            className="mt-0.5 h-3.5 w-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <circle cx="8" cy="8" r="6.4" />
            <path d="M8 5.2v3.4M8 10.9v.01" />
          </svg>
          {m.reason}
        </p>

        <div className="mt-3.5 flex items-center gap-2">
          <span className="inline-flex h-9 flex-1 items-center justify-center rounded-lg bg-ink-900 text-[12.5px] font-semibold text-sand-100">
            {m.approve}
          </span>
          <span className="inline-flex h-9 items-center justify-center rounded-lg border border-line bg-surface px-4 text-[12.5px] font-medium text-ink-600">
            {m.reject}
          </span>
        </div>
      </div>

      <p className="border-t border-line bg-sand-50 px-4 py-3 text-[11px] text-ink-500">
        {m.note}
      </p>
    </MockFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* Channels — the second claim on one night, refused                           */
/* -------------------------------------------------------------------------- */

export function ChannelConflictMock({ t }: { t: Dictionary }) {
  const m = t.mock.conflict;

  return (
    <MockFrame title={m.title} subtitle={m.subtitle}>
      <div className="space-y-2.5 p-4">
        {/* The booking that got there first */}
        <div className="flex items-center gap-3 rounded-xl border border-positive/30 bg-positive-soft px-3.5 py-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FF5A5F] text-[10px] font-bold text-white">
            A
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-semibold text-ink-900">
              Airbnb · Linh Tran
            </p>
            <p className="text-[11px] text-ink-500 tnum">14–17/7 · 3 {m.nights}</p>
          </div>
          <span className="shrink-0 rounded-full bg-positive px-2.5 py-1 text-[10px] font-semibold text-white">
            {m.kept}
          </span>
        </div>

        {/* The one the database refused */}
        <div className="flex items-center gap-3 rounded-xl border border-danger/25 bg-danger-soft px-3.5 py-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#003580] text-[10px] font-bold text-white">
            B
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-semibold text-ink-900 line-through decoration-danger/50">
              Booking.com · J. Keller
            </p>
            <p className="text-[11px] text-ink-500 tnum">15–18/7</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-danger px-2.5 py-1 text-[10px] font-semibold text-white">
            <svg
              viewBox="0 0 16 16"
              className="h-2.5 w-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />
            </svg>
            {m.blocked}
          </span>
        </div>
      </div>

      <p className="border-t border-line bg-sand-50 px-4 py-3 text-[11px] text-ink-500">
        {m.note}
      </p>
    </MockFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* Direct booking — the arithmetic, which is the whole argument                */
/* -------------------------------------------------------------------------- */

export function SavingsMock({ t }: { t: Dictionary }) {
  const m = t.mock.savings;

  return (
    <MockFrame title={m.title} subtitle={m.subtitle}>
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        {/* Through an OTA */}
        <div className="rounded-xl border border-line bg-sand-50 p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-500">
            {m.viaOta}
          </p>
          <dl className="mt-3 space-y-1.5 text-[11.5px]">
            <div className="flex justify-between text-ink-600">
              <dt className="tnum">3 × 1.200.000 ₫</dt>
              <dd className="tnum">3.600.000 ₫</dd>
            </div>
            <div className="flex justify-between text-danger">
              <dt>− 15% {m.commission}</dt>
              <dd className="tnum">− 540.000 ₫</dd>
            </div>
          </dl>
          <div className="mt-3 border-t border-line pt-2.5">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-ink-500">
              {m.youGet}
            </p>
            <p className="mt-0.5 text-[15px] font-semibold text-ink-700 tnum">3.060.000 ₫</p>
          </div>
        </div>

        {/* Direct */}
        <div className="relative rounded-xl border-2 border-ink-900 bg-surface p-3.5">
          <span className="absolute -top-2.5 left-3.5 rounded-full bg-ink-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-sand-100">
            {m.best}
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-700">
            {m.direct}
          </p>
          <dl className="mt-3 space-y-1.5 text-[11.5px]">
            <div className="flex justify-between text-ink-600">
              <dt className="tnum">3 × 1.200.000 ₫</dt>
              <dd className="tnum">3.600.000 ₫</dd>
            </div>
            <div className="flex justify-between text-positive">
              <dt>{m.keepAll}</dt>
              <dd className="tnum">− 0 ₫</dd>
            </div>
          </dl>
          <div className="mt-3 border-t border-line pt-2.5">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-ink-500">
              {m.youGet}
            </p>
            <p className="mt-0.5 text-[15px] font-semibold text-ink-900 tnum">3.600.000 ₫</p>
          </div>
        </div>
      </div>

      <p className="border-t border-line bg-clay-50 px-4 py-3 text-[11.5px] text-clay-700">
        <span className="font-semibold tnum">+ 540.000 ₫</span> {m.perBooking}
        <span className="text-clay-600 tnum"> · ×14 = 7.560.000 ₫</span>
      </p>
    </MockFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* Housekeeping — the host's side of the same work                             */
/* -------------------------------------------------------------------------- */

export function HousekeepingBoardMock({ t }: { t: Dictionary }) {
  const m = t.mock.board;
  const h = t.mock.housekeeping;

  const rows = [
    { room: "Garden Suite", property: "An Bàng Villa", note: m.checkout, state: "dirty" },
    { room: "Sky Loft", property: "An Bàng Villa", note: m.turnover, state: "clean" },
    { room: "Bamboo Room", property: "Hội An House", note: m.stayover, state: "inspected" },
    { room: "Ocean View Studio", property: "An Bàng Villa", note: "—", state: "maintenance" },
  ] as const;

  const chip = {
    dirty: { label: h.dirty, className: "bg-warning-soft text-warning" },
    clean: { label: h.clean, className: "bg-positive text-white" },
    inspected: { label: m.inspected, className: "bg-positive-soft text-positive" },
    maintenance: { label: m.maintenance, className: "bg-ink-200 text-ink-700" },
  } as const;

  return (
    <MockFrame
      title={m.title}
      subtitle={m.subtitle}
      action={
        <span className="hidden shrink-0 rounded-full bg-ink-900 px-3 py-1.5 text-[10.5px] font-semibold text-sand-100 sm:inline-flex">
          {m.markAll}
        </span>
      }
    >
      <div className="divide-y divide-line">
        {rows.map((row) => (
          <div key={row.room} className="flex items-center gap-3 px-4 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-ink-900">{row.room}</p>
              <p className="truncate text-[11px] text-ink-500">
                {row.property} · {row.note}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${chip[row.state].className}`}
            >
              {chip[row.state].label}
            </span>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

/* -------------------------------------------------------------------------- */
/* Team — who did what, in order                                               */
/* -------------------------------------------------------------------------- */

export function ActivityMock({ t }: { t: Dictionary }) {
  const m = t.mock.activity;

  return (
    <MockFrame
      title={m.title}
      subtitle={m.subtitle}
      action={
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-positive-soft px-2.5 py-1 text-[10px] font-medium text-positive">
          <span className="h-1.5 w-1.5 rounded-full bg-positive [animation:mockBreathe_2.6s_ease-in-out_infinite]" />
          {m.live}
        </span>
      }
    >
      <ol className="divide-y divide-line">
        {m.entries.map((entry, i) => (
          <li
            key={entry.who + entry.when}
            className="flex items-start gap-3 px-4 py-3 [animation:mockRise_0.5s_var(--ease-out-soft)_both]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand-200 text-[10px] font-bold text-ink-700">
              {entry.who
                .split(" ")
                .map((part) => part[0])
                .slice(-2)
                .join("")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] leading-snug text-ink-900">
                <span className="font-semibold">{entry.who}</span> {entry.what}
              </p>
              <p className="mt-0.5 text-[10.5px] text-ink-500">{entry.when}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="border-t border-line bg-sand-50 px-4 py-3 text-[11px] text-ink-500">
        {m.note}
      </p>
    </MockFrame>
  );
}
