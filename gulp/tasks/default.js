import gulp from 'gulp';

gulp.task('build', ['scripts', 'templates', 'styles']);
gulp.task('default', ['build', 'watch', 'browserSync']);