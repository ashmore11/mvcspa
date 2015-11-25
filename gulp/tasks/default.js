import gulp from 'gulp';

gulp.task('build', ['scripts', 'styles', 'inject']);
gulp.task('default', ['build', 'watch', 'browserSync']);