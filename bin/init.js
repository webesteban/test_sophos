const CONFIG = require('../config/config');


var app = require('../app');
var debug = require('debug')('test_sophos:server');
var http = require('http');

var port = CONFIG.port;
var host = CONFIG.host;

//init server
var server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
});
