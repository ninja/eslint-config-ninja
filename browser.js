const rules = require('./rules/import');

module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: './index.js',
	parserOptions: {
		ecmaFeatures: {jsx: true},
		sourceType: 'module',
	},
	plugins: ['import'],
	rules,
	settings: {'import/resolver': 'webpack'},
};
