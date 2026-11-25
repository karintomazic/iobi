// Adds the products from scripts/products-import.json to PocketBase, with
// their photos. Price, size and weight are left empty on purpose: fill them
// in later in the PocketBase admin.
//
// Run from the project folder, with the folder of web-sized photos:
//
//   node scripts/import-products.mjs "../IOBI - slike/za-splet" --dry-run
//   node scripts/import-products.mjs "../IOBI - slike/za-splet"
//
// --dry-run only checks that every photo and category exists, without
// logging in or changing anything. Safe to run twice: products whose name
// already exists are skipped.

import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { loginAsSuperuser } from "./pocketbase-login.mjs";

const [photoDir, flag] = process.argv.slice(2);
const dryRun = flag === "--dry-run";
if (!photoDir) {
  console.error('Usage: node scripts/import-products.mjs "<photo folder>" [--dry-run]');
  process.exit(1);
}

const CATEGORIES = ["fontane", "korita", "palcki", "zivali", "angelcki", "kipci", "stebri"];

const products = JSON.parse(
  await readFile(new URL("./products-import.json", import.meta.url), "utf8"),
);

/** Photo number from the JSON (e.g. 2279) → its file in the photo folder. */
const photoPath = (number) => path.join(photoDir, `IMG_${number}.jpg`);

// Check everything first, so a typo doesn't stop the import halfway
const problems = [];
for (const product of products) {
  if (!CATEGORIES.includes(product.category)) {
    problems.push(`${product.product_name}: unknown category "${product.category}"`);
  }
  if (product.images.length === 0 || product.images.length > 10) {
    problems.push(`${product.product_name}: needs 1 to 10 photos`);
  }
  for (const number of product.images) {
    await access(photoPath(number)).catch(() =>
      problems.push(`${product.product_name}: photo not found: ${photoPath(number)}`),
    );
  }
}
if (problems.length > 0) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`${products.length} products, all photos and categories found.`);
if (dryRun) process.exit(0);

const pb = await loginAsSuperuser();

const categoryIds = {};
for (const key of CATEGORIES) {
  const record = await pb
    .collection("category")
    .getFirstListItem(pb.filter("category = {:key}", { key }))
    .catch(() => null);
  if (!record) {
    console.error(`Category "${key}" is missing in PocketBase. Run seed-test-data.mjs first.`);
    process.exit(1);
  }
  categoryIds[key] = record.id;
}

let created = 0;
let skipped = 0;
for (const [index, { product_name, category, images }] of products.entries()) {
  const label = `[${index + 1}/${products.length}] ${product_name}`;
  const existing = await pb
    .collection("products")
    .getFirstListItem(pb.filter("product_name = {:name}", { name: product_name }))
    .catch(() => null);
  if (existing) {
    console.log(`${label}: already there`);
    skipped++;
    continue;
  }
  const files = await Promise.all(
    images.map(async (number) => {
      const buffer = await readFile(photoPath(number));
      return new File([buffer], `IMG_${number}.jpg`, { type: "image/jpeg" });
    }),
  );
  await pb.collection("products").create({
    product_name,
    category: categoryIds[category],
    product_image: files,
    featured: false,
  });
  console.log(`${label}: created`);
  created++;
}

pb.authStore.clear();
console.log(`\nDone. ${created} created, ${skipped} already there.`);
