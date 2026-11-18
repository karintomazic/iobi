import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

// ESLint's "flat config" (the only format ESLint 10 reads).
// Next.js' recommended rules, including React hooks and Core Web Vitals.
const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
  prettier,
];

export default eslintConfig;
