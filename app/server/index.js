var path = require('path');

// Read config
var nconf = require('nconf');
nconf.file({ file: path.join(__dirname, 'config.json') });

// Initialize Express
var express = require('express');
var app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'client')));

// Define routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
var port = nconf.get('general').port;
var http = require('http');
var server = http.createServer(app).listen(port, function() {
  console.log('App is started at PORT ' + port);
});

// Export some stuff for tests
var cleanup = function() {
  server.close();
}
module.exports = server;
module.exports.cleanup = cleanup;
