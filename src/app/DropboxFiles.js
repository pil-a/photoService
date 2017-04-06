var Dropbox = require('dropbox'),
    TinyURL = require('tinyurl'),
    SessionObj = require('./Session'),
    dbx;

let getDropboxFiles = (general) => {
    if (SessionObj.any(general.tempLinkExpireHours)) {
        return Promise.resolve(SessionObj.getLinks());
    }
    dbx = new Dropbox({ accessToken: general.token });
    return dbx.filesListFolder({ path: general.fileFolder })
        .then(getTempLink)
        .then(minifyLinks)
        .then(sortLinks);
};

function getTempLink(files) {
    if (dbx === undefined) {
        return Promise.reject('Dropbox object cannot be undefined');
    }
    let promises = [];
    files.entries.forEach(file => {
        let promise = dbx.filesGetTemporaryLink({
            path: file.path_lower
        });
        promises.push(promise);
    });
    return Promise.all(promises);
}

function minifyLinks(filesData) {
    let promises = [];
    filesData.map(file => {
        let promise = new Promise((resolve, reject) => {
            TinyURL.shorten(file.link, res => {
                if (res === '') {
                    reject('Cant minify url');
                }
                resolve({
                    link: res,
                    title: file.metadata.name
                });
            });
        });
        promises.push(promise);
    });
    return Promise.all(promises);
}

function sortLinks(urls) {
    SessionObj.fill(urls.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        }
        return 0;
    }));
    return SessionObj.getLinks();
}

module.exports = getDropboxFiles;