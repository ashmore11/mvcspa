import gulp 		     from 'gulp';
import webpack       from 'gulp-webpack';
import gulpif        from 'gulp-if';
import uglify        from 'gulp-uglify';
import rename        from 'gulp-rename';
import handleError   from '../util/handleError';
import config        from '../util/config';

gulp.task('scripts', function() {
	
	gulp.src(config.paths.scripts.source)

		.pipe(webpack(config.webpack))
		.pipe(gulpif(config.production, uglify()))
		.pipe(rename(config.paths.scripts.filename))
		.pipe(gulp.dest(config.paths.scripts.destination))
		
		.on('error', handleError);

});