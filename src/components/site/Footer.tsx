import Link from "next/link";

import { Wordmark } from "@/components/site/Wordmark";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.productTitle,
      links: [
        { label: t.nav.features, href: `/${locale}/features` },
        { label: t.nav.pricing, href: `/${locale}/pricing` },
        { label: t.nav.login, href: "/app/login" },
      ],
    },
    {
      title: t.footer.companyTitle,
      links: t.footer.company.map((label) => ({ label, href: `/${locale}` })),
    },
    {
      title: t.footer.legalTitle,
      links: t.footer.legal.map((label) => ({ label, href: `/${locale}` })),
    },
  ];

  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          <div className="max-w-xs">
            <Wordmark className="h-6 w-auto text-ink-900" />
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              {t.footer.tagline}
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex min-h-11 items-center text-[15px] text-ink-600 transition-colors hover:text-ink-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            © {year} {t.meta.siteName}. {t.footer.rights}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
            {t.meta.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
