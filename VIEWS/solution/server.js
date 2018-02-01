let Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
const handlebars = require('handlebars');
let server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 4300
  });
  
server.register(Vision, function (err) {
    if (err) throw err;
});

server.route({

method: 'GET',
path: '/',
handler: {
    view: 'index.html'
}
});


server.views({
engines: {
    html: require('handlebars')
},
path: '/Users/margibrahmbhatt/makemehapi/VIEWS/templates'
});
  
server.start();

module.exports = server;