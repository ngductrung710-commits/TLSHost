# TLSHost

Marketing site for TLSHost — property-management software for independent hosts.
Three pages (home, features, pricing), Vietnamese and English, built with Next.js.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 with CSS-variable design tokens |
| Fonts | Calistoga (display), Inter (body), JetBrains Mono (labels) — all self-hosted via `next/font`, all with the `vietnamese` subset |
| Rendering | Fully static (SSG); every route is prerendered at build time |
| Runtime | Node 20.9+ |

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The bare path redirects to `/vi`.

```bash
npm run build     # production build
npm start         # serve the build
npm run lint      # eslint, zero warnings allowed
```

## Project layout

```
src/
  app/
    [lang]/            # the root layout lives here — locale is a root param
      layout.tsx       # <html lang>, fonts, header/footer, metadata + hreflang
      page.tsx         # home
      features/
      pricing/
    globals.css        # design tokens, base styles, reveal + mockup keyframes
    sitemap.ts
    robots.ts
  components/
    site/              # Header, Footer, Wordmark
    sections/          # Hero, PillarSection, ScaleSection, shared blocks
    mockups/           # the six product illustrations
    ui/                # Container, Section, buttons, Reveal
  i18n/
    config.ts          # locales, BCP-47 tags, path switching
    dictionaries/      # vi.ts is the source of truth; en.ts must match its shape
    getDictionary.ts
```

### Adding or changing copy

All user-facing text lives in `src/i18n/dictionaries/`. `vi.ts` defines the
`Dictionary` type, so adding a key there makes TypeScript demand the same key in
`en.ts`. There are no strings hard-coded in components.

### Design tokens

Colours, spacing, shadows and easings are declared once in the `@theme` block of
`src/app/globals.css` and consumed as Tailwind utilities (`bg-canvas`,
`text-ink-900`, `border-line`). The palette derives from The Local Stay:
espresso `#231813`, bone `#F2F0ED`, sand `#CCBEB4`, with clay `#A05436` as the
accent. Every text pair in use was checked at 4.5:1 or better; control borders
use `--color-line-strong` for the 3:1 non-text requirement.

Do not write raw hex values in components — add a token instead.

### The mockups

The six product illustrations under `components/mockups/` are pure HTML and CSS
with no images and no external assets. Each is `aria-hidden="true"`: they depict
the product rather than being it, and every claim they show is also stated in the
prose beside them. Their looping micro-animations are neutralised by the
`prefers-reduced-motion` block in `globals.css`.

## Deploying to a Hostinger VPS

Requires Node 20.9+, Nginx, PM2 and certbot on the box.

### First time

```bash
ssh root@<vps-ip>

# Node 22 via nodesource, plus the rest
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs nginx certbot python3-certbot-nginx
npm install -g pm2

mkdir -p /var/www /var/log/pm2
git clone https://github.com/<you>/tlshost.git /var/www/tlshost
cd /var/www/tlshost

cp .env.example .env.production      # then edit NEXT_PUBLIC_SITE_URL
npm ci
npm run build

pm2 start ecosystem.config.cjs
pm2 save
pm2 startup                          # run the command it prints back

cp deploy/nginx.conf /etc/nginx/sites-available/tlshost
ln -s /etc/nginx/sites-available/tlshost /etc/nginx/sites-enabled/tlshost
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

certbot --nginx -d tlshost.vn -d www.tlshost.vn
```

Point the domain's A record at the VPS IP before running certbot, or the
challenge fails.

### Every deploy after that

```bash
ssh root@<vps-ip>
cd /var/www/tlshost && ./deploy/deploy.sh
```

The script builds before it reloads PM2, so a failing build leaves the running
site untouched. It exits non-zero and prints the last 40 log lines if the app
does not answer on port 3000 within 20 seconds.

### Notes

- The app binds to `127.0.0.1:3000` and is only reachable through Nginx.
- `NEXT_PUBLIC_SITE_URL` is baked in at build time. Changing it needs a rebuild,
  not just a restart — it feeds canonical URLs, hreflang, the sitemap and OG tags.
- `/_next/static/` is content-hashed and served with a one-year immutable
  cache header.

## Accessibility

Checked against the WCAG-derived rules the design system was built on:

- Every interactive target is at least 44px tall.
- Body copy is 16px or larger; captions and labels stay above 13px.
- Text contrast is 4.5:1 or better in every pair used.
- Focus is visible on every interactive element, with a skip link to `#main`.
- Status is never carried by colour alone — icons and text accompany it.
- The FAQ is built on `<details>`/`<summary>`, so it works without JavaScript.
- No carousels, so there is no auto-rotation to pause or announce.
- `prefers-reduced-motion` renders every animated element at its final state.

Re-run the layout and target audits after structural changes; both are cheap to
check in the browser console against a running dev server.
