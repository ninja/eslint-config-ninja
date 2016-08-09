const rules = require('./rules/core');
const rulesAccessibility = require('./rules/accessibility');
const rulesImport = require('./rules/import');
const rulesReact = require('./rules/react');
const rulesSorting = require('./rules/sorting');

Object.assign(rules, rulesAccessibility, rulesImport, rulesReact, rulesSorting);

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {jsx: true},
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'import', 'react', 'sorting'],
  rules,
  settings: {
    'import/core-modules': ['ninja'],
    'import/resolver': 'webpack',
  },
};
