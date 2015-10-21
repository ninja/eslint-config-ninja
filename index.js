exports.env = {node: true};

exports.ecmaFeatures = {jsx: true}

exports.extends = 'eslint:recommended';

exports.parser = 'babel-eslint';

exports.plugins = ['eslint-plugin-react'];

exports.rules = {
  'array-bracket-spacing': [1, 'never'],
  'block-spacing': [2, 'always'],
  'brace-style': [1, 'stroustrup', { 'allowSingleLine': true }],
  'camelcase': [1, {
    'properties': 'always'
  }],
  'comma-spacing': 1,
  'comma-style': 1,
  'consistent-this': [2, 'self'],
  'curly': 2,
  'eol-last': 1,
  'func-style': [2, 'declaration'],
  'indent': [2, 2, {
    'SwitchCase': 1,
    'VariableDeclarator': 1
  }],
  'key-spacing': 1,
  'linebreak-style': [2, 'unix'],
  'max-nested-callbacks': [1, 6],
  'new-cap': 2,
  'new-parens': 2,
  'newline-after-var': 1,
  'no-array-constructor': 2,
  'no-console': 0,
  'no-const-assign': 2,
  'no-continue': 1,
  'no-debugger': 1,
  'no-delete-var': 2,
  'no-label-var': 2,
  'no-lonely-if': 1,
  'no-mixed-spaces-and-tabs': 1,
  'no-multi-spaces': 1,
  'no-multiple-empty-lines': 1,
  'no-nested-ternary': 1,
  'no-new-object': 2,
  'no-shadow-restricted-names': 2,
  'no-spaced-func': 1,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-undefined': 2,
  'no-unused-vars': 1,
  'no-use-before-define': 2,
  'no-extra-parens': [1, 'all'],
  'object-curly-spacing': [1, 'never'],
  'one-var': [1, {
    'let': 'never',
    'const': 'never'
  }],
  'operator-assignment': [1, 'always'],
  'operator-linebreak': [1, 'after'],
  'padded-blocks': [1, 'never'],
  'react/display-name': [1, {'acceptTranspilerName': true}],
  'react/forbid-prop-types': 1,
  'react/jsx-boolean-value': 1,
  'react/jsx-closing-bracket-location': [1, 'after-props'],
  'react/jsx-curly-spacing': 1,
  'react/jsx-indent-props': 0,
  'react/jsx-max-props-per-line': 0,
  'react/jsx-no-duplicate-props': 1,
  'react/jsx-no-literals': 1,
  'react/jsx-no-undef': 1,
  'react/jsx-sort-prop-types': 1,
  'react/jsx-sort-props': 1,
  'react/jsx-uses-react': 1,
  'react/jsx-uses-vars': 1,
  'react/no-danger': 1,
  'react/no-did-mount-set-state': 1,
  'react/no-did-update-set-state': 1,
  'react/no-direct-mutation-state': 1,
  'react/no-multi-comp': 1,
  'react/no-set-state': 0,
  'react/no-unknown-property': 1,
  'react/prop-types': 1,
  'react/react-in-jsx-scope': 1,
  'react/require-extension': 1,
  'react/self-closing-comp': 1,
  'react/sort-comp': 1,
  'react/wrap-multilines': [1, {'declaration': false, 'assignment': false, 'return': true}],
  'quote-props': [1, 'as-needed'],
  'quotes': [1, 'single'],
  'semi': [2, 'always'],
  'semi-spacing': [1, {
    'after': true,
    'before': false
  }],
  'space-after-keywords': [1, 'always'],
  'space-before-blocks': [1, 'always'],
  'space-before-function-paren': [1, 'always'],
  'space-in-parens': [1, 'never'],
  'space-infix-ops': [1],
  'space-return-throw-case': [1],
  'space-unary-ops': [1],
  'spaced-comment': [1, 'always']
}
