const constants = require('../shared/constants')

module.exports = {
    env: {
        'es6': true,
        'node': true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            accessors: 'explicit',
                            constructors: 'no-public',
                            methods: 'explicit',
                            parameterProperties: 'explicit',
                            properties: 'explicit',
                        },
                    },
                ],
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'promise',
        'unused-imports',
        'sort-keys-fix',
        'sort-destructure-keys',
        'typescript-sort-keys',
        'unicorn',
        'workspaces',
        'simple-import-sort',
        'more',
        'sonarjs',
        'etc',
        '@rimac-technology',
        'eslint-comments',
    ],
    rules: {
        '@rimac-technology/class-element-sorting': 'error',
        '@rimac-technology/document-todos': [
            'error',
            { url: 'https://rimac-automobili.atlassian.net' },
        ],
        '@rimac-technology/import-declaration-newline': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/brace-style': 'error',
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'exports': 'always',
                'functions': 'only-multiline',
                'imports': 'always-multiline',
                'objects': 'always-multiline',
            },
        ],
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/consistent-generic-constructors': [
            'error',
            'constructor',
        ],
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                'prefer': 'type-imports',
            },
        ],
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        // '@typescript-eslint/keyword-spacing': 'error', // TODO: Fixed but not released https://github.com/typescript-eslint/typescript-eslint/pull/6073
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'none',
                    'requireLast': false,
                },
                'singleline': {
                    'delimiter': 'comma',
                    'requireLast': false,
                },
            },
        ],
        '@typescript-eslint/method-signature-style': [
            'error',
            'method',
        ],
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                'allowSingleExtends': true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'args': 'after-used',
                'ignoreRestSiblings': true,
            },
        ],
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/object-curly-spacing': [
            'error',
            'always',
        ],
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': [
            'error',
            {
                'allowedPromiseNames': ['Thenable'],
            },
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': [
            'warn',
            {
                'checkCompoundAssignments': true,
            },
        ],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/semi': [
            'error',
            'never',
        ],
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        '@typescript-eslint/space-before-blocks': 'error',
        '@typescript-eslint/space-before-function-paren': ['error', {
            'anonymous': 'never',
            'asyncArrow': 'always',
            'named': 'never',
        }],
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'warn',
        '@typescript-eslint/type-annotation-spacing': 'error',
        'array-bracket-spacing': [
            'error',
            'never',
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
        'arrow-spacing': [
            'error',
            {
                'after': true,
                'before': true,
            },
        ],
        'brace-style': 'off',
        'comma-dangle': 'off',
        'comma-spacing': 'off',
        'computed-property-spacing': 'error',
        'curly': 'error',
        'default-param-last': 'off',
        'eqeqeq': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'etc/no-assign-mutated-array': 'error',
        'etc/no-commented-out-code': 'error',
        'etc/no-const-enum': 'error',
        'etc/no-deprecated': 'error',
        'etc/no-implicit-any-catch': 'error',
        'etc/no-internal': 'error',
        'etc/no-t': 'error',
        'for-direction': 'error',
        'func-call-spacing': 'off',
        'import/default': 'error',
        'import/export': 'error',
        'import/named': 'error',
        'import/newline-after-import': 'error',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-default': 'error',
        'import/no-relative-packages': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': [
            'error',
            {
                'noUselessIndex': true,
            },
        ],
        'import/order': [
            'error',
            {
                'alphabetize': {
                    'caseInsensitive': true,
                    'order': 'asc',
                },
                'groups': [
                    'builtin',
                    'external',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'always',
            },
        ],
        'indent': [
            'error',
            constants.INDENT_AMOUNT,
        ],
        'init-declarations': 'off',
        'jsx-quotes': [
            'error',
            'prefer-double',
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'off',
        'lines-between-class-members': ['error', 'always'],
        'max-len': [
            'error',
            {
                code: constants.MAX_WIDTH,
                ignoreComments: true,
                ignorePattern: '^import .*',
            },
        ],
        'more/no-void-map': 'error',
        'multiline-ternary': 'off',
        'newline-before-return': 'error',
        'newline-per-chained-call': [
            'error',
            { ignoreChainWithDepth: 2 },
        ],
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'warn',
        'no-case-declarations': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-function': 'off',
        'no-empty-pattern': 'error',
        'no-empty-static-block': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 1,
            },
        ],
        'no-nested-ternary': 'off',
        'no-new-native-nonconstructor': 'error',
        'no-obj-calls': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'off',
        'no-regex-spaces': 'error',
        'no-return-await': 'off',
        'no-self-assign': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'off',
        'no-unused-private-class-members': 'error',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-catch': 'error',
        'no-useless-constructor': 'off',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [
            'error',
            {
                'ImportDeclaration': {
                    minProperties: 2,
                    multiline: true,
                },
            },
        ],
        'object-curly-spacing': 'off',
        'object-shorthand': 'error',
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'next': 'block',
                'prev': '*',
            },
            {
                'blankLine': 'always',
                'next': '*',
                'prev': 'block',
            },
            {
                'blankLine': 'always',
                'next': 'block-like',
                'prev': '*',
            },
            {
                'blankLine': 'always',
                'next': '*',
                'prev': 'block-like',
            },
        ],
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': ['error', { 'disallowRedundantWrapping': true }],
        'prefer-template': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-multiple-resolved': 'error',
        'promise/no-nesting': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/valid-params': 'error',
        'quotes': 'off',
        'radix': 'error',
        'require-atomic-updates': 'error',
        'require-await': 'off',
        'require-unicode-regexp': 'error',
        'rest-spread-spacing': [
            'error',
        ],
        'semi': 'off',
        'simple-import-sort/exports': 'error',
        'sonarjs/cognitive-complexity': ['warn', constants.COGNITIVE_COMPLEXIT],
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-empty-collection': 'error',
        'sonarjs/no-gratuitous-expressions': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-identical-expressions': 'error',
        'sonarjs/no-ignored-return': 'error',
        'sonarjs/no-inverted-boolean-check': 'error',
        'sonarjs/no-nested-switch': 'error',
        'sonarjs/no-one-iteration-loop': 'error',
        'sonarjs/no-redundant-boolean': 'error',
        'sonarjs/no-redundant-jump': 'error',
        'sonarjs/no-same-line-conditional': 'error',
        'sonarjs/no-small-switch': 'error',
        'sonarjs/no-unused-collection': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',
        'sonarjs/prefer-immediate-return': 'error',
        'sonarjs/prefer-object-literal': 'error',
        'sonarjs/prefer-single-boolean-return': 'error',
        'sonarjs/prefer-while': 'error',
        'sort-destructure-keys/sort-destructure-keys': 'error',
        'sort-imports': [
            'error',
            {
                'ignoreCase': true,
                'ignoreDeclarationSort': true,
                'ignoreMemberSort': false,
            },
        ],
        'sort-keys-fix/sort-keys-fix': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': 'error',
        'space-infix-ops': 'off',
        'template-curly-spacing': 'error',
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        'unicorn/better-regex': 'error',
        'unicorn/catch-error-name': 'error',
        'unicorn/consistent-destructuring': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/empty-brace-spaces': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-invalid-remove-event-listener': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-nested-ternary': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/no-unreadable-array-destructuring': 'error',
        'unicorn/no-unreadable-iife': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/numeric-separators-style': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-default-parameters': 'error',
        'unicorn/prefer-export-from': 'error',
        'unicorn/prefer-keyboard-event-key': 'error',
        'unicorn/prefer-logical-operator-over-ternary': 'error',
        'unicorn/prefer-math-trunc': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-modern-math-apis': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-set-has': 'error',
        'unicorn/prefer-string-replace-all': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                'allowList': {
                    'Arg': true,
                    'Args': true,
                    'Param': true,
                    'Params': true,
                    'Prev': true,
                    'Prop': true,
                    'Props': true,
                    'Ref': true,
                    'Refs': true,
                    'arg': true,
                    'args': true,
                    'env': true,
                    'param': true,
                    'params': true,
                    'prev': true,
                    'prop': true,
                    'props': true,
                    'ref': true,
                    'refs': true,
                },
            },
        ],
        'unicorn/switch-case-braces': ['error', 'always'],
        'unicorn/template-indent': [
            'error',
            {
                'indent': constants.INDENT_AMOUNT,
            },
        ],
        'unicorn/throw-new-error': 'error',
        'unused-imports/no-unused-imports-ts': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'workspaces/no-absolute-imports': 'error',
        'workspaces/no-relative-imports': 'error',
        'workspaces/require-dependency': 'error',
        'wrap-iife': 'error',
        'wrap-regex': 'error',
        'yoda': 'error',
    },
}
