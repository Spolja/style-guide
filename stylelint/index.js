/** @type { import('stylelint').Config } */
const config = {
    defaultSeverity: 'error',
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: {
        'alpha-value-notation': 'number',
        'annotation-no-unknown': true,
        'at-rule-empty-line-before': 'always',
        'at-rule-no-unknown': true,
        'at-rule-no-vendor-prefix': true,
        'color-function-notation': 'legacy',
        'color-hex-length': 'long',
        'color-named': 'never',
        'color-no-invalid-hex': true,
        'comment-empty-line-before': ['always', { except: ['first-nested'] }],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-disallowed-list': ['/^TODO:/', '/^FIXME:/'],
        'custom-property-empty-line-before': 'never',
        'custom-property-no-missing-var-function': true,
        'declaration-block-no-duplicate-custom-properties': true,
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-no-important': true,
        'font-family-name-quotes': 'always-where-required',
        'font-family-no-duplicate-names': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-name-case': 'lower',
        'function-no-unknown': true,
        'function-url-quotes': 'always',
        'hue-degree-notation': 'angle',
        'import-notation': 'string',
        'keyframe-block-no-duplicate-selectors': true,
        'keyframe-declaration-no-important': true,
        'keyframe-selector-notation': 'percentage',
        'length-zero-no-unit': true,
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        'named-grid-areas-no-invalid': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': [true, { disallowInList: true }],
        'no-empty-source': true,
        'no-invalid-double-slash-comments': true,
        'no-invalid-position-at-import-rule': true,
        'no-irregular-whitespace': true,
        'no-unknown-animations': true,
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,
        'rule-empty-line-before': [
            'always',
            {
                except: ['after-single-line-comment'],
                ignore: ['first-nested', 'after-comment'],
            },
        ],
        'selector-attribute-quotes': 'always',
        'selector-no-vendor-prefix': true,
        'selector-not-notation': 'simple',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'shorthand-property-no-redundant-values': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'value-keyword-case': ['lower', { ignoreProperties: ['/^--theme-fonts.*$/'] }],
        'value-no-vendor-prefix': true,
    },
}

module.exports = config