const sourcePath = './src';
const bundlePath = './public/build';

module.exports = {
	path: {
		styles: sourcePath + '/styles/*.scss',

		entryScript: sourcePath + '/scripts/app.jsx',
		scripts: [
			sourcePath + '/scripts/components/*.jsx',
			sourcePath + '/scripts/manager/*.js'
		],

		bundleCss: bundlePath + '/',
		bundleJs: bundlePath + '/bundle.js'
	}
};