module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'react/prop-types': 'off',
  },
  extends: ['wesbos'],
};
