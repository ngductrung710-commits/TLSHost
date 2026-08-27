import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * The guest-facing booking page. This one deliberately does not use MockFrame:
 * it is a public storefront, so it wears a browser address bar instead of the
 * app chrome.
 */
export function DirectBookingMock({ t }: { t: Dictionary }) {
  const m = t.mock.booking;

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xl"
    >
      {/* Address bar — the host's own subdomain is part of the pitch */}
      <div className="flex items-center gap-2 border-b border-line bg-sand-50 px-4 py-2.5">
        <span className="flex gap-1.5">
          {["#E6C3B0", "#DCD5CC", "#CCBEB4"].map((c) => (
            <span key={c} className="h-2 w-2 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </span>
        <span className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-surface px-3 py-1">
          <svg
            viewBox="0 0 16 16"
            className="h-2.5 w-2.5 shrink-0 text-positive"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3.5" y="7" width="9" height="6" rx="1.5" />
            <path d="M5.75 7V5.25a2.25 2.25 0 0 1 4.5 0V7" strokeLinecap="round" />
          </svg>
          <span className="truncate font-mono text-[10px] text-ink-500 wrap-anywhere">
            an-bang-villa.tlshost.vn
          </span>
        </span>
        <span className="shrink-0 rounded-full bg-clay-500 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-white">
          {m.zeroFee}
        </span>
      </div>

      <div className="grid gap-0 sm:grid-cols-[1.15fr_1fr]">
        {/* Property image stand-in — a rendered scene, no external asset */}
        <div className="relative min-h-44 overflow-hidden bg-gradient-to-br from-sand-300 via-sand-400 to-clay-300">
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900/45 to-transparent" />
          <svg
            viewBox="0 0 200 120"
            className="absolute inset-0 h-full w-full opacity-45"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path d="M0 88 Q34 66 62 82 T124 74 T200 90 V120 H0Z" fill="rgba(35,24,19,0.22)" />
            <path d="M0 100 Q46 84 92 96 T200 100 V120 H0Z" fill="rgba(35,24,19,0.3)" />
            <circle cx="158" cy="30" r="13" fill="rgba(255,255,255,0.4)" />
          </svg>
          <div className="absolute bottom-3 left-3.5 right-3.5">
            <p className="text-[13px] font-semibold text-white drop-shadow-sm">
              {m.propertyName}
            </p>
            <p className="mt-0.5 text-[11px] text-white/90 drop-shadow-sm">
              ★ 4.96 · {m.location}
            </p>
          </div>
        </div>

        {/* Booking widget */}
        <div className="p-4">
          <p className="text-[17px] font-semibold text-ink-900 tnum">
            1.200.000 ₫
            <span className="ml-1 text-[12px] font-normal text-ink-500">{m.perNight}</span>
          </p>

          <div className="mt-3 grid grid-cols-2 overflow-hidden rounded-xl border border-line-strong">
            <div className="border-r border-line px-3 py-2">
              <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink-500">
                {m.checkIn}
              </p>
              <p className="mt-0.5 text-[12.5px] font-medium text-ink-900 tnum">12 Jul</p>
            </div>
            <div className="px-3 py-2">
              <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink-500">
                {m.checkOut}
              </p>
              <p className="mt-0.5 text-[12.5px] font-medium text-ink-900 tnum">15 Jul</p>
            </div>
          </div>

          <div className="mt-2 rounded-xl border border-line-strong px-3 py-2">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink-500">
              {m.guests}
            </p>
            <p className="mt-0.5 text-[12.5px] font-medium text-ink-900 tnum">2</p>
          </div>

          <dl className="mt-3 space-y-1.5 border-t border-line pt-3">
            <div className="flex items-center justify-between text-[11.5px] text-ink-600">
              <dt className="tnum">1.200.000 ₫ × 3 {m.nights}</dt>
              <dd className="tnum">3.600.000 ₫</dd>
            </div>
            <div className="flex items-center justify-between text-[13px] font-semibold text-ink-900">
              <dt>{m.total}</dt>
              <dd className="tnum">3.600.000 ₫</dd>
            </div>
          </dl>

          <span className="mt-3 flex h-10 items-center justify-center rounded-full bg-ink-900 text-[13px] font-semibold text-sand-100">
            {m.book}
          </span>

          <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[10.5px] font-medium text-positive">
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.5 8.5l3 3 6-6.5" />
            </svg>
            {m.instant}
          </p>
        </div>
      </div>
    </div>
  );
}
