import gulp        from 'gulp';
import browserSync from 'browser-sync';
import config      from '../util/config';

gulp.task('watch', function() {

	gulp.watch(config.paths.scripts.watch, ['scripts', browserSync.reload]);
	gulp.watch(config.paths.templates.watch, ['scripts', browserSync.reload]);
	gulp.watch(config.paths.styles.watch, ['styles']);

	gulp.emit('update');

});