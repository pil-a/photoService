var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	config = require('../config');

gulp.task('styles', function() {
	var sassStyle = global.isDev ? 'expanded' : 'compressed';
	gulp.src(config.path.styles)
		.pipe(sass({ outputStyle: sassStyle }).on('error', gutil.log))
		.pipe(gulp.dest(config.path.bundleCss));
});