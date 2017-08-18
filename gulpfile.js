/**
 * Created by voska_000 on 18.08.2017.
 */

'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', () => {
  gulp.src('dist', {read: false})
    .pipe(clean());
});
