import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import svgJsxPlugin from "eslint-plugin-svg-jsx";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "svg-jsx": svgJsxPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "none" }],
      "spaced-comment": "warn",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "react/no-children-prop": "off",
      "require-await": "warn",
      "react-hooks/exhaustive-deps": "off",
      "react/display-name": "off",
      "svg-jsx/camel-case-dash": "warn",
      "svg-jsx/camel-case-colon": "warn",
      "svg-jsx/no-style-string": "warn",
    },
  },
]);
