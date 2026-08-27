import type { Dictionary } from "@/i18n/dictionaries/vi";

/** The housekeeping app is phone-first, so this mockup wears a phone shell. */
export function HousekeepingMock({ t }: { t: Dictionary }) {
  const m = t.mock.housekeeping;
  const states = ["dirty", "dirty", "clean"] as const;

  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[280px]">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-ink-900 bg-ink-900 shadow-xl">
        <div className="rounded-[1.6rem] bg-surface">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3">
            <span className="text-[10.5px] font-semibold text-ink-900 tnum">9:41</span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 18 12" className="h-2.5 w-4 text-ink-900" fill="currentColor">
                <rect x="0" y="7" width="3" height="5" rx="1" />
                <rect x="4.5" y="5" width="3" height="7" rx="1" />
                <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.35" />
              </svg>
              <svg viewBox="0 0 24 12" className="h-2.5 w-5 text-ink-900" fill="none">
                <rect
                  x="0.75"
                  y="1.25"
                  width="19"
                  height="9.5"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  opacity="0.5"
                />
                <rect x="2.4" y="2.9" width="13" height="6.2" rx="1.4" fill="currentColor" />
                <path
                  d="M21.6 4.5v3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </div>

          {/* Header */}
          <div className="px-4 pb-3 pt-2">
            <p className="text-[15px] font-semibold text-ink-900">{m.title}</p>
            <p className="mt-0.5 text-[11px] text-ink-500">2 {m.needsCleaning}</p>

            <div className="mt-3 flex gap-1 rounded-full bg-sand-100 p-0.5">
              <span className="flex-1 rounded-full bg-surface px-3 py-1.5 text-center text-[11px] font-semibold text-ink-900 shadow-xs">
                {m.tabNeeds}
              </span>
              <span className="flex-1 px-3 py-1.5 text-center text-[11px] font-medium text-ink-500">
                {m.tabAll}
              </span>
            </div>
          </div>

          {/* Room list */}
          <div className="space-y-2 px-4 pb-4">
            {m.rows.map((row, i) => {
              const isClean = states[i] === "clean";
              return (
                <div
                  key={row.room}
                  className={`rounded-xl border p-3 [animation:mockRise_0.5s_var(--ease-out-soft)_both] ${
                    isClean
                      ? "border-positive-soft bg-positive-soft/60"
                      : "border-line bg-surface"
                  }`}
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-ink-900">
                        {row.room}
                      </p>
                      <p className="truncate text-[10.5px] text-ink-500">{row.property}</p>
                    </div>

                    {/* Status carries an icon as well as colour — ux: color-not-only */}
                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold ${
                        isClean
                          ? "bg-positive text-white"
                          : "bg-warning-soft text-warning"
                      }`}
                    >
                      {isClean ? (
                        <svg
                          viewBox="0 0 16 16"
                          className="h-2.5 w-2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3.5 8.5l3 3 6-6.5" />
                        </svg>
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      )}
                      {isClean ? m.clean : m.dirty}
                    </span>
                  </div>

                  <p className="mt-1.5 text-[10.5px] text-ink-500">{row.note}</p>

                  {!isClean ? (
                    <span className="mt-2.5 flex h-9 items-center justify-center rounded-lg bg-ink-900 text-[11.5px] font-semibold text-sand-100">
                      {m.markClean}
                    </span>
                  ) : null}
                </div>
              );
            })}

            <p className="pt-1 text-center text-[10.5px] italic text-ink-400">
              {m.encouragement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
