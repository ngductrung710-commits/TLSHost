import { MockFrame } from "@/components/mockups/MockFrame";
import type { Dictionary } from "@/i18n/dictionaries/vi";

type Stay = {
  /** 0-indexed day column where the stay starts. */
  start: number;
  /** Number of day columns the stay spans. */
  span: number;
  guest: string;
  tone: "ota" | "direct" | "block";
};

const ROWS: Stay[][] = [
  [
    { start: 0, span: 2, guest: "Linh Tran", tone: "ota" },
    { start: 3, span: 3, guest: "James K.", tone: "block" },
  ],
  [{ start: 1, span: 3, guest: "Minh Pham", tone: "ota" }],
  [
    { start: 0, span: 3, guest: "Anna Vo", tone: "ota" },
    { start: 4, span: 3, guest: "Sofia R.", tone: "direct" },
  ],
  [{ start: 2, span: 4, guest: "Bao Nguyen", tone: "direct" }],
];

const toneStyles = {
  ota: "bg-ink-800 text-sand-100",
  direct: "bg-clay-500 text-white",
  block: "bg-sand-300 text-ink-700 [background-image:repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(35,24,19,0.08)_5px,rgba(35,24,19,0.08)_10px)]",
} as const;

export function CalendarMock({ t }: { t: Dictionary }) {
  const m = t.mock.calendar;

  return (
    <MockFrame
      title={m.title}
      subtitle={m.subtitle}
      action={
        <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-positive-soft px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-positive sm:inline-flex">
          {m.occupancy} 86%
        </span>
      }
    >
      <div className="p-3 sm:p-4">
        {/* Day header */}
        <div className="grid grid-cols-[88px_repeat(7,1fr)] gap-1 sm:grid-cols-[130px_repeat(7,1fr)]">
          <div />
          {m.days.map((day, i) => (
            <div key={`${day}-${i}`} className="pb-2 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-400">
                {day}
              </p>
              <p className="text-[11px] font-semibold text-ink-700 tnum">{10 + i}</p>
            </div>
          ))}
        </div>

        {/* Property rows */}
        <div className="space-y-1">
          {m.properties.map((property, rowIndex) => (
            <div
              key={property}
              className="grid grid-cols-[88px_repeat(7,1fr)] items-center gap-1 sm:grid-cols-[130px_repeat(7,1fr)]"
            >
              <p className="truncate pr-2 text-[11px] font-medium text-ink-700 sm:text-[12px]">
                {property}
              </p>

              {/* Empty day cells form the grid background */}
              {Array.from({ length: 7 }).map((_, dayIndex) => (
                <div
                  key={dayIndex}
                  className="h-9 rounded-md bg-sand-50 ring-1 ring-inset ring-sand-200/60"
                />
              ))}

              {/* Stays are overlaid on their own grid so they can span columns */}
              <div className="col-start-2 col-end-9 row-start-1 grid grid-cols-7 gap-1">
                {ROWS[rowIndex]?.map((stay) => (
                  <div
                    key={`${stay.guest}-${stay.start}`}
                    style={{
                      gridColumnStart: stay.start + 1,
                      gridColumnEnd: `span ${stay.span}`,
                    }}
                    className={`flex h-9 items-center overflow-hidden rounded-md px-2 text-[11px] font-medium ${toneStyles[stay.tone]}`}
                  >
                    <span className="truncate">{stay.guest}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] text-ink-500">
            <span className="h-2.5 w-2.5 rounded-[3px] bg-ink-800" />
            OTA
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-ink-500">
            <span className="h-2.5 w-2.5 rounded-[3px] bg-clay-500" />
            {m.direct} · {m.zeroFee}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-ink-500">
            <span className="h-2.5 w-2.5 rounded-[3px] bg-sand-300" />
            {m.blocked}
          </span>
        </div>
      </div>
    </MockFrame>
  );
}
