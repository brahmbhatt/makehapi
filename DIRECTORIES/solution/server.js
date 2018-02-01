let Hapi = require('hapi');
let Inert = require('inert');

let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 4080
  });
  
  server.register(Inert);

  server.route({
    
    method: 'GET',
    path: '/foo/bar/baz/{fileName}',
    handler: {
      directory: {
        path: '/Users/margibrahmbhatt/makemehapi/DIRECTORIES/public'
      }
    }
  });

  server.start();

  module.exports = server;