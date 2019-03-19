var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minify = require('gulp-clean-css');

gulp.task('buildStylus', function() {
  return gulp.src('./resources/dev-assets/stylus/styles.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(minify())
    .pipe(gulp.dest('./resources/public-assets/css/'));
 
});

gulp.task('copyPublicAssets', function() {
  return gulp.src('./resources/public-assets/**/*.*')
    .pipe(gulp.dest('./public-assets/'));
 
});

gulp.task('default', gulp.parallel(['buildStylus','copyPublicAssets']));
gulp.task('watch', function(){
  gulp.watch(['./resources/dev-assets/**/*.*'],gulp.parallel(['buildStylus','copyPublicAssets']));
});