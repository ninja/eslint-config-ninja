const rules = require('./rules/core');
const rulesAccessibility = require('./rules/accessibility');
const rulesImport = require('./rules/import');
const rulesReact = require('./rules/react');

Object.assign(rules, rulesAccessibility, rulesImport, rulesReact);

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
	plugins: ['jsx-a11y', 'import', 'react'],
	rules,
	settings: {
		'import/core-modules': ['ninja'],
		'import/resolver': 'webpack',
	},
};
