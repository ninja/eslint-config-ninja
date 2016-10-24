module.exports = {
	'accessor-pairs': 'error',
	'array-bracket-spacing': 'error',
	'array-callback-return': 'error',
	'arrow-body-style': 'error',
	'arrow-parens': ['error', 'as-needed'],
	'arrow-spacing': 'error',
	'block-scoped-var': 'error',
	'block-spacing': 'error',
	'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
	'callback-return': 'error',
	'camelcase': 'error',
	'class-methods-use-this': 'error',
	'comma-dangle': ['error', 'always-multiline'],
	'comma-spacing': 'error',
	'comma-style': 'error',
	'complexity': ['error', {max: 8}],
	'computed-property-spacing': 'error',
	'consistent-return': 'off',
	'consistent-this': 'error',
	'constructor-super': 'error',
	'curly': 'error',
	'default-case': 'error',
	'dot-location': ['error', 'property'],
	'dot-notation': 'error',
	'eol-last': 'error',
	'eqeqeq': 'error',
	'func-call-spacing': 'error',
	'func-name-matching': 'error',
	'func-names': 'error',
	'func-style': ['error', 'declaration'],
	'generator-star-spacing': ['error', 'both'],
	'global-require': 'error',
	'guard-for-in': 'error',
	'handle-callback-err': ['error', 'error'],
	'id-blacklist': 'off',
	'id-length': 'off',
	'id-match': 'off',
	'indent': ['error', 'tab', {SwitchCase: 1}],
	'init-declarations': 'off',
	'jsx-quotes': 'error',
	'key-spacing': 'error',
	'keyword-spacing': 'error',
	'line-comment-position': 'off',
	'linebreak-style': 'error',
	'lines-around-comment': 'off',
	'lines-around-directive': 'error',
	'max-depth': 'error',
	'max-len': ['error', {
		ignoreComments: true,
		ignoreTemplateLiterals: true,
		ignoreUrls: true,
		tabWidth: 4,
	}],
	'max-lines': ['error', {
		max: 300,
		skipBlankLines: true,
		skipComments: true,
	}],
	'max-nested-callbacks': ['error', {max: 3}],
	'max-params': 'error',
	'max-statements': 'off',
	'max-statements-per-line': ['error', {max: 2}],
	'multiline-ternary': 'off',
	'new-cap': 'error',
	'new-parens': 'error',
	'newline-after-var': 'error',
	'newline-before-return': 'error',
	'newline-per-chained-call': 'error',
	'no-alert': 'error',
	'no-array-constructor': 'error',
	'no-bitwise': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-catch-shadow': 'off',
	'no-class-assign': 'error',
	'no-cond-assign': ['error', 'always'],
	'no-confusing-arrow': 'error',
	'no-console': 'off',
	'no-const-assign': 'error',
	'no-constant-condition': 'error',
	'no-continue': 'error',
	'no-control-regex': 'error',
	'no-debugger': 'error',
	'no-delete-var': 'error',
	'no-div-regex': 'error',
	'no-dupe-args': 'error',
	'no-dupe-class-members': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-duplicate-imports': 'error',
	'no-else-return': 'error',
	'no-empty': 'error',
	'no-empty-character-class': 'error',
	'no-empty-function': 'error',
	'no-empty-pattern': 'error',
	'no-eq-null': 'error',
	'no-eval': 'error',
	'no-ex-assign': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-boolean-cast': 'error',
	'no-extra-label': 'error',
	'no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
	'no-extra-semi': 'error',
	'no-fallthrough': 'error',
	'no-floating-decimal': 'error',
	'no-func-assign': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-implied-eval': 'error',
	'no-inline-comments': 'off',
	'no-inner-declarations': 'error',
	'no-invalid-regexp': 'error',
	'no-invalid-this': 'error',
	'no-irregular-whitespace': 'error',
	'no-iterator': 'error',
	'no-label-var': 'error',
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-lonely-if': 'error',
	'no-loop-func': 'error',
	'no-magic-numbers': ['error', {
		detectObjects: false,
		enforceConst: true,
		ignore: [0, 1, 2, 3],
		ignoreArrayIndexes: true,
	}],
	'no-mixed-operators': 'error',
	'no-mixed-requires': 'error',
	'no-mixed-spaces-and-tabs': 'error',
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-multiple-empty-lines': 'error',
	'no-native-reassign': 'error',
	'no-negated-condition': 'error',
	'no-negated-in-lhs': 'error',
	'no-nested-ternary': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-object': 'error',
	'no-new-require': 'error',
	'no-new-symbol': 'error',
	'no-new-wrappers': 'error',
	'no-obj-calls': 'error',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-param-reassign': 'error',
	'no-path-concat': 'error',
	'no-plusplus': 'error',
	'no-process-env': 'error',
	'no-process-exit': 'error',
	'no-proto': 'error',
	'no-prototype-builtins': 'error',
	'no-redeclare': 'error',
	'no-regex-spaces': 'error',
	'no-restricted-globals': ['error', 'event'],
	'no-restricted-imports': ['error', 'underscore'],
	'no-restricted-modules': ['error', 'underscore'],
	'no-restricted-properties': 'error',
	'no-restricted-syntax': [
		'error',
		'DebuggerStatement',
		'ForInStatement',
		'LabeledStatement',
		'WithStatement',
	],
	'no-return-assign': 'error',
	'no-script-url': 'error',
	'no-self-assign': 'error',
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-shadow': 'off',
	'no-shadow-restricted-names': 'error',
	'no-spaced-func': 'error',
	'no-sparse-arrays': 'error',
	'no-sync': 'off',
	'no-tabs': 'off',
	'no-template-curly-in-string': 'error',
	'no-ternary': 'off',
	'no-this-before-super': 'error',
	'no-throw-literal': 'error',
	'no-trailing-spaces': 'error',
	'no-undef': 'error',
	'no-undef-init': 'error',
	'no-undefined': 'error',
	'no-underscore-dangle': 'error',
	'no-unexpected-multiline': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unneeded-ternary': 'error',
	'no-unreachable': 'error',
	'no-unsafe-finally': 'error',
	'no-unsafe-negation': 'error',
	'no-unused-expressions': 'error',
	'no-unused-labels': 'error',
	'no-unused-vars': 'error',
	'no-use-before-define': 'error',
	'no-useless-call': 'error',
	'no-useless-computed-key': 'error',
	'no-useless-concat': 'error',
	'no-useless-constructor': 'error',
	'no-useless-escape': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'no-void': 'error',
	'no-warning-comments': 'error',
	'no-whitespace-before-property': 'error',
	'no-with': 'error',
	'object-curly-newline': 'error',
	'object-curly-spacing': 'error',
	'object-property-newline': 'error',
	'object-shorthand': 'error',
	'one-var': ['error', 'never'],
	'one-var-declaration-per-line': 'error',
	'operator-assignment': 'error',
	'operator-linebreak': 'error',
	'padded-blocks': ['error', 'never'],
	'prefer-arrow-callback': 'error',
	'prefer-const': 'error',
	'prefer-numeric-literals': 'error',
	'prefer-reflect': 'error',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'quote-props': ['error', 'consistent-as-needed'],
	'quotes': ['error', 'single'],
	'radix': 'error',
	'require-jsdoc': 'off',
	'require-yield': 'error',
	'rest-spread-spacing': 'error',
	'semi': 'error',
	'semi-spacing': 'error',
	'sort-imports': 'off',
	'sort-keys': 'error',
	'sort-vars': 'error',
	'space-before-blocks': 'error',
	'space-before-function-paren': 'error',
	'space-in-parens': 'error',
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'spaced-comment': 'error',
	'strict': 'error',
	'symbol-description': 'error',
	'template-curly-spacing': 'error',
	'unicode-bom': 'error',
	'use-isnan': 'error',
	'valid-jsdoc': 'off',
	'valid-typeof': 'error',
	'vars-on-top': 'error',
	'wrap-iife': 'error',
	'wrap-regex': 'error',
	'yield-star-spacing': ['error', 'both'],
	'yoda': 'error',
};
