# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

The site is being upgraded step by step. **See `PLAN.md`** for what's done, what's next
and the known bugs. Some of the details below change as the plan moves on, so check them
against the code.

## Stack

- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4
- **Backend**: PocketBase (v0.42 on the server, SDK `pocketbase` 0.29), hosted on Coolify
- **Language**: TypeScript, strict mode. No JavaScript in `src` (`allowJs` is off).
- **Libraries**: Headless UI 2 (mobile menu dialog), Swiper (product image slider),
  react-photoswipe-gallery (lightbox), Font Awesome 7 (icons)

## Development

```bash
npm run dev        # http://localhost:3000
npm run build
npm run lint       # eslint . (flat config in eslint.config.mjs)
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write .
```

### PocketBase

Development uses the hosted PocketBase at `https://iobipb.karintomazic.com` (admin at `/_/`).
`.env.local` (not in git):

```
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_POCKETBASE_URL=https://iobipb.karintomazic.com
```

With `NEXT_PUBLIC_ENVIRONMENT=dev`, the code adds `NEXT_PUBLIC_PB_LOCAL_PORT` to the URL.
That's for a local Docker PocketBase (`docker compose up`), which isn't used right now.

- `pocketbase/pb_schema.json`: the collections. Import it with **Settings → Import collections**,
  and always turn on **"Merge with the existing collections"**. Without it, PocketBase deletes
  every collection not in the file, including the system ones.
- `scripts/seed-test-data.mjs`: adds the 7 categories and 3 TEST products. It asks for a
  superuser login: `node scripts/seed-test-data.mjs`.
- Never change records in the hosted PocketBase without asking. The client will add the
  real products there.

## Architecture

### PocketBase client and types

`src/lib/pocketbase.ts` holds the one PocketBase client (`pb`) the whole app uses, the record
types (`ProductRecord`, `CategoryRecord`) and `getImageUrl()`. `pb.collection("products")` is
typed, so results come back as `ProductRecord`. When a collection gets a new field, add it to
the record type there. Never create another `new PocketBase(...)`.

### PocketBase collections

- `category`: `category` (text, unique). The key used in URLs and translations:
  `fontane, korita, palcki, zivali, angelcki, kipci, stebri`
- `products`: `product_name` (text, required), `product_image` (files, up to 10, thumbs
  600x0 and 1200x0), `price` (number), `size` (text), `weight` (text), `category`
  (relation, required), `featured` (bool)

Rules: everyone can read, only superusers can write.

### Pages

- `/`: Hero, Categories, FeaturedProducts, GardenGallery, CTABanner, Footer
- `/products`: products from PocketBase, 20 per page, category filter from `?category=<key>`
- `/gallery`: static images from `public/img/`
- `/contact`: contact details and the map link

### i18n

UI strings are in `src/app/data/translations.ts`, keyed by `sl`, `en`, `de`. The language
is kept in `localStorage` through `LanguageContext` (default `sl`). Use them with
`translations[language].section`. Before using a string from outside (localStorage,
PocketBase) as a key, check it with `isLanguage()` or `isCategoryKey()`. Menu labels are in
`src/app/data/navigation.json`. Moving languages into the URL is step 5 in `PLAN.md`.

### Styling

- Tailwind v4 config lives in `src/app/globals.css` (there's no `tailwind.config.js`).
- Theme tokens: `bg-primary`, `text-secondary`, `bg-accent`, `bg-surface` (light green page
  background). Use them instead of hex codes.
- Fonts: `font-sans` (Open Sans, body) and `font-display` (Playfair Display, headings). They
  come from `next/font` in `src/app/utils/fonts.ts`.
- Dark mode: the `dark` class on `<html>`, set by `ThemeContext`.
- Icons: use `src/app/components/Icon.tsx`, not `FontAwesomeIcon` directly. It turns off Font
  Awesome's own CSS, which globals.css loads in Tailwind's base layer instead.

### Product images

Use `getImageUrl(product, fileName, thumb?)` from `src/lib/pocketbase.ts`. Don't build file
URLs by hand. Product cards use Swiper for several images and Photoswipe for the lightbox.
