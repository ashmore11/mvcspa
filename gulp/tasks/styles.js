import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import stylus      from 'gulp-stylus';
import nib         from 'nib';
import rupture     from 'rupture';
import jeet        from 'jeet';
import handleError from '../util/handleError';
import CSSmin      from 'gulp-minify-css';
import browserSync from 'browser-sync';
import config      from '../util/config';

gulp.task('styles', function() {
  
  gulp.src(config.paths.styles.source)
    
    .pipe(stylus({
      set: ['include css'],
      use: [nib(), rupture(), jeet()],
      linenos: config.development,
    }))

    .pipe(gulpif(config.production, CSSmin()))
    .pipe(gulp.dest(config.paths.styles.destination))
    .pipe(gulpif(config.development, browserSync.stream()))

    .on('error', handleError);

});