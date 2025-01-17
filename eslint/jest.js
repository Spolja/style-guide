module.exports = {
    'plugins': [
        'jest',
        'jest-formatting',
    ],
    'rules': {
        'jest-formatting/padding-around-after-all-blocks': 'error',
        'jest-formatting/padding-around-after-each-blocks': 'error',
        'jest-formatting/padding-around-before-all-blocks': 'error',
        'jest-formatting/padding-around-before-each-blocks': 'error',
        'jest-formatting/padding-around-describe-blocks': 'error',
        'jest-formatting/padding-around-expect-groups': 'error',
        'jest-formatting/padding-around-test-blocks': 'error',
        'jest/consistent-test-it': 'error',
        'jest/expect-expect': 'error',
        'jest/max-nested-describe': ['error', { max: 3 }],
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-large-snapshots': ['warn', { maxSize: 500 }],
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'error',
        'jest/prefer-comparison-matcher': 'error',
        'jest/prefer-each': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-resolves': 'error',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-to-be': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-hook': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'error',
    },
}
