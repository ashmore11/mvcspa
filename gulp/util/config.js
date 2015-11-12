import modRewrite from 'connect-modrewrite';

export default {

  env: {
    production: process.env.NODE_ENV === 'production',
    development: process.env.NODE_ENV === 'development',
    base_path: process.env.PWD,
  },

  paths: {
    scripts: {
      source: './src/scripts/app.js',
      watch: './src/**/*.js',
      destination: './public/js/',
      filename: 'app.js',
    },
    templates: {
      source: './src/**/*.jade',
      watch: './src/**/*.jade',
      destination: './public/js/',
      filename: 'templates.js',
    },
    styles: {
      source: './src/styles/app.styl',
      watch: 'src/styles/**/*.styl',
      destination: './public/css/',
    }
  },

  webpack: {
    output: {
      path: process.env.PWD + '/public',
      filename: 'app.js',
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }, 
        { test: /\.jade$/, loader: 'jade-loader' },
      ]
    },
    resolve: {
      extensions: ['', '.js'],
      alias: {
        app: process.env.PWD + '/src/scripts',
        templates: process.env.PWD + '/src/templates',
      }
    }
  },

  browserSync: {
    open: false,
    notify: true,
    reloadDelay: 500,
    server: {
      baseDir: process.env.PWD + '/public',
      middleware: [
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    }
  },

}