# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Frontend**: Next.js 15 (App Router), React 18, Tailwind CSS
- **Backend**: PocketBase v0.23.3 (self-hosted via Docker)
- **Language**: JavaScript only (no TypeScript)

## Development Setup

### Backend (PocketBase)
```bash
docker compose up
```
Requires a `.env` file (copy from `.env.example`). PocketBase runs on port `8082` locally, admin UI at `http://127.0.0.1:8082/_/`.

The `./data` directory is bind-mounted to `/pb/pb_data` inside the container — all PocketBase data persists there.

### Frontend
```bash
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Environment Variables

`NEXT_PUBLIC_ENVIRONMENT=dev` switches PocketBase URL construction to append the local port:
```js
const pb = new PocketBase(
  isDev
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}:${process.env.NEXT_PUBLIC_PB_LOCAL_PORT}`
    : process.env.NEXT_PUBLIC_POCKETBASE_URL
);
```
In production, `NEXT_PUBLIC_POCKETBASE_URL` is used alone (no port).

## Architecture

### PocketBase Collections
The app expects two collections:
- `products` — fields: `product_name`, `product_image` (file, multiple), `price`, `size`, `weight`, `category` (relation to `category`)
- `category` — fields: `category` (text, used as the URL filter key e.g. `fontane`, `zivali`)

### Pages
- `/` — static homepage: Hero, Categories, GardenGallery, Testimonials, Contact
- `/products` — dynamic, fetches from PocketBase with pagination (20/page) and category filtering via URL param `?category=<key>`
- `/gallery` — static grid of local `/public/img/` images
- `/contact` — static contact info

### i18n
All UI strings live in `src/app/data/translations.jsx` as a plain object keyed by language code (`sl`, `en`, `de`). The active language is stored in `localStorage` and provided via `LanguageContext`. Default language is Slovenian (`sl`).

To add a new string: add it to all three language objects in `translations.jsx`, then consume via `const t = translations[language].section`.

### Theming
Dark mode uses Tailwind's `class` strategy. `ThemeContext` toggles the `dark` class on `<html>` and persists to `localStorage`. Brand colors are CSS variables in `globals.css` (`--color-primary: #60914A`, `--color-secondary`, `--color-accent`).

### Fonts
Defined in `src/app/utils/fonts.jsx`. Open Sans is the body font (applied in `layout.jsx`); Playfair Display is used for headings and applied per-component via `playfairDisplay.className`.

### Product Images
Images are served directly from PocketBase using:
```js
`${baseUrl}/api/files/${item.collectionId}/${item.id}/${image}`
```
Each product card uses Swiper for multi-image slideshows and `react-photoswipe-gallery` for lightbox zoom.

### Category Filtering
Homepage category cards link to `/products?category=<categoryKey>` (e.g. `fontane`, `zivali`). The products page reads the `category` URL param, finds the matching category record by its `category` field, then filters products by that category's ID.
