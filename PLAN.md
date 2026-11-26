# IOBI upgrade plan

Website for IOBI, a small business in Benedikt, Slovenia, that makes decorative concrete
garden products. The goal is a site that's finished, fast and accessible, with clean,
tested code. It's also a portfolio project.

All work happens on the `redesign` branch and is merged into `main` when finished.

## Steps

- [x] **1. Clean up and fix the build**
  - [x] `next build` failed: `<a>` → `<Link>` for internal links, `<Suspense>` around `useSearchParams`
  - [x] Remove unused components, the unused font and the fake testimonials
  - [x] Mobile menu closes after a link is tapped
  - [x] PocketBase on Coolify (`iobipb.karintomazic.com`), schema in `pocketbase/pb_schema.json`
  - [x] `scripts/seed-test-data.mjs` for categories and TEST products
- [x] **2. Update libraries**
  - [x] Next 16, React 19, Tailwind v4, Headless UI 2, PocketBase SDK 0.29, Swiper 14,
        Photoswipe Gallery 4, Font Awesome 7, ESLint 9 (flat config)
  - [x] Remove unused packages
  - [x] Brand colours and fonts as Tailwind theme tokens
- [x] **3. TypeScript**
  - [x] Rename files to `.ts` / `.tsx`, strict mode
  - [x] Types for PocketBase records (`products`, `category`) and for the translations
  - [x] One PocketBase client in `lib/pocketbase.ts`
- [ ] **4. Fix bugs**
  - [x] Pagination: clicking page 5 on page 1 goes to page 2
  - [x] Product cards show made-up size/weight ("50 × 30 × 25 cm", "12 kg") when the product has none
  - [x] Price format: "85,50 €", not "85.5 €"
  - [x] Homepage "featured products" should use the `featured` field, not the first 4
  - [ ] Category and page in the URL, so Back and shared links work
  - [ ] Race condition when switching categories quickly
  - [ ] Hardcoded Slovenian or English text (footer, empty state, errors, "Poglej", image alt texts)
  - [x] English names missing in `navigation.json`
  - [ ] Dark mode flash on load (theme is read from localStorage after the first paint)
  - [ ] Contact details (phone, email, address, maps link) in one place instead of five
  - [ ] PocketBase filter: use `pb.filter()` instead of putting the value straight into the string
- [ ] **5. Languages in the URL** (`/sl`, `/en`, `/de`)
  - [ ] Google can index all three languages, correct `<html lang>`, no language flash
- [ ] **6. Storybook and tests**
  - [ ] Storybook 10 + Vitest + MSW (fake PocketBase), a story for every component
  - [ ] Interaction tests (filters, pagination, mobile menu), axe accessibility checks
  - [ ] Playwright end-to-end tests for the main flows (homepage → category → page 2,
        switching language, dark mode), axe check on every page
  - [ ] GitHub Actions: lint, type check, Vitest and Playwright on every push
- [ ] **7. Accessibility, images, SEO**
  - [ ] Contrast: white text on `#7a9a6b` is 3.2:1 (needs 4.5:1). `#5c7a4e` passes (4.8:1)
  - [ ] Labels for icon-only buttons (pagination arrows, theme toggle), skip link, focus styles
  - [ ] `next/image` for all images
  - [ ] Title and description per page, sitemap, Open Graph image, 404 page
- [ ] **8. Finish**
  - [ ] Product detail page `/products/[id]` with a shareable link
  - [ ] README
  - [ ] Deploy the frontend on Coolify, merge `redesign` into `main`
  - [ ] Delete the TEST products, the client adds the real ones

## Open decisions

- Darker green for text and buttons (`#5c7a4e` or similar): ask the client
- Real product photos and texts: from the client
