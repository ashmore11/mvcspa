import gulp        from 'gulp';
import browserSync from 'browser-sync';
import modRewrite  from 'connect-modrewrite';

gulp.task('browserSync', function() {

  browserSync.init({
    open: false,
    notify: true,
    reloadDelay: 500,
    server: {
      baseDir: './public',
      middleware: [
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    }
  });

});