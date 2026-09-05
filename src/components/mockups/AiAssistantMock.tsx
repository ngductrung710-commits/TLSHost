import { MockFrame } from "@/components/mockups/MockFrame";
import { Scenario, Step } from "@/components/mockups/Scenario";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/**
 * The assistant, playing rather than posing.
 *
 * The beats are the product in one sentence: the host asks in ordinary words,
 * the assistant drafts, and nothing reaches the calendar until the host says
 * so. Showing all four at once turns that into a screenshot of an outcome;
 * showing them in order is the argument itself.
 *
 * The pause before the reply is the longest gap on purpose. It is where a
 * reader works out that something is being composed — and it is honest, since
 * the real thing takes about that long.
 */

/** Milliseconds from the moment the panel scrolls into view. */
const BEATS = [
  240, // the host's request
  900, // thinking
  2100, // the reply
  2600, // the drafted change
] as const;

export function AiAssistantMock({ t }: { t: Dictionary }) {
  const m = t.mock.ai;

  return (
    <MockFrame
      title={m.title}
      action={
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-positive-soft px-2.5 py-1 text-[10px] font-medium text-positive">
          <span className="h-1.5 w-1.5 rounded-full bg-positive" />
          {m.status}
        </span>
      }
    >
      <Scenario steps={BEATS} className="space-y-3 p-4">
        {/* Host request */}
        <Step index={0} className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-md bg-ink-900 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-sand-100">
            {m.userMessage}
          </p>
        </Step>

        {/* Assistant thinking */}
        <Step index={1} className="flex items-center gap-2">
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-ink-300 [animation:mockPulse_1.4s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 180}ms` }}
              />
            ))}
          </span>
          <p className="text-[11.5px] italic text-ink-400">{m.thinking}</p>
        </Step>

        {/* Assistant reply */}
        <Step index={2} className="flex justify-start">
          <p className="max-w-[88%] rounded-2xl rounded-bl-md bg-sand-100 px-3.5 py-2.5 text-[12.5px] leading-relaxed text-ink-700">
            {m.reply}
          </p>
        </Step>

        {/* The staged change — the whole point of the feature */}
        <Step index={3}>
          <div className="rounded-xl border border-line bg-sand-50 p-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[12.5px] font-semibold text-ink-900">{m.cardTitle}</p>
                <p className="mt-0.5 text-[11px] text-ink-500">{m.cardMeta}</p>
              </div>
              <span className="shrink-0 rounded-full bg-warning-soft px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-warning">
                {m.draft}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex h-8 flex-1 items-center justify-center rounded-lg bg-ink-900 text-[12px] font-semibold text-sand-100">
                {m.approve}
              </span>
              <span className="inline-flex h-8 items-center justify-center rounded-lg border border-line bg-surface px-4 text-[12px] font-medium text-ink-600">
                {m.reject}
              </span>
            </div>
          </div>
        </Step>

        {/* Composer. Outside the script: it is the frame the scene happens in,
            not a beat of it, and a mockup whose input arrives last reads as a
            panel that was not there a moment ago. */}
        <div className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2">
          <p className="flex-1 truncate text-[12px] text-ink-400">{m.placeholder}</p>
          <span className="h-4 w-px bg-ink-900 [animation:mockCaret_1.1s_step-end_infinite]" />
        </div>
      </Scenario>
    </MockFrame>
  );
}
