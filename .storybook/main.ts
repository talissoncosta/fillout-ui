import {mergeConfig, UserConfig} from "vite";
import path from 'node:path';
import {StorybookConfig} from "@storybook/react-vite";
import wyw from '@wyw-in-js/vite';

const config: StorybookConfig = {
  stories: [
    '../documentation/**/*.mdx',
    '../documentation/**/*.stories.@(ts|tsx)',
  ],
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
  viteFinal: async (config): Promise<UserConfig> => {
    const merged = mergeConfig(config, {
      plugins: [
        wyw({
          include: ['**/*.{ts,tsx}'],
          babelOptions: {
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
          },
        }),
      ],
      resolve: {
        alias: {
          src: path.resolve(new URL('../src', import.meta.url).pathname),
        },
      },
    });

    return merged as UserConfig;
  },
};

export default config;
