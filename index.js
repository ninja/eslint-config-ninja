const rules = require('./rules/core');
const rulesAccessibility = require('./rules/accessibility');
const rulesReact = require('./rules/react');

Object.assign(rules, rulesAccessibility, rulesReact);

module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaFeatures: {jsx: true},
		sourceType: 'module',
	},
	plugins: ['jsx-a11y', 'react'],
	rules,
};
