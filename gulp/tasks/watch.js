import gulp        from 'gulp';
import browserSync from 'browser-sync';
import scripts     from './scripts';

gulp.task('watch', function() {

	gulp.watch('./src/**/*.js', ['scripts', browserSync.reload]);
	gulp.watch('./src/**/*.jade', ['scripts', browserSync.reload]);
	// gulp.watch(paths.styles.watch, ['styles']);

	gulp.emit('update');

});