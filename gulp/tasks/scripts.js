import gulp 		     from 'gulp';
import webpack       from 'gulp-webpack';
import gulpif        from 'gulp-if';
import uglify        from 'gulp-uglify';
import rename        from 'gulp-rename';
import handleError   from '../util/handleError';
import webpackConfig from '../../webpack.config.js';

const production  = process.env.NODE_ENV === 'production';
const development = process.env.NODE_ENV === 'development';
const base_path   = process.env.PWD;

const paths = {
	source      : './src/scripts/app.js',
	watch       : './src/**/*.js',
	destination : './public/js/',
	filename    : 'app.js',
};

gulp.task('scripts', () => {
	
	gulp.src(paths.source)

		.pipe(webpack(webpackConfig))
		.pipe(gulpif(production, uglify()))
		.pipe(rename(paths.filename))
		.pipe(gulp.dest(paths.destination))
	
		.on('error', handleError);

});

export default paths;