var Hapi = require('hapi');
var Vision = require('vision');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 4050
});

server.register(Vision, (err) => {
    if (err) throw err;
});

server.views({
    path: '/Users/margibrahmbhatt/makemehapi/HELPING/templates',
    engines: {
        html: require('handlebars')
    },
    helpersPath:  '/Users/margibrahmbhatt/makemehapi/HELPING/helper'
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'index.html'
    }
});

server.start((err) => {
    if (err) throw err;
});

module.exports = server
