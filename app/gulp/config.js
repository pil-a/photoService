module.exports = {
	path: {
		styles: './client/styles/*.scss',
		stylesOut: './client/styles/',

		entryScript: './client/scripts/app.jsx',
		scripts: ['./client/scripts/components/*.jsx', './client/scripts/manager/*.js'],

		bundle: './client/scripts/bundle.js'
	}
};
