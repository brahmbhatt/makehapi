let Fs = require('fs');
let Hapi = require('hapi');
let Path = require('path');
let Rot13 = require('rot13-transform');

let server = new Hapi.Server();

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