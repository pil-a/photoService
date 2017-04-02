var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	config = require('../config');

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: 'localhost:5050',
		localOnly: true
	});
});

gulp.task('watch', ['styles', 'scripts', 'browser-sync'], function() {
	gulp.watch(config.path.styles, ['styles']).on('change', browserSync.reload);
	gulp.watch(config.path.scripts, ['scripts']);

	gulp.watch(config.path.styles, browserSync.reload);
	gulp.watch(config.path.scripts, browserSync.reload);
});