const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  /* 出力モード */
  mode: 'development',
  /* エントリーポイント */
  entry: {
    main: path.join(__dirname, 'src', 'index.ts'),
  },
  /* 出力先 */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // devServer: {
  //   liveReload: true,
  //   static: [
  //     {
  //       directory: path.join(__dirname),
  //       watch: true,
  //     },
  //   ],
  // },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['.'] },
      notify: false
    }),
  ],
  /* 最適化 */
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      }),
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // cache: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: ['/node_modules/', '/src/**/*.d.ts'],
      },
    ],
  },
};
