import { appendFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

export type WaitlistEntry = {
  name: string;
  email: string;
  size: string;
  locale: string;
};

/**
 * Where signups land. One JSON object per line, appended — an append-only file
 * survives concurrent writes far better than rewriting a JSON array, and it is
 * trivial to import into a spreadsheet or a database later.
 *
 * Override with WAITLIST_FILE. On the VPS this should sit outside the git
 * checkout so a deploy never overwrites it, e.g. /var/lib/tlshost/waitlist.jsonl
 */
function waitlistFile(): string {
  const configured = process.env.WAITLIST_FILE ?? "data/waitlist.jsonl";
  // turbopackIgnore keeps the bundler from concluding that a runtime-resolved
  // path means the whole project must be traced into the server output.
  return resolve(/* turbopackIgnore: true */ configured);
}

export async function recordSignup(entry: WaitlistEntry): Promise<void> {
  const target = waitlistFile();
  const line =
    JSON.stringify({
      at: new Date().toISOString(),
      ...entry,
    }) + "\n";

  await mkdir(dirname(target), { recursive: true });
  await appendFile(target, line, { encoding: "utf8", mode: 0o600 });
}

/**
 * A deliberately small in-memory limiter. It resets when the process restarts,
 * which is fine for what it guards: it exists to blunt a bot hammering the
 * endpoint, not to be an audit-grade quota. Anything stricter belongs in Nginx.
 */
const HITS = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (HITS.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    HITS.set(key, recent);
    return true;
  }

  recent.push(now);
  HITS.set(key, recent);

  // Keep the map from growing without bound on a long-lived process.
  if (HITS.size > 5000) {
    for (const [k, times] of HITS) {
      if (times.every((t) => now - t >= WINDOW_MS)) HITS.delete(k);
    }
  }

  return false;
}

/**
 * Pragmatic address check. Deliberately not RFC 5322 — the goal is to catch
 * typos and obvious junk, and a real address is only proven by mailing it.
 */
export function looksLikeEmail(value: string): boolean {
  if (value.length > 254) return false;
  return /^[^\s@,;:<>()[\]\\]+@[^\s@.]+(\.[^\s@.]+)+$/.test(value);
}
