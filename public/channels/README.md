# Channel logos

Drop official logo files here and they appear in the marquee on the home page
automatically. No code change, no list to update — the strip reads this
directory at build time. A channel with no file here falls back to its name set
as a wordmark, so a missing file never renders a broken image.

## Filenames

The name in `src/i18n/dictionaries/vi.ts` under `channels.names` is lowercased
and non-alphanumeric runs become hyphens:

| Channel | File |
|---|---|
| Airbnb | `airbnb.svg` |
| Booking.com | `booking-com.svg` |
| Agoda | `agoda.svg` |
| Traveloka | `traveloka.svg` |
| Trip.com | `trip-com.svg` |
| Expedia | `expedia.svg` |
| VRBO | `vrbo.svg` |

`.png` and `.webp` also work, but prefer `.svg` — the strip scales logos to a
fixed height and a raster file will soften on a high-density screen.

## Where to get them

Use each brand's own asset, not a copy found in a search result. Every one of
these publishes a partner or press kit, and each carries usage rules about
clear space, minimum size, and recolouring:

- **Airbnb** — Partner brand guidelines, via the partner portal
- **Booking.com** — Connectivity partner brand assets
- **Agoda** — Partner marketing resources
- **Traveloka** — Press / media kit
- **Trip.com** — Trip.com Group media assets
- **Expedia / VRBO** — Expedia Group brand centre

## Before shipping these publicly

Showing an OTA's logo says something about your relationship with them. Listing
them as channels you sync with is ordinarily fine as a statement of fact, but
several of these brands restrict logo use to actual partners, and a logo wall
reads to a visitor as endorsement. Worth a look at each brand's terms before
the site goes live — and worth avoiding any layout that implies they endorse
TLSHost rather than that TLSHost connects to them.

Do not recreate a logo by hand. An approximation with the wrong proportions or
the wrong red is worse than the wordmark fallback.
