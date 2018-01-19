/* Required modules */
var browserSync = require('browser-sync');
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');


/* Development tasks */

// Start browserSync server
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

// Watchers
gulp.task('watch', ['browserSync'], function () {
  gulp.watch('assets/css/**/*.css', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
});
