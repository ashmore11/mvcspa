import gulp from 'gulp';

gulp.task('build', ['scripts', 'templates', 'styles', 'inject']);
gulp.task('default', ['build', 'watch', 'browserSync']);