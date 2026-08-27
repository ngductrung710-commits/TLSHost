import { readdirSync } from "node:fs";
import { join } from "node:path";

/** Filename-safe key for a channel: "Booking.com" → "booking-com". */
export function channelSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Maps channel name → public path, for whichever logo files actually exist.
 *
 * Read from disk at build time rather than hard-coded, so dropping a file into
 * public/channels/ is the whole job: no list to update, and a channel with no
 * file falls back to its wordmark instead of rendering a broken image.
 *
 * Server-only — this module must never be imported from a client component.
 */
export function availableChannelLogos(names: readonly string[]): Record<string, string> {
  let files: string[];

  try {
    // Statically scoped path: the bundler can trace exactly this directory
    // rather than concluding it must trace the whole project.
    files = readdirSync(join(process.cwd(), "public", "channels"));
  } catch {
    // No directory yet is a normal state, not an error.
    return {};
  }

  const byStem = new Map<string, string>();
  for (const file of files) {
    const match = /^(.+)\.(svg|png|webp)$/i.exec(file);
    if (match) byStem.set(match[1].toLowerCase(), file);
  }

  const logos: Record<string, string> = {};
  for (const name of names) {
    const file = byStem.get(channelSlug(name));
    if (file) logos[name] = `/channels/${file}`;
  }

  return logos;
}
