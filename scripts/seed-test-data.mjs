// Fills an empty PocketBase with the categories and a few TEST products,
// so the site has something to show during development.
//
// Run from the project folder:  node scripts/seed-test-data.mjs
// It asks for your PocketBase superuser email and password. The password
// is not shown while you type and is not saved anywhere.
//
// Safe to run twice: things that already exist are skipped.

import PocketBase from "pocketbase";
import { readFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

// Read NEXT_PUBLIC_POCKETBASE_URL from .env.local (same address the site uses)
try {
  process.loadEnvFile(".env.local");
} catch {
  // no .env.local: fall back to the variable from the shell, if any
}
const url = process.env.NEXT_PUBLIC_POCKETBASE_URL;
if (!url) {
  console.error("NEXT_PUBLIC_POCKETBASE_URL is not set (see .env.example).");
  process.exit(1);
}

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

/** Asks a question and hides what's typed (for the password). */
function askHidden(question) {
  return new Promise((resolve) => {
    stdout.write(question);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    let answer = "";
    const onData = (chunk) => {
      for (const char of chunk) {
        if (char === "\r" || char === "\n") {
          stdin.setRawMode(false);
          stdin.pause();
          stdin.off("data", onData);
          stdout.write("\n");
          resolve(answer);
          return;
        } else if (char === "\u0003") {
          // Ctrl+C
          stdout.write("\n");
          process.exit(1);
        } else if (char === "\u007f") {
          // Backspace
          answer = answer.slice(0, -1);
        } else {
          answer += char;
        }
      }
    };
    stdin.on("data", onData);
  });
}

async function imageFile(fileName) {
  const buffer = await readFile(new URL(`../public/img/${fileName}`, import.meta.url));
  return new File([buffer], fileName, { type: "image/jpeg" });
}

const pb = new PocketBase(url);
console.log(`PocketBase: ${url}`);

const rl = createInterface({ input: stdin, output: stdout });
const email = (await rl.question("Superuser email: ")).trim();
rl.close();
const password = await askHidden("Password (hidden): ");

try {
  await pb.collection("_superusers").authWithPassword(email, password);
} catch {
  console.error("Login failed. Check the email and password.");
  process.exit(1);
}
console.log("Logged in.\n");

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
