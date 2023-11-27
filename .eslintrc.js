module.exports = {
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "airbnb",
    "prettier",
    "plugin:jest/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "prettier", "jest"],
  rules: {
    "react/sort-comp": [
      1,
      {
        order: ["static-methods", "lifecycle", "everything-else", "rendering"],
        groups: {
          rendering: ["/^render.+$/", "render"],
        },
      },
    ],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "func-names": 0,
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-var": "error",
    "no-bitwise": 0,
    "comma-dangle": 0,
    "react/destructuring-assignment": 0,
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
      },
    ],
    "react/require-default-props": 0,
    "react/no-unused-prop-types": [2, { skipShapeProps: false }],
    radix: ["error", "as-needed"],
    "react/display-name": 0,
    "react/jsx-props-no-spreading": "off",
  },
  settings: {
    react: {
      "jsx-uses-react ": true,
    },
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
