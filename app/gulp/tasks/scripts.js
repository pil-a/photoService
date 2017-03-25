var gulp = require('gulp'),
	gutil = require('gulp-util'),
	webpack = require('webpack'),
	wpParams = require('../webpack.config');

gulp.task('scripts', function (done) {
	webpack(wpParams, function (err, stats) {
		if (err) {
			throw new gutil.PluginError('webpack:build', err);
		}
		done();
	});
});
