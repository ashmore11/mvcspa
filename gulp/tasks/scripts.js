import gulp 		     from 'gulp';
import rollup        from 'rollup';
import gulpif        from 'gulp-if';
import uglify        from 'gulp-uglify';
import rename        from 'gulp-rename';
import handleError   from '../util/handleError';
import config        from '../util/config';

gulp.task('scripts', function() {
	
	gulp.src(config.paths.scripts.source)

		.pipe(rollup.rollup({entry: config.paths.scripts.source}))

		.pipe(gulpif(config.env.production, uglify()))
		.pipe(rename(config.paths.scripts.filename))
		.pipe(gulp.dest(config.paths.scripts.destination))
		
		.on('error', handleError);

});