"use client";

import {
  createContext,
  use,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * A mockup that plays out instead of arriving finished.
 *
 * The screenshots on this site show software doing something — a host asking
 * for a change, the assistant drafting it, the host approving. Rendered all at
 * once, that reads as a picture of a result. Played in order, it reads as the
 * thing happening, which is what the section is trying to say.
 *
 * Not a video, and the reason is not taste. A recording of an interface is
 * blurry text at any zoom, megabytes on the one page people leave if it is
 * slow, untranslatable without re-recording, and stale from the first day the
 * real interface changes. This is the same DOM the rest of the page is made
 * of: sharp, kilobytes, translated by the same dictionary, and updated by
 * editing the component.
 *
 * The default state is the FINISHED state. Every step is visible until the
 * script takes over, which it can only do on a client that hydrated — the
 * same rule Reveal follows, and for the same reason: something that never
 * runs the observer must lose the animation and keep the content, not the
 * other way round. Reduced motion lands in the same place.
 */

type ScenarioValue = {
  /** How many steps have played. Infinity means "show everything". */
  shown: number;
};

const ScenarioContext = createContext<ScenarioValue>({ shown: Infinity });

/* -------------------------------------------------------------------------- */
/* Two facts the server cannot know, read without an effect                    */
/* -------------------------------------------------------------------------- */

/**
 * Whether this is running on a hydrated client at all.
 *
 * useSyncExternalStore rather than a `useState` an effect flips: the server
 * has to render the finished state and the client has to take over, and doing
 * that handover in an effect is a cascading render — and, since React 19, a
 * lint error that is right to complain.
 */
const noopSubscribe = () => () => {};
const onClient = () => true;
const onServer = () => false;

const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeReduced(fn: () => void): () => void {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", fn);
  return () => mq.removeEventListener("change", fn);
}

function reducedSnapshot(): boolean {
  return window.matchMedia(REDUCED).matches;
}

/** Nothing is reduced on the server, because nothing moves there. */
function reducedServerSnapshot(): boolean {
  return false;
}

/* -------------------------------------------------------------------------- */

export function Scenario({
  steps,
  children,
  className = "",
}: {
  /**
   * When each step appears, in milliseconds from the start. Length defines how
   * many steps there are; `Step index` is read against this.
   */
  steps: readonly number[];
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [played, setPlayed] = useState(0);

  const hydrated = useSyncExternalStore(noopSubscribe, onClient, onServer);
  const reduced = useSyncExternalStore(
    subscribeReduced,
    reducedSnapshot,
    reducedServerSnapshot,
  );

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();
          // Plays once. A loop on a marketing page pulls the eye back every
          // few seconds while someone is trying to read the paragraph beside
          // it.
          steps.forEach((at, i) => {
            timers.push(setTimeout(() => setPlayed(i + 1), at));
          });
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.25 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      for (const t of timers) clearTimeout(t);
    };
  }, [steps, reduced]);

  // Everything visible until a hydrated client that wants motion says
  // otherwise. Both fallbacks land on the finished scene rather than a blank
  // panel.
  const shown = !hydrated || reduced ? Infinity : played;

  return (
    <div ref={ref} className={className}>
      <ScenarioContext value={{ shown }}>{children}</ScenarioContext>
    </div>
  );
}

/**
 * One beat of the script.
 *
 * `index` is zero-based and matches the `steps` array on the Scenario. A step
 * whose index has not been reached is hidden by CSS — never unmounted, so the
 * panel keeps its height and nothing below it jumps as the scene fills in.
 */
export function Step({
  index,
  children,
  className = "",
  style,
}: {
  index: number;
  children: ReactNode;
  className?: string;
  /**
   * For a step that is itself a grid item. The wrapper becomes the child of
   * the grid, so anything positioning it — a stay spanning four nights on a
   * calendar — has to be set here rather than on what it wraps.
   */
  style?: React.CSSProperties;
}) {
  const { shown } = use(ScenarioContext);
  return (
    <div
      className={`scenario-step ${className}`}
      data-shown={index < shown ? "true" : "false"}
      style={style}
    >
      {children}
    </div>
  );
}
