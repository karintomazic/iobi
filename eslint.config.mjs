import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint's "flat config" (the only format ESLint 10 reads).
// Next.js' recommended rules, including React hooks and Core Web Vitals.
const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
];

export default eslintConfig;
