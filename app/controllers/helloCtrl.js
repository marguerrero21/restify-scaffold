module.exports = {

	index : function(req, res, next){
		res.send("Hello World");
		next();
	},

	show : function(req, res, next){
		res.send('Hello ' + req.params.id + " via GET request");
		next();
	},

	store : function(req, res, next){
		res.send("Hello world via POST request");
		next();
	},

	update : function(req, res, next){
		res.send('Hello ' + req.params.id + " via PUT request");
		next();
	},

	remove : function(req, res, next){
		res.send('Hello ' + req.params.id + " via DELETE request");
		next();
	},

	customShow : function(req, res, next){
		res.send('Hello ' + req.params.name + ". Have a good day");
		next();
	}


}