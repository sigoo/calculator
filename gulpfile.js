var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var gulpif = require('gulp-if');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这

  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', minifyCss()))
  .pipe(gulp.dest('dist'));
});