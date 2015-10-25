const Settings = {
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.jade$/,
        loader: 'jade-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
    alias: {
      app: __dirname + '/src/scripts',
      models: __dirname + '/src/scripts/models',
      views: __dirname + '/src/scripts/views',
      controllers: __dirname + '/src/scripts/controllers'
    }
  },
  node: {
    fs: 'empty'
  }
};

export default Settings;