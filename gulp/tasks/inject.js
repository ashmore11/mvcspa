import gulp   from 'gulp';
import inject from 'gulp-inject';
import config from '../config';
 
gulp.task('inject', function() {

  const target  = gulp.src(config.inject.origin);
  const sources = gulp.src(config.inject.paths);
 
  return target
  
    .pipe(inject(sources,config.inject.options))
    .pipe(gulp.dest(config.inject.dest));

});