let Hapi = require('hapi');
let Inert = require('inert');
//let Path = require('path');

let server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 4000
});

server.register(Inert, function () {});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    // file: Path.join(__dirname, 'index.html')
    file: '/Users/margibrahmbhatt/makemehapi/HANDLING/test/index.html'
  }
});

server.start(function () {});
module.exports = server;