const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  target: 'web',
  entry: {
    index: './src/SportBuffLib.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js",
    library: 'SportBuffLib',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /test/],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'style.css'}
          },
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css', '.scss', '.vue'],
    alias: { vue: 'vue/dist/vue.esm.js' }
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // * development rules here
  } else if (argv.mode === 'production') {
    // * prod rules here
  } else {
    throw new Error('Specify env');
  }

  return config;
};