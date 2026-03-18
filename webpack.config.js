const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
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
              options: { configFile: 'tsconfig.json', transpileOnly: true },
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
    externals: {
      react: { commonjs: 'react', commonjs2: 'react', amd: 'React', root: 'React' },
      'react-dom': { commonjs: 'react-dom', commonjs2: 'react-dom', amd: 'ReactDOM', root: 'ReactDOM' },
    },
    output: {
      path: path.resolve(__dirname, 'dist/adi-design-system'),
      filename: isProduction ? 'index.js' : 'index.dev.js',
      library: {
        name: 'AdiDesignSystem',
        type: 'umd',
      },
      globalObject: 'this',
      clean: true,
    },
  };
};
