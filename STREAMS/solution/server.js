var Fs = require('fs');
var Hapi = require('hapi');
var Path = require('path');
var Rot13 = require('rot13-transform');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 4060
});

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            var file = Fs.createReadStream('/Users/margibrahmbhatt/makemehapi/STREAMS/solution/input.txt');
            reply(file.pipe(Rot13()));
        }
    }
});

server.start((err) => {
    if (err) throw err;
});

module.exports = server;