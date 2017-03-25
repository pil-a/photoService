const sourcePath = './src';

module.exports = {
	path: {
		styles: sourcePath + '/styles/*.scss',
		stylesOut: sourcePath + '/styles/',

		entryScript: sourcePath + '/scripts/app.jsx',
		scripts: [
			sourcePath + '/scripts/components/*.jsx',
			sourcePath + '/scripts/manager/*.js'
		],

		bundle: sourcePath + '/scripts/bundle.js'
	}
};
