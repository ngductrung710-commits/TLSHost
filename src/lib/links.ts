/**
 * Outbound destinations for the call-to-action buttons.
 *
 * This site is the marketing surface only — the product application lives
 * elsewhere. Every "start free" and "log in" button reads from here, so
 * pointing them at the real application (or a waitlist, or a contact form)
 * is a one-line change rather than a hunt through eight components.
 */

/** Where "Start free" / "Dùng thử miễn phí" sends people. */
export const SIGN_UP_URL = process.env.NEXT_PUBLIC_SIGN_UP_URL ?? "/app/login";

/** Where "Log in" / "Đăng nhập" sends people. */
export const LOG_IN_URL = process.env.NEXT_PUBLIC_LOG_IN_URL ?? "/app/login";
