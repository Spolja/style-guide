const constants = require('../shared/constants')

module.exports = {
    env: {
        browser: true,
    },
    overrides: [
        {
            files: [
                '**/*.tsx',
            ],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-boolean-value': [
            'error',
            'always',
        ],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': [
            'error',
            {
                'children': 'never',
                'props': 'never',
            },
        ],
        'react/jsx-curly-newline': [
            'error',
            {
                'multiline': 'consistent',
                'singleline': 'consistent',
            },
        ],
        'react/jsx-curly-spacing': [
            'error',
            {
                'children': true,
                'when': 'never',
            },
        ],
        'react/jsx-equals-spacing': 'error',
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline',
        ],
        'react/jsx-indent': [
            'error',
            constants.INDENT_AMOUNT,
            {
                'indentLogicalExpressions': true,
            },
        ],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': 'error',
        'react/jsx-newline': [
            'error',
            {
                'prevent': true,
            },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-leaked-render': [
            'off',
            { 'validStrategies': ['ternary'] },
        ],
        'react/jsx-no-useless-fragment': ['error', { 'allowExpressions': true }],
        'react/jsx-one-expression-per-line': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-tag-spacing': [
            'error',
            {
                'afterOpening': 'never',
                'beforeClosing': 'never',
                'beforeSelfClosing': 'always',
                'closingSlash': 'never',
            },
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                'arrow': 'parens-new-line',
                'assignment': 'parens-new-line',
                'condition': 'parens-new-line',
                'declaration': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
                'return': 'parens-new-line',
            },
        ],
        'react/no-unknown-property': [
            'error',
            {
                'ignore': [
                    'position',
                    'material',
                    'geometry',
                    'args',
                    'attach',
                    'fragmentShader',
                    'side',
                    'transparent',
                    'uniforms',
                    'vertexShader',
                    'object',
                    'dispose',
                    'intensity',
                    'rotation',
                    'metalness',
                ],
            },
        ],
        'react/self-closing-comp': [
            'error',
            {
                'component': true,
                'html': true,
            },
        ],
        'react/sort-default-props': 'error',
    },
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
}
