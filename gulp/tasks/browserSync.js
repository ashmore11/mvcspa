import gulp        from 'gulp';
import browserSync from 'browser-sync';
import config      from '../util/config';

gulp.task('browserSync', function() {

  browserSync.init(config.browserSync);

});