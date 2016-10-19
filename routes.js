var _ = require('underscore');

var routes = require('./config/routes.js');

var ctrlDir = require("./config/app.js") ["controllerDirectory"];

module.exports = {

	addRoutes : function(server) {
		// Loads the resource routes
		_.each(routes.resources, function(ctrl, route){
			
			var controller = require(ctrlDir + ctrl + ".js");
			
			server.get(route, controller.index);

			server.get(route + "/:id", controller.show);

			server.post(route , controller.store);

			server.put(route + "/:id", controller.update);

			server.del(route + "/:id", controller.remove);
		});

		// Logs the custom routes
		_.each(routes.custom, function(info, route){
			var action = require(ctrlDir + info.controller + ".js")[info.action];

			switch(info.type) {
				case "get" :  server.get(route, action); break;

				case "post" : server.post(route, action); break;

				case "put"  : server.put(route, action); break;

				case "del"  : server.del(route, action); break;

				case "head" : server.head(route,action); break;

				default     : server.get(route,action); break;
			}
		});
		return server;
	}
}
