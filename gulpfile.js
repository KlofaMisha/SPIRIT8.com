var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-server-livereload');


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
      fallback: 'index.html',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('sass', function() {
  gulp.src('./css/**/*.scss')
  .pipe(autoprefixer('last 2 versions','>1%', 'ie9'))
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
  gulp.watch('./css/**/*.scss', ['sass'])
 });
gulp.task('default', ['webserver', 'watch']);


