import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import stylus      from 'gulp-stylus';
import nib         from 'nib';
import rupture     from 'rupture';
import jeet        from 'jeet';
import handleError from '../util/handleError';
import CSSmin      from 'gulp-minify-css';
import browserSync from 'browser-sync';

const development = process.env.NODE_ENV === 'development';
const production  = process.env.NODE_ENV === 'production';

const paths = {
  source      : './src/styles/app.styl',
  watch       : 'src/styles/**/*.styl',
  destination : './public/css/',
};

const stylusConfig = {
  set    : ['include css'],
  use    : [nib(), rupture(), jeet()],
  linenos: development,
};

gulp.task('styles', function() {

  console.log('\n:::::_ S T Y L E S _:::::\n');
  
  gulp.src(paths.source)
    
    .pipe(stylus(stylusConfig))
    .pipe(gulpif(production, CSSmin()))
    .pipe(gulp.dest(paths.destination))
    .pipe(gulpif(development, browserSync.stream()))

    .on('error', handleError);

});