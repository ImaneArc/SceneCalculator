const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function watchSass() {
  gulp.watch('src/sass/**/*.scss', compileSass);
}

gulp.task('sass', compileSass);
gulp.task('watch', watchSass);

gulp.task('default', gulp.series('sass','watch'));
