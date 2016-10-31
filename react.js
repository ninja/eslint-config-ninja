const rulesAccessibility = require('./rules/accessibility');
const rulesReact = require('./rules/react');

const rules = Object.assign({}, rulesAccessibility, rulesReact);

module.exports = {
	env: {browser: true},
	extends: './index.js',
	parserOptions: {ecmaFeatures: {jsx: true}},
	plugins: ['jsx-a11y', 'react'],
	rules,
};
