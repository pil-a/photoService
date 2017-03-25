var express = require('express'),
	path = require('path'),
	nconf = require('nconf'),
	http = require('http');

nconf.file({ file: path.join(__dirname, 'config.json') });
const port = nconf.get('general').port;

const app = express()
	.use(express.static(path.join(__dirname, 'views')))
	.use(express.static(path.join(__dirname, 'public')))
	.get('/', (req, res) => {
		res.sendFile('index.html');
	})
	.get('*', (req, res) => {
		res.redirect(path.join(__dirname, 'views', 'index.html'));
	});

const server = http.createServer(app)
	.listen(port, function() {
		console.log('App is started at PORT ' + port);
	});

module.exports = server;
module.exports.cleanup = function() {
	server.close();
};
