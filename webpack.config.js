var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './webpack_app.js',
  output: {
    filename: 'webpack.production.js'
  },


  module: {
    loaders: [{
      test: /(\.js$|\.jsx?$)/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },


  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {comments: false}
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],


  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "js"]
  },
};
