import { mergeConfig, UserConfig } from 'vite';
import path from 'node:path';
import { StorybookConfig } from '@storybook/react-vite';
import wyw from '@wyw-in-js/vite';

const config: StorybookConfig = {
  stories: ['../documentation/**/*.mdx', '../documentation/**/*.stories.@(ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
