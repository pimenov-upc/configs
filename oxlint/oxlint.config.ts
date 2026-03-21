import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "import", "oxc", "vue", "vitest"],
  env: {
    builtin: true,
    es2024: true,
    browser: true,
    node: true,
  },
  ignorePatterns: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
  categories: {
    correctness: "warn",
  },
  rules: {
    eqeqeq: "error",
    "default-case": "error",
    "default-case-last": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-debugger": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-with": "error",
    "no-array-constructor": "error",
    "no-object-constructor": "error",
    "no-new-wrappers": "error",
    "no-extend-native": "error",
    "import/no-default-export": "error",
    "typescript/no-namespace": "error",
    "typescript/ban-ts-comment": "error",
    "typescript/no-explicit-any": "warn",
    "typescript/no-non-null-assertion": "warn",
    "typescript/use-unknown-in-catch-callback-variable": "error",
    "typescript/no-wrapper-object-types": "error",
    "oxc/no-const-enum": "error",
  },
});