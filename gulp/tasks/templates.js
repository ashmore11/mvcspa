import gulp        from 'gulp';
import jade        from 'gulp-jade';
import concat      from 'gulp-jade-template-concat';
import config      from '../config';
import handleError from '../util/handleError';
 
gulp.task('templates', function(){

  gulp.src(config.paths.templates.source)
    
    .pipe(jade(config.jade))
    
    .on('error', handleError)

    .pipe(concat(config.paths.templates.filename, config.concatOpts))
    .pipe(gulp.dest(config.paths.templates.destination));

});