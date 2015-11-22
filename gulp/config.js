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
    }
  },

  /**
   * Config for the rollup module bundler
   */
  rollup: {
    cjsOpts: {
      include: 'node_modules/**',
    },
    npmOpts: {
      jsnext: true,
      main: true,
    },
    babelOpts: {},
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