import gulp        from 'gulp';
import browserSync from 'browser-sync';
import modRewrite  from 'connect-modrewrite';

browserSync.create();

gulp.task('browserSync', () => {

  browserSync.init({

    open: false,
    notify: true,
    server: {
      baseDir: './public',
      middleware: [
        modRewrite(['^[^\\.]*$ /index.html [L]'])
      ]
    }
  
  });

});