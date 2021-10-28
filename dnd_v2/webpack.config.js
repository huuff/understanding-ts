const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    hot: true
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
};
