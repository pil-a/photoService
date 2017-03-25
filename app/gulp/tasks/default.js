var gulp = require('gulp'),
    gutil = require('gulp-util');

const env = process.env.NODE_ENV || 'development';
global.isDev = env !== 'production';


gulp.task('default', ['styles', 'scripts'], function() {
    gutil.log('Done. environment: ', env);
});