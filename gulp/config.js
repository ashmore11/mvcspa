export default {
  /**
   * Environment variables
   */
  env: {
    production: process.env.NODE_ENV === 'production',
    development: process.env.NODE_ENV === 'development',
    basepath: process.env.PWD,
  },

  /**
   * Paths for all the source files
   */
  paths: {
    scripts: {
      source: './src/scripts/app.js',
      watch: './src/**/*.js',
      destination: './public/js/',
      filename: 'app.js',
    },
    templates: {
      source: './src/templates/**/*.jade',
      watch: './src/**/*.jade',
      destination: './public/js/',
      filename: 'templates.js',
    },
    styles: {
      source: './src/styles/app.styl',
      watch: 'src/styles/**/*.styl',
      destination: './public/css/',
    },
    public: './public',
  },

  server: {
    port: 8080,
    fallback: 'index.html',
  },

  /**
   * Config for the webpack module bundler
   */
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

  /**
   * Config for the jade templates
   */
  jade: {
    client: true,
    concatOpts: {
      templateVariable: 'Templates'
    },
  },

  /**
   * Config for injecting static files into the index.html
   */
  inject: {
    origin: './public/index.html',
    paths: [
      './public/js/*.js', 
      './public/css/*.css'
    ],
    options: {
      read: false,
      relative: true,
    },
    dest: './public',
  },

};