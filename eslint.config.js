import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,jsx,ts,tsx}"] },
  { ignores: ["/node_modules/", "dist/", ".vite"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      sourceType: "module",
    },
  },
  {
    settings: {
      react: {
        version: "18.3",
      },
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      semi: "error",
      indent: ["error", 2],
      "react/react-in-jsx-scope": "off",
    },
  },
];
