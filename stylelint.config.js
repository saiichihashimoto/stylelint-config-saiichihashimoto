/* eslint key-spacing: ['error', { beforeColon: false, afterColon: true }] */

module.exports = {
	plugins: [
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-no-z-index',
		'stylelint-order',
	],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-airbnb',
	],
	rules: {
		'order/properties-order': [
			[
				'composes',
			],
			{
				unspecified: 'bottomAlphabetical',
			},
		],

		'plugin/declaration-block-no-ignored-properties': true,
		'plugin/no-z-index': [
			'always',
			{
				message: 'Use css variables for z-indexes',
			},
		],

		'at-rule-name-space-after': 'always',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: 'value',
			},
		],
		'at-rule-no-vendor-prefix': true,
		'block-no-empty': [
			true,
			{
				severity: 'warning',
			},
		],
		'block-opening-brace-newline-before': 'never-single-line',
		'color-named': 'never',
		'color-no-invalid-hex': true,
		'custom-property-empty-line-before': 'never',
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: [
					'consecutive-duplicates-with-different-values',
				],
				ignoreProperties: [
					'composes',
				],
			},
		],
		'declaration-colon-space-after': 'always-single-line',
		'declaration-empty-line-before': 'never',
		'function-url-no-scheme-relative': true,
		'function-comma-newline-before': 'never-multi-line',
		'function-url-quotes': 'always',
		'indentation': 'tab',
		'max-nesting-depth': null,
		'media-feature-name-no-vendor-prefix': true,
		'media-query-list-comma-newline-before': 'never-multi-line',
		'property-no-unknown': [
			true,
			{
				ignoreProperties: [
					'composes',
				],
			},
		],
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always',
			{
				except: [
					'after-single-line-comment',
					'first-nested',
				],
			},
		],
		'selector-class-pattern': '^[a-z][a-z0-9]*([A-Z][a-z0-9]+)*$',
		'selector-max-combinators': [
			1,
			{
				message: 'Use composition and/or more classes over nested selectors. https://github.com/css-modules/css-modules#composition http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css',
				severity: 'warning',
			},
		],
		'selector-max-compound-selectors': [
			2,
			{
				message: 'Use composition and/or more classes over nested selectors. https://github.com/css-modules/css-modules#composition http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css',
				severity: 'warning',
			},
		],
		'selector-max-type': [
			0,
			{
				message: "Don't style html elements. It leads to css specificity issues.",
			},
		],
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: [
					'global',
				],
			},
		],
		'shorthand-property-no-redundant-values': [
			true,
			{
				severity: 'warning',
			},
		],
		'string-quotes': 'single',
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: [
					'composes',
				],
			},
		],
		'value-list-comma-newline-before': 'never-multi-line',
		'value-no-vendor-prefix': true,
	},
};
