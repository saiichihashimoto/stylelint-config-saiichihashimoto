/* eslint-disable import/no-commonjs, import/no-unused-modules, no-magic-numbers */
/*
 *const recessOrder = require('stylelint-config-recess-order');
 */

module.exports = {
	/*
	 *plugins: [
	 *    'stylelint-declaration-block-no-ignored-properties',
	 *    'stylelint-order',
	 *    'stylelint-scss',
	 *],
	 */

	rules: {
		// https://stylelint.io/user-guide/rules#possible-errors
		'at-rule-no-unknown':                                [true, { ignoreAtRules: ['import'] }],
		'block-no-empty':                                    [true, { ignore: 'comments' }],
		'color-no-invalid-hex':                              true,
		'comment-no-empty':                                  true,
		'declaration-block-no-duplicate-properties':         true,
		'declaration-block-no-shorthand-property-overrides': true,
		'font-family-no-duplicate-names':                    true,
		'font-family-no-missing-generic-family-keyword':     [true, { severity: 'warning' }],
		'function-calc-no-invalid':                          true,
		'function-calc-no-unspaced-operator':                true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'keyframe-declaration-no-important':                 true,
		'media-feature-name-no-unknown':                     true,
		'no-descending-specificity':                         true,
		'no-duplicate-at-import-rules':                      true,
		'no-duplicate-selectors':                            true,
		'no-empty-source':                                   [true, { severity: 'warning' }],
		'no-extra-semicolons':                               true,
		'no-invalid-double-slash-comments':                  null, // Should be enabled for scss https://github.com/stylelint/stylelint/issues/3128
		'property-no-unknown':                               [true, { ignoreProperties: ['composes'] }],
		'selector-pseudo-class-no-unknown':                  [true, { ignorePseudoClasses: ['global'] }],
		'selector-pseudo-element-no-unknown':                true,
		'selector-type-no-unknown':                          true,
		'string-no-newline':                                 true,
		'unit-no-unknown':                                   true,

		// https://stylelint.io/user-guide/rules#limit-language-features
		'at-rule-blacklist':                                  null,
		'at-rule-no-vendor-prefix':                           true,
		'at-rule-property-requirelist':                       null,
		'at-rule-whitelist':                                  null,
		'color-named':                                        ['never', { ignoreProperties: 'composes' }],
		'color-no-hex':                                       null,
		'comment-word-blacklist':                             null,
		'custom-media-pattern':                               null,
		'custom-property-pattern':                            null,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-single-line-max-declarations':     0,
		'declaration-no-important':                           true,
		'declaration-property-unit-blacklist':                null,
		'declaration-property-unit-whitelist':                null,
		'declaration-property-value-blacklist':               null,
		'declaration-property-value-whitelist':               null,
		'function-blacklist':                                 null,
		'function-url-no-scheme-relative':                    true,
		'function-url-scheme-blacklist':                      null,
		'function-url-scheme-whitelist':                      ['data', '/^http/'],
		'function-whitelist':                                 null,
		'keyframes-name-pattern':                             null,
		'max-nesting-depth':                                  null,
		'media-feature-name-blacklist':                       null,
		'media-feature-name-no-vendor-prefix':                true,
		'media-feature-name-value-whitelist':                 null,
		'media-feature-name-whitelist':                       null,
		'no-unknown-animations':                              null,
		'number-max-precision':                               null,
		'property-blacklist':                                 null,
		'property-no-vendor-prefix':                          true,
		'property-whitelist':                                 null,
		'selector-attribute-operator-blacklist':              null,
		'selector-attribute-operator-whitelist':              null,
		'selector-class-pattern':                             '^[a-z][a-z0-9]*([A-Z][a-z0-9]+)*$',
		'selector-combinator-blacklist':                      null,
		'selector-combinator-whitelist':                      null,
		'selector-id-pattern':                                null,
		'selector-max-class':                                 null,
		'selector-max-attribute':                             [0, { severity: 'warning' }],
		'selector-max-combinators':                           [1, {
			message:  'Use composition and/or more classes over nested selectors. https://github.com/css-modules/css-modules#composition http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css',
			severity: 'warning',
		}],
		'selector-max-compound-selectors': [2, {
			message:  'Use composition and/or more classes over nested selectors. https://github.com/css-modules/css-modules#composition http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css',
			severity: 'warning',
		}],
		'selector-max-empty-lines':               0,
		'selector-max-id':                        0,
		'selector-max-pseudo-class':              null,
		'selector-max-specificity':               null,
		'selector-max-type':                      [0, { message: 'Don\'t style html elements. It leads to css specificity issues.' }],
		'selector-max-universal':                 0,
		'selector-nested-pattern':                null,
		'selector-no-qualifying-type':            null,
		'selector-no-vendor-prefix':              true,
		'selector-pseudo-class-blacklist':        null,
		'selector-pseudo-class-whitelist':        null,
		'selector-pseudo-element-blacklist':      null,
		'selector-pseudo-element-whitelist':      null,
		'shorthand-property-no-redundant-values': null,
		'time-min-milliseconds':                  null,
		'unit-blacklist':                         null,
		'unit-whitelist':                         null,
		'value-no-vendor-prefix':                 true,

		// https://stylelint.io/user-guide/rules#stylistic-issues
		'at-rule-empty-line-before':                      ['always', { except: ['first-nested'] }],
		'at-rule-name-case':                              'lower',
		'at-rule-name-newline-after':                     'always-multi-line',
		'at-rule-name-space-after':                       'always-single-line',
		'at-rule-semicolon-newline-after':                'always',
		'at-rule-semicolon-space-before':                 'never',
		'block-closing-brace-empty-line-before':          'never',
		'block-closing-brace-newline-after':              'always',
		'block-closing-brace-newline-before':             'always',
		'block-closing-brace-space-after':                'always-single-line',
		'block-closing-brace-space-before':               'always-single-line',
		'block-opening-brace-newline-after':              'always',
		'block-opening-brace-newline-before':             null,
		'block-opening-brace-space-after':                'always-single-line',
		'block-opening-brace-space-before':               'always',
		'color-hex-case':                                 'lower',
		'color-hex-length':                               'long',
		'comment-empty-line-before':                      ['always', { except: 'first-nested', ignore: 'stylelint-commands' }],
		'comment-whitespace-inside':                      'always',
		'custom-property-empty-line-before':              'never',
		'declaration-bang-space-after':                   'never',
		'declaration-bang-space-before':                  'always',
		'declaration-block-semicolon-newline-after':      'always',
		'declaration-block-semicolon-newline-before':     'never-multi-line',
		'declaration-block-semicolon-space-after':        'always-single-line',
		'declaration-block-semicolon-space-before':       'never',
		'declaration-block-trailing-semicolon':           'always',
		'declaration-colon-newline-after':                'always-multi-line',
		'declaration-colon-space-after':                  'always-single-line',
		'declaration-colon-space-before':                 'never',
		'declaration-empty-line-before':                  'never',
		'font-family-name-quotes':                        'always-unless-keyword',
		'font-weight-notation':                           ['named-where-possible', { ignore: ['relative'] }],
		'function-comma-newline-after':                   'always-multi-line',
		'function-comma-newline-before':                  'never-multi-line',
		'function-comma-space-after':                     'always-single-line',
		'function-comma-space-before':                    'never',
		'function-max-empty-lines':                       0,
		'function-name-case':                             'lower',
		'function-parentheses-newline-inside':            'always-multi-line',
		'function-parentheses-space-inside':              'never-single-line',
		'function-url-quotes':                            ['always', { except: 'empty' }],
		'function-whitespace-after':                      'always',
		'indentation':                                    'tab',
		'length-zero-no-unit':                            true,
		'linebreaks':                                     'unix',
		'max-empty-lines':                                1,
		'max-line-length':                                100,
		'media-feature-colon-space-after':                'always',
		'media-feature-colon-space-before':               'never',
		'media-feature-name-case':                        'lower',
		'media-feature-parentheses-space-inside':         'never',
		'media-feature-range-operator-space-after':       'always',
		'media-feature-range-operator-space-before':      'always',
		'media-query-list-comma-newline-after':           'always',
		'media-query-list-comma-newline-before':          'never-multi-line',
		'media-query-list-comma-space-after':             'always-single-line',
		'media-query-list-comma-space-before':            'never',
		'no-empty-first-line':                            true,
		'no-eol-whitespace':                              true,
		'no-missing-end-of-source-newline':               true,
		'number-leading-zero':                            'always',
		'number-no-trailing-zeros':                       true,
		'property-case':                                  'lower',
		'rule-empty-line-before':                         ['always', { except: ['first-nested'] }],
		'selector-attribute-brackets-space-inside':       'never',
		'selector-attribute-operator-space-after':        'never',
		'selector-attribute-operator-space-before':       'never',
		'selector-attribute-quotes':                      'always',
		'selector-combinator-space-after':                'always',
		'selector-combinator-space-before':               'always',
		'selector-descendant-combinator-no-non-space':    true,
		'selector-list-comma-newline-after':              'always',
		'selector-list-comma-newline-before':             'never-multi-line',
		'selector-list-comma-space-after':                'always-single-line',
		'selector-list-comma-space-before':               'never',
		'selector-pseudo-class-case':                     'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case':                   'lower',
		'selector-pseudo-element-colon-notation':         'double',
		'selector-type-case':                             'lower',
		'string-quotes':                                  ['single', { avoidEscape: false }],
		'unit-case':                                      'lower',
		'value-keyword-case':                             'lower',
		'value-list-comma-newline-after':                 'always-multi-line',
		'value-list-comma-newline-before':                'never-multi-line',
		'value-list-comma-space-after':                   'always-single-line',
		'value-list-comma-space-before':                  'never',
		'value-list-max-empty-lines':                     0,
	},
};
