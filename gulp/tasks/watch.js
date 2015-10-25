import gulp        from 'gulp';
import browserSync from 'browser-sync';
import scripts     from './scripts';

gulp.task('watch', () => {

	gulp.watch('./src/**/*.js', ['scripts', browserSync.reload]);
	// gulp.watch(paths.templates.watch, ['templates', browserSync.reload]);
	// gulp.watch(paths.styles.watch, ['styles']);

	gulp.emit('update');

});