module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "angular"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "2022",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "angular"
    ],
    "rules": {
    }
}
