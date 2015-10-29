export default {

  production: process.env.NODE_ENV === 'production',
  development: process.env.NODE_ENV === 'development',
  base_path: process.env.PWD,

  paths: {
    scripts: {
      source: './src/scripts/app.js',
      watch: './src/**/*.js',
      destination: './public/js/',
      filename: 'app.js',
    },
    templates: {
      watch: './src/**/*.jade',
    },
    styles: {
      source: './src/styles/app.styl',
      watch: 'src/styles/**/*.styl',
      destination : './public/css/',
    }
  },

  webpack: {
    output: {
      path: process.env.PWD + "/public",
      filename: 'app.js',
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }, 
        { test: /\.jade$/, loader: 'jade-loader' },
      ]
    },
    resolve: {
      extensions: ['', '.js'],
      alias: {
        app: process.env.PWD + '/src/scripts',
        templates: process.env.PWD + '/src/templates',
      }
    },
    node: {
      fs: 'empty',
    }
  }

}