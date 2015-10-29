import gulp from 'gulp';

gulp.task('build', ['scripts', 'styles']);
gulp.task('default', ['build', 'watch', 'browserSync']);