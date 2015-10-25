import gulp from 'gulp';

gulp.task('build', ['scripts']);
gulp.task('default', ['build', 'watch', 'browserSync']);