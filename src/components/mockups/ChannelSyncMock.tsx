import { MockFrame } from "@/components/mockups/MockFrame";
import type { Dictionary } from "@/i18n/dictionaries/vi";

const CHANNELS = [
  { name: "Airbnb", properties: 4, minutes: 2, hue: "#FF5A5F" },
  { name: "Booking.com", properties: 4, minutes: 3, hue: "#003580" },
  { name: "Agoda", properties: 3, minutes: 5, hue: "#5A2D82" },
  { name: "Traveloka", properties: 2, minutes: 6, hue: "#1B9CE5" },
];

export function ChannelSyncMock({ t }: { t: Dictionary }) {
  const m = t.mock.channels;

  return (
    <MockFrame
      title={m.title}
      subtitle={m.subtitle}
      action={
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 text-[10.5px] font-semibold text-sand-100">
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 [animation:mockSpin_2.4s_linear_infinite]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M13.5 8a5.5 5.5 0 1 1-1.9-4.2" />
            <path d="M13.2 1.6v2.6h-2.6" />
          </svg>
          {m.syncNow}
        </span>
      }
    >
      <div className="divide-y divide-line">
        {CHANNELS.map((channel, i) => (
          <div key={channel.name} className="flex items-center gap-3 px-4 py-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white"
              style={{ backgroundColor: channel.hue }}
            >
              {channel.name.charAt(0)}
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-ink-900">
                {channel.name}
              </p>
              <p className="text-[11px] text-ink-500 tnum">
                {channel.properties} {m.propertyCount} · {channel.minutes} {m.agoStub}
              </p>
            </div>

            {/* Two-way arrows, animated on a stagger so the row reads as live */}
            <span
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-positive-soft px-2.5 py-1 text-[10px] font-medium text-positive [animation:mockBreathe_3.2s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 400}ms` }}
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 5.5h11M11 3l2.5 2.5L11 8" />
                <path d="M13.5 10.5h-11M5 8l-2.5 2.5L5 13" />
              </svg>
              {m.justSynced}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-line bg-sand-50 px-4 py-3">
        <p className="text-[11px] text-ink-500">{m.priceUpdated}</p>
        <p className="text-[12.5px] font-semibold text-ink-900 tnum">1.400.000 ₫</p>
      </div>
    </MockFrame>
  );
}
