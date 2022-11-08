module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2015,
        sourceType: "module",
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'prefer-const': 'error',
    },
};