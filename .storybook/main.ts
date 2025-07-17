import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../documentation/**/*.mdx",
    "../documentation/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;
