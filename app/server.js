var express = require('express'),
	path = require('path'),
	nconf = require('nconf'),
	http = require('http'),
	Dropbox = require('dropbox'),
	TinyURL = require('tinyurl');


nconf.file({ file: path.join(__dirname, 'config.json') });
const general = nconf.get('general');

const app = express()
	.use(express.static(path.join(__dirname, 'views')))
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (req, res) => {
		res.sendFile('index.html');
	})
	.get('/design', (req, res) => {
		const dbx = new Dropbox({ accessToken: general.token });
		dbx
			.filesListFolder({ path: general.fileFolder })
			.then(files => {
				let promises = [];
				files.entries.forEach(file => {
					let promise = dbx.filesGetTemporaryLink({
						path: file.path_lower
					});
					promises.push(promise);
				});
				return Promise.all(promises);
			})
			.then(filesData => {
				let promises = [];
				filesData.map(file => {
					promises.push(new Promise((resolve, reject) => {
						TinyURL.shorten(file.link, res => {
							if (res !== '') {
								resolve({
									link: res,
									title: file.metadata.name
								});
							} else {
								reject('Cant minify url');
							}
						});
					}));
				});
				return Promise.all(promises);
			})
			.then(urls => {
				res.send(urls.sort((a, b) => {
					if (a.title < b.title) {
						return -1;
					} else if (a.title > b.title) {
						return 1;
					}
					return 0;
				}));
			})
			.catch(error => {
				res.send(error);
			});
	})
	.get('*', (req, res) => {
		res.redirect(path.join(__dirname, 'views', 'index.html'));
	});

const server = http.createServer(app).listen(general.port, function() {
	console.log('App is started at PORT ' + general.port);
});

module.exports = server;
module.exports.cleanup = function() {
	server.close();
};