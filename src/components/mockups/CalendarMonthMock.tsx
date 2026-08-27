import { MockFrame } from "@/components/mockups/MockFrame";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * One property, one month — the companion to CalendarMock's multi-property
 * board. This one exists to show the *editing*: a stay being drawn across three
 * dates and the draft that comes out of it.
 */

/** Three weeks of a July that runs into the next month on the last row. */
const WEEKS = [
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
];

/** Days on the last row that belong to the following month. */
const NEXT_MONTH_FROM = 5;

type Bar = {
  week: number;
  /** 0-indexed column the bar starts in. */
  start: number;
  /** Columns spanned. */
  span: number;
  /** Index into [draft guest, ...other guests]. */
  name: number;
  tone: "draft" | "ota";
};

const BARS: Bar[] = [
  { week: 0, start: 2, span: 3, name: 0, tone: "draft" },
  { week: 1, start: 2, span: 4, name: 1, tone: "ota" },
  { week: 2, start: 2, span: 3, name: 2, tone: "ota" },
];

export function CalendarMonthMock({ t }: { t: Dictionary }) {
  const m = t.mock.calendarMonth;
  const names = [m.guestName, ...m.others];

  return (
    <MockFrame title={m.title} subtitle={m.subtitle}>
      <div className="p-3 sm:p-4">
        {/* Weekday header */}
        <div className="grid grid-cols-7 gap-1 pb-2">
          {m.days.map((day, i) => (
            <p
              key={`${day}-${i}`}
              className="text-center text-[9.5px] font-semibold uppercase tracking-[0.06em] text-ink-400"
            >
              {day}
            </p>
          ))}
        </div>

        {/* Weeks. Each row lays its seven cells in grid row 1, then overlays the
            stay bars on the same row so a stay can span columns. */}
        <div className="space-y-1">
          {WEEKS.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1">
              {week.map((date, dayIndex) => {
                const nextMonth = weekIndex === 2 && dayIndex >= NEXT_MONTH_FROM;
                const drawn = weekIndex === 0 && dayIndex >= 2 && dayIndex <= 4;
                return (
                  <div
                    key={`${weekIndex}-${date}`}
                    className={`h-14 rounded-md px-1.5 pt-1 ring-1 ring-inset ${
                      drawn
                        ? "bg-clay-50 ring-clay-300"
                        : "bg-sand-50 ring-sand-200/60"
                    }`}
                  >
                    <span
                      className={`text-[10.5px] font-semibold tnum ${
                        nextMonth ? "text-ink-300" : "text-ink-600"
                      }`}
                    >
                      {date}
                    </span>
                  </div>
                );
              })}

              <div className="col-start-1 col-end-8 row-start-1 grid grid-cols-7 items-end gap-1 pb-1.5">
                {BARS.filter((bar) => bar.week === weekIndex).map((bar) => (
                  <div
                    key={`${weekIndex}-${bar.start}`}
                    style={{
                      gridColumnStart: bar.start + 1,
                      gridColumnEnd: `span ${bar.span}`,
                    }}
                    className={`mx-0.5 flex h-6 items-center overflow-hidden rounded px-1.5 text-[10.5px] font-medium ${
                      bar.tone === "draft"
                        ? "bg-clay-500 text-white"
                        : "bg-ink-800 text-sand-100"
                    }`}
                  >
                    <span className="truncate">{names[bar.name]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2.5 text-center text-[10.5px] text-ink-400">{m.hint}</p>

        {/* The draft the drag produced. Nothing is committed until the button. */}
        <div className="mt-3 rounded-xl border border-line bg-sand-50 p-3">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.09em] text-clay-600">
            {m.draft}
          </p>

          <div className="mt-2.5 flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[11px] font-semibold text-sand-100">
              {m.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-ink-900">{m.guestName}</p>
              <p className="text-[11px] text-ink-500">
                {m.partySize} · {m.nights} · <span className="tnum">{m.dates}</span>
              </p>
            </div>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between border-t border-line pt-2.5">
            <span className="text-[11px] text-ink-500">{m.total}</span>
            <span className="font-mono text-[13px] font-medium text-ink-900 tnum">
              3.600.000 ₫
            </span>
          </div>

          <span className="mt-3 flex h-9 items-center justify-center rounded-full bg-ink-900 text-[12px] font-semibold text-sand-100">
            {m.confirm}
          </span>
        </div>
      </div>
    </MockFrame>
  );
}
