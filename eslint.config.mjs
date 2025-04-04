import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-indent': ['error', 4],
            'react/jsx-indent-props': ['error', 4],
            'indent': ['error', 4],
            'no-unused-vars': ['warn', { "argsIgnorePattern": "^_" }],
            '@typescript-eslint/no-unused-vars': ['warn', { "argsIgnorePattern": "^_" }],
            'react/jsx-props-no-spreading': 'warn',
            'max-len': ['error', { "code": 100, ignoreComments: true }]
        },
    },
    i18next.configs['flat/recommended'],
]);
