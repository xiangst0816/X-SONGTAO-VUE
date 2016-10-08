'use strict';
var  gulp  = require('gulp');
var  gulpLoadPlugins  = require('gulp-load-plugins');
var $ = gulpLoadPlugins();

gulp.task('manifest', function(){
  gulp.src(['dist/static/**/*.{js,css}'], { base: './dist' })
    .pipe($.manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifest',
      exclude: 'app.manifest'
    }))
    .pipe(gulp.dest('dist'));
});

