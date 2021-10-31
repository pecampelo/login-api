module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'quote-props': 'off',
		'no-console': 'off',
		'object-shorthand': 'off',
		'no-return-await': 'off',
		'padded-blocks': 'off',
		'consistent-return': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'no-restricted-syntax': 'off',
		'eqeqeq': 'off',
		'no-empty': 'off',
	},
};
