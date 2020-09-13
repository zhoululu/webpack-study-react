const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { 
        test: /\.(png|jpg|gif|svg|jpeg|bmp)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10240 }
        }]
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true
  }
}