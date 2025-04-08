import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    "stories": [
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack"
    ],
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    }
};
export default config;