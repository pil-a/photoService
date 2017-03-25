var express = require('express'),
	path = require('path'),
	nconf = require('nconf'),
	http = require('http');

nconf.file({ file: path.join(__dirname, 'config.json') });

var app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

// Define routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('*', function(req, res) {
	res.redirect(path.join(__dirname, 'views', 'index.html'));
});

var port = nconf.get('general').port;
var server = http.createServer(app).listen(port, function() {
	console.log('App is started at PORT ' + port);
});

var cleanup = function() {
	server.close();
};
module.exports = server;
module.exports.cleanup = cleanup;
