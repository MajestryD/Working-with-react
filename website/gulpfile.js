'use-strict';
//dependanies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


// scss/css //

var scss_src = './src/essentials/scss/**/*.scss';
var scss_dest = './src/essentials/css';

//compiling the scss
//gulp.task('compile_scss', function()
function compile_scss(){

  return gulp.src(scss_src)
  .pipe(sass().on('error',sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(scss_dest))
  .pipe(gulp.dest(scss_dest));

};

//auto detect changes in scss
//gulp.task('watch_scss', function()
function watch_scss(){
  gulp.watch(scss_src, compile_scss);
};

//Run tasks
exports.default = compile_scss;
