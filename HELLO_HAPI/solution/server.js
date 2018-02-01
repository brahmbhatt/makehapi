let Hapi = require('hapi');
//create a server
let server = new Hapi.Server();
//create a connection
server.connection({
  host: 'localhost',
  port: 8080
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    reply('Hello hapi') ;
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
  