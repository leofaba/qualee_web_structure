module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
  },
};
