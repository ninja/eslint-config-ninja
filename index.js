const rules = require('./rules/core');

module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parserOptions: {sourceType: 'module'},
	rules,
};
