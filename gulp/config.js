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