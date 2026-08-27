"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/site/Wordmark";
import { LOG_IN_URL, signUpUrl } from "@/lib/links";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const [lifted, setLifted] = useState(false);

  // Close the mobile sheet whenever the route changes — ux: back-behavior.
  // Adjusted during render rather than in an effect, so the sheet is never
  // painted open on the new route.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes the sheet — ux: escape-routes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}/features`, label: t.nav.features },
    { href: `/${locale}/pricing`, label: t.nav.pricing },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        lifted
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-canvas"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
        <Link
          href={`/${locale}`}
          className="flex min-h-11 items-center"
          aria-label={t.meta.siteName}
        >
          <Wordmark className="h-6 w-auto text-ink-900" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label={t.meta.siteName} className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium transition-colors ${
                isActive(link.href)
                  ? "text-ink-900"
                  : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
              }`}
            >
              {link.label}
              {/* ux: nav-state-active — not signalled by colour alone */}
              {isActive(link.href) ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-4 bottom-2 h-px bg-ink-900"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitch locale={locale} pathname={pathname} label={t.nav.langLabel} />

          {LOG_IN_URL ? (
            <Link
              href={LOG_IN_URL}
              className="hidden min-h-11 items-center rounded-full px-4 text-[15px] font-medium text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900 sm:flex"
            >
              {t.nav.login}
            </Link>
          ) : null}

          <Link
            href={signUpUrl(locale)}
            className="hidden min-h-11 items-center rounded-full bg-ink-900 px-5 text-[15px] font-semibold text-sand-100 shadow-sm transition-all duration-200 hover:bg-ink-800 hover:shadow-md active:scale-[0.98] sm:inline-flex"
          >
            {t.nav.start}
          </Link>

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setOpenedAt(pathname);
            }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-ink-100 md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M3.5 7.5h17" />
                  <path d="M3.5 16.5h17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <nav aria-label={t.meta.siteName} className="px-5 py-4">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-xl px-4 text-base font-medium ${
                    isActive(link.href)
                      ? "bg-ink-100 text-ink-900"
                      : "text-ink-700 hover:bg-ink-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {LOG_IN_URL ? (
              <li>
                <Link
                  href={LOG_IN_URL}
                  className="flex min-h-12 items-center rounded-xl px-4 text-base font-medium text-ink-700 hover:bg-ink-50"
                >
                  {t.nav.login}
                </Link>
              </li>
            ) : null}
          </ul>

          <Link
            href={signUpUrl(locale)}
            className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-ink-900 px-5 text-base font-semibold text-sand-100"
          >
            {t.nav.start}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function LocaleSwitch({
  locale,
  pathname,
  label,
}: {
  locale: Locale;
  pathname: string;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full bg-ink-100 p-0.5"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code)}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            className={`flex h-11 min-w-11 items-center justify-center rounded-full px-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
              active
                ? "bg-surface text-ink-900 shadow-xs"
                : "text-ink-500 hover:text-ink-900"
            }`}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
