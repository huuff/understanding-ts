const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    hot: true
  }, 
  plugins: [ new HtmlWebpackPlugin({
    template: 'src/index.html'
  }) ]
};
