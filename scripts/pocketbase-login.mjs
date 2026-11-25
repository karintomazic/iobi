// Shared by the scripts in this folder: connects to the PocketBase from
// .env.local and logs in as a superuser. The password is not shown while
// you type and is not saved anywhere.

import PocketBase from "pocketbase";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

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

/** Returns a PocketBase client logged in as a superuser. */
export async function loginAsSuperuser() {
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
  return pb;
}
