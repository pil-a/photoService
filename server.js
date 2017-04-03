var express = require('express'),
    path = require('path'),
    nconf = require('nconf'),
    http = require('http'),
    getDropboxFiles = require('./src/app/DropboxFiles');

nconf.file({
    file: path.join(__dirname,
        'src',
        'app',
        'config.json')
});
const general = nconf.get('general');

const app = express()
    .use(express.static(path.join(__dirname, 'views')))
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => {
        res.sendFile('index.html');
    })
    .get('/design', (req, res) => {
        getDropboxFiles(general.token, general.fileFolder)
            .then(urls => {
                res.send(urls);
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