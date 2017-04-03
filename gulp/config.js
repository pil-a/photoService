const sourcePath = './src';
const bundlePath = './public/build';

module.exports = {
    path: {
        styles: sourcePath + '/styles/*.scss',

        entryScript: sourcePath + '/app/app.jsx',
        scripts: [
            sourcePath + '/components/*.jsx',
            sourcePath + '/manager/*.js'
        ],

        bundleCss: bundlePath + '/',
        bundleJs: bundlePath + '/bundle.js'
    }
};