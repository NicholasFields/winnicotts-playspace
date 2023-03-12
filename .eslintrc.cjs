module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/jsx-max-props-per-line': [1, { 'maximum': 1, 'when': 'always' }],
		'react/jsx-first-prop-new-line': [1, 'multiline'],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-closing-bracket-location': [1, 'line-aligned'],
		'react/jsx-closing-tag-location': 1,
		'react/jsx-curly-spacing': [1, 'always'],
		'react/jsx-equals-spacing': [1, 'never'],
		'react/jsx-tag-spacing': [1, { 'beforeSelfClosing': 'always' }],
		'react/jsx-wrap-multilines': [1, { 'declaration': 'parens-new-line', 'assignment': 'parens-new-line', 'return': 'parens-new-line', 'arrow': 'parens-new-line', 'condition': 'parens-new-line', 'logical': 'parens-new-line', 'prop': 'parens-new-line' }],
		'react/jsx-curly-newline': [1, { 'multiline': 'consistent', 'singleline': 'consistent' }],
		'react/jsx-props-no-multi-spaces': 1,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-child-element-spacing': 0,
		'no-multi-spaces': 1,
		'react/jsx-fragments': 0,
	
	}
};
