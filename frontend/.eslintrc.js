module.exports = {

    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    "extends": [
        // "eslint:recommended",
        // "plugin:vue/recommended"
        "plugin:vue/base"
    ]
};