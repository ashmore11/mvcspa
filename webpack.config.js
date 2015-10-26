export default {

  output: {
    path: __dirname + "/public",
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }, 
      { test: /\.jade$/, loader: 'jade-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      app: __dirname + '/src/scripts',
      templates: __dirname + '/src/templates'
    }
  },

  node: {
    fs: 'empty'
  }
  
};