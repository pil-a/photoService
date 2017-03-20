var gulp = require('gulp');
var gutil = require('gulp-util');

var env = process.env.NODE_ENV || 'development';
global.isDev = env !== "production";


gulp.task('default', ['styles', 'scripts'], function () {
    gutil.log('Done. environment: ', env);
});
