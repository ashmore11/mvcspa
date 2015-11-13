import gulp 		   from 'gulp';
import rollup      from 'gulp-rollup';
import commonjs    from 'rollup-plugin-commonjs';
import npm         from 'rollup-plugin-npm';
import babel       from 'rollup-plugin-babel';
import gulpif      from 'gulp-if';
import uglify      from 'gulp-uglify';
import rename      from 'gulp-rename';
import handleError from '../util/handleError';
import config      from '../util/config';

const npmOpts = {
  jsnext: false,
  main: true,
};

const comOpts = {
  include: 'node_modules/**',
  exclude: [],
};

const babelOpts = {};

gulp.task('scripts', function() {
	
	gulp.src(config.paths.scripts.source)

		.pipe(rollup({
      plugins: [commonjs(comOpts), npm(npmOpts), babel(babelOpts)]
    }))
		.pipe(gulpif(config.env.production, uglify()))
		.pipe(rename(config.paths.scripts.filename))
		.pipe(gulp.dest(config.paths.scripts.destination))
		
		.on('error', handleError);

});