const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const { dirname } = require('node:path');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname == '/' && req.method == 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/home/index.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File not found');
                res.end();

                return;
            }

            res.writeHead();
        });

    } else {
        return true;
    }
};