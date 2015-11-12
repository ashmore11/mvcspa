import gulp        from 'gulp';
import jade        from 'gulp-jade';
import concat      from 'gulp-jade-template-concat';
import config      from '../util/config';
import handleError from '../util/handleError';
 
gulp.task('templates', function(){

    gulp.src('./src/templates/**/*.jade')
      
      .pipe(jade({client: true}))
      .pipe(concat('templates.js', {templateVariable: 'Templates'}))
      .pipe(gulp.dest(config.paths.templates.destination))

      .on('error', handleError);

});