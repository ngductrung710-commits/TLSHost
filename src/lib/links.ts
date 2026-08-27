import type { Locale } from "@/i18n/config";

/**
 * Destinations for the call-to-action buttons.
 *
 * This site is the marketing surface; the product application is a separate
 * build that does not exist yet. Until it does, "start free" collects a
 * waitlist signup instead of pretending there is somewhere to sign in.
 */

/** Where "Start free" sends people. Defaults to the on-site waitlist. */
export function signUpUrl(locale: Locale): string {
  return process.env.NEXT_PUBLIC_SIGN_UP_URL || `/${locale}/signup`;
}

/**
 * Where "Log in" sends people, or `null` while there is nothing to log into.
 * The header and footer drop the link entirely when this is null — a login
 * link that lands on a waitlist is worse than no login link.
 */
export const LOG_IN_URL: string | null = process.env.NEXT_PUBLIC_LOG_IN_URL || null;
