import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js', '.jsx', ...(config.resolve?.extensions || [])]
    };

    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                jsx: 'react-jsx'
              }
            }
          }
        ],
        exclude: /node_modules/
      });

      config.module.rules.push({
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      });
    }
    return config;
  }
};

export default config;
