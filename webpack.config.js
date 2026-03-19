const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  const common = {
    mode: isProduction ? 'production' : 'development',
    target: 'web',
    entry: './src/index.ts',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: { transpileOnly: true },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };

  return [
    // ✅ UMD build
    {
      ...common,
      externals: {
        react: {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: 'React',
        },
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: 'ReactDOM',
        },
        'react-router-dom': {
          commonjs: 'react-router-dom',
          commonjs2: 'react-router-dom',
          amd: 'react-router-dom',
        },
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
          name: 'AdiDesignSystem',
          type: 'umd',
        },
        globalObject: 'this',
        clean: true,
      },
    },

    // ✅ ESM build
    {
      ...common,
      externals: [
        'react',
        'react-dom',
        'react-router-dom',
      ],
      experiments: {
        outputModule: true,
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.esm.js',
        library: {
          type: 'module',
        },
      },
    },
  ];
};
