// Fills an empty PocketBase with the categories and a few TEST products,
// so the site has something to show during development.
//
// Run from the project folder:  node scripts/seed-test-data.mjs
// It asks for your PocketBase superuser email and password. The password
// is not shown while you type and is not saved anywhere.
//
// Safe to run twice: things that already exist are skipped.

import { readFile } from "node:fs/promises";
import { loginAsSuperuser } from "./pocketbase-login.mjs";

// The keys the site uses in its URLs and translations
const CATEGORIES = ["fontane", "korita", "palcki", "zivali", "angelcki", "kipci", "stebri"];

// Clearly marked as TEST, so they're easy to find and delete later
const PRODUCTS = [
  {
    product_name: "TEST Fontana",
    category: "fontane",
    price: 120,
    size: "60 × 40 × 40 cm",
    weight: "35 kg",
    featured: true,
    images: ["category-2.jpg", "hero_img3.jpg"],
  },
  {
    // no size and weight on purpose: the card should show neither
    product_name: "TEST Korito",
    category: "korita",
    price: 85.5,
    featured: true,
    images: ["category-1.jpg"],
  },
  {
    product_name: "TEST Palček",
    category: "palcki",
    price: 25,
    size: "30 cm",
    weight: "4 kg",
    featured: false,
    images: ["category-3.jpg", "hero_img5.jpg"],
  },
];

async function imageFile(fileName) {
  const buffer = await readFile(new URL(`../public/img/${fileName}`, import.meta.url));
  return new File([buffer], fileName, { type: "image/jpeg" });
}

const pb = await loginAsSuperuser();

// Categories: create the missing ones, remember every id by key
const categoryIds = {};
for (const key of CATEGORIES) {
  const existing = await pb
    .collection("category")
    .getFirstListItem(pb.filter("category = {:key}", { key }))
    .catch(() => null);
  if (existing) {
    categoryIds[key] = existing.id;
    console.log(`category ${key}: already there`);
  } else {
    const created = await pb.collection("category").create({ category: key });
    categoryIds[key] = created.id;
    console.log(`category ${key}: created`);
  }
}

// Products
for (const { images, category, ...fields } of PRODUCTS) {
  const existing = await pb
    .collection("products")
    .getFirstListItem(pb.filter("product_name = {:name}", { name: fields.product_name }))
    .catch(() => null);
  if (existing) {
    console.log(`product ${fields.product_name}: already there`);
    continue;
  }
  await pb.collection("products").create({
    ...fields,
    category: categoryIds[category],
    product_image: await Promise.all(images.map(imageFile)),
  });
  console.log(`product ${fields.product_name}: created`);
}

pb.authStore.clear();
console.log("\nDone.");
