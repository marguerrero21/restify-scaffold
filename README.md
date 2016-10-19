# restify-scaffold
Scaffolding for restify which includes routing and directory structures for controllers and models


# Folder Structure
As much as possible, all development codes should be written inside app folders depending on its purpose.
``` bash
|-- app
	|-- controllers
	|-- models
	|-- services
|-- config
	|-- app.js
	|-- routes.js
|-- server.js
|-- routes.js
```

# Initialization
``` bash
$ npm install restify-scaffold

$ npm start 

```
On your browser access localhost:8080/hello


# Basic Usage

1. Create controller file on app/controllers

``` bash
//app/controllers/helloCtrl.js
module.exports = {

	helloWorld : function(req, res, next){
		res.send("Hello World");
		next();
	},
}

```

2. Update config/routes.js and add the newly added controller action in custom 
``` bash
// config/routes.js
...
	custom: {
		"/foo": {
			"type": "get",
			"controller": "helloCtrl",
			"action": "helloWorld",
		}
	}
...	
```

3. Run node server 
``` bash
$ npm start
``` 

4. Access localhost:8080/foo . It should display:
``` bash
"Hello World"
```
