module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb', 'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'eslint-disable-next-line class-methods-use-this': 'off',
  },
};
