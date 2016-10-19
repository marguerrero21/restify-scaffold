var restify = require('restify');

var routes  = require('./routes.js');

var server = restify.createServer();

server = routes.addRoutes(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
