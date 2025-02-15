const jsonc = require("eslint-plugin-jsonc");
const jsoncParser = require("jsonc-eslint-parser");

module.exports = [
  {
    files: [".prettierrc.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: { jsonc },
    rules: {
      "jsonc/sort-keys": "error",
    },
  },
];
